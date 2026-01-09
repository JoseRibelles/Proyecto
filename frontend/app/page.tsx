'use client';

import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Nav from '../components/Nav'; // <- volver al Nav normal
import Hero from '../components/Hero';
import { strapiMedia, getStrapiData } from '../lib/strapi';

export default function Home() {
  const [site, setSite] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const json = await getStrapiData('/api/site-setting?populate=*');
        const data = json?.data ?? null;
        const attrs = data?.attributes ?? data ?? null;
        if (attrs?.logo) attrs.logoUrl = strapiMedia(attrs.logo);
        const candidateMedia = attrs?.homeImage ?? attrs?.homeimage ?? attrs?.heroImage ?? attrs?.home;
        if (candidateMedia) attrs.homeImageUrl = strapiMedia(candidateMedia);
        setSite(attrs);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!site) return <div>No site data</div>;

  const heroUrl = site.homeImageUrl ?? site.heroImageUrl ?? null;

  return (
    <>
      <TopBar text={site.topBarText} phone={site.topBarPhones} />
      <Header site={site} />
      <Nav />
      {heroUrl ? <Hero imageUrl={heroUrl} /> : null}
    </>
  );
}