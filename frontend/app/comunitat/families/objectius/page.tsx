'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ObjectiusFuncionsAfa() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80)',
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
            <Link href="/vida-escolar/comunitat" style={{ color: 'white', textDecoration: 'none' }}>Comunitat</Link>
            <span> / </span>
            <Link href="/vida-escolar/comunitat/families" style={{ color: 'white', textDecoration: 'none' }}>Famílies i AFA</Link>
            <span> / </span>
            <span>Objectius i Funcions</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Objectius i Funcions AFA
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            La força de la família al Millet
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Els <strong>objectius de l&apos;AFA</strong> i les funcions principals es basen en:
            </p>
          </div>
        </div>
      </section>

      {/* Objectius i funcions */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Funcions Essencials
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              { icon: '🤝', title: 'Representar les famílies', desc: 'Ser la veu de les famílies davant l’escola i la comunitat educativa.' },
              { icon: '🗳️', title: 'Participar en òrgans de decisió', desc: 'Formar part activa del Consell Escolar i altres comissions.' },
              { icon: '🎉', title: 'Impulsar activitats', desc: 'Organitzar i fomentar activitats, projectes i serveis escolars i familiars.' },
              { icon: '🧑‍🤝‍🧑', title: 'Fomentar la relació escola-família', desc: 'Afavorir l’acollida, la inclusió i la participació activa de totes les famílies.' },
              { icon: '🌈', title: 'Promoure la cohesió i la igualtat', desc: 'Impulsar valors d’inclusió, igualtat i solidaritat en totes les activitats.' },
              { icon: '🤲', title: 'Col·laborar amb entitats del barri', desc: 'Fer xarxa i sumar recursos amb altres entitats de Les Oliveres i Santa Coloma.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: 0 }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '64px', height: '64px',
                    background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)',
                    borderRadius: '12px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '2rem', flexShrink: 0
                  }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.45rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1.08rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre l&apos;AFA i les famílies
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix les activitats i la participació a la comunitat educativa
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/comunitat/families/activitats"
                style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Activitats Familiars
              </Link>
              <Link href="/comunitat/families/participacio"
                style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px',
                  borderRadius: '8px', textDecoration: 'none', background: 'transparent',
                  color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Participació i Voluntariat
              </Link>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}