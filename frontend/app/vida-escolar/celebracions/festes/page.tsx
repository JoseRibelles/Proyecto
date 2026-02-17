'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function FesdesCentre() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=400&fit=crop)',
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
            <Link href="/vida-escolar/celebracions-tradicions" style={{ color: 'white', textDecoration: 'none' }}>Celebracions i Tradicions</Link>
            <span> / </span>
            <span>Festes del Centre</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Festes del Centre
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Tradicions catalanes i moments de celebració
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Al llarg del curs, celebrem les <strong>festes tradicionals catalanes</strong> amb activitats educatives, lúdiques i culturals que impliquen tota la comunitat educativa. Aquestes celebracions són moments per reforçar la <strong>identitat cultural</strong>, la <strong>convivència</strong> i els <strong>valors</strong> del nostre projecte.
            </p>
          </div>
        </div>
      </section>

      {/* La Castanyada */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #D84315 0%, #BF360C 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🌰
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  La Castanyada
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Celebració de la tardor amb <strong>castanyes torrades</strong>, <strong>panellets</strong>, contes de la Castanyera, cançons tradicionals i activitats artístiques. Un moment especialment màgic per als més petits amb la visita de la Castanyera i decoracions d&apos;estiu.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎭', title: 'Contes i Llegendes', desc: 'Relats de la Castanyera i tradicions de tardor' },
              { icon: '🍪', title: 'Elaboració de Panellets', desc: 'Tallers de cuina per fer panellets amb les famílies' },
              { icon: '🎨', title: 'Manualitats', desc: 'Decoracions de tardor, castanyes i dibuixos temàtics' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activitat.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {activitat.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {activitat.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Nadal */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #C62828 0%, #B71C1C 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🎄
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Nadal
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Les festes nadalenques inclouen <strong>cagar el Tió</strong>, <strong>cantada de nadales</strong>, elaboració de <strong>postals i decoracions</strong>, representacions del pessebre i visita dels <strong>Patges dels Reis d&apos;Orient</strong> per recollir les cartes dels alumnes.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '🪵', name: 'Cagar el Tió' },
              { icon: '🎵', name: 'Cantada de Nadales' },
              { icon: '✉️', name: 'Cartes als Reis' },
              { icon: '🎨', name: 'Manualitats Nadalenques' },
              { icon: '🎭', name: 'Representacions' },
              { icon: '🌟', name: 'Decoració del Centre' },
              { icon: '📚', name: 'Contes de Nadal' },
              { icon: '👑', name: 'Visita dels Patges' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{activitat.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {activitat.name}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Carnaval */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #7B1FA2 0%, #6A1B9A 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🎭
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Carnaval / Carnestoltes
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Festa de <strong>disfresses</strong> i molta gresca amb el <strong>Rei Carnestoltes</strong>. Desfilades, balls, música i consignes divertides. També penjam la <strong>Vella Quaresma</strong> que marca el compte enrere per a les vacances de Setmana Santa.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '👗', title: 'Desfilada de Disfresses', desc: 'Tot l\'alumnat es disfressa i desfila pel centre' },
              { icon: '🎶', title: 'Balls i Música', desc: 'Balls populars i cançons de Carnestoltes' },
              { icon: '👑', title: 'El Rei Carnestoltes', desc: 'Consignes divertides i activitats lúdiques' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activitat.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {activitat.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {activitat.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Sant Jordi */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #C62828 0%, #B71C1C 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🌹
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Sant Jordi (23 d&apos;abril)
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Dia del <strong>llibre i la rosa</strong>. Treballem la <strong>llegenda de Sant Jordi</strong>, organitzem <strong>paradetes de llibres</strong>, <strong>concursos literaris</strong>, representacions teatrals i activitats de foment lector. L&apos;escola s&apos;ambientada amb roses, dracs i cavallers.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '📚', name: 'Paradeta de Llibres' },
              { icon: '🌹', name: 'Intercanvi de Roses' },
              { icon: '✍️', name: 'Concurs Literari' },
              { icon: '🎭', name: 'Llegenda de Sant Jordi' },
              { icon: '🎨', name: 'Decoracions' },
              { icon: '🐉', name: 'Tallers de Dracs' },
              { icon: '📖', name: 'Lectura de Contes' },
              { icon: '🖼️', name: 'Exposicions' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{activitat.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {activitat.name}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Festa de Fi de Curs */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🎊
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Festa de Fi de Curs
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Celebració de final de curs amb <strong>actuacions dels alumnes</strong>, <strong>exposicions</strong> dels treballs realitzats, <strong>jocs</strong>, <strong>música</strong> i activitats lúdiques. Moment especial per acomiadar els alumnes de 6è i 4t d&apos;ESO amb els <strong>actes de graduació</strong>.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎭', title: 'Actuacions', desc: 'Teatre, danses, música i presentacions dels alumnes' },
              { icon: '🎓', title: 'Actes de Graduació', desc: 'Comiat emotiu dels alumnes de 6è i 4t d\'ESO' },
              { icon: '🎮', title: 'Jocs i Activitats', desc: 'Jocs cooperatius, inflables i activitats a l\'aire lliure' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activitat.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {activitat.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {activitat.desc}
                </p>
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
              Descobreix més celebracions
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora la setmana cultural i les diades commemoratives
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/celebracions/setmana-cultural" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Setmana Cultural
              </Link>
              <Link href="/vida-escolar/celebracions/diades" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Diades i Commemoracions
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}