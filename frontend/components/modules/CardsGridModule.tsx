'use client';

interface Card {
  icono: string;
  titulo: string;
  descripcion: string;
  enlace?: string;
}

interface CardsGridModuleProps {
  data: {
    tituloSeccion?: string;
    columnas?: number;
    tarjetas: Card[];
  };
}

export default function CardsGridModule({ data }: CardsGridModuleProps) {
  const columns = data.columnas || 3;

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {data.tituloSeccion && (
          <h2 style={{
            fontFamily: 'Montserrat',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#6D7E4F',
            textAlign: 'center',
            margin: '0 0 48px'
          }}>
            {data.tituloSeccion}
          </h2>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '32px'
        }}>
          {data.tarjetas?.map((tarjeta, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                {tarjeta.icono}
              </div>
              <h3 style={{
                fontFamily: 'Montserrat',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#333',
                margin: '0 0 16px'
              }}>
                {tarjeta.titulo}
              </h3>
              <p style={{
                fontFamily: 'Open Sans',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#555',
                margin: 0
              }}>
                {tarjeta.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}