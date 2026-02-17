'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function ProjectesInnovacio() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop)',
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
            <Link href="/etapes" style={{ color: 'white', textDecoration: 'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <span>Projectes d&apos;Innovació</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Projectes d&apos;Innovació
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Innovem per aprendre millor
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>Institut Escola Lluís Millet</strong> forma part del <strong>Mapa de la Innovació Pedagògica de Catalunya</strong>, implementant projectes innovadors que transformen la manera d&apos;aprendre i ensenyar.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Els nostres projectes d&apos;innovació estan orientats a desenvolupar <strong>competències del segle XXI</strong>, fomentant el <strong>pensament crític</strong>, la <strong>creativitat</strong>, la <strong>col·laboració</strong> i les <strong>habilitats digitals</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mapa Innovació */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🗺️
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Mapa de la Innovació Pedagògica
                </h3>
                <p style={{ fontFamily:  'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  El nostre centre està reconegut pel <strong>Departament d&apos;Educació de la Generalitat de Catalunya</strong> com a centre innovador, formant part del Mapa de la Innovació Pedagògica amb les nostres pràctiques de <strong>metodologies actives</strong>, <strong>ambients d&apos;aprenentatge</strong> i <strong>atenció personalitzada</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projectes principals */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Els Nostres Projectes d&apos;Innovació
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <Link href="/etapes/innovacio/abp" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>📚</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Aprenentatge Basat en Projectes (ABP)
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
                  Metodologia que situa l&apos;alumne al centre, treballant sobre reptes reals i significatius
                </p>
              </div>
            </Link>

            <Link href="/etapes/innovacio/tic-robotica" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(139,195,74,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🤖</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin:  '0 0 16px' }}>
                  TIC i Robòtica Educativa
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin:  0, opacity: 0.9, lineHeight: 1.7 }}>
                  Integració de la tecnologia i la robòtica per desenvolupar competències digitals
                </p>
              </div>
            </Link>

            <Link href="/etapes/innovacio/educacio-emocional" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>❤️</div>
                <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Educació Emocional i Valors
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity:  0.9, lineHeight: 1.7 }}>
                  Desenvolupament de la intel·ligència emocional i valors per a la convivència
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Principis innovadors */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Principis de la Nostra Innovació
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎯', title: 'Alumne Protagonista', desc: 'L\'infant al centre de l\'aprenentatge' },
              { icon: '💡', title: 'Aprenentatge Significatiu', desc: 'Connectat amb la realitat i interessos' },
              { icon: '🤝', title: 'Treball Col·laboratiu', desc: 'Cooperació i ajuda mútua' },
              { icon: '🔄', title: 'Millora Contínua', desc: 'Formació i avaluació permanent' }
            ].map((principi, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:  '2.5rem', margin: '0 auto 16px' }}>
                  {principi.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.2rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 8px' }}>
                  {principi.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                  {principi.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Impacte */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Impacte de la Innovació
          </h2>

          <div style={{ display:  'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📈</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Millor Aprenentatge
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Els alumnes aprenen de forma més profunda i significativa, consolidant millor els coneixements. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize:  '3rem', marginBottom: '16px' }}>😊</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Més Motivació
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Increment de la motivació i l&apos;interès per aprendre gràcies a metodologies actives.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌟</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Desenvolupament Integral
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Formació completa que integra aspectes acadèmics, emocionals i socials.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Vols conèixer més sobre els nostres projectes? 
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora cadascun dels projectes d&apos;innovació en detall
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/innovacio/abp" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius:  '8px', textDecoration:  'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                ABP
              </Link>
              <Link href="/etapes/innovacio/tic" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                TIC i Robòtica
              </Link>
              <Link href="/etapes/innovacio/emocional" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Educació Emocional
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}