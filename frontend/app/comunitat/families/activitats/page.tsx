'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ActivitatsFamiliarsAfa() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };
  return (
    <>
      <TopBar text={defaultSite.topBarText} phone={defaultSite.topBarPhones} />
      <Header site={defaultSite}/>
      <Nav/>

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109,126,79,0.9) 0%, rgba(138,157,101,0.9) 100%), url(https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/vida-escolar/comunitat" style={{ color: 'white', textDecoration: 'none' }}>Comunitat</Link>
            <span> / </span>
            <Link href="/vida-escolar/comunitat/families" style={{ color: 'white', textDecoration: 'none' }}>Famílies i AFA</Link>
            <span> / </span>
            <span>Activitats Familiars</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Activitats Familiars
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.94)', margin: 0 }}>
            Un espai compartit per créixer junts com a comunitat educativa.
          </p>
        </div>
      </section>

      {/* Contenidos bonitos/tarjetas */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Propostes i activitats familiars
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              { icon: '🎈', title: 'Festes escolars i comunitàries', desc: 'Castanyada, Nadal, Carnestoltes, Sant Jordi, fi de curs… Trobades per celebrar i compartir.' },
              { icon: '🧑‍🍳', title: 'Tallers de famílies', desc: 'Cuina, manualitats, jocs tradicionals i activitats formatives obertes a tothom.' },
              { icon: '🏞️', title: 'Sortides i excursions', desc: "Propostes per gaudir de l'entorn natural i cultural, construint records familiars." },
              { icon: '🤾', title: 'Trobades esportives', desc: 'Jornades de jocs, marxes i activitats físiques familiars.' },
              { icon: '🤝', title: 'Xerrades i escola de famílies', desc: 'Formació, debats i espais de diàleg organitzats per l’AFA.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: 0 }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '64px', height: '64px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0
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
      <Footer/>
    </>
  );
}