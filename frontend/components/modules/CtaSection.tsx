'use client';
import Link from 'next/link';

interface CtaSectionProps {
  data: {
    titulo: string;
    descripcion?: string;
    // Soportar ambos formatos
    textoBotonPrimario?: string;
    enlaceBotonPrimario?: string;
    textoBotonSecundario?: string;
    enlaceBotonSecundario?: string;
    boton1Texto?: string;
    boton1URL?: string;
    boton2Texto?: string;
    boton2URL?: string;
  };
}

export default function CtaSection({ data }: CtaSectionProps) {
  const bgColor = '#6D7E4F';

  // Usar el formato que esté disponible
  const btnPrimarioTexto = data.textoBotonPrimario || data.boton1Texto;
  const btnPrimarioURL = data.enlaceBotonPrimario || data.boton1URL;
  const btnSecundarioTexto = data.textoBotonSecundario || data.boton2Texto;
  const btnSecundarioURL = data.enlaceBotonSecundario || data.boton2URL;

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)',
          color: 'white',
          padding: '60px 40px', 
          borderRadius: '20px', 
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(109,126,79,0.3)'
        }}>
          {data.titulo && (
            <h2 style={{ 
              fontFamily: 'Montserrat', 
              fontSize: '2.2rem', 
              fontWeight: 700, 
              margin: '0 0 16px',
              lineHeight: 1.3
            }}>
              {data.titulo}
            </h2>
          )}
          
          {data.descripcion && (
            <p style={{ 
              fontFamily: 'Open Sans', 
              fontSize: '1.15rem', 
              lineHeight: 1.6,
              margin: '0 0 32px', 
              opacity: 0.95,
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
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
            {btnPrimarioTexto && btnPrimarioURL && (
              <Link 
                href={btnPrimarioURL}
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1rem', 
                  fontWeight: 600, 
                  padding: '16px 36px', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  background: 'white', 
                  color: bgColor,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
              >
                {btnPrimarioTexto}
              </Link>
            )}
            
            {btnSecundarioTexto && btnSecundarioURL && (
              <Link 
                href={btnSecundarioURL}
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1rem', 
                  fontWeight: 600, 
                  padding: '16px 36px', 
                  borderRadius: '8px', 
                  textDecoration: 'none', 
                  background: 'transparent', 
                  color: 'white',
                  border: '2px solid white',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {btnSecundarioTexto}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}