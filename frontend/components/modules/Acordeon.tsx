'use client';
import { useState } from 'react';

export default function Acordeon({ data }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {data.elementos && data.elementos.map((item: any, index: number) => (
            <div 
              key={index}
              style={{ 
                background: 'white', 
                borderRadius: '12px', 
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              {/* Pregunta (clickeable) */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#6D7E4F',
                  textAlign: 'left'
                }}
              >
                {item.pregunta}
                <span style={{ 
                  fontSize: '1.5rem', 
                  transition: 'transform 0.3s',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </span>
              </button>

              {/* Respuesta (expandible) */}
              {openIndex === index && (
                <div 
                  style={{ 
                    padding: '0 24px 24px 24px',
                    fontFamily: 'Open Sans',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: '#555',
                    borderTop: '1px solid #e8f0dc'
                  }}
                  dangerouslySetInnerHTML={{ __html: item.respuesta }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}