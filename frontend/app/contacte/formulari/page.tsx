'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function FormulariContacte() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  const [formData, setFormData] = useState({
    nom: '',
    cognoms: '',
    email: '',
    telefon: '',
    tipusConsulta: '',
    assumpte: '',
    missatge: '',
    acceptaPrivacitat: false
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.nom.trim()) newErrors.nom = 'El nom és obligatori';
    if (!formData.cognoms.trim()) newErrors.cognoms = 'Els cognoms són obligatoris';
    if (!formData.email.trim()) {
      newErrors.email = 'El correu electrònic és obligatori';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correu electrònic no és vàlid';
    }
    if (!formData.tipusConsulta) newErrors.tipusConsulta = 'Selecciona un tipus de consulta';
    if (!formData.assumpte.trim()) newErrors.assumpte = 'L\'assumpte és obligatori';
    if (!formData.missatge.trim()) newErrors.missatge = 'El missatge és obligatori';
    if (!formData.acceptaPrivacitat) newErrors.acceptaPrivacitat = 'Has d\'acceptar la política de privacitat';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Form data:', formData);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          nom: '',
          cognoms: '',
          email: '',
          telefon: '',
          tipusConsulta: '',
          assumpte: '',
          missatge: '',
          acceptaPrivacitat: false
        });
      }, 5000);
    } else {
      // Scroll to first error
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
     

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1200&h=400&fit=crop)',
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
            <span>Formulari</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Formulari de Contacte
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Escriu-nos i ens posarem en contacte amb tu
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Estem aquí per ajudar-te
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            Emplena el formulari amb les teves dades i la teva consulta. L'equip de l'<strong>Institut Escola Lluís Millet</strong> es posarà en contacte amb tu el més aviat possible, normalment en un termini de <strong>24-48 hores laborables</strong>.
          </p>
        </div>
      </section>

      {/* Formulari */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {submitted ? (
            <div style={{ background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', border: '3px solid #10b981', boxShadow: '0 8px 32px rgba(16,185,129,0.2)' }}>
              <div style={{ fontSize: '5rem', marginBottom: '24px' }}>✅</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#065f46', margin: '0 0 16px' }}>
                Missatge enviat correctament!
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', color: '#047857', margin: '0 0 32px', lineHeight: 1.8 }}>
                Gràcies per contactar amb l'Institut Escola Lluís Millet.<br/>
                Hem rebut la teva consulta i ens posarem en contacte amb tu el més aviat possible.
              </p>
              <div style={{ padding: '20px', background: 'white', borderRadius: '12px', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#065f46', margin: 0 }}>
                  📧 Rebràs una còpia del teu missatge a <strong>{formData.email}</strong>
                </p>
              </div>
              <Link href="/contacte" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: '#10b981', color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Tornar a contacte
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', padding: '48px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 32px', textAlign: 'center' }}>
                Dades personals
              </h3>

              {/* Nom i Cognoms */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                    Nom <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      borderRadius: '8px', 
                      border: errors.nom ? '2px solid #ef4444' : '2px solid #e8f0dc', 
                      fontFamily: 'Open Sans', 
                      fontSize: '1rem', 
                      transition: 'all 0.3s ease' 
                    }}
                    onFocus={(e) => !errors.nom && (e.target.style.borderColor = '#6D7E4F')}
                    onBlur={(e) => !errors.nom && (e.target.style.borderColor = '#e8f0dc')}
                  />
                  {errors.nom && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '4px 0 0', fontWeight: 600 }}>{errors.nom}</p>}
                </div>

                <div>
                  <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                    Cognoms <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    name="cognoms"
                    value={formData.cognoms}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      borderRadius: '8px', 
                      border: errors.cognoms ? '2px solid #ef4444' : '2px solid #e8f0dc', 
                      fontFamily: 'Open Sans', 
                      fontSize: '1rem', 
                      transition: 'all 0.3s ease' 
                    }}
                    onFocus={(e) => !errors.cognoms && (e.target.style.borderColor = '#6D7E4F')}
                    onBlur={(e) => !errors.cognoms && (e.target.style.borderColor = '#e8f0dc')}
                  />
                  {errors.cognoms && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '4px 0 0', fontWeight: 600 }}>{errors.cognoms}</p>}
                </div>
              </div>

              {/* Email i Telèfon */}
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
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      borderRadius: '8px', 
                      border: errors.email ? '2px solid #ef4444' : '2px solid #e8f0dc', 
                      fontFamily: 'Open Sans', 
                      fontSize: '1rem', 
                      transition: 'all 0.3s ease' 
                    }}
                    onFocus={(e) => !errors.email && (e.target.style.borderColor = '#6D7E4F')}
                    onBlur={(e) => !errors.email && (e.target.style.borderColor = '#e8f0dc')}
                  />
                  {errors.email && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '4px 0 0', fontWeight: 600 }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                    Telèfon (opcional)
                  </label>
                  <input 
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="933 913 351"
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      borderRadius: '8px', 
                      border: '2px solid #e8f0dc', 
                      fontFamily: 'Open Sans', 
                      fontSize: '1rem', 
                      transition: 'all 0.3s ease' 
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6D7E4F'}
                    onBlur={(e) => e.target.style.borderColor = '#e8f0dc'}
                  />
                </div>
              </div>

              <div style={{ borderTop: '2px solid #e8f0dc', margin: '40px 0', paddingTop: '40px' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 32px', textAlign: 'center' }}>
                  Consulta
                </h3>
              </div>

              {/* Tipus de consulta */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                  Tipus de consulta <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select 
                  name="tipusConsulta"
                  value={formData.tipusConsulta}
                  onChange={handleChange}
                  style={{ 
                    width: '100%', 
                    padding: '14px', 
                    borderRadius: '8px', 
                    border: errors.tipusConsulta ? '2px solid #ef4444' : '2px solid #e8f0dc', 
                    fontFamily: 'Open Sans', 
                    fontSize: '1rem', 
                    transition: 'all 0.3s ease', 
                    background: 'white' 
                  }}
                  onFocus={(e) => !errors.tipusConsulta && (e.target.style.borderColor = '#6D7E4F')}
                  onBlur={(e) => !errors.tipusConsulta && (e.target.style.borderColor = '#e8f0dc')}>
                  <option value="">Selecciona un tipus de consulta</option>
                  <option value="informacio-general">Informació general del centre</option>
                  <option value="preinscripcio">Preinscripció i matrícula</option>
                  <option value="academic">Informació acadèmica</option>
                  <option value="serveis">Serveis (menjador, extraescolars...)</option>
                  <option value="administracio">Tràmits administratius</option>
                  <option value="calendari">Calendari i horaris</option>
                  <option value="suggeriment">Suggeriments i millores</option>
                  <option value="altres">Altres consultes</option>
                </select>
                {errors.tipusConsulta && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '4px 0 0', fontWeight: 600 }}>{errors.tipusConsulta}</p>}
              </div>

              {/* Assumpte */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                  Assumpte <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input 
                  type="text"
                  name="assumpte"
                  value={formData.assumpte}
                  onChange={handleChange}
                  placeholder="Resumeix breument la teva consulta"
                  style={{ 
                    width: '100%', 
                    padding: '14px', 
                    borderRadius: '8px', 
                    border: errors.assumpte ? '2px solid #ef4444' : '2px solid #e8f0dc', 
                    fontFamily: 'Open Sans', 
                    fontSize: '1rem', 
                    transition: 'all 0.3s ease' 
                  }}
                  onFocus={(e) => !errors.assumpte && (e.target.style.borderColor = '#6D7E4F')}
                  onBlur={(e) => !errors.assumpte && (e.target.style.borderColor = '#e8f0dc')}
                />
                {errors.assumpte && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '4px 0 0', fontWeight: 600 }}>{errors.assumpte}</p>}
              </div>

              {/* Missatge */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#333', display: 'block', marginBottom: '8px' }}>
                  Missatge <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea 
                  name="missatge"
                  value={formData.missatge}
                  onChange={handleChange}
                  rows={8}
                  placeholder="Explica'ns amb detall la teva consulta o dubte..."
                  style={{ 
                    width: '100%', 
                    padding: '14px', 
                    borderRadius: '8px', 
                    border: errors.missatge ? '2px solid #ef4444' : '2px solid #e8f0dc', 
                    fontFamily: 'Open Sans', 
                    fontSize: '1rem', 
                    transition: 'all 0.3s ease', 
                    resize: 'vertical' 
                  }}
                  onFocus={(e) => !errors.missatge && (e.target.style.borderColor = '#6D7E4F')}
                  onBlur={(e) => !errors.missatge && (e.target.style.borderColor = '#e8f0dc')}
                />
                {errors.missatge && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '4px 0 0', fontWeight: 600 }}>{errors.missatge}</p>}
              </div>

              {/* Privacitat */}
              <div style={{ marginBottom: '32px', padding: '20px', background: '#f0f4e8', borderRadius: '12px', border: errors.acceptaPrivacitat ? '2px solid #ef4444' : '2px solid #6D7E4F' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    name="acceptaPrivacitat"
                    checked={formData.acceptaPrivacitat}
                    onChange={handleChange}
                    style={{ marginTop: '4px', width: '20px', height: '20px', cursor: 'pointer' }}
                  />
                  <span style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#333', lineHeight: 1.7 }}>
                    He llegit i accepto la <Link href="/politica-privacitat" style={{ color: '#6D7E4F', fontWeight: 600, textDecoration: 'underline' }}>política de privacitat</Link>. Les meves dades seran tractades per l'Institut Escola Lluís Millet per gestionar la meva consulta. <span style={{ color: '#ef4444' }}>*</span>
                  </span>
                </label>
                {errors.acceptaPrivacitat && <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#ef4444', margin: '8px 0 0 32px', fontWeight: 600 }}>{errors.acceptaPrivacitat}</p>}
              </div>

              {/* Info adicional */}
              <div style={{ marginBottom: '32px', padding: '20px', background: '#e0f2fe', borderRadius: '12px', borderLeft: '4px solid #0284c7' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#075985', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
                  Informació important
                </h4>
                <ul style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#0c4a6e', margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Ens posarem en contacte amb tu en un termini de <strong>24-48 hores laborables</strong></li>
                  <li>Rebràs una còpia del teu missatge al correu electrònic indicat</li>
                  <li>Per consultes urgents, truca'ns al <strong>933 913 351</strong></li>
                  <li>Horari d'atenció: Dilluns a divendres de 9:00h a 13:00h</li>
                </ul>
              </div>

              {/* Botó enviar */}
              <button 
                type="submit"
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  padding: '18px 48px', 
                  borderRadius: '8px', 
                  background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', 
                  color: 'white', 
                  border: 'none', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease', 
                  boxShadow: '0 4px 12px rgba(109,126,79,0.3)', 
                  width: '100%' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(109,126,79,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(109,126,79,0.3)';
                }}>
                ✉️ Enviar consulta
              </button>

            </form>
          )}
        </div>
      </section>

      {/* Altres formes de contacte */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Altres formes de contacte
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Telèfon */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📞</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Per telèfon
              </h3>
              <a href="tel:933913351" style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                933 913 351
              </a>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                De 9:00h a 13:00h
              </p>
            </div>

            {/* Email */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📧</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Per correu
              </h3>
              <a href="mailto:a8076947@xtec.cat" style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#6D7E4F', textDecoration: 'none', display: 'block', marginBottom: '8px', wordBreak: 'break-all' }}>
                a8076947@xtec.cat
              </a>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>
                Respostem en 24-48h
              </p>
            </div>

            {/* Presencial */}
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏫</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Presencialment
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555', margin: '0 0 12px', lineHeight: 1.6 }}>
                C/ Lluís Millet, 22-26<br/>
                08924 Santa Coloma
              </p>
              <Link href="/contacte" style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 600, color: '#6D7E4F', textDecoration: 'underline' }}>
                Veure horaris
              </Link>
            </div>

          </div>
        </div>
      </section>

     
    </>
  );
}