// Helper centralizado para llamadas a Strapi.
export const STRAPI_BASE = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

export async function getStrapiData(path: string, opts: RequestInit = {}) {
  if (!path.startsWith('/')) path = '/' + path;
  const url = STRAPI_BASE + path;
  const defaultHeaders: Record<string,string> = {
    'Accept': 'application/json',
  };

  if (opts.body && !(opts.headers && (opts.headers as any)['Content-Type'])) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const res = await fetch(url, {
    ...opts,
    headers: {
      ...defaultHeaders,
      ...(opts.headers || {}),
    },
  });

  const text = await res.text();
  let json: any = null;
  try { json = text ? JSON.parse(text) : null; } catch (e) { /* no JSON */ }

  if (!res.ok) {
    // Si es 404, devolver null en vez de lanzar error
    if (res.status === 404) {
      console.warn(`⚠️ Strapi 404: ${path} - Endpoint no encontrado`);
      return null;
    }
    
    // Para otros errores (500, 403, etc.) sí lanzar error
    const msg = typeof json === 'object' && json?.error ? JSON.stringify(json) : text || res.statusText;
    throw new Error(`Strapi fetch error ${res.status}: ${msg}`);
  }
  return json;
}

export function strapiMedia(media: any) {
  if (!media) return null;
  if (media?.data?.attributes?.url) {
    const url = media.data.attributes.url;
    return url.startsWith('http') ? url : STRAPI_BASE + url;
  }
  if (typeof media === 'string') {
    return media.startsWith('http') ? media : STRAPI_BASE + media;
  }
  if (media?.url) {
    return media.url.startsWith('http') ? media.url : STRAPI_BASE + media.url;
  }
  return null;
}

export default getStrapiData;
