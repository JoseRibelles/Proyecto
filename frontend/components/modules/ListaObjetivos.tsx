'use client';

interface Bloque {
  icono: string;
  titulo: string;
  descripcion?: string;
  items?: string;
}

interface ListaObjetivosProps {
  data: {
    tituloSeccion?: string;
    columas?: number;
    bloques?: Bloque[];
  };
}

export default function ListaObjetivos({ data }: ListaObjetivosProps) {
  if (!data.bloques || data.bloques.length === 0) {
    return null;
  }

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

        <div style={{ display: 'grid', gap: '24px' }}>
          {data.bloques.map((bloque, index) => {
            const descripcion = bloque.items || bloque.descripcion || '';
            
            return (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '2px solid #e8f0dc',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    flexShrink: 0
                  }}>
                    {bloque.icono}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Montserrat',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#6D7E4F',
                      margin: '0 0 12px'
                    }}>
                      {bloque.titulo}
                    </h3>
                    <p style={{
                      fontFamily: 'Open Sans',
                      fontSize: '1.05rem',
                      lineHeight: 1.8,
                      color: '#555',
                      margin: 0
                    }}>
                      {descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}