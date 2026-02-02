'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function CelebracionsTradicions() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop)',
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
            <Link href="/vida-escolar" style={{ color: 'white', textDecoration: 'none' }}>Vida Escolar</Link>
            <span> / </span>
            <span>Celebracions i Tradicions</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Celebracions i Tradicions
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Cultura, tradició i comunitat educativa
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Les <strong>celebracions i tradicions</strong> són moments especialment significatius a l&apos;Institut Escola Lluís Millet. Ens permeten reforçar la <strong>identitat cultural</strong>, promoure la <strong>convivència</strong> i connectar amb les <strong>arrels catalanes</strong> i la <strong>diversitat</strong> del nostre barri de Les Oliveres.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Aquestes activitats impliquen tota la <strong>comunitat educativa</strong>: alumnes, famílies, professorat i entitats del barri.
            </p>
          </div>
        </div>
      </section>

      {/* Seccions principals */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Les Nostres Celebracions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <Link href="/vida-escolar/celebracions-tradicions/festes-centre" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎉</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Festes del Centre
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
                  Castanyada, Nadal, Carnaval, Sant Jordi i Festa de Fi de Curs
                </p>
              </div>
            </Link>

            <Link href="/vida-escolar/celebracions-tradicions/setmana-cultural" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(139,195,74,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>📚</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Setmana Cultural
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
                  Tallers, exposicions, actuacions i activitats interdisciplinàries
                </p>
              </div>
            </Link>

            <Link href="/vida-escolar/celebracions-tradicions/diades-commemoracions" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🕊️</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Diades i Commemoracions
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
                  Dia de la Pau, Dia de la Dona, Dia del Medi Ambient i més
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Objectius */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Objectius de les Celebracions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🌍', title: 'Identitat Cultural', desc: 'Reforçar les tradicions catalanes i la cultura del barri' },
              { icon: '🤝', title: 'Convivència', desc: 'Crear moments compartits entre tota la comunitat educativa' },
              { icon: '🎨', title: 'Creativitat', desc: 'Desenvolupar l\'expressió artística i cultural dels alumnes' },
              { icon: '📚', title: 'Aprenentatge Transversal', desc: 'Integrar continguts curriculars en contextos festius' },
              { icon: '❤️', title: 'Valors', desc: 'Promoure la solidaritat, el respecte i la igualtat' },
              { icon: '👨‍👩‍👧', title: 'Participació Familiar', desc: 'Implicar les famílies en la vida del centre' }
            ].map((objectiu, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{objectiu.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {objectiu.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {objectiu.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Participació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Participació de la Comunitat
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            Les celebracions són moments de trobada i col·laboració
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            
            {[
              {
                icon: '👨‍👩‍👧',
                title: 'Famílies',
                description: 'Participació activa en tallers, preparatius i celebracions. Col·laboració amb l\'AFA en l\'organització d\'activitats.'
              },
              {
                icon: '🏛️',
                title: 'Entitats del Barri',
                description: 'Col·laboració amb entitats culturals, esportives i socials de Les Oliveres i Santa Coloma de Gramenet.'
              },
              {
                icon: '👩‍🏫',
                title: 'Professorat',
                description: 'Coordinació i dinamització de les activitats, integrant-les en el projecte educatiu del centre.'
              },
              {
                icon: '🎓',
                title: 'Alumnat',
                description: 'Protagonistes de les celebracions amb actuacions, exposicions, creacions artístiques i participació activa.'
              }
            ].map((participant, index) => (
              <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{participant.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {participant.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                      {participant.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix les nostres celebracions
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora en detall les festes, la setmana cultural i les diades
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/celebracions-tradicions/festes-centre" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Festes del Centre
              </Link>
              <Link href="/vida-escolar/celebracions-tradicions/setmana-cultural" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Setmana Cultural
              </Link>
              <Link href="/vida-escolar/celebracions-tradicions/diades-commemoracions" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Diades i Commemoracions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}