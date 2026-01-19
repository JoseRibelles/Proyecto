'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ReconeixementsInstitucionals() {
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
      <Header site={defaultSite} />
      <Nav />

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=400&fit=crop)',
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
            <Link href="/lescola" style={{ color: 'white', textDecoration: 'none' }}>L&apos;Escola</Link>
            <span> / </span>
            <span>Reconeixements</span>
          </div>
          <h1 style={{ fontFamily:  'Montserrat', fontSize: '3rem', fontWeight:  700, color: 'white', margin: '0 0 16px', textShadow:  '0 2px 8px rgba(0,0,0,0.3)' }}>
            Reconeixements Institucionals
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            La nostra trajectòria d&apos;excel·lència educativa
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin:  '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign:  'center' }}>
              L&apos;<strong>Institut Escola Lluís Millet</strong> ha estat reconegut per diverses institucions públiques pel seu <strong>compromís amb la innovació pedagògica</strong>, la <strong>inclusió</strong> i l&apos;<strong>excel·lència educativa</strong>. 
            </p>
          </div>
        </div>
      </section>

      {/* Timeline de Reconeixements */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin:  '0 0 60px' }}>
            Timeline de reconeixements
          </h2>

          <div style={{ position: 'relative', paddingLeft: '60px', borderLeft: '4px solid #8BC34A' }}>
            
            {/* 2022 */}
            <div style={{ marginBottom: '60px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '-66px',
                top: '0',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#6D7E4F',
                border: '4px solid #8BC34A'
              }} />
              <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                  2022 - Candidatura Premi Ensenyament del Cercle d&apos;Economia
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                  Reconeixement a la modalitat d&apos;infantil-primària per la &quot;capacitat de millora i transformació&quot; del centre educatiu.  El jurat va destacar el treball globalitzat, la inclusió i la innovació pedagògica.
                </p>
              </div>
            </div>

            {/* 2019 */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '-66px',
                top: '0',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#6D7E4F',
                border:  '4px solid #8BC34A'
              }} />
              <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  2019 - Premi Baldiri Reixach (Consell Comarcal del Baix Llobregat)
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.7, color: '#666', margin:  0 }}>
                  Reconeixement que premia la trajectòria educativa i el compromís amb la innovació pedagògica de l&apos;escola. Destaca l&apos;esforç per impulsar metodologies actives, l&apos;atenció a la diversitat i la creació d&apos;un projecte educatiu transformador.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Valors reconeguts */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Valors que ens defineixen
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔄
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Transformació Educativa
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Capacitat de millora contínua i adaptació a les necessitats de l&apos;alumnat i les famílies. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🚀
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Innovació Pedagògica
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Implementació de metodologies actives i treball globalitzat que posen l&apos;alumnat al centre. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                👥
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Inclusió i Diversitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Atenció personalitzada que garanteix l&apos;èxit educatiu de tot l&apos;alumnat. 
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Coneix els nostres projectes destacats
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Descobreix les iniciatives que han fet possible aquests reconeixements
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/premis/projectes" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Projectes Destacats
              </Link>
              <Link href="/lescola/premis/academics" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Premis Acadèmics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}