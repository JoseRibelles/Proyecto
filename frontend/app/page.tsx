'use client';

import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import HighlightedCards from '../components/HighlightedCards';
import CallToAction from '../components/CallToAction';
import MapLocation from '../components/MapLocation';
import Footer from '../components/Footer';
import { strapiMedia, getStrapiData } from '../lib/strapi';

export default function Home() {
  const [site, setSite] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // ✅ SIN ESPACIO antes de populate
        const json = await getStrapiData('/api/site-setting?populate=*');
        const data = json?.data ?? null;
        const attrs = data?.attributes ?? data ?? null;
        
        // Convertir logo a URL absoluta
        if (attrs?.logo) attrs.logoUrl = strapiMedia(attrs.logo);
        
        // Buscar homeImage con varios nombres posibles
        const candidateMedia = attrs?.homeImage ?? attrs?.homeimage ?? attrs?.heroImage ?? attrs?.home;
        if (candidateMedia) attrs.homeImageUrl = strapiMedia(candidateMedia);
        
        setSite(attrs);
      } catch (e) {
        console.error('Error conectando con Strapi:', e);
        // Fallback a datos estáticos
        setSite({
          topBarText: 'Carrer Lluís Millet, 22, 08924',
          topBarPhones: '933 913 351 | a8076947@xtec.cat',
          title: 'Col·legi Lluís Millet',
          rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
          logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA',
          homeImageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=400&fit=crop'
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Carregant...</div>;
  if (!site) return <div style={{ padding: '40px', textAlign: 'center' }}>No hi ha dades</div>;

  const heroUrl = site.homeImageUrl ?? site.heroImageUrl ?? 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=400&fit=crop';

  return (
    <>
      <TopBar text={site.topBarText} phone={site.topBarPhones} />
      <Header site={site} />
      <Nav />
      <Hero imageUrl={heroUrl} />
      <HighlightedCards />
      <CallToAction />
      <MapLocation />
      <Footer />
    </>
  );
}