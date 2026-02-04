'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function InformacioGeneral() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=400&fit=crop)',
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
            <span>Informació general</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Informació General
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Tot el que necessites saber sobre la preinscripció i matrícula
          </p>
        </div>
      </section>

      {/* Què és la preinscripció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=700&fit=crop" alt="Preinscripció" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Un procés senzill i transparent
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                Què és la preinscripció?
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                La preinscripció és el procés pel qual les famílies sol·liciten plaça per al seu fill o filla en un centre educatiu públic o concertat. Aquest procés es realitza anualment i està regulat pel <strong>Departament d'Educació de la Generalitat de Catalunya</strong>.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                El procés de preinscripció es realitza majoritàriament de forma <strong>telemàtica</strong> a través del portal oficial del Departament d'Educació, facilitant així la tramitació per a totes les famílies.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Important
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  És fonamental respectar les dates establertes pel calendari oficial per garantir la correcta tramitació de la sol·licitud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A qui s'adreça */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            A qui s'adreça?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🧸
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Infantil P3
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Nens i nenes nascuts l'any en curs que <strong style={{ color: '#6D7E4F' }}>compleixin 3 anys</strong> durant l'any escolar.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                📚
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Primària 1r
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Alumnat que hagi cursat <strong style={{ color: '#6D7E4F' }}>P5</strong> o compleixi <strong style={{ color: '#6D7E4F' }}>6 anys</strong> durant l'any escolar.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎓
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Secundària 1r ESO
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Alumnat que hagi cursat <strong style={{ color: '#6D7E4F' }}>6è de primària</strong> i passi a secundària.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Com es realitza */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Com es realitza el procés?
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', background: '#6D7E4F', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0 }}>1</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333', margin: '0 0 8px' }}>Accedir al portal de preinscripció</h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.6, color: '#666', margin: 0 }}>Entra al portal oficial del Departament d'Educació de la Generalitat de Catalunya.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', background: '#6D7E4F', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0 }}>2</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333', margin: '0 0 8px' }}>Emplenar el formulari de sol·licitud</h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.6, color: '#666', margin: 0 }}>Completa totes les dades sol·licitades amb la informació de l'alumne/a i la família.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', background: '#6D7E4F', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0 }}>3</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333', margin: '0 0 8px' }}>Adjuntar la documentació requerida</h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.6, color: '#666', margin: 0 }}>Carrega els documents digitalitzats necessaris (DNI, llibre de família, empadronament, etc.).</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', background: '#6D7E4F', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0 }}>4</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333', margin: '0 0 8px' }}>Presentar la sol·licitud</h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.6, color: '#666', margin: 0 }}>Envia la sol·licitud dins el termini establert i guarda el justificant de presentació.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Criteris de baremació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Criteris de baremació
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '48px' }}>
            En cas que hi hagi més sol·licituds que places disponibles, s'apliquen els següents criteris:
          </p>

          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#6D7E4F', color: 'white' }}>
                  <th style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, padding: '20px', textAlign: 'left' }}>Criteri</th>
                  <th style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, padding: '20px', textAlign: 'center', width: '150px' }}>Puntuació</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e8f0dc' }}>
                  <td style={{ fontFamily: 'Open Sans', fontSize: '1rem', padding: '20px', color: '#333' }}>Germà/na al centre</td>
                  <td style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, padding: '20px', textAlign: 'center', color: '#6D7E4F' }}>40 punts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e8f0dc', background: '#f9fdf5' }}>
                  <td style={{ fontFamily: 'Open Sans', fontSize: '1rem', padding: '20px', color: '#333' }}>Domicili familiar o laboral</td>
                  <td style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, padding: '20px', textAlign: 'center', color: '#6D7E4F' }}>30 punts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e8f0dc' }}>
                  <td style={{ fontFamily: 'Open Sans', fontSize: '1rem', padding: '20px', color: '#333' }}>Família nombrosa o monoparental</td>
                  <td style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, padding: '20px', textAlign: 'center', color: '#6D7E4F' }}>15 punts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e8f0dc', background: '#f9fdf5' }}>
                  <td style={{ fontFamily: 'Open Sans', fontSize: '1rem', padding: '20px', color: '#333' }}>Renda anual familiar</td>
                  <td style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, padding: '20px', textAlign: 'center', color: '#6D7E4F' }}>Fins a 10 punts</td>
                </tr>
                <tr>
                  <td style={{ fontFamily: 'Open Sans', fontSize: '1rem', padding: '20px', color: '#333' }}>Discapacitat de l'alumne/a</td>
                  <td style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, padding: '20px', textAlign: 'center', color: '#6D7E4F' }}>10 punts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contacte */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', border: '2px solid #6D7E4F' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
              Tens dubtes sobre el procés?
            </h2>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: '0 0 32px' }}>
              Contacta amb la nostra secretaria i t'ajudarem
            </p>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Telèfon</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>933 913 351</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Correu electrònic</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>a8076947@xtec.cat</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Horari d'atenció</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>9:00 - 13:00h</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA navegació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Continua informant-te sobre el procés
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Consulta el calendari i la documentació necessària
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio-i-secretaria/preinscripcio-i-matricula/calendari-i-terminis" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Calendari i terminis →
              </Link>
              <Link href="/admissio-i-secretaria/preinscripcio-i-matricula/formularis-i-documentacio" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Formularis i documentació →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}