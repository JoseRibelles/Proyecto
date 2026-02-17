'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function Documentacio() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

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
            <Link href="/vida-escolar/serveis-recursos" style={{ color: 'white', textDecoration: 'none' }}>Serveis i Recursos</Link>
            <span> / </span>
            <span>Documentació i Descarregues</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Documentació i descarregues
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Tota la documentació del centre disponible per descarregar.
          </p>
        </div>
      </section>

      {/* Navegació seccions */}
      <section style={{ width: '100%', padding: '80px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            {
              href: '/vida-escolar/serveis-recursos/documentacio-descarregues/autoritzacions-permisos',
              title: 'Autoritzacions i permisos',
              icon: '📝',
              desc: "Descarrega i consulta autoritzacions, permisos de sortida, medicació i altres documents oficials."
            },
            {
              href: '/vida-escolar/serveis-recursos/documentacio-descarregues/normatives-centre',
              title: 'Normatives del centre',
              icon: '📚',
              desc: "Reglaments i normes de convivència, documentació legal i protocols del centre."
            },
            {
              href: '/vida-escolar/serveis-recursos/documentacio-descarregues/informes-formularis',
              title: 'Informes i formularis',
              icon: '📄',
              desc: "Sol·licituds, informes oficials i documents útils per a les famílies."
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