'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function BlogEscolar() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1503676382389-4809596d5290?w=1200&h=400&fit=crop)',
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
            <span>Blog Escolar</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Blog Escolar
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            El dia a dia del nostre alumnat d&apos;Infantil, Primària i Secundària a Les Oliveres.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ width: '100%', padding: '64px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
            El Blog Escolar del CEIP Lluís Millet, ubicat a Les Oliveres, recull totes les experiències, activitats i projectes que viu el nostre alumnat a Infantil, Primària i Secundària. Descobreix aquí com aprenem, creixem i compartim la vida escolar!
          </p>
        </div>
      </section>

      {/* Seccions */}
      <section style={{ width: '100%', padding: '40px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[{
            href: '/vida-escolar/blog/infantil',
            title: 'Infantil',
            img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
            desc: 'Descobreix els primers projectes, els jocs i activitats dels més petits.'
          },
            {
              href: '/vida-escolar/blog/primaria',
              title: 'Primària',
              img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
              desc: 'Segueix el dia a dia d’un alumnat curiós, actiu i protagonista del seu aprenentatge.'
            },
            {
              href: '/vida-escolar/blog/secundaria',
              title: 'Secundària',
              img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
              desc: 'Treballem per a l’autonomia, la creativitat i la preparació per nous reptes.'
          }].map((item, i) => (
            <Link href={item.href} key={i} style={{ background: 'white', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 18px rgba(138,157,101,0.07)', textDecoration: 'none', color: '#383838' }}>
              <div style={{
                width: '100%', height: '170px', backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center'
              }} />
              <div style={{ padding: '28px 22px 24px' }}>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 10px' }}>{item.title}</h2>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.06rem', color: '#555', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '64px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/vida-escolar" style={{
            fontFamily: 'Montserrat', fontSize: '1.07rem', fontWeight: 600,
            padding: '17px 36px', color: '#6D7E4F', border: '2px solid #6D7E4F', borderRadius: '8px',
            background: 'transparent', textDecoration: 'none', letterSpacing: '0.04em'
          }}>
            &larr; Torna a Vida Escolar
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}