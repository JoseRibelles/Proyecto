'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ContacteSecretaria() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telefon: '',
    assumpte: '',
    missatge: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form data:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        telefon: '',
        assumpte: '',
        missatge: ''
      });
    }, 3000);
  };

  return (
    <>
     

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop)',
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
            <Link href="/admissio/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ i tràmits</Link>
            <span> / </span>
            <span>Contacte secretaria</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Contacte Secretaria
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Estem aquí per ajudar-te amb qualsevol consulta
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Com pots contactar amb nosaltres?
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            El nostre equip de secretaria està disponible per atendre les teves consultes, gestionar tràmits i proporcionar-te tota la informació que necessitis sobre el centre.
          </p>
        </div>
      </section>

      {/* Informació de contacte */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            📞 Dades de contacte
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '48px' }}>
            
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
                Respostem en un màxim de 48h laborables
              </p>
            </div>

          </div>

          {/* Horari i adreça */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Horari */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem' }}>🕐</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: 0 }}>
                  Horari d'atenció
                </h3>
              </div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 2, color: '#555' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e8f0dc' }}>
                  <strong>Dilluns a Divendres:</strong>
                  <span>9:00h - 13:00h</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
                  <strong>Caps de setmana:</strong>
                  <span>Tancat</span>
                </div>
              </div>
              <div style={{ marginTop: '24px', padding: '16px', background: '#f0f4e8', borderRadius: '8px' }}>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#555', margin: 0 }}>
                  💡 <strong>Consell:</strong> Per tràmits que requereixin més temps, us recomanem demanar cita prèvia.
                </p>
              </div>
            </div>

            {/* Adreça */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '3rem' }}>📍</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: 0 }}>
                  On som
                </h3>
              </div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                <strong>Institut Escola Lluís Millet</strong><br/>
                Carrer Lluís Millet, 22-26<br/>
                08924 Santa Coloma de Gramenet<br/>
                Barcelona
              </div>
              <a href="https://maps.google.com/?q=Carrer+Lluís+Millet+22+Santa+Coloma+de+Gramenet" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                📍 Veure al mapa
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Formulari de contacte */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            📝 Formulari de contacte
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '48px' }}>
            Emplena el formulari i ens posarem en contacte amb tu el més aviat possible
          </p>

          {submitted ? (
            <div style={{ background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', padding: '40px', borderRadius: '16px', textAlign: 'center', border: '2px solid #10b981' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#065f46', margin: '0 0 12px' }}>
                Missatge enviat correctament!
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#047857', margin: 0 }}>
                Ens posarem en contacte amb tu el més aviat possible
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                  Nom complet <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '2px solid #e8f0dc', fontFamily: 'Open Sans', fontSize: '1rem', transition: 'all 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderColor = '#6D7E4F'}
                  onBlur={(e) => e.target.style.borderColor = '#e8f0dc'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                    Correu electrònic <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '2px solid #e8f0dc', fontFamily: 'Open Sans', fontSize: '1rem', transition: 'all 0.3s ease' }}
                    onFocus={(e) => e.target.style.borderColor = '#6D7E4F'}
                    onBlur={(e) => e.target.style.borderColor = '#e8f0dc'}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                    Telèfon
                  </label>
                  <input 
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '2px solid #e8f0dc', fontFamily: 'Open Sans', fontSize: '1rem', transition: 'all 0.3s ease' }}
                    onFocus={(e) => e.target.style.borderColor = '#6D7E4F'}
                    onBlur={(e) => e.target.style.borderColor = '#e8f0dc'}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                  Assumpte <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select 
                  name="assumpte"
                  value={formData.assumpte}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '2px solid #e8f0dc', fontFamily: 'Open Sans', fontSize: '1rem', transition: 'all 0.3s ease', background: 'white' }}
                  onFocus={(e) => e.target.style.borderColor = '#6D7E4F'}
                  onBlur={(e) => e.target.style.borderColor = '#e8f0dc'}>
                  <option value="">Selecciona un assumpte</option>
                  <option value="preinscripcio">Preinscripció i matrícula</option>
                  <option value="certificats">Sol·licitud de certificats</option>
                  <option value="menjador">Servei de menjador</option>
                  <option value="extraescolars">Activitats extraescolars</option>
                  <option value="academic">Informació acadèmica</option>
                  <option value="altres">Altres consultes</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                  Missatge <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea 
                  name="missatge"
                  value={formData.missatge}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '2px solid #e8f0dc', fontFamily: 'Open Sans', fontSize: '1rem', transition: 'all 0.3s ease', resize: 'vertical' }}
                  onFocus={(e) => e.target.style.borderColor = '#6D7E4F'}
                  onBlur={(e) => e.target.style.borderColor = '#e8f0dc'}
                />
              </div>

              <div style={{ marginBottom: '24px', padding: '16px', background: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#78350f', margin: 0 }}>
                  ℹ️ Els camps marcats amb <span style={{ color: '#ef4444' }}>*</span> són obligatoris. Les teves dades seran tractades segons la nostra política de privacitat.
                </p>
              </div>

              <button 
                type="submit"
                style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, padding: '16px 48px', borderRadius: '8px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(109,126,79,0.3)', width: '100%' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(109,126,79,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(109,126,79,0.3)';
                }}>
                Enviar missatge
              </button>

            </form>
          )}
        </div>
      </section>

      {/* Altres formes de contacte */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            💬 Altres formes de contacte
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            
            {/* Presencial */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏫</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Atenció presencial
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                Vine a secretaria en horari d'atenció. Per tràmits llargs, demana cita prèvia.
              </p>
            </div>

            {/* Agenda escolar */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📔</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Agenda escolar
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                Per comunicacions ràpides amb el tutor/a de l'alumne/a.
              </p>
            </div>

            {/* Reunions */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👥</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Reunions programades
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                Reunions trimestrals amb les famílies per seguiment acadèmic.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Encara tens dubtes?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Consulta les nostres preguntes freqüents o els tràmits disponibles online
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio/faq/preguntes-frequents" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Preguntes freqüents
              </Link>
              <Link href="/admissio/faq/tramits-online" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Tràmits online
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}