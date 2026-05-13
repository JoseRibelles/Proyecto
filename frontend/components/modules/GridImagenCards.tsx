'use client';
import Link from 'next/link';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

function getImageUrl(imagen: any): string {
  if (!imagen) return '';
  // Strapi v5: imagen llega directo con url
  const url = imagen?.formats?.medium?.url ?? imagen?.url ?? '';
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

function blocksToText(blocks: any[]): string {
  const parts: string[] = [];
  const walk = (n: any) => {
    if (!n) return;
    if (typeof n?.text === 'string') parts.push(n.text);
    if (Array.isArray(n?.children)) n.children.forEach(walk);
    if (Array.isArray(n)) n.forEach(walk);
  };
  blocks.forEach(walk);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

export default function GridImagenCards({ data }: any) {
  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {data?.titulo && (
          <h2 style={{
            fontFamily: 'Montserrat',
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#6D7E4F',
            textAlign: 'center',
            margin: '0 0 44px'
          }}>
            {data.titulo}
          </h2>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 20
        }}>
          {(data?.cards || []).map((c: any) => {
            const imgUrl = getImageUrl(c?.imagen);
            const desc =
              typeof c?.descripcion === 'string'
                ? c.descripcion
                : Array.isArray(c?.descripcion)
                  ? blocksToText(c.descripcion)
                  : '';

            const CardContent = (
              <div style={{
                background: 'white',
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid #eef2e6',
                boxShadow: '0 10px 28px rgba(0,0,0,0.08)',
                height: '100%'
              }}>
                {imgUrl && (
                  <img
                    src={imgUrl}
                    alt={c?.titulo || ''}
                    style={{ width: '100%', height: 150, objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: 16 }}>
                  <div style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 800,
                    color: '#6D7E4F',
                    marginBottom: 8
                  }}>
                    {c?.titulo}
                  </div>
                  {desc && (
                    <div style={{
                      fontFamily: 'Open Sans',
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}>
                      {desc}
                    </div>
                  )}
                </div>
              </div>
            );

            return c?.enlace ? (
              <Link key={c?.id} href={c.enlace} style={{ textDecoration: 'none' }}>
                {CardContent}
              </Link>
            ) : (
              <div key={c?.id}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}