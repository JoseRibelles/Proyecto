'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function EducacioInfantil() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=400&fit=crop)',
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
            <span>Educació Infantil</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Educació Infantil
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            De 3 a 6 anys · Descobrir el món jugant i experimentant
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin:  '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>Educació Infantil</strong> a l&apos;Institut Escola Lluís Millet es desenvolupa a través dels <strong>ambients d&apos;aprenentatge</strong> (P-3 a 6è), on els infants són els <strong>protagonistes</strong> del seu procés d&apos;aprenentatge. 
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Treballem per crear un entorn <strong>acollidor</strong>, <strong>segur</strong> i <strong>estimulant</strong> on els nens i nenes descobreixen el món a través del <strong>joc</strong>, la <strong>manipulació</strong> i l&apos;<strong>experimentació</strong>.
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
                🎨
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ambients d&apos;Aprenentatge
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Espais organitzats on l&apos;aprenentatge sorgeix de forma espontània i natural a través del joc i la manipulació.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🤸
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Psicomotricitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Desenvolupament motor, coordinació i coneixement del propi cos a través del moviment i el joc dins del Taller Millet.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎭
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Taller Millet
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Espai de desenvolupament cognitiu, emocional i cinètic amb activitats del cos, l&apos;art i el medi ambient.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🌳
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Sortides a la Natura
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Sortides regulars a espais naturals per gaudir, jugar i experimentar amb el medi ambient.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ❤️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Emocional
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Treball emocional i d&apos;equip per al desenvolupament personal i social dels infants.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                👨‍👩‍👧
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Participació Familiar
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Col·laboració i comunicació constant amb les famílies a través de l&apos;AFA i espais familiars.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Organització per cursos */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Organització de l&apos;Etapa
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🧸</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                P-3
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1. 1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px' }}>
                3 anys
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Adaptació a l&apos;escola, inici dels ambients d&apos;aprenentatge i descoberta del joc com a eina educativa.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                P-4
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color:  '#8BC34A', margin:  '0 0 16px' }}>
                4 anys
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Consolidació de l&apos;autonomia, ampliació dels ambients i desenvolupament de la creativitat.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📚</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                P-5
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px' }}>
                5 anys
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Preparació per a Primària, inici de la lectoescriptura i consolidació de competències bàsiques.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Navegació interna */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Descobreix més sobre Educació Infantil
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <Link href="/etapes/infantil/objectius" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius:  '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget. style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Objectius d&apos;Etapa
                </h3>
                <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9 }}>
                  Què treballem a Infantil
                </p>
              </div>
            </Link>

            <Link href="/etapes/infantil/projectes" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(139,195,74,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style. transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎨</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Projectes i Activitats
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9 }}>
                  Ambients i projectes del centre
                </p>
              </div>
            </Link>

            <Link href="/etapes/infantil/equip" style={{ textDecoration:  'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style. transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👩‍🏫</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Equip Docent
                </h3>
                <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9 }}>
                  Coneix l&apos;equip d&apos;Infantil
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </>
  );
}