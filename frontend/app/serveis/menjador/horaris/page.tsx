'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function HorarisFuncionament() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
      <TopBar text={defaultSite.topBarText} phone={defaultSite.topBarPhones}/>
      <Header site={defaultSite}/>
      <Nav/>

      {/* Hero */}
      <section style={{
        width: '100%', height: '320px',
        background: 'linear-gradient(135deg, rgba(109,126,79,0.9) 0%, rgba(245,191,103,0.85) 100%), url(https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/serveis-recursos/menjador-acollida" style={{ color: 'white', textDecoration: 'none' }}>Menjador i Acollida</Link>
            <span> / </span>
            <span>Horaris i Funcionament</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: '0 0 14px', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
            Horaris i Funcionament
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.95)', margin: 0 }}>
            Organització de menjador i acollida per a la conciliació familiar.
          </p>
        </div>
      </section>

      {/* Info horaris i funcionament */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', marginBottom: 38 }}>
            Horaris del servei
          </h2>
          <ul style={{ fontFamily: 'Open Sans', fontSize: '1.16rem', color: '#555', margin: '0 0 40px', listStyle: 'disc inside', lineHeight: 2 }}>
            <li><strong>Acollida matinal:</strong> de 7:30h a 9:00h (servei opcional, inscripció prèvia).</li>
            <li><strong>Menjador escolar:</strong> de 12:30h a 15:00h.</li>
            <li>L’alumnat és atès per monitors/es abans, durant i després de dinar fins la tornada a les classes.</li>
          </ul>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '1.45rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', marginBottom: 28 }}>
            Funcionament del menjador
          </h2>
          <ul style={{ fontFamily: 'Open Sans', fontSize: '1.12rem', color: '#555', margin: '0 auto 40px', listStyle: 'circle', paddingLeft: '1.6em', maxWidth: 700, lineHeight: 2 }}>
            <li>Servei gestionat per monitors/es qualificats i amb projecte educatiu propi.</li>
            <li>Grups d’edats diferenciats per garantir l’acompanyament apropiat per a cada alumne.</li>
            <li>Atenció a al·lèrgies i dietes especials (avisar amb certificat mèdic).</li>
            <li>Espais de descans, jocs, lectura i activitats lúdiques després de dinar.</li>
            <li>Abans de les 15h no es pot recollir l’alumnat, excepte avis important i autorització.</li>
          </ul>
        </div>
      </section>
      <Footer/>
    </>
  );
}