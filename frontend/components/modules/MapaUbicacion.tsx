'use client';

export default function MapaUbicacion({ data }: any) {
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
          background: 'white', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)' 
        }}>
          <iframe
            src={`https://www.google.com/maps?q=${data.latitud},${data.longitud}&hl=es&z=15&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          {data.direccion && (
            <div style={{ 
              padding: '24px', 
              background: 'white', 
              borderTop: '2px solid #e8f0dc' 
            }}>
              <p style={{ 
                fontFamily: 'Open Sans', 
                fontSize: '1.1rem', 
                color: '#555', 
                margin: 0, 
                textAlign: 'center' 
              }}>
                📍 {data.direccion}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}