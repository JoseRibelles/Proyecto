'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ProjectesDestacats() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
     

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex:  1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/lescola" style={{ color: 'white', textDecoration: 'none' }}>L&apos;Escola</Link>
            <span> / </span>
            <span>Projectes Destacats</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Projectes Destacats
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Innovació, creativitat i compromís amb la comunitat
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Els nostres projectes destaquen per la seva <strong>innovació pedagògica</strong>, la <strong>implicació de les famílies</strong> i el <strong>compromís amb la comunitat</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Projecte 1 - Sostenibilitat */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '60px 40px', borderRadius: '16px', color: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize: '5rem' }}>🌱</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Projecte Sostenibilitat i Medi Ambient
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', lineHeight: 1.8, margin: 0 }}>
                  Programa integral que treballa els <strong>Objectius de Desenvolupament Sostenible (ODS)</strong> de l&apos;Agenda 2030, amb activitats pràctiques com horts escolars, reciclatge, estalvi energètic i conscienciació ambiental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projecte 2 - Lectura */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin:  '0 auto' }}>
          <div style={{ background: '#f9f9f9', padding: '60px 40px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize: '5rem' }}>📖</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Pla Lector i Biblioteca Escolar
                </h2>
                <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Foment de la lectura des d&apos;infantil fins a primària amb activitats com encontres amb autors, clubs de lectura, biblioteques d&apos;aula i participació en concursos literaris.  La biblioteca escolar és un espai viu i dinàmic que promou l&apos;hàbit lector i la creativitat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projecte 3 - Arts */}
      <section style={{ width: '100%', padding: '80px 20px', background:  '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '60px 40px', borderRadius: '16px', color: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize:  '5rem' }}>🎨</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Projecte d&apos;Arts i Creativitat
                </h2>
                <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                  Integració de les arts plàstiques, la música i l&apos;expressió corporal en el currículum escolar. Tallers de pintura, escultura, dansa i teatre que permeten als alumnes desenvolupar la seva creativitat i expressió personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projecte 4 - Digital */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: '#f9f9f9', padding: '60px 40px', borderRadius:  '16px', border: '2px solid #e8f0dc' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize: '5rem' }}>💻</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Competència Digital i Robòtica
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Introducció de la programació i la robòtica educativa des d&apos;edats primerenques. Ús responsable i creatiu de les TIC amb projectes de realitat augmentada, programació amb Scratch, i tallers de robòtica amb LEGO Education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projecte 5 - Comunitat */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '60px 40px', borderRadius: '16px', color: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns:  '1fr 3fr', gap: '40px', alignItems:  'center' }}>
              <div style={{ textAlign: 'center', fontSize: '5rem' }}>🤝</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Projecte de Comunitat i Participació Familiar
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                  Implicació activa de les famílies en la vida escolar a través de tallers, comissions, jornades de portes obertes i activitats compartides. Creació d&apos;una comunitat educativa cohesionada i participativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projecte 6 - Plurilingüisme */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: '#f9f9f9', padding: '60px 40px', borderRadius:  '16px', border: '2px solid #e8f0dc' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize: '5rem' }}>🌍</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                  Projecte Plurilingüisme i Obertura al Món
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Foment de l&apos;aprenentatge d&apos;idiomes (català, castellà, anglès) amb metodologies comunicatives i projectes d&apos;intercanvi cultural. Participació en programes europeus i activitats internacionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin:  '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign:  'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix els nostres premis
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix els reconeixements que avalen la nostra trajectòria educativa
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/premis/academics" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Premis Acadèmics
              </Link>
              <Link href="/lescola/projecte-educatiu/metodologia" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}