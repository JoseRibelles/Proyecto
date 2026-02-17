'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function EducacioPrimaria() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff? text=LOGO+ESCOLA'
  };

  return (
    <>
      

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=400&fit=crop)',
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
            <span>Educació Primària</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Educació Primària
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            De 6 a 12 anys · Aprendre pensant, creant i col·laborant
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>Educació Primària</strong> a l&apos;Institut Escola Lluís Millet es caracteritza pels <strong>ambients d&apos;aprenentatge</strong> (de P-3 a 6è) i els <strong>espais d&apos;aprenentatge</strong>, on l&apos;alumne és el <strong>protagonista</strong> del seu procés educatiu.  
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Treballem amb <strong>metodologies actives</strong>, <strong>petites investigacions</strong> i <strong>centres d&apos;interès</strong> que connecten amb les necessitats i curiositats dels alumnes.
            </p>
          </div>
        </div>
      </section>

      {/* Característiques principals */}
      <section style={{ width: '100%', padding:   '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:   '1100px', margin:  '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Característiques de l&apos;etapa
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:   'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎨
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ambients d&apos;Aprenentatge
              </h3>
              <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Espais organitzats on l&apos;aprenentatge sorgeix de forma espontània, fent que l&apos;alumne sigui protagonista. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height:  '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom:  '24px', fontSize: '2rem' }}>
                🔍
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Petites Investigacions
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Projectes d&apos;investigació que parteixen de la curiositat i impulsen el treball globalitzat.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display:  'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                📚
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Foment de la Lectura
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize:   '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Temps diari dedicat a la lectura (15: 00-15:30h) per promoure l&apos;hàbit lector i el gust pels llibres.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background:   'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:   '2rem' }}>
                🌳
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Sortides a la Natura
              </h3>
              <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Sortides regulars a espais naturals per gaudir, jugar i experimentar amb el medi ambient.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                🎭
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Taller Millet
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Desenvolupament cognitiu, emocional i cinètic a través del cos, l&apos;art i el medi ambient.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:   'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:   '2rem' }}>
                ❤️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:   '#6D7E4F', margin: '0 0 16px' }}>
                Treball Emocional
              </h3>
              <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Importància del treball emocional i en equip per al desenvolupament integral dels alumnes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Organització per cicles */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:   '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Organització per Cicles
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🌱</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Cicle Inicial
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1.  1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px' }}>
                1r i 2n (6-8 anys)
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin:   0 }}>
                Consolidació de la lectoescriptura i iniciació a les matemàtiques amb ambients d&apos;aprenentatge.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom:   '16px' }}>🌿</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Cicle Mitjà
              </h3>
              <p style={{ fontFamily:  'Montserrat', fontSize:   '1.1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px' }}>
                3r i 4t (8-10 anys)
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize:   '1rem', lineHeight:  1.8, color: '#555', margin:  0 }}>
                Aprofundiment en competències bàsiques i desenvolupament de l&apos;autonomia amb espais d&apos;aprenentatge.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:   '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom:  '16px' }}>🌳</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:   '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:   '0 0 12px' }}>
                Cicle Superior
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize:   '1.1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px' }}>
                5è i 6è (10-12 anys)
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Consolidació de competències i preparació per a l&apos;etapa de secundària amb petites investigacions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Navegació interna */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:   '2rem', fontWeight:  700, color: '#6D7E4F', textAlign:  'center', margin: '0 0 48px' }}>
            Descobreix més sobre Educació Primària
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <Link href="/etapes/primaria/metodologies" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius:  '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📚</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Metodologies i Projectes
                </h3>
                <p style={{ fontFamily:  'Open Sans', fontSize:   '1rem', margin: 0, opacity: 0.9 }}>
                  Descobreix com treballem a primària
                </p>
              </div>
            </Link>

            <Link href="/etapes/primaria/competencies" style={{ textDecoration:   'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(139,195,74,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.  transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:   '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Competències Bàsiques
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', margin: 0, opacity: 0.9 }}>
                  Les 8 competències que desenvolupem
                </p>
              </div>
            </Link>

            <Link href="/etapes/primaria/avaluacio" style={{ textDecoration:   'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 32px', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer', transition:  'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style. transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Avaluació i Seguiment
                </h3>
                <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', margin: 0, opacity: 0.9 }}>
                  Com avaluem el progrés dels alumnes
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

     
    </>
  );
}