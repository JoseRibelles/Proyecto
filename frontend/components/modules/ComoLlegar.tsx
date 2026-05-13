'use client';

export default function ComoLlegar({ data }: any) {
  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {data.titulo && (
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 900, color: '#6D7E4F', textAlign: 'center', margin: '0 0 8px' }}>
            {data.titulo}
          </h2>
        )}
        {data.subtitulo && (
          <div style={{ fontFamily: 'Open Sans', color: '#777', textAlign: 'center', marginBottom: 40 }}>
            {data.subtitulo}
          </div>
        )}

        <div style={{
          background: 'white',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid #eef2e6',
          boxShadow: '0 14px 34px rgba(0,0,0,0.09)'
        }}>
          <iframe
            src={`https://www.google.com/maps?q=${data.latitud},${data.longitud}&hl=ca&z=16&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div style={{ padding: 26, borderTop: '2px solid #eef2e6' }}>
            {data.direccion && (
              <div style={{ fontFamily: 'Montserrat', fontWeight: 900, color: '#6D7E4F', marginBottom: 16 }}>
                📍 {data.direccion}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              {(data.itemsInfo || []).map((it: any, idx: number) => (
                <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: '#eaf0db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span>{it.icono || '•'}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 900, color: '#2b2b2b', marginBottom: 4 }}>
                      {it.titulo}
                    </div>
                    {it.texto && (
                      <div style={{ fontFamily: 'Open Sans', color: '#666', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                        {it.texto}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}