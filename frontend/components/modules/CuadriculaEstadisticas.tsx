export default function CuadriculaEstadisticas({ data }: any) {
  const getColumns = () => {
    switch(data.columnas) {
      case 'col2': return 'repeat(2, 1fr)';
      case 'col3': return 'repeat(3, 1fr)';
      case 'col4': return 'repeat(4, 1fr)';
      default: return 'repeat(3, 1fr)';
    }
  };

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {data.titulo && (
          <h2 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '2rem', 
            fontWeight: 700, 
            color: '#6D7E4F', 
            textAlign: 'center', 
            margin: '0 0 48px' 
          }}>
            {data.titulo}
          </h2>
        )}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: getColumns(), 
          gap: '32px' 
        }}>
          {data.estadisticas && data.estadisticas.map((stat: any, index: number) => (
            <div 
              key={index}
              style={{ 
                background: 'white', 
                padding: '40px 32px', 
                borderRadius: '16px', 
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
              }}
            >
              {stat.icono && (
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                  {stat.icono}
                </div>
              )}
              <div style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '3rem', 
                fontWeight: 700, 
                color: '#6D7E4F', 
                margin: '0 0 8px' 
              }}>
                {stat.numero}
              </div>
              <div style={{ 
                fontFamily: 'Open Sans', 
                fontSize: '1rem', 
                color: '#555' 
              }}>
                {stat.etiqueta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}