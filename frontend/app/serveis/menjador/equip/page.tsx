'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function EquipMonitoratge() {
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
        background: 'linear-gradient(135deg, rgba(76,175,80,0.91) 0%, rgba(244,180,94,0.85) 100%), url(https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/serveis-recursos/menjador-acollida" style={{ color: 'white', textDecoration: 'none' }}>Menjador i Acollida</Link>
            <span> / </span>
            <span>Equip de Monitoratge</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.5rem', fontWeight: 700, color: 'white', margin: '0 0 14px', textShadow: '0 2px 8px rgba(0,0,0,0.13)' }}>
            Equip de Monitoratge
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.93)', margin: 0 }}>
            Professionals que vetllen pel benestar i l&apos;educació durant el menjador.
          </p>
        </div>
      </section>

      <section style={{ width: '100%', padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', marginBottom: 34 }}>
            La nostra tasca com a monitors/es
          </h2>
          <div style={{ display: 'grid', gap: '32px' }}>
            {[
              { icon: '🧑‍🏫', title: 'Acompanyament actiu', desc: "Guiar, atendre i ajudar l'alumnat durant l'estona de menjador i activitats posteriors." },
              { icon: '👂', title: 'Educació en valors', desc: "Fomentar el respecte, la convivència i els bons hàbits alimentaris i socials." },
              { icon: '🆘', title: 'Suport i prevenció', desc: "Vetllar per la seguretat, gestionar situacions de conflicte i atendre qualsevol necessitat especial." },
              { icon: '🤗', title: 'Proximitat i confiança', desc: 'Crear vincle i ser punt de referència emocional i lúdic per a infants i famílies.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '64px', height: '64px',
                    background: 'linear-gradient(135deg, #6D7E4F 0%, #f4b45e 100%)',
                    borderRadius: '12px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '2rem', flexShrink: 0
                  }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1.07rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </>
  );
}