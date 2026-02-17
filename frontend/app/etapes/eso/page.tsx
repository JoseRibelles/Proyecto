'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function EducacioSecundaria() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff? text=LOGO+ESCOLA'
  };

  return (
    <>
      

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop)',
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
            <span>Educació Secundària</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Educació Secundària (ESO)
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            De 12 a 16 anys · Formació integral per al futur
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>Educació Secundària Obligatòria (ESO)</strong> és una etapa decisiva on els alumnes consoliden la seva <strong>formació acadèmica</strong>, desenvolupen el <strong>pensament crític</strong> i construeixen la seva <strong>identitat personal</strong> i <strong>professional</strong>.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Preparem els nostres alumnes per afrontar els <strong>reptes del segle XXI</strong> amb competència, autonomia i valors.
            </p>
          </div>
        </div>
      </section>

      {/* Característiques principals */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Característiques de l&apos;etapa
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎓
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Exigència Acadèmica
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Currículum rigorós que prepara per a estudis postobligatoris:  Batxillerat i Cicles Formatius.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                🧭
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Orientació Acadèmica
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Acompanyament personalitzat en la presa de decisions sobre el futur acadèmic i professional.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🌍
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Competències Globals
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Desenvolupament de competències STEM, digitals, lingüístiques i emprenedores.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                🎭
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Desenvolupament Personal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Atenció a l&apos;educació emocional, la convivència i els valors democràtics.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔬
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Aprenentatge Actiu
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Metodologies innovadores:  ABP, aprenentatge cooperatiu, treball experimental.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                🌐
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Internacionalització
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Intercanvis, mobilitat europea i certificacions oficials d&apos;idiomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Organització per cursos */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Organització de l&apos;ESO
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>📘</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px', textAlign: 'center' }}>
                1r i 2n ESO
              </h3>
              <p style={{ fontFamily:  'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px', textAlign:  'center' }}>
                Cicle Inicial (12-14 anys)
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0, textAlign: 'center' }}>
                Consolidació de les competències bàsiques i adaptació a l&apos;estructura de l&apos;ESO.  Introducció a matèries específiques i optatives.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>📗</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px', textAlign: 'center' }}>
                3r i 4t ESO
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color:  '#8BC34A', margin:  '0 0 16px', textAlign: 'center' }}>
                Cicle Superior (14-16 anys)
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, textAlign: 'center' }}>
                Especialització progressiva amb itineraris acadèmics i professionals.  Orientació per a estudis postobligatoris.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Navegació interna */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Descobreix més sobre Educació Secundària
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <Link href="/etapes/eso/projectes" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius:  '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌍</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Projectes Transversals
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', margin: 0, opacity: 0.9 }}>
                  Iniciatives que connecten amb la realitat
                </p>
              </div>
            </Link>

            <Link href="/etapes/eso/orientacio" style={{ textDecoration:  'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(139,195,74,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style. transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🧭</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Orientació Acadèmica i Personal
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9 }}>
                  Acompanyament en la presa de decisions
                </p>
              </div>
            </Link>

            <Link href="/etapes/eso/activitats" style={{ textDecoration:  'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style. transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎭</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Activitats Complementàries
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', margin: 0, opacity: 0.9 }}>
                  Sortides, colònies i projectes especials
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      
    </>
  );
}