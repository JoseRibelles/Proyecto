'use client';
import { useEffect, useState } from 'react';
import { getStrapiData } from '@/lib/strapi';
import ModuleRenderer from '../../components/modules/ModuleRenderer';
import { usePathname } from 'next/navigation';

export default function DinamicPage() {
  const pathname = usePathname();
  const rutaCompleta = pathname.startsWith('/') ? pathname.substring(1) : pathname;
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!rutaCompleta) return;

    (async () => {
      try {
        const populate =
          `&populate[modulos][on][modules.grid-imagen-cards][populate][cards][populate][imagen]=true` +
          `&populate[modulos][on][modules.hero-home-avanzado][populate]=*` +
          `&populate[modulos][on][modules.imagen-texto][populate]=*` +
          `&populate[modulos][on][modules.texto-imagen][populate]=*` +
          `&populate[modulos][on][modules.cta-section][populate]=*` +
          `&populate[modulos][on][modules.hero-avanzado][populate]=*` +
          `&populate[modulos][on][modules.tarjetas-grid][populate]=*` +
          `&populate[modulos][on][modules.acordeon][populate]=*` +
          `&populate[modulos][on][modules.seccion-texto][populate]=*` +
          `&populate[modulos][on][modules.linea-tiempo][populate]=*` +
          `&populate[modulos][on][modules.cta-doble][populate]=*` +
          `&populate[modulos][on][modules.video-incrustado][populate]=*` +
          `&populate[modulos][on][modules.caja-destacada][populate]=*` +
          `&populate[modulos][on][modules.lista-objetivos][populate]=*` +
          `&populate[modulos][on][modules.pestana-contenido][populate]=*` +
          `&populate[modulos][on][modules.cuadricula-estadistica][populate]=*` +
          `&populate[modulos][on][modules.como-llegar][populate]=*` +
          `&populate[modulos][on][modules.grid-imagen-cards-simple][populate]=*` +
          `&populate[modulos][on][modules.herp-section][populate]=*`;

        const response = await getStrapiData(
          `/api/pages?filters[rutaCompleta][$eq]=${rutaCompleta}${populate}`
        );
        let page = response?.data?.[0];

        if (!page) {
          const slug = rutaCompleta.split('/').pop();
          const response2 = await getStrapiData(
            `/api/pages?filters[slug][$eq]=${slug}${populate}`
          );
          page = response2?.data?.[0];
        }

        if (!page) {
          setError('Página no encontrada.');
          return;
        }

        setPageData(page);
      } catch (err: any) {
        console.error('[DinamicPage] Error:', err);
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    })();
  }, [rutaCompleta]);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Carregant...</div>;
  if (error) return <div style={{ padding: '40px', textAlign: 'center', color: '#d32f2f' }}>{error}</div>;
  if (!pageData) return <div style={{ padding: '40px', textAlign: 'center' }}>Pàgina no trobada</div>;

  return <ModuleRenderer modules={pageData.modulos || []} />;
}