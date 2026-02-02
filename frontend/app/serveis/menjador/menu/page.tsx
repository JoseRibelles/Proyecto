'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function MenuMensual() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  // NOTA: si tuvieses documentos PDF o links reales del menú, pon aquí el enlace dinámicamente
  const menuLink = "https://blocs.xtec.cat/escolalluismillet/menjador-i-acollida/menu-mensual/";

  return (
    <>
      <TopBar text={defaultSite.topBarText} phone={defaultSite.topBarPhones}/>
      <Header site={defaultSite}/>
      <Nav/>

      {/* Hero */}
      <section style={{
        width: '100%', height: '320px',
        background: 'linear-gradient(135deg, rgba(109,126,79,0.9) 0%, rgba(244,180,94,0.80) 100%), url(https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/serveis-recursos/menjador-acollida" style={{ color: 'white', textDecoration: 'none' }}>Menjador i Acollida</Link>
            <span> / </span>
            <span>Menú Mensual</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: '0 0 14px', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
            Menú Mensual
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.95)', margin: 0 }}>
            Alimentació equilibrada i variada cada mes al Millet.
          </p>
        </div>
      </section>

      <section style={{ width: '100%', padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', color: '#555', marginBottom: '32px' }}>
            Consulta aquí el menú del menjador, actualitzat mensualment i elaborat segons criteris d&apos;alimentació saludable, adaptat als infants i validat per dietistes.
          </p>
          <p>
            <a
              href={menuLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block', 
                background: 'linear-gradient(135deg, #f4b45e 0%, #f5bf67 100%)',
                color: '#fff', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '1.12rem',
                padding: '16px 38px', borderRadius: '10px', textDecoration: 'none', 
                boxShadow: '0 4px 16px rgba(244,180,94,0.15)' 
              }}>
              Veure menú mensual actual
            </a>
          </p>
        </div>
      </section>

      <Footer/>
    </>
  );
}