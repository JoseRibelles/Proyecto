'use client';
import React from 'react';
import Link from 'next/link';

export default function AutoritzacionsPermisos() {
  const docs = [
    { 
      name: "Autorització Sortides Santa Coloma", 
      url: "/downloads/Autorizado-sortides-Santa-Coloma.docx" 
    },
    { 
      name: "Autorització Drets d'imatge", 
      url: "/downloads/Autorizado-drets-dimatge.docx" 
    },
    { 
      name: "Autorització marxar sols a casa", 
      url: "/downloads/autoritzacio-per-deixar-marxar-els-alumnes-sols-a-casa.docx" 
    },
    { 
      name: "Autorització marxar amb un germà", 
      url: "/downloads/E.I-FULL-D-AUTORITZACIO-PER-MARXAR-AMB-UN-GERMA.docx" 
    },
    { 
      name: "Autorització Pati pistes", 
      url: "/downloads/autorizado-pati-de-pistes.docx" 
    },
    { 
      name: "Autorització SEP", 
      url: "/downloads/Autorizado-SEP.docx" 
    },
    { 
      name: "Condicions pagament de les sortides", 
      url: "/downloads/CIRCULAR-CONDICIONS-PAGAMENT-DE-LES-SORTIDES.docx" 
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/serveis-recursos/documentacio-descarregues" style={{ color: 'white', textDecoration: 'none' }}>Documentació i Descàrregues</Link>
            <span> / </span>
            <span>Autoritzacions i permisos</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Autoritzacions i permisos
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Descarrega i presenta les autoritzacions i permisos necessaris.
          </p>
        </div>
      </section>

      {/* Documentos */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
            Documents i autoritzacions
          </h2>
          <ul style={{ fontFamily: 'Open Sans', fontSize: '1.10rem', color: '#555', lineHeight: 2, paddingLeft: '1.4rem' }}>
            {docs.map((doc, i) => (
              <li key={i}>
                <a 
                  href={doc.url} 
                  download 
                  style={{ color: '#6D7E4F', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}
                >
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '1rem', color: '#888', marginTop: '28px', textAlign: 'center' }}>
            (Entrega els impresos signats al tutor/a o a la secretaria del centre.)
          </p>
        </div>
      </section>
    </>
  );
}