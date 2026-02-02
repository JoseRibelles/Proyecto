'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function ActivitatsSortides() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=400&fit=crop)',
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
            <Link href="/vida-escolar" style={{ color:  'white', textDecoration:  'none' }}>Vida Escolar</Link>
            <span> / </span>
            <span>Activitats i Sortides</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Activitats i Sortides
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Aprendre més enllà de l&apos;aula
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Les <strong>activitats i sortides</strong> són una part fonamental del nostre projecte educatiu. Connecten l&apos;aprenentatge amb l&apos;<strong>entorn</strong>, la <strong>natura</strong> i la <strong>cultura</strong>, oferint experiències vivencials que complementen i enriqueixen el treball a l&apos;aula. 
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Des de <strong>sortides regulars a la natura</strong> fins a <strong>colònies</strong> i <strong>visites culturals</strong>, cada activitat està pensada per desenvolupar competències i valors. 
            </p>
          </div>
        </div>
      </section>

      {/* Tipus d'activitats */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Tipus d&apos;Activitats
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            <Link href="/vida-escolar/activitats-sortides/excursions-colonies" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(109,126,79,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>🏕️</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 16px', textAlign: 'center' }}>
                  Excursions i Colònies
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: 0, opacity: 0.9, lineHeight: 1.7, textAlign: 'center' }}>
                  Sortides a la natura, colònies escolars i estades que fomenten l&apos;autonomia i la convivència
                </p>
              </div>
            </Link>

            <Link href="/vida-escolar/activitats-sortides/tallers-activitats" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 16px rgba(139,195,74,0.2)', height: '100%' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>🎨</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 16px', textAlign:  'center' }}>
                  Tallers i Activitats Externes
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: 0, opacity: 0.9, lineHeight: 1.7, textAlign: 'center' }}>
                  Tallers educatius, visites culturals i activitats amb professionals externs
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Objectius */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Objectius de les Activitats
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🌍', title: 'Connexió amb l\'Entorn', desc: 'Descoberta del patrimoni natural i cultural de Santa Coloma i Catalunya' },
              { icon: '🤝', title: 'Convivència', desc: 'Reforçar els vincles del grup i desenvolupar habilitats socials' },
              { icon: '💪', title: 'Autonomia', desc: 'Desenvolupament de la responsabilitat i la independència personal' },
              { icon: '🧠', title: 'Aprenentatge Vivencial', desc: 'Experiències directes que complementen els continguts curriculars' },
              { icon: '🌱', title:  'Consciència Ambiental', desc: 'Respecte i cura del medi ambient i la natura' },
              { icon: '❤️', title: 'Desenvolupament Emocional', desc: 'Gestió emocional i treball en equip' }
            ].map((objectiu, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{objectiu.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {objectiu.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin:  0 }}>
                  {objectiu.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Sortides a la Natura */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Sortides Regulars a la Natura
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            Un dels pilars del nostre projecte educatiu
          </p>

          <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🌳
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Sortides a Espais Naturals
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity:  0.95 }}>
                  De manera <strong>regular</strong>, totes les etapes fan sortides a espais naturals de l&apos;entorn de <strong>Santa Coloma de Gramenet</strong> i el <strong>Barcelonès Nord</strong> per gaudir, jugar i experimentar amb la natura.  Aquest contacte amb el medi natural és fonamental per al desenvolupament integral dels alumnes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informació pràctica */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin:  '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin:  '0 0 48px' }}>
            Informació Pràctica
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            
            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📋</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Autoritzacions
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Les famílies reben informació prèvia de cada sortida i han de signar les autoritzacions corresponents. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💰</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Cost
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Moltes sortides estan incloses en la quota escolar.  Les colònies i activitats amb cost addicional es comuniquen amb antelació.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📅</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Programació
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                El calendari d&apos;activitats s&apos;informa a principi de curs i s&apos;actualitza a través de la web i comunicacions familiars.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🩹</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Seguretat
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Totes les activitats compten amb assegurança i segueixen els protocols de seguretat establerts pel Departament d&apos;Educació.
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
              Descobreix les nostres activitats
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora en detall les excursions, colònies i tallers
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/activitats-sortides/excursions-colonies" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius:  '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Excursions i Colònies
              </Link>
              <Link href="/vida-escolar/activitats-sortides/tallers-activitats" style={{ fontFamily:  'Montserrat', fontSize: '1rem', fontWeight:  600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Tallers i Activitats
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}