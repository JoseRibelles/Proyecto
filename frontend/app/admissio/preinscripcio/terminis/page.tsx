'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function CalendariTerminis() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=400&fit=crop)',
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
            <Link href="/admissio" style={{ color: 'white', textDecoration: 'none' }}>Admissió i secretaria</Link>
            <span> / </span>
            <Link href="/admissio/preinscripcio" style={{ color: 'white', textDecoration: 'none' }}>Preinscripció i matrícula</Link>
            <span> / </span>
            <span>Calendari i terminis</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Calendari i Terminis
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Dates clau del procés de preinscripció i matrícula 2025-2026
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Calendari del procés de preinscripció 2025-2026
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            El procés de preinscripció i matrícula segueix un calendari oficial establert pel Departament d'Educació. És important respectar les dates per garantir la correcta tramitació de la sol·licitud.
          </p>
        </div>
      </section>

      {/* Timeline de preinscripció */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 56px' }}>
            📅 Preinscripció
          </h2>

          {/* Jornades de portes obertes */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '180px', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F' }}>Març</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888' }}>Dates a concretar</div>
            </div>
            <div style={{ position: 'relative', paddingTop: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#6D7E4F', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #6D7E4F' }}></div>
              <div style={{ position: 'absolute', left: '11px', top: '32px', bottom: '-48px', width: '2px', background: 'linear-gradient(to bottom, #6D7E4F, #8a9d65)' }}></div>
            </div>
            <div style={{ flex: 1, background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                Jornades de Portes Obertes
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Sessions informatives per a les famílies interessades. Consulta les dates concretes a la web del centre o contacta amb secretaria.
              </p>
            </div>
          </div>

          {/* Presentació sol·licituds */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '180px', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F' }}>1-15 Març</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888' }}>Aproximadament</div>
            </div>
            <div style={{ position: 'relative', paddingTop: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#6D7E4F', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #6D7E4F' }}></div>
              <div style={{ position: 'absolute', left: '11px', top: '32px', bottom: '-48px', width: '2px', background: 'linear-gradient(to bottom, #6D7E4F, #8a9d65)' }}></div>
            </div>
            <div style={{ flex: 1, background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Període de presentació de sol·licituds ⭐
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Presentació <strong>telemàtica</strong> de les sol·licituds de preinscripció a través del portal del Departament d'Educació. És el període més important del procés.
              </p>
            </div>
          </div>

          {/* Llistes provisionals */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '180px', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F' }}>Finals de Març</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888' }}>A confirmar</div>
            </div>
            <div style={{ position: 'relative', paddingTop: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#6D7E4F', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #6D7E4F' }}></div>
              <div style={{ position: 'absolute', left: '11px', top: '32px', bottom: '-48px', width: '2px', background: 'linear-gradient(to bottom, #6D7E4F, #8a9d65)' }}></div>
            </div>
            <div style={{ flex: 1, background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                Publicació de llistes provisionals
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Llistes d'alumnat admès i no admès amb caràcter provisional. Es publiquen al tauler del centre i a la web del Departament.
              </p>
            </div>
          </div>

          {/* Reclamacions */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '180px', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F' }}>Primers dies d'Abril</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888' }}>3-5 dies hàbils</div>
            </div>
            <div style={{ position: 'relative', paddingTop: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#6D7E4F', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #6D7E4F' }}></div>
              <div style={{ position: 'absolute', left: '11px', top: '32px', bottom: '-48px', width: '2px', background: 'linear-gradient(to bottom, #6D7E4F, #8a9d65)' }}></div>
            </div>
            <div style={{ flex: 1, background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                Període de reclamacions
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Les famílies poden presentar reclamacions davant les llistes provisionals si consideren que hi ha errors en la baremació.
              </p>
            </div>
          </div>

          {/* Llistes definitives */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '180px', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F' }}>Mitjans d'Abril</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888' }}>A confirmar</div>
            </div>
            <div style={{ position: 'relative', paddingTop: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#6D7E4F', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #6D7E4F' }}></div>
            </div>
            <div style={{ flex: 1, background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                Publicació de llistes definitives
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Llistes definitives d'alumnat admès i no admès. Un cop publicades, cal procedir a la matrícula en el període establert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline de matrícula */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 56px' }}>
            📝 Matrícula
          </h2>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '180px', textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F' }}>Juny</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888' }}>Dates a confirmar</div>
            </div>
            <div style={{ position: 'relative', paddingTop: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#6D7E4F', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #6D7E4F' }}></div>
            </div>
            <div style={{ flex: 1, background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '40px', borderRadius: '12px', border: '2px solid #6D7E4F' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Període de matrícula
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#555', marginBottom: '16px' }}>
                Formalització de la matrícula de l'alumnat admès. Presentació <strong>presencial</strong> de documentació a la secretaria del centre.
              </p>
              <div style={{ background: 'white', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>Horari d'atenció:</div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#333' }}>De 9:00 a 13:00h (dilluns a divendres)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avís important */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: '#fef3c7', borderLeft: '6px solid #f59e0b', padding: '32px', borderRadius: '12px' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#92400e', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem' }}>⚠️</span>
              Important
            </h3>
            <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#78350f', margin: 0, paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>Les dates exactes poden <strong>variar cada any</strong> segons les instruccions del Departament d'Educació</li>
              <li style={{ marginBottom: '12px' }}>Consulta sempre la <strong>web oficial del Departament d'Educació</strong> per a les dates actualitzades del curs actual</li>
              <li style={{ marginBottom: '12px' }}><strong>No presentar la matrícula</strong> en el termini establert implica la <strong>pèrdua de la plaça</strong> adjudicada</li>
              <li>És responsabilitat de les famílies estar atentes a les publicacions de llistes i als terminis establerts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Més informació */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', border: '2px solid #6D7E4F' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
              📞 Més informació
            </h2>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: '0 0 32px' }}>
              Per a qualsevol dubte sobre dates o procediments, contacta amb nosaltres
            </p>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Secretaria</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>933 913 351</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Correu electrònic</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>a8076947@xtec.cat</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Horari</div>
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
              Ja coneixes les dates?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Prepara la documentació necessària per al procés
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio/preinscripcio/formularis" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Formularis i documentació
              </Link>
              <Link href="/admissio/preinscripcio/info" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Informació general
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}