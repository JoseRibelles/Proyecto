'use client';
import HeroModule from '../modules/HeroModule';
import CardsGridModule from '../modules/CardsGridModule';
import CTAModule from '../modules/CTAModule';

interface ModuleRendererProps {
  modules: any[];
}

export default function ModuleRenderer({ modules }: ModuleRendererProps) {
  console.log('=== MÓDULOS RECIBIDOS ===', modules);

  if (!modules || modules.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Open Sans', color: '#999' }}>
        No hi ha mòduls per mostrar
      </div>
    );
  }

  return (
    <div>
      {modules.map((module, index) => {
        const componentType = module.__component;
        
        console.log(`\n=== MÓDULO ${index} ===`);
        console.log('Tipo:', componentType);
        console.log('Datos completos:', module);
        console.log('Keys:', Object.keys(module));

        try {
          if (componentType === 'modules.hero-section' || componentType === 'modules.herp-section') {
            console.log('Renderizando HeroModule con:', module);
            return (
              <div key={`hero-${index}`}>
                <HeroModule data={module} />
              </div>
            );
          }

          if (componentType === 'modules.tarjetas-grid') {
            console.log('Renderizando CardsGridModule con:', module);
            return (
              <div key={`cards-${index}`}>
                <CardsGridModule data={module} />
              </div>
            );
          }

          if (componentType === 'modules.cta-section') {
            console.log('Renderizando CTAModule con:', module);
            return (
              <div key={`cta-${index}`}>
                <CTAModule data={module} />
              </div>
            );
          }

          console.warn(`Módulo no reconocido: ${componentType}`);
          return (
            <div key={`unknown-${index}`} style={{ padding: '20px', background: '#fff3cd', margin: '10px' }}>
              ⚠️ Componente no reconocido: <code>{componentType}</code>
            </div>
          );
        } catch (error) {
          console.error(`Error renderizando módulo ${index}:`, error);
          return (
            <div key={`error-${index}`} style={{ padding: '20px', background: '#f8d7da', margin: '10px', color: '#721c24' }}>
              ❌ Error renderizando: {componentType}
            </div>
          );
        }
      })}
    </div>
  );
}