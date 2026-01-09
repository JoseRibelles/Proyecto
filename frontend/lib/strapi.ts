// Helper centralizado para llamadas a Strapi.
// - Úsalo en cliente y servidor (cliente usa NEXT_PUBLIC_STRAPI_URL).
// - Soporta opcional Authorization token y opciones de fetch.
export const STRAPI_BASE = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

/**
 * Llama a Strapi y retorna el JSON. Lanza Error si status !== ok.
 * path: debe empezar por /api/...
 * opts: opcional (headers, method, body, etc.)
 */
export async function getStrapiData(path: string, opts: RequestInit = {}) {
  if (!path.startsWith('/')) path = '/' + path;
  const url = STRAPI_BASE + path;
  const defaultHeaders: Record<string,string> = {
    'Accept': 'application/json',
  };

  // si se pasa body en opts y no hay content-type, lo asigna
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
  // intentar parsear JSON si hay contenido
  let json: any = null;
  try { json = text ? JSON.parse(text) : null; } catch (e) { /* no JSON */ }

  if (!res.ok) {
    // construir mensaje de error útil
    const msg = typeof json === 'object' && json?.error ? JSON.stringify(json) : text || res.statusText;
    throw new Error(`Strapi fetch error ${res.status}: ${msg}`);
  }
  return json;
}

/**
 * Utilidad para convertir rutas relativas de Strapi Media a URL absoluta.
 * Ejemplo de uso: strapiMedia(entry.attributes.logo)
 */
export function strapiMedia(media: any) {
  if (!media) return null;
  // Si Strapi devuelve objeto con data.attributes.url
  if (media?.data?.attributes?.url) {
    const url = media.data.attributes.url;
    return url.startsWith('http') ? url : STRAPI_BASE + url;
  }
  // Si te guardan directamente la URL relativa
  if (typeof media === 'string') {
    return media.startsWith('http') ? media : STRAPI_BASE + media;
  }
  if (media?.url) {
    return media.url.startsWith('http') ? media.url : STRAPI_BASE + media.url;
  }
  return null;
}

/**
 * Ejemplo de llamada protegida (con token). Útil para scripts/seed o admin-requests.
 * const data = await getStrapiData('/api/menus', { headers: { Authorization: `Bearer ${TOKEN}` }});
 */

/* Export por defecto opcional */
export default getStrapiData;