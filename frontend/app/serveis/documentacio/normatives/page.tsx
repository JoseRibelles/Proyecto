'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function NormativesCentre() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  const docs = [
    { name: "Reglament de Règim Intern", url: "https://blocs.xtec.cat/escolalluismillet/files/2014/11/reglament-regim-intern.pdf" },
    { name: "Normativa d'ús del menjador escolar", url: "https://blocs.xtec.cat/escolalluismillet/files/2014/11/normes-menjador.pdf" },
    { name: "Protocol d'acollida", url: "https://blocs.xtec.cat/escolalluismillet/files/2014/11/protocol-acollida.pdf" }
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
            <span>Normatives del centre</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Normatives del centre
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Consulta i descarrega la normativa i protocols oficials
          </p>
        </div>
      </section>

      {/* Introducción + Enlaces */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
            Reglaments i protocols
          </h2>
          <ul style={{ fontFamily: 'Open Sans', fontSize: '1.10rem', color: '#555', lineHeight: 2, paddingLeft: '1.4rem' }}>
            {docs.map((doc, i) => (
              <li key={i}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: '#6D7E4F', textDecoration: 'underline', fontWeight: 600 }}>
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '1rem', color: '#888', marginTop: '28px', textAlign: 'center' }}>
            (*Consulta també protocols i instruccions específiques al blog del centre.)
          </p>
        </div>
      </section>

     
    </>
  );
}