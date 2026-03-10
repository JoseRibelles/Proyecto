export default function LineaTiempo({ data }: any) {
  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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

        <div style={{ position: 'relative' }}>
          {data.pasos && data.pasos.map((paso: any, index: number) => (
            <div 
              key={index}
              style={{ 
                display: 'flex', 
                gap: '32px', 
                marginBottom: index < data.pasos.length - 1 ? '48px' : '0',
                position: 'relative'
              }}
            >
              {/* Número del paso */}
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontFamily: 'Montserrat', 
                fontSize: '1.5rem', 
                fontWeight: 700,
                flexShrink: 0,
                position: 'relative',
                zIndex: 1
              }}>
                {paso.numeroPaso}
              </div>

              {/* Línea conectora */}
              {index < data.pasos.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '29px',
                  top: '60px',
                  width: '2px',
                  height: 'calc(100% + 48px)',
                  background: '#e8f0dc',
                  zIndex: 0
                }} />
              )}

              {/* Contenido */}
              <div style={{ flex: 1, paddingTop: '8px' }}>
                <h3 style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#6D7E4F', 
                  margin: '0 0 12px' 
                }}>
                  {paso.titulo}
                </h3>
                <div 
                  style={{ 
                    fontFamily: 'Open Sans', 
                    fontSize: '1rem', 
                    lineHeight: 1.8, 
                    color: '#555' 
                  }}
                  dangerouslySetInnerHTML={{ __html: paso.descripcion }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}