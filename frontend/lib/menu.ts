export interface RawMenuItem {
  id: number;
  attributes: {
    title: string;
    slug?: string | null;
    order?: number | null;
    parent?: { data: { id: number } | null } | null;
    [key: string]: any;
  };
}

export interface MenuItem {
  id: number;
  title: string;
  slug?: string | null;
  order?: number | null;
  parentId?: number | null;
  children?: MenuItem[];
}