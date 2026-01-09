'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getStrapiData } from '../lib/strapi';

type RawAny = any;
type MenuItem = {
  id: number;
  title: string;
  slug: string;
  order?: number;
  parentId?: number | null;
  children?: MenuItem[];
};

function normalizeRaw(r: RawAny): MenuItem | null {
  const id = r.id ?? r?.data?.id ?? null;
  if (!id) return null;
  const attrs = r.attributes ?? r;
  const title = attrs.title ?? '';
  const slug = attrs.slug ?? attrs.url ?? '#';
  const order = attrs.order ?? 0;
  const parentId =
    (attrs.menu && (attrs.menu.id ?? attrs.menu?.data?.id ?? null)) ??
    (attrs.parent && (attrs.parent.id ?? attrs.parent?.data?.id ?? null)) ??
    null;
  const showInMenu = attrs.showInMenu ?? true;
  if (!showInMenu) return null;
  return { id, title, slug, order, parentId, children: [] };
}

function buildTree(rawArray: RawAny[]): MenuItem[] {
  const map = new Map<number, MenuItem>();
  const roots: MenuItem[] = [];

  rawArray.forEach((r) => {
    const n = normalizeRaw(r);
    if (!n) return;
    map.set(n.id, n);
  });

  map.forEach((node) => {
    if (node.parentId && map.has(node.parentId)) {
      map.get(node.parentId)!.children!.push(node);
    } else {
      roots.push(node);
    }
  });

  function sortRec(nodes: MenuItem[]) {
    nodes.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    nodes.forEach((n) => n.children && sortRec(n.children!));
  }
  sortRec(roots);
  return roots;
}

const fallbackMenu: MenuItem[] = [{ id: 1, title: 'Inici', slug: '/', children: [] }];

export default function Nav(): React.ReactElement | null {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [openPath, setOpenPath] = useState<number[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const delayedClose = useCallback((delay = 180) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenPath([]), delay);
  }, []);

  const openPathSet = useCallback((path: number[]) => {
    clearCloseTimer();
    setOpenPath(path);
  }, [clearCloseTimer]);

  const toggleClick = useCallback((path: number[], id: number) => {
    const isCurrentlyOpen = openPath.length > 0 && openPath[openPath.length - 1] === id;
    if (isCurrentlyOpen) {
      setOpenPath(path);
    } else {
      setOpenPath([...path, id]);
    }
  }, [openPath]);

  useEffect(() => {
    let mounted = true;
    abortControllerRef.current = new AbortController();

    (async () => {
      try {
        const params = new URLSearchParams();
        params.set('pagination[pageSize]', '500');
        params.set('populate', 'menu');
        params.set('sort[0]', 'order:asc'); // no spaces
        const url = `/api/menus?${params.toString()}`;

        // Pass signal only if abortControllerRef.current exists
        const signal = abortControllerRef.current?.signal;
        const json = signal ? await getStrapiData(url, { signal }) : await getStrapiData(url);

        let rawArray: RawAny[] = [];
        if (Array.isArray(json?.data)) rawArray = json.data;
        else if (Array.isArray(json?.data?.data)) rawArray = json.data.data;
        else if (Array.isArray(json)) rawArray = json;

        if (!rawArray || rawArray.length === 0) {
          if (mounted) setMenu(fallbackMenu);
        } else {
          const tree = buildTree(rawArray);
          if (mounted) setMenu(tree.length ? tree : fallbackMenu);
        }
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
        console.error('Error fetching menu from Strapi', err);
        if (mounted) setMenu(fallbackMenu);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      if (abortControllerRef.current) abortControllerRef.current.abort();
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  const renderNodes = useCallback((nodes: MenuItem[], level = 0, path: number[] = []) => {
    return (
      <ul className={`submenu level-${level}`} role={level === 0 ? 'menu' : 'menu'}>
        {nodes.map((node) => {
          const hasChildren = node.children && node.children.length > 0;
          const nodePath = [...path];
          const isShown = openPath.includes(node.id);
          return (
            <li key={node.id} className={`nav-subitem ${hasChildren ? 'has-children' : ''}`} role="none">
              {hasChildren ? (
                <div
                  className={`dropdown-parent nested level-${level}`}
                  onMouseEnter={() => openPathSet([...nodePath, node.id])}
                  onMouseLeave={() => delayedClose(180)}
                >
                  <button
                    type="button"
                    className={`nav-button nav-summary nested level-${level}`}
                    aria-haspopup="true"
                    aria-expanded={isShown}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleClick(nodePath, node.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setOpenPath([]);
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleClick(nodePath, node.id);
                      }
                    }}
                    role="menuitem"
                  >
                    <span className="nav-title">{node.title}</span>
                    <span className="caret" aria-hidden>{level === 0 ? '▾' : '▸'}</span>
                  </button>

                  <div
                    className={`dropdown-wrap level-wrap level-${level} ${isShown ? 'open' : ''}`}
                    data-level={level}
                    onMouseEnter={() => openPathSet([...nodePath, node.id])}
                    onMouseLeave={() => delayedClose(180)}
                    aria-hidden={!isShown}
                  >
                    {renderNodes(node.children!, level + 1, [...nodePath, node.id])}
                  </div>
                </div>
              ) : (
                <a
                  className="nav-link leaf"
                  href={node.slug || '#'}
                  onClick={() => setOpenPath([])}
                  role="menuitem"
                >
                  {node.title}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    );
  }, [openPath, openPathSet, toggleClick, delayedClose]);

  const menuMarkup = useMemo(() => {
    if (!menu || menu.length === 0) return null;
    return menu.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = openPath.length > 0 && openPath[0] === item.id;
      return (
        <li key={item.id} className={`nav-item ${hasChildren ? 'has-children' : ''}`} role="none">
          {hasChildren ? (
            <div
              className={`dropdown-parent level-0 ${isOpen ? 'open' : ''}`}
              onMouseEnter={() => openPathSet([item.id])}
              onMouseLeave={() => delayedClose(180)}
            >
              <button
                type="button"
                className="nav-summary nav-button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggleClick([], item.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setOpenPath([]);
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleClick([], item.id);
                  }
                }}
                role="menuitem"
              >
                <span>{item.title}</span>
                <span className="caret" aria-hidden>▾</span>
              </button>

              <div
                className={`dropdown-wrap level-wrap level-0 ${isOpen ? 'open' : ''}`}
                data-level={0}
                onMouseEnter={() => openPathSet([item.id])}
                onMouseLeave={() => delayedClose(180)}
                aria-hidden={!isOpen}
              >
                {renderNodes(item.children!, 1, [item.id])}
              </div>
            </div>
          ) : (
            <a href={item.slug || '#'} className="nav-link" onClick={() => setOpenPath([])} role="menuitem">
              {item.title}
            </a>
          )}
        </li>
      );
    });
  }, [menu, openPath, openPathSet, toggleClick, delayedClose, renderNodes]);

  if (loading && menu.length === 0) {
    return (
      <nav className="main-nav" role="navigation" aria-label="Main menu">
        <div className="container nav-inner nav-flex">
          <div style={{ padding: 12 }}>Cargando menú...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="main-nav" role="navigation" aria-label="Main menu">
      <div className="container nav-inner nav-flex">
        <ul className="nav-list" role="menubar" aria-label="Primary">
          {menuMarkup}
        </ul>
        <div className="nav-actions" aria-hidden />
      </div>
    </nav>
  );
}