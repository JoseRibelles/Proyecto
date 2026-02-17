'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function HorarisAtencio() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&h=400&fit=crop)',
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
            <Link href="/contacte" style={{ color: 'white', textDecoration: 'none' }}>Contacte</Link>
            <span> / </span>
            <Link href="/contacte/ubicacio-i-mapa" style={{ color: 'white', textDecoration: 'none' }}>Ubicació i mapa</Link>
            <span> / </span>
            <span>Horaris d'atenció</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Horaris d'Atenció
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Organitza la teva visita coneixent els nostres horaris
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Horaris del centre
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            A continuació trobaràs tots els horaris de l'Institut Escola Lluís Millet: horari lectiu, de secretaria, menjador i serveis complementaris.
          </p>
        </div>
      </section>

      {/* HORARI LECTIU */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <span style={{ fontSize: '3rem' }}>🎒</span>
            Horari Lectiu
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
            
            {/* Curs normal */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 24px', textAlign: 'center' }}>
                Setembre - Maig
              </h3>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 2, color: '#555' }}>
                <div style={{ padding: '20px', background: '#f0f4e8', borderRadius: '12px', marginBottom: '16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>MATÍ</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F' }}>9:00h - 12:30h</div>
                </div>
                <div style={{ padding: '20px', background: '#f0f4e8', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>TARDA</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F' }}>15:00h - 16:30h</div>
                </div>
              </div>
            </div>

            {/* Juny */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #f59e0b' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 24px', textAlign: 'center' }}>
                Juny (Jornada intensiva)
              </h3>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 2, color: '#555' }}>
                <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#f59e0b', marginBottom: '8px' }}>MATÍ</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f59e0b' }}>9:00h - 13:00h</div>
                </div>
                <div style={{ padding: '20px', marginTop: '16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#888', fontStyle: 'italic' }}>
                    No hi ha classes a la tarda
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Dies lectius setmanals */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 24px', textAlign: 'center' }}>
              Dies lectius
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
              {['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres'].map((dia, index) => (
                <div key={index} style={{ background: '#f0f4e8', padding: '24px 16px', borderRadius: '12px', textAlign: 'center', border: '2px solid #6D7E4F' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>
                    {dia}
                  </div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555', marginBottom: '4px' }}>
                    9:00 - 12:30
                  </div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                    15:00 - 16:30
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '24px', padding: '16px', background: '#e0f2fe', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#0c4a6e', margin: 0 }}>
                ℹ️ Els dissabtes, diumenges i festius el centre roman tancat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HORARI DE SECRETARIA */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <span style={{ fontSize: '3rem' }}>📋</span>
            Horari de Secretaria
          </h2>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: '#f9fdf5', padding: '48px', borderRadius: '16px', border: '3px solid #6D7E4F', boxShadow: '0 8px 24px rgba(109,126,79,0.15)' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 600, color: '#6D7E4F', marginBottom: '16px' }}>
                  De dilluns a divendres
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: '#6D7E4F' }}>
                  9:00h - 13:00h
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📞</div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F' }}>Atenció telefònica</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏫</div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F' }}>Atenció presencial</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📧</div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F' }}>Gestió de tràmits</div>
                </div>
              </div>

              <div style={{ padding: '24px', background: '#fef3c7', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#92400e', margin: '0 0 12px' }}>
                  💡 Consells importants
                </h4>
                <ul style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.8, color: '#78350f', margin: 0, paddingLeft: '20px' }}>
                  <li>Per a tràmits que requereixin més temps (certificats, matriculacions, etc.), recomanem <strong>demanar cita prèvia</strong></li>
                  <li>Truqueu al <strong>933 913 351</strong> per concertar una cita</li>
                  <li>També podeu enviar un correu a <strong>a8076947@xtec.cat</strong></li>
                  <li>En períodes d'alta demanda (setembre, preinscripció), l'espera pot ser més llarga</li>
                </ul>
              </div>
            </div>

            {/* Períodes especials */}
            <div style={{ marginTop: '32px', background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 24px' }}>
                Períodes especials
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555' }}>
                    <strong>Període de vacances escolars</strong>
                  </div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#ef4444' }}>
                    TANCAT
                  </div>
                </div>
                <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555' }}>
                    <strong>Vacances de Nadal</strong>
                  </div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#ef4444' }}>
                    TANCAT
                  </div>
                </div>
                <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555' }}>
                    <strong>Setmana Santa</strong>
                  </div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#ef4444' }}>
                    TANCAT
                  </div>
                </div>
                <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555' }}>
                    <strong>Agost</strong>
                  </div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#ef4444' }}>
                    TANCAT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVEIS COMPLEMENTARIS */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            ⏰ Serveis Complementaris
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Acollida matinal */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🌅</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Acollida matinal
              </h3>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333' }}>8:00h - 9:00h</div>
              </div>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', textAlign: 'center', margin: 0 }}>
                Servei per facilitar la conciliació familiar
              </p>
            </div>

            {/* Menjador */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🍽️</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Menjador escolar
              </h3>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333' }}>12:30h - 15:00h</div>
              </div>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', textAlign: 'center', margin: 0 }}>
                Servei de menjador amb cuina pròpia
              </p>
            </div>

            {/* Extraescolars */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>⚽</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Extraescolars
              </h3>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333' }}>17:00h - 18:00h</div>
              </div>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', textAlign: 'center', margin: 0 }}>
                Activitats esportives, artístiques i tecnològiques
              </p>
            </div>

          </div>

          <div style={{ marginTop: '32px', padding: '24px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', margin: 0 }}>
              ℹ️ Per a més informació sobre els serveis complementaris i les inscripcions, contacta amb secretaria
            </p>
          </div>
        </div>
      </section>

      {/* Contacte ràpid */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '60px 40px', borderRadius: '16px', border: '2px solid #6D7E4F' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 32px', textAlign: 'center' }}>
              Contacte secretaria
            </h3>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '8px' }}>Telèfon</div>
                <a href="tel:933913351" style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', textDecoration: 'none' }}>
                  933 913 351
                </a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#888', marginBottom: '8px' }}>Correu electrònic</div>
                <a href="mailto:a8076947@xtec.cat" style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', textDecoration: 'none', wordBreak: 'break-all' }}>
                  a8076947@xtec.cat
                </a>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(109,126,79,0.3)' }}>
                Formulari de contacte →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Vols conèixer el centre?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Vine a visitar-nos durant l'horari de secretaria o demana cita prèvia
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/ubicacio-i-mapa/com-arribar" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Com arribar →
              </Link>
              <a href="tel:933913351" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                📞 Trucar ara
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}