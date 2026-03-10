'use client';

interface Tarjeta {
  icono: string;
  titulo: string;
  descripcion?: string;
  items?: string;
  enlace?: string;
}

interface TarjetasGridProps {
  data: {
    titulo?: string;
    subtitulo?: string;
    tituloSeccion?: string;
    columnas?: number;
    tarjetas?: Tarjeta[];
  };
}

export default function TarjetasGrid({ data }: TarjetasGridProps) {
  if (!data.tarjetas || data.tarjetas.length === 0) {
    return null;
  }

  const titulo = data.titulo || data.tituloSeccion;
  const columns = data.columnas || 3;

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {titulo && (
          <h2 style={{
            fontFamily: 'Montserrat',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#6D7E4F',
            textAlign: 'center',
            margin: '0 0 48px'
          }}>
            {titulo}
          </h2>
        )}

        {data.subtitulo && (
          <p style={{
            fontFamily: 'Open Sans',
            fontSize: '1.1rem',
            color: '#666',
            textAlign: 'center',
            margin: '0 0 48px'
          }}>
            {data.subtitulo}
          </p>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '32px'
        }}>
          {data.tarjetas.map((tarjeta, index) => {
            const descripcion = tarjeta.items || tarjeta.descripcion || '';
            
            return (
              <div
                key={index}
                style={{
                  background: '#f9f9f9',
                  padding: '40px 32px',
                  borderRadius: '16px',
                  border: '2px solid #e8f0dc'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}>
                  {tarjeta.icono}
                </div>
                <h3 style={{
                  fontFamily: 'Montserrat',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#6D7E4F',
                  margin: '0 0 16px',
                  textAlign: 'center'
                }}>
                  {tarjeta.titulo}
                </h3>
                <p style={{
                  fontFamily: 'Open Sans',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#555',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  {descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}