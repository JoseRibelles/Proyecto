'use client';
import { strapiMedia } from '@/lib/strapi';
import Link from 'next/link';

interface HeroModuleProps {
  data: {
    titulo: string;
    subtitulo?: string;
    descripcion?: any; // Puede ser string o array
    imagen?: any;
    botonTexto?: string;
    botonURL?: string;
    colorFondo?: string;
  };
}

export default function HeroModule({ data }: HeroModuleProps) {
  const bgColor = data.colorFondo || '#6D7E4F';
  const imageUrl = data.imagen ? strapiMedia(data.imagen) : 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=400&fit=crop';
  
  // Convertir descripcion a string si es un array
  let descripcionText = '';
  if (data.descripcion) {
    if (Array.isArray(data.descripcion)) {
      // Si es un array, extraer el texto del primer elemento
      descripcionText = data.descripcion[0]?.children?.[0]?.text || '';
    } else if (typeof data.descripcion === 'string') {
      descripcionText = data.descripcion;
    }
  }

  return (
    <section style={{
      width: '100%',
      minHeight: '320px',
      background: `linear-gradient(135deg, ${bgColor}ee 0%, ${bgColor}dd 100%), url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px'
    }}>
      <div style={{ maxWidth: '800px', textAlign: 'center', color: 'white' }}>
        {data.subtitulo && (
          <p style={{ 
            fontFamily: 'Open Sans',
            fontSize: '1rem', 
            opacity: 0.9, 
            marginBottom: '16px' 
          }}>
            {data.subtitulo}
          </p>
        )}
        <h1 style={{ 
          fontFamily: 'Montserrat', 
          fontSize: '3rem', 
          fontWeight: 700, 
          margin: '0 0 24px',
          textShadow: '0 2px 8px rgba(0,0,0,0.3)'
        }}>
          {data.titulo}
        </h1>
        {descripcionText && (
          <p style={{ 
            fontFamily: 'Open Sans', 
            fontSize: '1.2rem', 
            lineHeight: 1.8,
            marginBottom: '32px'
          }}>
            {descripcionText}
          </p>
        )}
        {data.botonTexto && data.botonURL && (
          <Link 
            href={data.botonURL}
            style={{
              display: 'inline-block',
              fontFamily: 'Montserrat',
              fontSize: '1.1rem',
              fontWeight: 700,
              padding: '16px 40px',
              borderRadius: '50px',
              background: 'white',
              color: bgColor,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            {data.botonTexto}
          </Link>
        )}
      </div>
    </section>
  );
}