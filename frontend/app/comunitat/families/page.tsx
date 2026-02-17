'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function Families() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };
  return (
    <>
     

      {/* Hero */}
      <section style={{
        width: '100%', height: '320px',
        background: 'linear-gradient(135deg, rgba(109,126,79,0.9) 0%, rgba(138,157,101,0.9) 100%), url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/comunitat" style={{ color: 'white', textDecoration: 'none' }}>Comunitat</Link>
            <span> / </span>
            <span>Famílies i AFA</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.7rem', fontWeight: 700, color: 'white', marginBottom: 16, textShadow: '0 2px 8px rgba(0,0,0,0.17)' }}>
            Famílies i AFA
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', color: 'rgba(255,255,255,0.97)', margin: 0 }}>
            Implicació de les famílies a Lluís Millet. Participació, activitats i comunitat.
          </p>
        </div>
      </section>

      {/* Contingut + enllaços */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            {
              href: '/vida-escolar/comunitat/families/objectius',
              icon: '🎯',
              title: 'Objectius i funcions',
              desc: "Descobreix els objectius, valors i què fa l'AFA per a la comunitat escolar."
            },
            {
              href: '/vida-escolar/comunitat/families/activitats',
              icon: '🎉',
              title: 'Activitats familiars',
              desc: 'Totes les activitats familiars, sortides, tallers i celebracions organitzades per l’AFA.'
            },
            {
              href: '/vida-escolar/comunitat/families/participacio',
              icon: '🤲',
              title: 'Participació i voluntariat',
              desc: 'Implica’t a l’AFA i descobreix les opcions de voluntariat i col·laboració.'
            }
          ].map((item, i) => (
            <Link href={item.href} key={i} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(138,157,101,0.10)', textDecoration: 'none', color: '#383838', padding: '42px 22px 38px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px' }}>{item.icon}</div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 10px', color: '#6D7E4F', textAlign: 'center' }}>{item.title}</h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: 0, textAlign: 'center' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      
    </>
  );
}