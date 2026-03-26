'use client';
import { strapiMedia } from '@/lib/strapi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeroSectionProps {
  data: {
    titulo: string;
    subtitulo?: string;
    descripcion?: any;
    imagen?: any;
    textoBoton?: string;
    enlaceBoton?: string;
    botonTexto?: string;
    botonURL?: string;
    mostrarBreadcrumbs?: boolean;
  };
}

function labelFromSlug(slug: string) {
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildBreadcrumbs(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);

  const crumbs: { href: string; text: string; isLast: boolean }[] = [];
  let acc = '';

  // Home
  crumbs.push({ href: '/', text: 'Inici', isLast: parts.length === 0 });

  parts.forEach((part, idx) => {
    acc += `/${part}`;
    crumbs.push({
      href: acc,
      text: labelFromSlug(part),
      isLast: idx === parts.length - 1,
    });
  });

  return crumbs;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);

  const bgColor = '#6D7E4F';
  const imageUrl = data.imagen ? strapiMedia(data.imagen) : '';

  let descripcionText = '';
  if (data.descripcion) {
    if (Array.isArray(data.descripcion)) {
      descripcionText = data.descripcion[0]?.children?.[0]?.text || '';
    } else if (typeof data.descripcion === 'string') {
      descripcionText = data.descripcion;
    }
  }

  const botonTexto = data.textoBoton || data.botonTexto;
  const botonURL = data.enlaceBoton || data.botonURL;

  return (
    <section
      style={{
        width: '100%',
        minHeight: '320px',
        background: imageUrl
          ? `linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(${imageUrl})`
          : 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px 60px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '800px',
          padding: '0 20px',
        }}
      >
        {/* Breadcrumbs centrados */}
        {data.mostrarBreadcrumbs && (
          <div
            style={{
              fontFamily: 'Open Sans',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '24px',
            }}
          >
            {breadcrumbs.map((c, i) => (
              <span key={c.href}>
                {c.isLast ? (
                  <span>{c.text}</span>
                ) : (
                  <Link href={c.href} style={{ color: 'white', textDecoration: 'none' }}>
                    {c.text}
                  </Link>
                )}
                {i < breadcrumbs.length - 1 && <span> / </span>}
              </span>
            ))}
          </div>
        )}

        <h1
          style={{
            fontFamily: 'Montserrat',
            fontSize: '3rem',
            fontWeight: 700,
            margin: '0 0 16px',
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          {data.titulo}
        </h1>

        {data.subtitulo && (
          <p
            style={{
              fontFamily: 'Open Sans',
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.95)',
              margin: '0',
              lineHeight: 1.6,
            }}
          >
            {data.subtitulo}
          </p>
        )}

        {descripcionText && (
          <p
            style={{
              fontFamily: 'Open Sans',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              marginTop: '24px',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            {descripcionText}
          </p>
        )}

        {botonTexto && botonURL && (
          <Link
            href={botonURL}
            style={{
              display: 'inline-block',
              fontFamily: 'Montserrat',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '14px 36px',
              borderRadius: '8px',
              background: 'white',
              color: bgColor,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              marginTop: '32px',
              transition: 'all 0.3s ease',
            }}
          >
            {botonTexto}
          </Link>
        )}
      </div>
    </section>
  );
}