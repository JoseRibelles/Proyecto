'use client';

import { strapiMedia } from '@/lib/strapi';
import Link from 'next/link';

function escapeHtml(s: string) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

/**
 * Convierte Strapi Blocks (array) a HTML básico respetando negrita/cursiva/etc.
 * Soporta el formato típico:
 * [
 *   { type: 'paragraph', children: [{ text: 'Hola', bold: true }, { text: ' mundo' }] }
 * ]
 */
function blocksToHtml(blocks: any[]): string {
  const renderInline = (node: any): string => {
    if (!node) return '';

    // Si viene anidado
    if (Array.isArray(node)) return node.map(renderInline).join('');
    if (Array.isArray(node?.children)) return node.children.map(renderInline).join('');

    // Texto inline
    if (typeof node?.text === 'string') {
      let html = escapeHtml(node.text);

      // Marcas típicas (Strapi Blocks)
      if (node.code) html = `<code>${html}</code>`;
      if (node.bold) html = `<strong>${html}</strong>`;
      if (node.italic) html = `<em>${html}</em>`;
      if (node.underline) html = `<u>${html}</u>`;
      if (node.strikethrough) html = `<s>${html}</s>`;

      // Enlaces (según config puede venir url/href)
      const href = node.url ?? node.href;
      if (href) {
        const safeHref = escapeHtml(String(href));
        html = `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${html}</a>`;
      }

      return html;
    }

    return '';
  };

  const renderBlock = (b: any): string => {
    const inner = Array.isArray(b?.children) ? b.children.map(renderInline).join('') : renderInline(b);

    switch (b?.type) {
      case 'heading':
        return `<h3>${inner}</h3>`;
      case 'quote':
        return `<blockquote>${inner}</blockquote>`;
      case 'list-item':
        return `<li>${inner}</li>`;
      case 'paragraph':
      default:
        return `<p>${inner}</p>`;
    }
  };

  // Si hay list-items, los agrupamos en <ul> (opcional pero queda mejor)
  const out: string[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length) {
      out.push(`<ul>${listBuffer.join('')}</ul>`);
      listBuffer = [];
    }
  };

  for (const b of blocks) {
    if (b?.type === 'list-item') {
      listBuffer.push(renderBlock(b));
    } else {
      flushList();
      out.push(renderBlock(b));
    }
  }
  flushList();

  return out.join('');
}

function normalizeDescripcionToHtml(descripcion: any): string {
  // Caso 1: Strapi Rich Text -> string (HTML)
  if (typeof descripcion === 'string') return descripcion;

  // Caso 2: Strapi Blocks -> array
  if (Array.isArray(descripcion)) return blocksToHtml(descripcion);

  // Caso 3: algunos setups devuelven { texto: "..."} o { content: "..."}
  if (typeof descripcion?.texto === 'string') return descripcion.texto;
  if (typeof descripcion?.content === 'string') return descripcion.content;

  return '';
}

export default function HeroHomeAvanzado({ data }: any) {
  const imagenUrl = data?.imagenFondo ? strapiMedia(data.imagenFondo) : '';

  const bg = imagenUrl
    ? `linear-gradient(135deg, rgba(109, 126, 79, 0.78) 0%, rgba(138, 157, 101, 0.78) 100%), url(${imagenUrl})`
    : 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)';

  const descripcionHtml = normalizeDescripcionToHtml(data?.descripcion);

  return (
    <section
      style={{
        width: '100%',
        minHeight: '720px',
        background: bg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '90px 20px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 980, width: '100%', textAlign: 'center' }}>
        {(data?.badgeTexto || data?.badgeSubtexto) && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 26px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'white',
              marginBottom: 28,
              backdropFilter: 'blur(6px)',
            }}
          >
            {data?.badgeIcono && <span style={{ fontSize: '1.2rem' }}>{data.badgeIcono}</span>}
            <div style={{ textAlign: 'left' }}>
              {data?.badgeTexto && (
                <div style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: 0.4 }}>
                  {data.badgeTexto}
                </div>
              )}
              {data?.badgeSubtexto && (
                <div style={{ fontFamily: 'Open Sans', opacity: 0.9, fontSize: '0.9rem' }}>
                  {data.badgeSubtexto}
                </div>
              )}
            </div>
          </div>
        )}

        {data?.tituloLinea1 && (
          <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', color: 'rgba(255,255,255,0.95)' }}>
            {data.tituloLinea1}
          </div>
        )}

        {data?.tituloDestacado && (
          <h1
            style={{
              margin: '8px 0 20px',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '4rem',
              color: 'white',
              textShadow: '0 4px 18px rgba(0,0,0,0.35)',
              lineHeight: 1.1,
            }}
          >
            {data.tituloDestacado}
          </h1>
        )}

        {descripcionHtml && (
          <div
            style={{
              fontFamily: 'Open Sans',
              fontSize: '1.05rem',
              maxWidth: 820,
              margin: '0 auto 32px',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.7,
              textShadow: '0 2px 6px rgba(0,0,0,0.25)',
            }}
            dangerouslySetInnerHTML={{ __html: descripcionHtml }}
          />
        )}

        {Array.isArray(data?.botones) && data.botones.length > 0 && (
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            {data.botones.slice(0, 2).map((b: any, idx: number) => {
              const primary = b?.estilo === 'primario';
              const outline = b?.estilo === 'outline' || b?.estilo === 'secundario';

              return (
                <Link
                  key={b?.id ?? idx}
                  href={b?.enlace || '#'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 22px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    background: primary ? 'white' : 'rgba(255,255,255,0.15)',
                    color: primary ? '#6D7E4F' : 'white',
                    border: outline ? '1.5px solid rgba(255,255,255,0.7)' : 'none',
                    boxShadow: '0 10px 26px rgba(0,0,0,0.18)',
                  }}
                >
                  {b?.icono && <span style={{ fontSize: '1.2rem' }}>{b.icono}</span>}
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>{b?.texto}</div>
                    {b?.subtexto && (
                      <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', opacity: 0.85 }}>{b.subtexto}</div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {Array.isArray(data?.features) && data.features.length > 0 && (
          <div
            style={{
              margin: '36px auto 0',
              maxWidth: 820,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 12,
            }}
          >
            {data.features.slice(0, 4).map((f: any, idx: number) => (
              <div
                key={f?.id ?? idx}
                style={{
                  background: 'rgba(255,255,255,0.14)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  borderRadius: 14,
                  padding: '14px 12px',
                  color: 'white',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <div style={{ fontSize: '1.3rem', marginBottom: 8 }}>{f?.icono || '•'}</div>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.95rem' }}>{f?.titulo}</div>
                {f?.texto && (
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', opacity: 0.9 }}>{f.texto}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}