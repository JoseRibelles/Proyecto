'use client';

import { useEffect, useState } from 'react';
import { getStrapiData } from '@/lib/strapi';
import ModuleRenderer from '../../components/modules/ModuleRenderer';
import { usePathname } from 'next/navigation';

export default function DinamicPage() {
  const pathname = usePathname();
  // pathname será algo como "/etapes/infantil/objectius-etapa"
  // Quitamos la primera barra
  const rutaCompleta = pathname.startsWith('/') ? pathname.substring(1) : pathname;
  
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!rutaCompleta) return;

    (async () => {
      try {
        // Buscar por rutaCompleta
        const response = await getStrapiData(
          `/api/pages?filters[rutaCompleta][$eq]=${rutaCompleta}&populate[modulos][populate]=*`
        );
        
        let page = response?.data?.[0];
        
        // Si no se encuentra por rutaCompleta, buscar por slug simple (compatibilidad)
        if (!page) {
          const slug = rutaCompleta.split('/').pop(); // Obtener la última parte
          const response2 = await getStrapiData(
            `/api/pages?filters[slug][$eq]=${slug}&populate[modulos][populate]=*`
          );
          page = response2?.data?.[0];
        }
        
        if (!page) {
          setError('Página no encontrada.');
          return;
        }
        
        setPageData(page);
      } catch (error: any) {
        console.error('Error cargando página:', error);
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    })();
  }, [rutaCompleta]);

  if (loading) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        fontFamily: 'Open Sans', 
        fontSize: '1.2rem', 
        color: '#6D7E4F' 
      }}>
        Carregant...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        fontFamily: 'Open Sans',
        color: '#d32f2f'
      }}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        fontFamily: 'Open Sans' 
      }}>
        Pàgina no trobada
      </div>
    );
  }

  console.log('📦 DATOS COMPLETOS:', pageData);
pageData.modulos?.forEach((modulo: any, index: number) => {
  console.log(`📦 Módulo ${index}:`, modulo.__component, modulo);
});

return <ModuleRenderer modules={pageData.modulos || []} />;
}