'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function FormularisDocumentacio() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=400&fit=crop)',
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
            <Link href="/admissio-i-secretaria" style={{ color: 'white', textDecoration: 'none' }}>Admissió i secretaria</Link>
            <span> / </span>
            <Link href="/admissio-i-secretaria/preinscripcio-i-matricula" style={{ color: 'white', textDecoration: 'none' }}>Preinscripció i matrícula</Link>
            <span> / </span>
            <span>Formularis i documentació</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Formularis i Documentació
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Tota la documentació necessària per al procés
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Prepara la teva documentació
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            Per realitzar correctament el procés de preinscripció i matrícula, és necessari disposar de certa documentació. A continuació trobaràs tot el que necessites saber.
          </p>
        </div>
      </section>

      {/* Documentació per a la preinscripció */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            📋 Documentació necessària per a la preinscripció
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Per realitzar la sol·licitud de preinscripció de forma telemàtica, cal disposar de la següent documentació <strong>digitalitzada</strong>:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {/* DNI/NIE */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📄</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                DNI/NIE de l'alumne/a
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Document d'identitat vigent <strong>(per les dues cares)</strong>. És imprescindible que sigui llegible i estigui en vigor.
              </p>
            </div>

            {/* Llibre de família */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👨‍👩‍👧</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Llibre de família
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Totes les pàgines on apareguin dades dels progenitors i de l'alumne/a. Cal digitalitzar totes les pàgines completes.
              </p>
            </div>

            {/* Empadronament */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏠</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Certificat d'empadronament
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                <strong>Només si l'adreça del DNI no coincideix</strong> amb la del domicili actual. Ha de tenir una data recent (màxim 3 mesos).
              </p>
            </div>

            {/* Documents complementaris */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📝</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Documents acreditatius
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Segons correspongui: certificat de <strong>família nombrosa, monoparental, discapacitat</strong>, o altres criteris de baremació que apliquin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentació per a la matrícula */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            📝 Documentació necessària per a la matrícula
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Un cop admès l'alumne/a, cal formalitzar la matrícula <strong>presencialment</strong> a la secretaria del centre presentant:
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Checklist */}
            <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Imprès de matrícula</strong> emplenat i signat (es proporciona al centre)
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>4 fotografies mida carnet</strong> de l'alumne/a
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Fotocòpia del DNI/NIE</strong> de l'alumne/a
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Fotocòpia del llibre de família</strong> (pàgines dels pares i de l'alumne/a)
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Fotocòpia de la targeta sanitària</strong> de l'alumne/a
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Certificat de vacunacions</strong> (per a infantil i primària)
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Autorització d'ús d'imatge</strong> (opcional - es proporciona al centre)
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'white', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.5rem', color: '#6D7E4F', fontWeight: 700, flexShrink: 0 }}>✓</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>
                    <strong>Declaració responsable de dades</strong> (es proporciona al centre)
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enllaços útils */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🔗 Enllaços útils
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Portal preinscripció */}
            <a href="https://educacio.gencat.cat/ca/arees-actuacio/families/informacio-periode-preinscripcio-matriculacio/" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ 
                 background: 'white', 
                 padding: '32px', 
                 borderRadius: '16px', 
                 boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                 textDecoration: 'none',
                 transition: 'all 0.3s ease',
                 border: '2px solid transparent',
                 display: 'block'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.borderColor = '#6D7E4F';
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 24px rgba(109,126,79,0.15)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.borderColor = 'transparent';
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
               }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🌐</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px', textAlign: 'center' }}>
                Portal de preinscripció
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#666', margin: 0, textAlign: 'center' }}>
                Departament d'Educació de la Generalitat
              </p>
            </a>

            {/* Ajuntament */}
            <a href="https://www.gramenet.cat/ajuntament/arees-municipals/educacio/" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ 
                 background: 'white', 
                 padding: '32px', 
                 borderRadius: '16px', 
                 boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                 textDecoration: 'none',
                 transition: 'all 0.3s ease',
                 border: '2px solid transparent',
                 display: 'block'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.borderColor = '#6D7E4F';
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 24px rgba(109,126,79,0.15)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.borderColor = 'transparent';
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
               }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🏛️</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px', textAlign: 'center' }}>
                Informació municipal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#666', margin: 0, textAlign: 'center' }}>
                Ajuntament de Santa Coloma de Gramenet
              </p>
            </a>

            {/* Contacte */}
            <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>📧</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px', textAlign: 'center' }}>
                Contacte secretaria
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0, textAlign: 'center' }}>
                a8076947@xtec.cat<br/>
                933 913 351
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consells útils */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', borderLeft: '6px solid #0284c7', padding: '40px', borderRadius: '12px' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#075985', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2.5rem' }}>💡</span>
              Consells útils
            </h3>
            <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.9, color: '#0c4a6e', margin: 0, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '14px' }}>
                <strong>Digitalitza tots els documents en format PDF</strong> abans d'iniciar el tràmit telemàtic
              </li>
              <li style={{ marginBottom: '14px' }}>
                Assegura't que les imatges són <strong>llegibles i estan completes</strong> (sense talls ni parts il·legibles)
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>Guarda una còpia</strong> de la sol·licitud presentada i del justificant de registre
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>Anota el número de registre</strong> de la sol·licitud per a futures consultes
              </li>
              <li>
                Consulta regularment les publicacions de llistes al <strong>tauler del centre</strong> i a la web del Departament
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA navegació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Ja tens tota la informació?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Revisa el calendari i la informació general del procés
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio-i-secretaria/preinscripcio-i-matricula/informacio-general" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                ← Informació general
              </Link>
              <Link href="/admissio-i-secretaria/preinscripcio-i-matricula/calendari-i-terminis" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                ← Calendari i terminis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}