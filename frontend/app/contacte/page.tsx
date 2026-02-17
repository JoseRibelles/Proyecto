'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function Contacte() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop)',
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
            <span>Contacte</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Contacte
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Estem aquí per atendre't i resoldre els teus dubtes
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=700&fit=crop" alt="Contacte" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Institut Escola Lluís Millet - Les Oliveres
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                Contacta amb nosaltres
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                L'<strong>Institut Escola Lluís Millet</strong> està ubicat al barri de Les Oliveres, a Santa Coloma de Gramenet. Estem a la teva disposició per atendre qualsevol consulta, dubte o suggeriment.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                El nostre equip de secretaria i direcció t'atendrà amb la màxima professionalitat i proximitat, ja sigui de manera presencial, telefònica o telemàtica.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Horari d'atenció
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  De dilluns a divendres de 9:00h a 13:00h durant el període lectiu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informació de contacte */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            📞 Dades de contacte
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}>
            
            {/* Telèfon */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 24px', fontSize: '2.5rem' }}>
                📞
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 16px' }}>
                Telèfon
              </h3>
              <a href="tel:933913351" style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                933 913 351
              </a>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                Atenció telefònica en horari de secretaria
              </p>
            </div>

            {/* Correu electrònic */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 24px', fontSize: '2.5rem' }}>
                📧
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 16px' }}>
                Correu electrònic
              </h3>
              <a href="mailto:a8076947@xtec.cat" style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', textDecoration: 'none', display: 'block', marginBottom: '8px', wordBreak: 'break-all' }}>
                a8076947@xtec.cat
              </a>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                Respostem en 24-48h laborables
              </p>
            </div>

            {/* Adreça */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 24px', fontSize: '2.5rem' }}>
                📍
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 16px' }}>
                Adreça
              </h3>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', marginBottom: '16px', lineHeight: 1.6 }}>
                Carrer Lluís Millet, 22-26<br/>
                08924 Santa Coloma de Gramenet
              </div>
              <a href="https://maps.google.com/?q=Carrer+Lluís+Millet+22+Santa+Coloma+de+Gramenet" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ fontFamily: 'Montserrat', fontSize: '0.95rem', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Veure al mapa
              </a>
            </div>

          </div>

          {/* Horari detallat */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 32px', textAlign: 'center' }}>
              🕐 Horari d'atenció de secretaria
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
              {['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres'].map((dia, index) => (
                <div key={index} style={{ background: '#f0f4e8', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #6D7E4F' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>
                    {dia}
                  </div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555' }}>
                    9:00 - 13:00
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '24px', padding: '16px', background: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#78350f', margin: 0 }}>
                ⚠️ Per a tràmits que requereixin més temps, recomanem <strong>demanar cita prèvia</strong> trucant al 933 913 351
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Com arribar */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🚇 Com arribar
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Metro */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🚇
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Metro
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Línia 9 (L9)</strong><br/>
                Estació: <strong>Església Major</strong><br/>
                A 10 minuts a peu del centre
              </p>
            </div>

            {/* Autobús */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🚌
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Autobús
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Línies TMB:</strong><br/>
                50, 51, 60, 62<br/>
                Parada a prop del centre
              </p>
            </div>

            {/* Cotxe */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🚗
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Cotxe
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Aparcament a la zona</strong><br/>
                Carrer Lluís Millet i voltants<br/>
                Places d'aparcament públiques
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mapa */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🗺️ Localització
          </h2>
          
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.1234567890!2d2.2089!3d41.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI3JzI0LjEiTiAywrAxMiczMi4wIkU!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* CTA Formulari */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✉️</div>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Prefereixes escriure'ns?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Utilitza el nostre formulari de contacte i ens posarem en contacte amb tu
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Formulari de contacte →
              </Link>
              <a href="mailto:a8076947@xtec.cat" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Enviar correu →
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}