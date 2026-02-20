'use client';
import { useEffect, useState } from 'react';
import { getStrapiData } from '@/lib/strapi';
import ModuleRenderer from '../../../components/modules/ModuleRenderer';

export default function ProjecteEducatiu() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // Populate nivel por nivel
        const response = await getStrapiData(
          '/api/pages?filters[slug][$eq]=projecte-educatiu&populate[modulos][populate]=*'
        );
        
        console.log('Response completa:', response);
        
        const page = response?.data?.[0];
        
        if (!page) {
          setError('Pàgina no trobada.');
          return;
        }
        
        console.log('Página encontrada:', page);
        console.log('Módulos:', page.modulos);
        
        setPageData(page);
      } catch (error: any) {
        console.error('Error cargando página:', error);
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

  return <ModuleRenderer modules={pageData.modulos || []} />;
}