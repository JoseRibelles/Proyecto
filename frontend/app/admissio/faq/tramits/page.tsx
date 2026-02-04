'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function TramitsOnline() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop)',
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
            <Link href="/admissio-i-secretaria/faq-i-tramits" style={{ color: 'white', textDecoration: 'none' }}>FAQ i tràmits</Link>
            <span> / </span>
            <span>Tràmits online</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Tràmits Online
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Gestiona els teus tràmits de manera ràpida i segura
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=700&fit=crop" alt="Tràmits" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Gestiona els teus tràmits des de casa
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                Serveis digitals disponibles
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                Per facilitar la gestió administrativa, posem a la teva disposició diversos <strong>tràmits i serveis online</strong> que et permeten estalviar temps i desplaçaments.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                A continuació trobaràs els enllaços als principals serveis digitals de l'Administració educativa i les eines que utilitzem al nostre centre.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Seguretat i privacitat
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  Tots els tràmits online es realitzen a través de plataformes segures de l'Administració amb encriptació de dades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tràmits principals */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🔗 Accés a tràmits i serveis
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            
            {/* Preinscripció i matrícula */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>📝</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Preinscripció i matrícula online
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', marginBottom: '16px' }}>
                    Portal oficial del Departament d'Educació per a la presentació telemàtica de sol·licituds de preinscripció i consulta de llistes.
                  </p>
                  <a href="https://educacio.gencat.cat/ca/arees-actuacio/families/informacio-periode-preinscripcio-matriculacio/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                    Accedir al portal →
                  </a>
                </div>
              </div>
            </div>

            {/* Ajuts i beques */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>💰</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Sol·licitud d'ajuts i beques
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', marginBottom: '16px' }}>
                    Portal per sol·licitar beques de menjador, material escolar, transport i altres ajuts educatius del Departament d'Educació.
                  </p>
                  <a href="https://web.gencat.cat/ca/tramits/tramits-temes/Ajuts-beques-subvencions-i-premis?categoria=798cfce2-86b6-11e3-aaec-000c29052e2c" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                    Accedir al portal →
                  </a>
                </div>
              </div>
            </div>

            {/* Certificats acadèmics */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>📜</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Sol·licitud de certificats
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', marginBottom: '16px' }}>
                    Per sol·licitar certificats d'escolaritat, notes o altres documents acadèmics, contacta amb secretaria per correu electrònic o presencialment.
                  </p>
                  <a href="mailto:a8076947@xtec.cat?subject=Sol·licitud de certificat" 
                     style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease', marginRight: '12px' }}>
                    Enviar correu →
                  </a>
                  <Link href="/admissio-i-secretaria/faq-i-tramits/contacte-secretaria" 
                     style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', border: '2px solid #6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                    Contactar secretaria
                  </Link>
                </div>
              </div>
            </div>

            {/* Menjador escolar */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>🍽️</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Gestió del menjador escolar
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', marginBottom: '16px' }}>
                    Consulta menús mensuals, comunica al·lèrgies o intoleràncies, i gestiona les inscripcions al servei de menjador.
                  </p>
                  <Link href="/admissio-i-secretaria/faq-i-tramits/contacte-secretaria" 
                     style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                    Més informació →
                  </Link>
                </div>
              </div>
            </div>

            {/* Extraescolars */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderLeft: '5px solid #6D7E4F' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>⚽</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Inscripció a activitats extraescolars
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', marginBottom: '16px' }}>
                    Consulta l'oferta d'activitats extraescolars i realitza la inscripció per al curs actual.
                  </p>
                  <Link href="/admissio-i-secretaria/faq-i-tramits/contacte-secretaria" 
                     style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                    Consultar oferta →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Altres recursos digitals */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🌐 Altres recursos digitals
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            
            {/* Generalitat */}
            <a href="https://web.gencat.cat/ca/inici" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center', height: '100%' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏛️</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Generalitat de Catalunya
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                  Portal oficial de tràmits
                </p>
              </div>
            </a>

            {/* Departament Educació */}
            <a href="https://educacio.gencat.cat/" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center', height: '100%' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎓</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Departament d'Educació
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                  Informació educativa
                </p>
              </div>
            </a>

            {/* Ajuntament */}
            <a href="https://www.gramenet.cat/" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center', height: '100%' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏢</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Ajuntament Santa Coloma
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                  Serveis municipals
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Consells per tràmits online */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', borderLeft: '6px solid #0284c7', padding: '40px', borderRadius: '12px' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#075985', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2.5rem' }}>💡</span>
              Consells per realitzar tràmits online
            </h3>
            <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.9, color: '#0c4a6e', margin: 0, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '14px' }}>
                Tingues preparada <strong>tota la documentació necessària</strong> abans de començar el tràmit
              </li>
              <li style={{ marginBottom: '14px' }}>
                Assegura't de tenir una <strong>connexió estable a internet</strong>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>Guarda el justificant</strong> de presentació de qualsevol tràmit realitzat
              </li>
              <li style={{ marginBottom: '14px' }}>
                Si tens dubtes, <strong>contacta amb secretaria</strong> abans de fer el tràmit
              </li>
              <li>
                Consulta els <strong>terminis</strong> i dates límit per a cada procediment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Necessites ajuda amb algun tràmit?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              El nostre equip de secretaria està disponible per orientar-te
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio-i-secretaria/faq-i-tramits/contacte-secretaria" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Contactar amb secretaria
              </Link>
              <Link href="/admissio-i-secretaria/faq-i-tramits/preguntes-frequents" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Preguntes freqüents
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}