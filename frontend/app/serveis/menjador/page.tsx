'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function MenjadorAcollida() {
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
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109,126,79,0.93) 0%, rgba(138,157,101,0.93) 100%), url(https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/serveis-recursos" style={{ color: 'white', textDecoration: 'none' }}>Serveis i Recursos</Link>
            <span> / </span>
            <span>Menjador i Acollida</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.7rem', fontWeight: 700, color: 'white', margin: '0 0 14px', textShadow: '0 2px 8px rgba(0,0,0,0.22)' }}>
            Menjador i Acollida
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.20rem', color: 'rgba(255,255,255,0.96)', margin: 0 }}>
            Servei de menjador, acollida matinal i espai educatiu al Lluís Millet.
          </p>
        </div>
      </section>

      {/* Descripció general */}
      <section style={{ width: '100%', padding: '75px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1020px', margin: '0 auto' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto 38px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.17rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              El servei de <strong>menjador escolar</strong> ofereix un espai educatiu de convivència i alimentació saludable, gestionat amb monitors/es professionals i un projecte educatiu propi. També oferim <strong>servei d&apos;acollida matinal</strong> per facilitar la conciliació familiar.
            </p>
          </div>
        </div>
      </section>

      {/* Navegació seccions */}
      <section style={{ width: '100%', padding: '78px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            {
              href: '/vida-escolar/serveis-recursos/menjador-acollida/menu-mensual',
              title: 'Menú mensual',
              icon: '📅',
              desc: "Consulta el menú equilibrat i variat que oferim cada mes al menjador."
            },
            {
              href: '/vida-escolar/serveis-recursos/menjador-acollida/horaris-funcionament',
              title: 'Horaris i funcionament',
              icon: '⏰',
              desc: "Tot sobre horaris, organització, acollida matinal i normes de funcionament del servei."
            },
            {
              href: '/vida-escolar/serveis-recursos/menjador-acollida/equip-monitoratge',
              title: 'Equip de monitoratge',
              icon: '🧑‍🍳',
              desc: "Coneix els professionals encarregats de l'acompanyament i dinamització del servei de menjador."
            }
          ].map((item, i) => (
            <Link href={item.href} key={i} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(138,157,101,0.12)', textDecoration: 'none', color: '#383838', padding: '42px 22px 38px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px' }}>{item.icon}</div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 10px', color: '#6D7E4F', textAlign: 'center' }}>{item.title}</h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: 0, textAlign: 'center' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}