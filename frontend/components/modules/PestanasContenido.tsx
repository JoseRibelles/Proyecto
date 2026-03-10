'use client';
import { useState } from 'react';

export default function PestanasContenido({ data }: any) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
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

        {/* Pestañas */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          borderBottom: '2px solid #e8f0dc',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          {data.pestanas && data.pestanas.map((pestana: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                fontFamily: 'Montserrat',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '16px 32px',
                background: activeTab === index ? '#6D7E4F' : 'transparent',
                color: activeTab === index ? 'white' : '#6D7E4F',
                border: 'none',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {pestana.icono && <span style={{ fontSize: '1.2rem' }}>{pestana.icono}</span>}
              {pestana.tituloPestana}
            </button>
          ))}
        </div>

        {/* Contenido de la pestaña activa */}
        {data.pestanas && data.pestanas[activeTab] && (
          <div 
            style={{ 
              fontFamily: 'Open Sans', 
              fontSize: '1.05rem', 
              lineHeight: 1.8, 
              color: '#555',
              background: '#f9f9f9',
              padding: '40px',
              borderRadius: '12px'
            }}
            dangerouslySetInnerHTML={{ __html: data.pestanas[activeTab].contenido }}
          />
        )}
      </div>
    </section>
  );
}