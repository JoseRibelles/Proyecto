'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function FAQiTramits() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop)',
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
            <span>FAQ i tràmits</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            FAQ i Tràmits
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Respostes a les teves preguntes i gestió de tràmits escolars
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=700&fit=crop" alt="FAQ" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Estem aquí per ajudar-te
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                Com et podem ajudar?
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                En aquesta secció trobaràs <strong>respostes a les preguntes més freqüents</strong> de les famílies, així com informació sobre com realitzar <strong>tràmits online</strong> i els canals per contactar amb la secretaria del centre.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                El nostre objectiu és facilitar-te la gestió de qualsevol tràmit administratiu i respondre els teus dubtes de la manera més ràpida i eficient possible.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Atenció personalitzada
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  Si no trobes la informació que necessites, pots contactar directament amb la nostra secretaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Targetes de serveis */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Què necessites?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Preguntes freqüents */}
            <Link href="/admissio/faq/preguntes" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 8px 24px rgba(109,126,79,0.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 16px rgba(109,126,79,0.08)';
                   }}>
                <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>
                  ❓
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Preguntes freqüents
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Respostes a les preguntes més habituals sobre horaris, serveis, funcionament del centre i molt més.
                </p>
              </div>
            </Link>

            {/* Tràmits online */}
            <Link href="/admissio/faq/tramits" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 8px 24px rgba(109,126,79,0.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 16px rgba(109,126,79,0.08)';
                   }}>
                <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>
                  💻
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Tràmits online
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Accedeix als serveis digitals per gestionar certificats, sol·licituds i altres tràmits de manera ràpida.
                </p>
              </div>
            </Link>

            {/* Contacte secretaria */}
            <Link href="/admissio/faq/contacte" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 8px 24px rgba(109,126,79,0.15)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 4px 16px rgba(109,126,79,0.08)';
                   }}>
                <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2.5rem' }}>
                  📞
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Contacte secretaria
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Horaris, telèfon, correu electrònic i formulari de contacte per resoldre els teus dubtes personalment.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Ajuda ràpida */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🚀 Ajuda ràpida
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {/* Consultes més habituals */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', borderLeft: '5px solid #6D7E4F' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 20px' }}>
                Consultes més habituals
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Horari de secretaria</li>
                <li>Sol·licitud de certificats</li>
                <li>Justificants d'assistència</li>
                <li>Canvis de domicili o telèfon</li>
                <li>Autoritzacions i permisos</li>
              </ul>
            </div>

            {/* Horari d'atenció */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', borderLeft: '5px solid #6D7E4F' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 20px' }}>
                Horari d'atenció
              </h3>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555' }}>
                <div style={{ marginBottom: '12px' }}>
                  <strong>De dilluns a divendres:</strong><br/>
                  9:00h - 13:00h
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <strong>Telèfon:</strong> 933 913 351
                </div>
                <div>
                  <strong>Correu:</strong> a8076947@xtec.cat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              No trobes el que busques?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Contacta directament amb la nostra secretaria i t'atenem personalment
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio/faq/contacte" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Contactar amb secretaria
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