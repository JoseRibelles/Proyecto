'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function CalendariEscolar() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=400&fit=crop)',
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
            <span>Calendari escolar</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Calendari Escolar
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Organitza el curs amb tota la informació de dates i períodes
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=700&fit=crop" alt="Calendari" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Planifica el curs escolar amb antelació
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                Curs escolar 2025-2026
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                El calendari escolar del curs 2025-2026 està establert pel <strong>Departament d'Educació de la Generalitat de Catalunya</strong> i adaptat a les necessitats del nostre centre educatiu.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                A continuació trobaràs tota la informació necessària sobre l'inici i finalització del curs, els dies festius, les vacances escolars i els períodes lectius, per tal que puguis organitzar-te amb temps.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Important
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  Consulta regularment el calendari actualitzat, ja que poden haver-hi modificacions puntuals comunicades pel centre o per la Generalitat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates clau del curs */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            📅 Dates clau del curs 2025-2026
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {/* Inici del curs */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🎒</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Inici del curs
              </h3>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#333' }}>Setembre 2025</div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#888', marginTop: '4px' }}>Infantil i Primària</div>
              </div>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'center' }}>
                Les dates exactes es comunicaran durant el mes de juliol
              </p>
            </div>

            {/* Final del curs */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🎓</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Final del curs
              </h3>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#333' }}>Juny 2026</div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#888', marginTop: '4px' }}>Infantil i Primària</div>
              </div>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'center' }}>
                Segons el calendari oficial del Departament d'Educació
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Períodes de vacances */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🏖️ Períodes de vacances
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Nadal */}
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎄
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Vacances de Nadal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Del 23 de desembre al 7 de gener (aproximadament). Les dates exactes segueixen el calendari oficial.
              </p>
            </div>

            {/* Setmana Santa */}
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🌸
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Setmana Santa
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Una setmana completa segons el calendari litúrgic (data variable cada any).
              </p>
            </div>

            {/* Estiu */}
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ☀️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Vacances d'estiu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Des de finals de juny fins a principis de setembre (aproximadament 2 mesos i mig).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informació addicional */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            ℹ️ Informació addicional
          </h2>

          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#333', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#6D7E4F' }}>📌</span> Dies no lectius locals
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                A més dels festius oficials, Santa Coloma de Gramenet pot tenir dies no lectius específics (Festa Major, etc.). Es comunicaran amb antelació.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#333', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#6D7E4F' }}>📌</span> Ponts i festius escolars
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                El calendari pot incloure ponts aprovats pel Departament d'Educació. Consulta la secció de dies festius per a més detalls.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#333', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#6D7E4F' }}>📌</span> Jornades intensives
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Durant el mes de juny, s'acostuma a fer jornada intensiva (només matins). Les dates concretes es comunicaran durant el curs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Descàrrega de calendari */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', border: '2px solid #6D7E4F' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📥</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
              Descarrega el calendari complet
            </h2>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: '0 0 32px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              Consulta la versió en PDF del calendari escolar oficial del Departament d'Educació per al curs 2025-2026
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(109,126,79,0.3)' }}>
                📄 Calendari oficial (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA navegació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Consulta més informació sobre el calendari
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora els dies festius i els períodes lectius del curs
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio/calendari/festius" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Dies festius
              </Link>
              <Link href="/admissio/calendarir/festius" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Períodes lectius
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}