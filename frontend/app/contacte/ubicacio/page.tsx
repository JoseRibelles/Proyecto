'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function UbicacioIMapa() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop)',
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
            <span>Ubicació i mapa</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Ubicació i Mapa
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Troba'ns al cor del barri de Les Oliveres
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=700&fit=crop" alt="Les Oliveres" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Barri de Les Oliveres, Santa Coloma de Gramenet
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                On estem ubicats
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                L'<strong>Institut Escola Lluís Millet</strong> es troba al <strong>carrer Lluís Millet, 22-26</strong>, al barri de <strong>Les Oliveres</strong>, a Santa Coloma de Gramenet.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                El centre és fàcilment accessible en transport públic (metro i autobús) i també disposa d'aparcament a la zona per a aquelles famílies que vinguin en vehicle privat.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  Adreça completa
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.6, color: '#555', margin: '0 0 12px' }}>
                  <strong>Institut Escola Lluís Millet</strong><br/>
                  Carrer Lluís Millet, 22-26<br/>
                  08924 Santa Coloma de Gramenet<br/>
                  Barcelona, Catalunya
                </p>
                <a href="https://maps.google.com/?q=Carrer+Lluís+Millet+22+Santa+Coloma+de+Gramenet" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                  📍 Obrir al mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa interactiu */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🗺️ Mapa interactiu
          </h2>
          
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.123456789!2d2.2089!3d41.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI3JzI0LjEiTiAywrAxMiczMi4wIkU!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div style={{ marginTop: '32px', padding: '24px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', margin: '0 0 16px' }}>
              💡 <strong>Consell:</strong> Utilitza Google Maps per obtenir indicacions des de la teva ubicació actual
            </p>
            <a href="https://maps.google.com/?q=Carrer+Lluís+Millet+22+Santa+Coloma+de+Gramenet" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 32px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
              Obtenir indicacions
            </a>
          </div>
        </div>
      </section>

      {/* Com arribar - Resum */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            🚇 Com arribar
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Diverses opcions de transport públic i privat per arribar al nostre centre
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Metro */}
            <Link href="/contacte/ubicacio-i-mapa/com-arribar" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f9fdf5', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
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
                  🚇
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Metro
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  <strong>Línia 9 (L9)</strong><br/>
                  Estació: Església Major<br/>
                  10 minuts a peu
                </p>
              </div>
            </Link>

            {/* Autobús */}
            <Link href="/contacte/ubicacio-i-mapa/com-arribar" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f9fdf5', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
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
                  🚌
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Autobús
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  <strong>Línies TMB</strong><br/>
                  50, 51, 60, 62<br/>
                  Parada propera
                </p>
              </div>
            </Link>

            {/* Cotxe */}
            <Link href="/contacte/ubicacio-i-mapa/com-arribar" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f9fdf5', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)', transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
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
                  🚗
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Cotxe
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  <strong>Aparcament públic</strong><br/>
                  C/ Lluís Millet<br/>
                  Zona blava i verda
                </p>
              </div>
            </Link>

          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link href="/contacte/ubicacio-i-mapa/com-arribar" style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(109,126,79,0.3)' }}>
              Veure informació detallada →
            </Link>
          </div>
        </div>
      </section>

      {/* Horaris d'atenció */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            🕐 Horaris d'atenció
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Consulta els horaris de secretaria i del centre educatiu
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
            
            {/* Horari secretaria */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem' }}>📋</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: 0 }}>
                  Secretaria
                </h3>
              </div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 2, color: '#555' }}>
                <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', marginBottom: '12px' }}>
                  <strong>De dilluns a divendres:</strong><br/>
                  9:00h - 13:00h
                </div>
                <p style={{ fontSize: '0.95rem', color: '#888', margin: '16px 0 0' }}>
                  Per a tràmits que requereixin més temps, recomanem demanar cita prèvia
                </p>
              </div>
            </div>

            {/* Horari lectiu */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem' }}>🎒</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: 0 }}>
                  Horari lectiu
                </h3>
              </div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 2, color: '#555' }}>
                <div style={{ padding: '16px', background: '#f9fdf5', borderRadius: '8px', marginBottom: '12px' }}>
                  <strong>Matí:</strong> 9:00h - 12:30h<br/>
                  <strong>Tarda:</strong> 15:00h - 16:30h
                </div>
                <p style={{ fontSize: '0.95rem', color: '#888', margin: '16px 0 0' }}>
                  Juny: Jornada intensiva de 9:00h a 13:00h
                </p>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/contacte/ubicacio-i-mapa/horaris-atencio" style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', border: '2px solid #6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
              Veure tots els horaris →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Tens dubtes sobre com arribar?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Contacta amb nosaltres i t'ajudarem amb les indicacions
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Formulari de contacte
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