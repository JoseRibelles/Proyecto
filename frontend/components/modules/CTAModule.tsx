'use client';
import Link from 'next/link';

interface CTAModuleProps {
  data: {
    titulo: string;
    descripcion?: string;
    boton1Texto?: string;
    boton1URL?: string;
    boton2Texto?: string;
    boton2URL?: string;
    colorFondo?: string;
    colorTexto?: string;
  };
}

export default function CTAModule({ data }: CTAModuleProps) {
  const bgColor = data.colorFondo || '#6D7E4F';
  const textColor = data.colorTexto || '#ffffff';

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ 
          background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)`,
          color: textColor,
          padding: '60px 40px', 
          borderRadius: '16px', 
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(109,126,79,0.3)'
        }}>
          <h3 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '2rem', 
            fontWeight: 700, 
            margin: '0 0 16px' 
          }}>
            {data.titulo}
          </h3>
          {data.descripcion && (
            <p style={{ 
              fontFamily: 'Open Sans', 
              fontSize: '1.1rem', 
              margin: '0 0 32px', 
              opacity: 0.95 
            }}>
              {data.descripcion}
            </p>
          )}
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            {data.boton1Texto && data.boton1URL && (
              <Link 
                href={data.boton1URL}
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1rem', 
                  fontWeight: 600, 
                  padding: '14px 32px', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  background: 'white', 
                  color: bgColor,
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
              >
                {data.boton1Texto}
              </Link>
            )}
            {data.boton2Texto && data.boton2URL && (
              <Link 
                href={data.boton2URL}
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1rem', 
                  fontWeight: 600, 
                  padding: '14px 32px', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  background: 'transparent', 
                  color: textColor,
                  border: `2px solid ${textColor}`,
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
              >
                {data.boton2Texto}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}