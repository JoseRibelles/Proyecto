'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white',
      padding: '60px 20px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        
        {/* Columna 1 */}
        <div>
          <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: '#8BC34A' }}>
            COL·LEGI LLUÍS MILLET
          </h3>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
            <p style={{ margin: '0 0 8px' }}><strong>Adreça:</strong></p>
            <p style={{ margin: '0 0 16px' }}>Carrer Lluís Millet, 22<br/>08924 Santa Coloma de Gramenet</p>
            
            <p style={{ margin: '0 0 8px' }}><strong>Telèfon:</strong></p>
            <p style={{ margin: '0 0 16px' }}>933 913 351</p>
            
            <p style={{ margin: '0 0 8px' }}><strong>Email:</strong></p>
            <p style={{ margin: '0 0 16px' }}>a8076947@xtec.cat</p>
            
            <p style={{ margin:  '0 0 8px' }}><strong>Horari d'atenció:</strong></p>
            <p style={{ margin: '0' }}>Dilluns a divendres:  9:00 - 13:00h</p>
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: '#8BC34A' }}>
            ENLLAÇOS RÀPIDS
          </h3>
          <ul style={{ listStyle: 'none', padding:  0, margin: 0, fontFamily: 'Open Sans', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Inici</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/lescola/qui-som" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› El nostre projecte</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/etapes/infantil" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Educació Infantil</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/etapes/primaria" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Educació Primària</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/comunitat/families/objectius" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› AMPA</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/contacte/formulari" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Contacte</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.2rem', fontWeight: 700, marginBottom:  '20px', color: '#8BC34A' }}>
            INFORMACIÓ LEGAL
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin:  0, fontFamily: 'Open Sans', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/legal/avis-legal" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Avís legal</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/legal/politica-privacitat" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Política de privacitat</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/legal/politica-cookies" style={{ color:  'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Política de cookies</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link href="/legal/accessibilitat" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>› Accessibilitat</Link>
            </li>
          </ul>
        </div>

        {/* Columna 4 - REDES SOCIALES CON EMOJIS GRANDES */}
        <div>
          <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', color: '#8BC34A' }}>
            SEGUEIX-NOS
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/escolalluismillet2016/?locale=es_ES" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: '#1877F2',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Montserrat',
                fontSize:  '0.95rem',
                fontWeight: 600,
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseLeave={(e) => e.currentTarget. style.transform = 'translateX(0)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.1rem'
              }}>
                f
              </div>
              <span>Facebook</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/ielluismillet/?hl=es" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Montserrat',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget. style.transform = 'translateX(4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display:  'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.1rem'
              }}>
                📷
              </div>
              <span>Instagram</span>
            </a>

            {/* Twitter/X */}
            <a 
              href="https://x.com/EscolaMillet" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: '#000000',
                borderRadius: '8px',
                textDecoration:  'none',
                color:  'white',
                fontFamily: 'Montserrat',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent:  'center',
                fontWeight: 700,
                fontSize:  '1.1rem'
              }}>
                𝕏
              </div>
              <span>Twitter</span>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@petitsmillet3877" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: '#FF0000',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Montserrat',
                fontSize: '0.95rem',
                fontWeight:  600,
                transition: 'transform 0.3s ease',
                boxShadow:  '0 4px 12px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style. transform = 'translateX(4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.2rem'
              }}>
                ▶
              </div>
              <span>YouTube</span>
            </a>

          </div>

          <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            Centre educatiu reconegut per la Generalitat de Catalunya
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Open Sans',
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.6)',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <p style={{ margin: 0 }}>
          © 2026 Col·legi Lluís Millet. Tots els drets reservats.
        </p>
        <p style={{ margin: 0 }}>
          Dissenyat i desenvolupat per <strong style={{ color: '#8BC34A' }}>Jose Ribelles</strong> i <strong style={{ color: '#8BC34A' }}>Lluis Enric</strong>
        </p>
      </div>
    </footer>
  );
}