import HeroSection from './HeroSection';
import TarjetasGrid from './TarjetasGrid';
import CtaSection from './CtaSection';
import SeccionTexto from './SeccionTexto';
import CajaDestacada from './CajaDestacada';
import ImagenTexto from './ImagenTexto';
import LineaTiempo from './LineaTiempo';
import Acordeon from './Acordeon';
import CuadriculaEstadisticas from './CuadriculaEstadisticas';
import Galeria from './Galeria';
import VideoIncrustado from './VideoIncrustado';
import PestanasContenido from './PestanasContenido';
import MapaUbicacion from './MapaUbicacion';
import SeccionBienvenida from './SeccionBienvenida';
import HeroAvanzado from './HeroAvanzado';
import ListaObjetivos from './ListaObjetivos';

export default function ModuleRenderer({ modules }: { modules: any[] }) {
  if (!modules || modules.length === 0) {
    return null;
  }

  return (
    <>
      {modules.map((module, index) => {
        const componentType = module.__component;

        switch (componentType) {
          case 'modules.hero-section':
            return <HeroSection key={index} data={module} />;
          
    

case 'modules.herp-section':  // ← Typo temporal hasta que lo arregles en Strapi
  return <HeroSection key={index} data={module} />;

          case 'modules.tarjetas-grid':
            return <TarjetasGrid key={index} data={module} />;
          
          case 'modules.cta-section':
            return <CtaSection key={index} data={module} />;
          
          case 'modules.seccion-texto':
            return <SeccionTexto key={index} data={module} />;
          
          case 'modules.caja-destacada':
            return <CajaDestacada key={index} data={module} />;
          
          case 'modules.imagen-texto':
            return <ImagenTexto key={index} data={module} />;
          
          case 'modules.linea-tiempo':
            return <LineaTiempo key={index} data={module} />;
          
          case 'modules.acordeon':
            return <Acordeon key={index} data={module} />;
          
          case 'modules.cuadricula-estadisticas':
            return <CuadriculaEstadisticas key={index} data={module} />;
          
          case 'modules.galeria':
            return <Galeria key={index} data={module} />;
          
          case 'modules.video-incrustado':
            return <VideoIncrustado key={index} data={module} />;
          
          case 'modules.pestanas-contenido':
            return <PestanasContenido key={index} data={module} />;
          
          case 'modules.mapa-ubicacion':
            return <MapaUbicacion key={index} data={module} />;
          
          case 'modules.seccion-bienvenida':
            return <SeccionBienvenida key={index} data={module} />;
          
          case 'modules.hero-avanzado':
            return <HeroAvanzado key={index} data={module} />;
          
          case 'modules.lista-objetivos':
          return <ListaObjetivos key={index} data={module} />;

          default:
            console.warn(`Módulo desconocido: ${componentType}`);
            return null;
        }
      })}
    </>
  );
}