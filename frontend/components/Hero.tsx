'use client';
import React, { useEffect, useState } from 'react';
import { getStrapiData } from '../lib/strapi';

type Props = {
  imageUrl?: string | null;
  mesaje?: string | null;
};

export default function Hero({ imageUrl: propImageUrl = null, mesaje: propMesaje = null }: Props): React.ReactElement | null {
  const [imageUrl, setImageUrl] = useState<string | null>(propImageUrl);
  const [mesaje, setMesaje] = useState<string | null>(propMesaje);
  const [loading, setLoading] = useState<boolean>(!propImageUrl || !propMesaje);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    // Si ya nos han pasado ambos props no necesitamos fetch
    if (propImageUrl && propMesaje) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        // solicitamos populate=* para evitar errores por nombres de campo
        const json = await getStrapiData('/api/home-page?populate=*');
        if (!mounted) return;
        const attrs = json?.data?.attributes ?? json?.data ?? {};

        // mensaje: priorizamos propMesaje si viene
        if (!propMesaje) {
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

        // imagen: priorizamos propImageUrl si viene
        if (!propImageUrl) {
          // intento nombres comunes
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

          let foundUrl: string | null = null;

          for (const name of mediaCandidates) {
            const candidate = attrs[name];
            if (!candidate) continue;
            const url =
              candidate?.data?.attributes?.url ??
              candidate?.attributes?.url ??
              candidate?.url ??
              null;
            if (url) {
              foundUrl = url;
              break;
            }
          }

          // fallback: buscar cualquier media en attributes
          if (!foundUrl) {
            for (const k of Object.keys(attrs)) {
              const v = attrs[k];
              if (!v) continue;
              const url =
                v?.data?.attributes?.url ?? v?.attributes?.url ?? v?.url ?? null;
              if (url && typeof url === 'string') {
                foundUrl = url;
                break;
              }
            }
          }

          if (foundUrl) {
            const finalUrl = foundUrl.startsWith('http')
              ? foundUrl
              : `${process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'}${foundUrl}`;
            setImageUrl(finalUrl);
          } else {
            setImageUrl(null);
          }
        } else {
          setImageUrl(propImageUrl);
        }
      } catch (err: any) {
        console.error('Error fetching home-page', err);
        setError(err?.message ?? 'Error desconocido');
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [propImageUrl, propMesaje]);

  // UI
  if (loading) {
    return (
      <div className="hero-wrapper">
        <div style={{ padding: 20, textAlign: 'center' }}>Cargando hero...</div>
      </div>
    );
  }

  return (
    <div className="hero-wrapper">
      {error && (
        <div style={{ padding: 12, color: 'red', textAlign: 'center' }}>
          Error: {error}
        </div>
      )}

      {imageUrl ? (
        <div className="hero">
          <img src={imageUrl} alt="Hero" className="hero-img" />
        </div>
      ) : (
        <div style={{ padding: 20, textAlign: 'center', background: '#fafafa' }}>
          {/* Si prefieres, reemplaza por una imagen estática */}
          ⚠️ No hay imagen configurada en Strapi (campo heroImage)
        </div>
      )}

      {mesaje && (
        <div className="hero-quote-section">
          <div className="container">
            {/* Si guardaste texto plano en Strapi cambia a <p>{mesaje}</p> */}
            <blockquote
              className="hero-quote"
              dangerouslySetInnerHTML={{ __html: mesaje }}
            />
          </div>
        </div>
      )}
    </div>
  );
}