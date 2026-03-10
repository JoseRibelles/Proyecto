'use client';

import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { getStrapiData, strapiMedia } from '../lib/strapi';

import '../styles/globals.css';
import '../styles/menu.css';
import '../styles/hero.css';
import '../styles/highlighted-cards.css';
import '../styles/call-to-action.css';
import '../styles/map-location.css';
import '../styles/footer.css';
import '../styles/legal-pages.css';
import '../styles/content-pages.css';

const fallbackSite = {
  topBarText: 'Carrer Lluís Millet, 22, 08924',
  topBarPhones: '933 913 351 | a8076947@xtec.cat',
  title: 'Col·legi Lluís Millet',
  rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
  logoUrl: 'https://via.placeholder.com/150x80/4CAF50/ffffff?text=LOGO',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [site, setSite] = useState<any>(fallbackSite);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const fetchSiteSettings = async () => {
      try {
        console.log('🔄 Cargando configuración del sitio...');
        
        const json = await getStrapiData('/api/site-setting?populate=*');
        
        console.log('✅ Respuesta de Strapi:', json);
        
        const data = json?.data ?? null;
        const attrs = data?.attributes ?? data ?? null;
        
        if (attrs && mounted) {
          if (attrs.logo) {
            attrs.logoUrl = strapiMedia(attrs.logo);
          }
          
          console.log('✅ Configuración cargada:', attrs);
          setSite(attrs);
        } else if (mounted) {
          console.warn('⚠️ No se encontró configuración, usando fallback');
          setSite(fallbackSite);
        }
      } catch (error: any) {
        console.error('❌ Error cargando configuración del sitio:', error);
        console.error('Detalles:', error.message);
        
        if (mounted) {
          setSite(fallbackSite);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchSiteSettings();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <html lang="ca">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {loading ? (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1.2rem',
            color: '#6D7E4F'
          }}>
            Carregant...
          </div>
        ) : (
          <>
            <TopBar text={site.topBarText} phone={site.topBarPhones} />
            <Header site={site} />
            <Nav />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}