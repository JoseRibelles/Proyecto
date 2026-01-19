'use client';
import React, { useEffect, useState } from 'react';
import { getStrapiData } from '../lib/strapi';

type Props = {
  imageUrl?:  string | null;
  mesaje?: string | null;
};

export default function Hero({ imageUrl:  propImageUrl = null, mesaje:  propMesaje = null }:  Props): React.ReactElement | null {
  const [imageUrl, setImageUrl] = useState<string | null>(propImageUrl);
  const [mesaje, setMesaje] = useState<string | null>(propMesaje);
  const [loading, setLoading] = useState<boolean>(!propImageUrl || !propMesaje);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    if (propImageUrl && propMesaje) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const json = await getStrapiData('/api/home-page? populate=*');
        if (!mounted) return;
        const attrs = json?. data?. attributes ??  json?.data ??  {};

        if (! propMesaje) {
          const possibleText =
            attrs.mesaje ??
            attrs.mensaje ??
            attrs.message ??
            attrs.heroQuote ??
            attrs.quote ??
            attrs.texto ??  
            '';
          setMesaje(String(possibleText || ''));
        } else {
          setMesaje(propMesaje);
        }

        if (! propImageUrl) {
          const mediaCandidates = [
            'heroImage',
            'hero_image',
            'image',
            'foto',
            'banner',
            'cover',
            'portada',
            'imagen',
            'homeImage',
            'homeimage',
            'home',
          ];

          let foundUrl:  string | null = null;

          for (const name of mediaCandidates) {
            const candidate = attrs[name];
            if (! candidate) continue;
            const url =
              candidate?. data?.attributes?.url ??
              candidate?.attributes?.url ??
              candidate?. url ??
              null;
            if (url) {
              foundUrl = url;
              break;
            }
          }

          if (! foundUrl) {
            for (const k of Object.keys(attrs)) {
              const v = attrs[k];
              if (! v) continue;
              const url =
                v?. data?.attributes?.url ??  v?.attributes?.url ?? v?. url ?? null;
              if (url && typeof url === 'string') {
                foundUrl = url;
                break;
              }
            }
          }

          if (foundUrl) {
            const finalUrl = foundUrl.startsWith('http')
              ? foundUrl
              :  `${process.env.NEXT_PUBLIC_STRAPI_URL ??  'http://localhost:1337'}${foundUrl}`;
            setImageUrl(finalUrl);
          } else {
            setImageUrl(null);
          }
        } else {
          setImageUrl(propImageUrl);
        }
      } catch (err:  any) {
        console.error('Error fetching home-page', err);
        setError(err?.message ??  'Error desconocido');
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [propImageUrl, propMesaje]);

  if (loading) {
    return (
      <div className="hero-wrapper">
        <div style={{ padding: 20, textAlign: 'center' }}>Cargando hero...</div>
      </div>
    );
  }

  return (
    <>
      <div className="hero-wrapper">
        {error && (
          <div style={{ padding:  12, color: 'red', textAlign: 'center' }}>
            Error: {error}
          </div>
        )}

        {imageUrl ? (
          <div className="hero">
            <img src={imageUrl} alt="Hero" className="hero-img" />
          </div>
        ) : (
          <div style={{ padding: 20, textAlign: 'center', background: '#fafafa' }}>
            ⚠️ No hay imagen configurada en Strapi (campo heroImage)
          </div>
        )}

        {mesaje && (
          <div className="hero-quote-section">
            <div className="container">
              <blockquote
                className="hero-quote"
                dangerouslySetInnerHTML={{ __html: mesaje }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .hero-wrapper {
          width: 100%;
          position:  relative;
        }

        . hero {
          width: 100%;
          height: 400px;
          overflow: hidden;
          position: relative;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-quote-section {
          background: #f9f9f9;
          padding: 60px 20px;
          border-top: 4px solid #6D7E4F;
        }

        .hero-quote {
          font-family:  'Open Sans', sans-serif;
          font-size: 1.2rem;
          line-height: 1.8;
          color: #333;
          font-style: italic;
          max-width: 900px;
          margin: 0 auto;
          text-align:  center;
          padding: 0 20px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero {
            height: 360px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 320px;
          }

          . hero-quote-section {
            padding: 40px 16px;
          }

          .hero-quote {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 260px;
          }

          . hero-quote-section {
            padding: 32px 12px;
          }

          .hero-quote {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
}