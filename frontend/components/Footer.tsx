'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Columna 1: Información del colegio */}
          <div className="footer-column">
            <h3 className="footer-title">Col·legi Lluís Millet</h3>
            <div className="footer-info">
              <p className="footer-text">
                <strong>Adreça:</strong><br />
                Carrer Lluís Millet, 22<br />
                08924 Santa Coloma de Gramenet
              </p>
              <p className="footer-text">
                <strong>Telèfon:</strong><br />
                <a href="tel:933913351">933 913 351</a>
              </p>
              <p className="footer-text">
                <strong>Email:</strong><br />
                <a href="mailto:a8076947@xtec.cat">a8076947@xtec.cat</a>
              </p>
              <p className="footer-text">
                <strong>Horari d'atenció:</strong><br />
                Dilluns a divendres:  9:00 - 13:00h
              </p>
            </div>
          </div>

          {/* Columna 2: Enllaços ràpids */}
          <div className="footer-column">
            <h3 className="footer-title">Enllaços ràpids</h3>
            <ul className="footer-links">
              <li><Link href="/">Inici</Link></li>
              <li><Link href="/escola/projecte-educatiu">El nostre projecte</Link></li>
              <li><Link href="/escola/equip">L'equip educatiu</Link></li>
              <li><Link href="/etapes/infantil">Educació Infantil</Link></li>
              <li><Link href="/etapes/primaria">Educació Primària</Link></li>
              <li><Link href="/comunitat/ampa">AMPA</Link></li>
              <li><Link href="/contacte/formulari">Contacte</Link></li>
            </ul>
          </div>

          {/* Columna 3: Informació legal */}
          <div className="footer-column">
            <h3 className="footer-title">Informació legal</h3>
            <ul className="footer-links">
              <li><Link href="/legal/avis-legal">Avís legal</Link></li>
              <li><Link href="/legal/politica-privacitat">Política de privacitat</Link></li>
              <li><Link href="/legal/politica-cookies">Política de cookies</Link></li>
              <li><Link href="/legal/accessibilitat">Accessibilitat</Link></li>
            </ul>
          </div>

          {/* Columna 4: Xarxes socials */}
          <div className="footer-column">
            <h3 className="footer-title">Segueix-nos</h3>
            <div className="footer-social">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                title="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11. 37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17. 5" y1="6. 5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                title="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>

              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                title="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22. 54 6.42a2. 78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6. 46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 . 46 5.33A2.78 2.78 0 0 0 3.4 19c1.72. 46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 . 46-5.25 29 29 0 0 0-. 46-5.33z"></path>
                  <polygon points="9. 75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            
            <div className="footer-logos">
              <p className="footer-text" style={{ marginTop: '24px', fontSize: '0.85rem' }}>
                Centre educatiu reconegut per la Generalitat de Catalunya
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior de copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="footer-copyright">
            © {currentYear} Col·legi Lluís Millet. Tots els drets reservats.
          </p>
          <p className="footer-credits">
            Dissenyat i desenvolupat per <strong>Jose Ribelles i Lluis Enric</strong>          </p>
        </div>
      </div>
    </footer>
  );
}