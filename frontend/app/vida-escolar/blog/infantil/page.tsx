'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function BlogInfantil() {
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
        background: 'linear-gradient(135deg, rgba(244, 180, 94, 0.92) 0%, rgba(245, 191, 103, 0.95) 100%), url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/blog-escolar" style={{ color: 'white', textDecoration: 'none' }}>Blog Escolar</Link>
            <span> / </span>
            <span>Infantil</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.6rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 9px rgba(0,0,0,0.25)' }}>
            Blog d&apos;Infantil
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.97)', margin: 0, lineHeight: 1.6 }}>
            Descobreix la creativitat, els projectes i els primers aprenentatges a l&apos;etapa d&apos;Infantil de Les Oliveres.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ width: '100%', padding: '60px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', lineHeight: 1.7, color: '#555', textAlign: 'center', marginBottom: '30px' }}>
            L&apos;etapa d&apos;Infantil al CEIP Lluís Millet és un espai de descobriments, joc i emoció. Cada dia és una aventura plena d&apos;activitats creatives, projectes vivencials i moments compartits on els més petits exploren el món que els envolta.
          </p>
        </div>
      </section>

      {/* Apartados destacados */}
      <section style={{ width: '100%', padding: '48px 0', background: '#fcf6ed' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto', display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
          {[
            {
              icon: '🎨',
              title: 'Tallers creatius i racons de joc',
              desc: "Plantegem activitats i tallers on la imaginació i el joc simbòlic són protagonistes, afavorint l'expressió artística i el desenvolupament motriu."
            },
            {
              icon: '🌱',
              title: 'Projectes vivencials',
              desc: 'Explorem el nostre entorn amb projectes de descoberta: la natura, els animals, les festes tradicionals i els hàbits saludables.'
            },
            {
              icon: '🧩',
              title: 'Participació de les fam��lies',
              desc: 'Les famílies formen part activa del dia a dia: contacontes, tallers i celebracions compartides.'
            },
            {
              icon: '🎉',
              title: 'Festes, sortides i tradicions',
              desc: 'Celebrem la Castanyada, el Carnaval, la Setmana Cultural i fem sortides per descobrir el barri de Les Oliveres.'
            }
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '15px', padding: '36px 24px', boxShadow: '0 2px 11px rgba(244,180,94,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 240 }}>
              <div style={{ fontSize: '2.7rem', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, color: '#f4b45e', margin: '0 0 9px', textAlign: 'center' }}>{item.title}</h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.04rem', color: '#555', textAlign: 'center', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '45px 20px', background: 'white' }}>
        <div style={{ maxWidth: '875px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/vida-escolar/blog" style={{
            fontFamily: 'Montserrat', fontSize: '1.07rem', fontWeight: 600,
            padding: '14px 32px', color: '#f4b45e', border: '2px solid #f4b45e', borderRadius: '8px',
            background: 'transparent', textDecoration: 'none', letterSpacing: '0.04em'
          }}>
            &larr; Torna a Blog Escolar
          </Link>
        </div>
      </section>

     
    </>
  );
}