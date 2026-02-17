'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Comunitat() {
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
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109,126,79,0.9) 0%, rgba(138,157,101,0.9) 100%), url(https://images.unsplash.com/photo-1503676382389-4809596d5290?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <span>Comunitat</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Comunitat
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0 }}>
            Famílies, AFA i participació a la vida escolar de Les Oliveres.
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', lineHeight: 1.7, color: '#555', textAlign: 'center' }}>
              La Comunitat de l&apos;Institut Escola Lluís Millet està formada per alumnat, equip docent, personal, i especialment per les <strong>famílies</strong>. El seu paper és fonamental per enriquir i obrir el centre a la ciutat i el barri.
            </p>
          </div>
        </div>
      </section>

      {/* Seccions */}
      <section style={{ width: '100%', padding: '80px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[{
            href: '/comunitat/families',
            title: 'Famílies i AFA',
            desc: 'Coneix la nostra associació, implicació i activitats familiars.',
            icon: '🤝'
          }].map((item, i) => (
            <Link href={item.href} key={i} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(138,157,101,0.10)', textDecoration: 'none', color: '#383838', padding: '42px 22px 38px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '18px' }}>{item.icon}</div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 10px', color: '#6D7E4F', textAlign: 'center' }}>{item.title}</h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: 0, textAlign: 'center' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      
    </>
  );
}