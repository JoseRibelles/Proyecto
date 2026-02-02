'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function BlogPrimaria() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
      <TopBar text={defaultSite.topBarText} phone={defaultSite.topBarPhones} />
      <Header site={defaultSite} />
      <Nav />

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(93, 176, 255, 0.88) 0%, rgba(119, 198, 255, 0.95) 100%), url(https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.90)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/blog-escolar" style={{ color: 'white', textDecoration: 'none' }}>Blog Escolar</Link>
            <span> / </span>
            <span>Primària</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.6rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 9px rgba(0,0,0,0.25)' }}>
            Blog de Primària
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.97)', margin: 0, lineHeight: 1.6 }}>
            Un alumnat actiu i protagonista: projectes, sortides i convivència diària a Les Oliveres.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ width: '100%', padding: '60px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', lineHeight: 1.7, color: '#555', textAlign: 'center', marginBottom: '30px' }}>
            A Primària, els nens i nenes del CEIP Lluís Millet són protagonistes del seu aprenentatge: treballem per projectes, compartim activitats especials i vivim experiències úniques que afavoreixen el creixement personal i la convivència.
          </p>
        </div>
      </section>

      {/* Apartados destacados */}
      <section style={{ width: '100%', padding: '48px 0', background: '#eff7fa' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto', display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
          {[
            {
              icon: '📚',
              title: "Projectes d'aula i interdisciplinaris",
              desc: 'Aprenem de manera globalitzada amb projectes que integren diverses àrees i fomenta l\'esperit crític.'
            },
            {
              icon: '🚌',
              title: 'Sortides i colònies',
              desc: 'Visites culturals, convivències i colònies per enfortir els vincles i conèixer entorns nous.'
            },
            {
              icon: '🏆',
              title: 'Activitats esportives i concursos',
              desc: 'Participem en activitats esportives, jocs, concursos i iniciatives solidàries al barri.'
            },
            {
              icon: '✍️',
              title: "Creacions de l'alumnat",
              desc: 'Els nens i nenes escriuen, dibuixen i comparteixen relats, reportatges i les seves pròpies vivències al blog.'
            }
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '15px', padding: '36px 24px', boxShadow: '0 2px 10px rgba(93,176,255,0.13)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 240 }}>
              <div style={{ fontSize: '2.7rem', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, color: '#5db0ff', margin: '0 0 9px', textAlign: 'center' }}>{item.title}</h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.04rem', color: '#555', textAlign: 'center', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '45px 20px', background: 'white' }}>
        <div style={{ maxWidth: '875px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/blog-escolar" style={{
            fontFamily: 'Montserrat', fontSize: '1.07rem', fontWeight: 600,
            padding: '14px 32px', color: '#5db0ff', border: '2px solid #5db0ff', borderRadius: '8px',
            background: 'transparent', textDecoration: 'none', letterSpacing: '0.04em'
          }}>
            &larr; Torna a Blog Escolar
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}