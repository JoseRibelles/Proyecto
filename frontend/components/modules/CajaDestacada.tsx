'use client';

interface CajaDestacadaProps {
  data: {
    titulo?: string;
    contenido?: string;
    icono?: string;
    colorFondo?: string;
  };
}

export default function CajaDestacada({ data }: CajaDestacadaProps) {
  const bgColor = data.colorFondo || '#f0f4ed';

  return (
    <section style={{ width: '100%', padding: '60px 20px', background: 'white' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          background: bgColor,
          padding: '40px',
          borderRadius: '12px',
          border: '1px solid #e8e8e8',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '24px',
          transition: 'all 0.3s ease'
        }}>
          {data.icono && (
            <div style={{
              fontSize: '3rem',
              flexShrink: 0
            }}>
              {data.icono}
            </div>
          )}
          <div style={{ flex: 1 }}>
            {data.titulo && (
              <h3 style={{
                fontFamily: 'Montserrat',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#6D7E4F',
                margin: '0 0 16px'
              }}>
                {data.titulo}
              </h3>
            )}
            {data.contenido && (
              <p style={{
                fontFamily: 'Open Sans',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#666',
                margin: 0
              }}>
                {data.contenido}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}