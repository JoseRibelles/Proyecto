'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ActivitatsSecundaria() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=400&fit=crop)',
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
            <Link href="/etapes/secundaria" style={{ color: 'white', textDecoration: 'none' }}>Educació Secundària</Link>
            <span> / </span>
            <span>Activitats Complementàries</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Activitats Complementàries
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Secundària
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Les <strong>activitats complementàries i extraescolars</strong> de l&apos;Institut Escola Lluís Millet complementen el projecte educatiu innovador del centre, oferint experiències d&apos;<strong>aprenentatge vivencial</strong>, <strong>convivència</strong> i <strong>desenvolupament integral</strong>.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Des del barri de <strong>Les Oliveres</strong> a Santa Coloma de Gramenet, el centre aposta per connectar l&apos;educació amb l&apos;entorn, la natura i la cultura. 
            </p>
          </div>
        </div>
      </section>

      {/* Serveis del centre */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Serveis i Activitats del Centre
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🍽️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Menjador Propi
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Servei de menjador amb cuina pròpia que promou hàbits alimentaris saludables i educació nutricional.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems:  'center', justifyContent:  'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ⚽
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Activitats Extraescolars
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Amplia oferta d&apos;activitats fora de l&apos;horari lectiu:  esport, música, art, tecnologia i molt més.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                👨‍👩‍👧
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Espai Familiar (AFA)
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Espai gestionat per l&apos;Associació de Famílies per a activitats, reunions i participació de les famílies.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ☀️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Acollida Matinal
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Servei d&apos;acollida abans de l&apos;inici de les classes per facilitar la conciliació familiar. 
              </p>
            </div>

            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems:  'center', justifyContent:  'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎨
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Tallers del Migdia
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Espai de tallers durant l&apos;hora del migdia amb propostes lúdiques i educatives.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                📚
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Biblioteca
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Biblioteca escolar amb fons actualitzat i espai de lectura per a tots els alumnes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sortides i visites */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Sortides i Activitats a l&apos;Entorn
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            {[
              {
                icon: '🌳',
                title: 'Sortides a la Natura',
                description:  'Sortides regulars a espais naturals de l\'entorn per gaudir, jugar i experimentar amb la natura.  Aprenentatge vivencial i connexió amb el medi ambient.'
              },
              {
                icon: '🏛️',
                title: 'Patrimoni de Santa Coloma',
                description:  'Descoberta del patrimoni local i cultural de Santa Coloma de Gramenet i el Barcelonès Nord.'
              },
              {
                icon: '🎭',
                title: 'Visites Culturals',
                description: 'Sortides a museus, teatres, exposicions i espais culturals de Barcelona i la comarca.'
              },
              {
                icon: '🔬',
                title: 'Centres Científics',
                description: 'Visites a centres de ciències, laboratoris i espais d\'experimentació científica.'
              },
              {
                icon: '🌍',
                title: 'Entorn Urbà',
                description: 'Descoberta de l\'entorn del barri de Les Oliveres i connexió amb els recursos locals.'
              },
              {
                icon: '🚶',
                title: 'Itineraris Didàctics',
                description: 'Rutes guiades per aprendre sobre història, natura, arquitectura i cultura del territori.'
              }
            ]. map((sortida, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '3rem', flexShrink: 0 }}>{sortida.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {sortida.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                      {sortida.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Colònies i estades */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Colònies i Estades
          </h2>
          <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Experiències d&apos;estada que fomenten l&apos;autonomia, la convivència i l&apos;aprenentatge vivencial
          </p>

          <div style={{ display: 'grid', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🏕️</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Colònies Escolars
                  </h3>
                  <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Estades de diversos dies en cases de colònies per reforçar els vincles del grup, desenvolupar l&apos;autonomia i viure experiències d&apos;aprenentatge en entorns naturals.  Activitats cooperatives, tallers i dinàmiques de grup.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🎒</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Estades Temàtiques
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Colònies amb temàtiques específiques:  esports d&apos;aventura, medi ambient, patrimoni cultural o immersió lingüística en català i anglès.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display:  'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🌍</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Viatges Culturals
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Viatges a ciutats d&apos;interès històric i cultural, així com estades d&apos;immersió lingüística per practicar idiomes en contextos reals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Celebracions */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Celebracions i Actes Especials
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '24px' }}>
            
            {[
              {
                icon: '🎃',
                title: 'Castanyada',
                description: 'Celebració tradicional catalana amb activitats, castanyes i panellets.'
              },
              {
                icon: '🎄',
                title: 'Nadal',
                description: 'Activitats nadalenques, concert de Nadal i celebracions amb les famílies.'
              },
              {
                icon: '🎭',
                title: 'Carnaval',
                description: 'Desfilada de disfresses, música i festa amb tota la comunitat educativa.'
              },
              {
                icon: '📚',
                title: 'Sant Jordi',
                description:  'Celebració del Dia del Llibre amb intercanvi de roses i llibres, activitats literàries.'
              },
              {
                icon: '🎓',
                title: 'Acte de Graduació',
                description: 'Cerimònia de comiat per als alumnes de 6è de Primària i 4t d\'ESO.'
              },
              {
                icon: '🏆',
                title: 'Jornades Culturals',
                description: 'Jornades temàtiques, fires de ciències, exposicions i competicions esportives.'
              }
            ].map((celebracio, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display:  'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{celebracio. icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.15rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                      {celebracio.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#555', margin:  0 }}>
                      {celebracio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Activitats extraescolars */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily:  'Montserrat', fontSize: '2rem', fontWeight:  700, color: '#6D7E4F', textAlign:  'center', margin: '0 0 24px' }}>
            Activitats Extraescolars
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Oferta d&apos;activitats fora de l&apos;horari lectiu per desenvolupar talents i interessos diversos
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '🎸', name: 'Música' },
              { icon: '🎨', name: 'Arts Plàstiques' },
              { icon:  '🎭', name: 'Teatre i Expressió' },
              { icon:  '💃', name: 'Dansa' },
              { icon: '🤖', name: 'Robòtica' },
              { icon: '💻', name: 'Programació' },
              { icon:  '♟️', name: 'Escacs' },
              { icon: '⚽', name: 'Futbol' },
              { icon: '🏀', name: 'Bàsquet' },
              { icon: '🥋', name: 'Arts Marcials' },
              { icon: '🎬', name: 'Cinema i Audiovisuals' },
              { icon: '📚', name: 'Reforç Escolar' }
            ].map((taller, index) => (
              <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{taller.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {taller.name}
                </h4>
              </div>
            ))}

          </div>

          <div style={{ marginTop: '40px', textAlign: 'center', padding: '32px', background: 'white', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
              💡 <strong>Informació actualitzada:</strong> Consulta la programació completa d&apos;activitats extraescolars cada curs escolar.  Les activitats poden variar segons la demanda i disponibilitat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Vols més informació? 
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Contacta amb el centre per conèixer el calendari actualitzat d&apos;activitats
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Contacta&apos;ns
              </Link>
              <Link href="/etapes/eso" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Torna a Secundària
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}