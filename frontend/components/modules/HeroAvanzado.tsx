import { strapiMedia } from '@/lib/strapi';
import Link from 'next/link';

export default function HeroAvanzado({ data }: any) {
  const imagenUrl = data.imagenFondo ? strapiMedia(data.imagenFondo) : '';

  return (
    <section style={{
      width: '100%',
      minHeight: '600px',
      background: imagenUrl 
        ? `linear-gradient(135deg, rgba(109, 126, 79, 0.85) 0%, rgba(138, 157, 101, 0.85) 100%), url(${imagenUrl})`
        : 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '80px 20px'
    }}>
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        textAlign: 'center', 
        maxWidth: '900px' 
      }}>
        
        {data.mostrarBadge && data.textoBadge && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '12px 32px',
            borderRadius: '50px',
            marginBottom: '40px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
          }}>
            {data.iconoBadge && (
              <span style={{ fontSize: '1.5rem' }}>{data.iconoBadge}</span>
            )}
            <div style={{ textAlign: 'left' }}>
              <div style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '1rem', 
                fontWeight: 700, 
                color: '#6D7E4F',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {data.textoBadge}
              </div>
              {data.subtextoBadge && (
                <div style={{ 
                  fontFamily: 'Open Sans', 
                  fontSize: '0.85rem', 
                  color: '#888' 
                }}>
                  {data.subtextoBadge}
                </div>
              )}
            </div>
          </div>
        )}

        {data.tituloLinea1 && (
          <h1 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '2.5rem', 
            fontWeight: 400, 
            color: 'white', 
            margin: '0 0 8px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            {data.tituloLinea1}
          </h1>
        )}

        {data.tituloDestacado && (
          <h2 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '4.5rem', 
            fontWeight: 700, 
            color: 'white', 
            margin: '0 0 32px',
            textShadow: '0 4px 16px rgba(0,0,0,0.4)',
            lineHeight: 1.1
          }}>
            {data.tituloDestacado}
          </h2>
        )}

        {data.descripcion && (
          <div 
            style={{ 
              fontFamily: 'Open Sans', 
              fontSize: '1.25rem', 
              color: 'rgba(255,255,255,0.95)', 
              margin: '0 0 48px',
              lineHeight: 1.6,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
            dangerouslySetInnerHTML={{ __html: data.descripcion }}
          />
        )}

        {data.botones && data.botones.length > 0 && (
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
            {data.botones.map((boton: any, index: number) => (
              <Link 
                key={index}
                href={boton.enlace || '#'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'Montserrat',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '16px 32px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  background: boton.estilo === 'primario' 
                    ? 'white' 
                    : 'rgba(255,255,255,0.2)',
                  color: boton.estilo === 'primario' 
                    ? '#6D7E4F' 
                    : 'white',
                  border: boton.estilo === 'secundario' 
                    ? '2px solid white' 
                    : 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s'
                }}
              >
                {boton.icono && (
                  <span style={{ fontSize: '1.5rem' }}>{boton.icono}</span>
                )}
                <div style={{ textAlign: 'left' }}>
                  <div style={{ 
                    fontSize: '1.05rem', 
                    fontWeight: 700 
                  }}>
                    {boton.textoPrincipal}
                  </div>
                  {boton.textoSecundario && (
                    <div style={{ 
                      fontSize: '0.85rem', 
                      opacity: 0.8,
                      fontWeight: 400
                    }}>
                      {boton.textoSecundario}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}