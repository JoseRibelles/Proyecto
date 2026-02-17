'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ProjectesInfantil() {
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
            <Link href="/etapes/infantil" style={{ color: 'white', textDecoration: 'none' }}>Educació Infantil</Link>
            <span> / </span>
            <span>Projectes i Activitats</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Projectes i Activitats
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Infantil
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              A <strong>Educació Infantil</strong> treballem a través dels <strong>ambients d&apos;aprenentatge</strong>, que són espais organitzats on l&apos;aprenentatge sorgeix de forma <strong>espontània</strong> i l&apos;infant és el <strong>protagonista</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Ambients d'aprenentatge */}
      <section style={{ width: '100%', padding: '80px 20px', background:  '#f9f9f9' }}>
        <div style={{ maxWidth:   '1100px', margin:  '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:   '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Ambients d&apos;Aprenentatge
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            Espais organitzats amb materials i propostes que permeten als infants explorar, experimentar i aprendre de forma autònoma
          </p>

          <div style={{ display: 'grid', gridTemplateColumns:   'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎨
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ambient d&apos;Art i Creativitat
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Pintura, modelatge, collage i altres tècniques plàstiques per desenvolupar la creativitat i l&apos;expressió artística.  
              </p>
            </div>

            <div style={{ background: 'white', padding:   '40px 32px', borderRadius: '16px', border:   '2px solid #e8f0dc', boxShadow:   '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems:   'center', justifyContent:   'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🏗️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:   '#6D7E4F', margin: '0 0 16px' }}>
                Ambient de Construccions
              </h3>
              <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Peces, jocs d&apos;encaixos i construccions que desenvolupen la psicomotricitat fina i el pensament espacial. 
              </p>
            </div>

            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display:   'flex', alignItems:  'center', justifyContent:  'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                📚
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ambient de Lectura
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Biblioteca d&apos;aula, contes i activitats que fomenten el gust per la lectura i el llenguatge.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:   '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display:  'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎭
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:   '#6D7E4F', margin: '0 0 16px' }}>
                Ambient Simbòlic
              </h3>
              <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Joc simbòlic, disfresses i dramatitzacions que permeten la representació de la realitat.  
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:   '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔢
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Ambient Lògic-Matemàtic
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Jocs de lògica, classificació, seriació i raonament que desenvolupen el pensament matemàtic.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background:   'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:   '2rem' }}>
                🔬
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ambient de Descoberta
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Experimentació, observació de la natura i manipulació de materials per descobrir el món científic.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Taller Millet */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:   '2rem', fontWeight:  700, color: '#6D7E4F', textAlign:  'center', margin: '0 0 48px' }}>
            Taller Millet
          </h2>

          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🎭
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Taller Millet a Infantil
                </h3>
                <p style={{ fontFamily:  'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Espai dedicat al desenvolupament <strong>cognitiu</strong>, <strong>emocional</strong> i <strong>cinètic</strong> dels infants a través d&apos;activitats relacionades amb el <strong>cos</strong>, l&apos;<strong>art</strong> i el <strong>medi ambient</strong>.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🤸</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Psicomotricitat
              </h3>
              <p style={{ fontFamily:   'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:   0 }}>
                Desenvolupament motor, coordinació, equilibri i coneixement del propi cos. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize:  '3rem', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:   '#6D7E4F', margin: '0 0 16px' }}>
                Expressió Artística
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize:   '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Creació artística amb diferents materials i tècniques per desenvolupar la creativitat. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize:   '3rem', marginBottom:  '16px' }}>🌱</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Descoberta del Medi
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize:   '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Connexió amb la natura i consciència ambiental a través de l&apos;exploració. 
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sortides i natura */}
      <section style={{ width: '100%', padding:   '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Sortides a la Natura
          </h2>
          <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Sortides regulars a espais naturals per gaudir, jugar i experimentar amb el medi ambient
          </p>

          <div style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🌳</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Connexió amb la Natura
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Sortides regulars a parcs, boscos i espais naturals de l&apos;entorn de Santa Coloma de Gramenet per descobrir la flora, la fauna i els canvis estacionals.  Aprenentatge vivencial i respecte pel medi ambient.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Activitats complementàries */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin:  '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin:  '0 0 48px' }}>
            Activitats Complementàries
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            {[
              {
                icon: '🎵',
                title: 'Música',
                description: 'Audicions, cançons, danses i introducció als sons i ritmes.'
              },
              {
                icon: '🗣️',
                title: 'Anglès',
                description: 'Introducció a l\'anglès de forma lúdica amb cançons, jocs i contes.'
              },
              {
                icon: '🎉',
                title: 'Festes i Celebracions',
                description:   'Castanyada, Nadal, Carnaval, Sant Jordi i Festa de Fi de Curs amb participació de les famílies.'
              },
              {
                icon: '🥕',
                title: 'Esmorzar Saludable',
                description:  'Promoció d\'hàbits alimentaris saludables amb fruita i aliments nutritius.'
              }
            ].map((activitat, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap:   '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{activitat.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize:   '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 12px' }}>
                      {activitat.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:   0 }}>
                      {activitat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius:   '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Coneix més sobre Infantil
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Descobreix els objectius i l&apos;equip docent
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/infantil/objectius" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius:   '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Objectius d&apos;Etapa
              </Link>
              <Link href="/etapes/infantil/equip" style={{ fontFamily:   'Montserrat', fontSize: '1rem', fontWeight:  600, padding: '14px 32px', borderRadius:  '8px', textDecoration:  'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Equip Docent
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}