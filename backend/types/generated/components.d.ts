import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBotonDestacado extends Struct.ComponentSchema {
  collectionName: 'components_elements_boton_destacados';
  info: {
    displayName: 'Boton Destacado';
  };
  attributes: {
    enlace: Schema.Attribute.String;
    estilo: Schema.Attribute.Enumeration<['primario', 'secundario']>;
    icono: Schema.Attribute.String;
    textoPrincipal: Schema.Attribute.String;
    textoSecundario: Schema.Attribute.String;
  };
}

export interface ElementsCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_items';
  info: {
    displayName: 'Card Item';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    enlace: Schema.Attribute.String;
    icono: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsElementoAcordeon extends Struct.ComponentSchema {
  collectionName: 'components_elements_elemento_acordeons';
  info: {
    displayName: 'Elemento Acordeon';
  };
  attributes: {
    pregunta: Schema.Attribute.String;
    respuesta: Schema.Attribute.RichText;
  };
}

export interface ElementsElementoEstadistica extends Struct.ComponentSchema {
  collectionName: 'components_elements_elemento_estadisticas';
  info: {
    displayName: 'Elemento Estadistica';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    icono: Schema.Attribute.String;
    numero: Schema.Attribute.String;
  };
}

export interface ElementsElementoObjetivo extends Struct.ComponentSchema {
  collectionName: 'components_elements_elemento_objetivos';
  info: {
    displayName: 'Elemento Objetivo';
  };
  attributes: {
    colorIcono: Schema.Attribute.Enumeration<
      ['rojo', 'verde', 'azul', 'naranja', 'morado', 'amarillo']
    >;
    descripcion: Schema.Attribute.String;
    icono: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ElementsElementoPestana extends Struct.ComponentSchema {
  collectionName: 'components_elements_elemento_pestanas';
  info: {
    displayName: 'Elemento Pestana';
  };
  attributes: {
    contenido: Schema.Attribute.RichText;
    icono: Schema.Attribute.String;
    tituloPestana: Schema.Attribute.String;
  };
}

export interface ElementsObjetivoBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_objetivo_blocks';
  info: {
    displayName: 'Objetivo Block';
  };
  attributes: {
    colorFondo: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#f9fdf5'>;
    icono: Schema.Attribute.String;
    items: Schema.Attribute.Text;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPasoTImeline extends Struct.ComponentSchema {
  collectionName: 'components_elements_paso_t_imelines';
  info: {
    displayName: 'PasoTImeline';
  };
  attributes: {
    descripcion: Schema.Attribute.RichText;
    numeroPaso: Schema.Attribute.Integer;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesAcordeon extends Struct.ComponentSchema {
  collectionName: 'components_modules_acordeons';
  info: {
    displayName: 'Acordeon';
  };
  attributes: {
    elementos: Schema.Attribute.Component<'elements.elemento-acordeon', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesCajaDestacada extends Struct.ComponentSchema {
  collectionName: 'components_modules_caja_destacadas';
  info: {
    displayName: 'Caja Destacada';
  };
  attributes: {
    descripcion: Schema.Attribute.RichText;
    disposicion: Schema.Attribute.Enumeration<
      ['icono-izquierda', 'icono-arriba']
    >;
    estiloFondo: Schema.Attribute.Enumeration<['solido', 'gradiente']>;
    Icono: Schema.Attribute.String;
    TemaColor: Schema.Attribute.Enumeration<['verde', 'azul', 'naranja']>;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_modules_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    boton1Texto: Schema.Attribute.String;
    boton1URL: Schema.Attribute.String;
    boton2Texto: Schema.Attribute.String;
    boton2URL: Schema.Attribute.String;
    colorFondo: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<' #6D7E4F'>;
    colorTexto: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#ffffff'>;
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ModulesCuadriculaEstadistica extends Struct.ComponentSchema {
  collectionName: 'components_modules_cuadricula_estadisticas';
  info: {
    displayName: 'Cuadricula Estadistica';
  };
  attributes: {
    columnas: Schema.Attribute.Enumeration<['col2', 'col3', 'col4']>;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesHeroAvanzado extends Struct.ComponentSchema {
  collectionName: 'components_modules_hero_avanzados';
  info: {
    displayName: 'Hero Avanzado';
  };
  attributes: {
    botones: Schema.Attribute.Component<'elements.boton-destacado', true>;
    descripcion: Schema.Attribute.RichText;
    iconoBadge: Schema.Attribute.String;
    imagenFondo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mostrarBadge: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtextoBadge: Schema.Attribute.String;
    textoBadge: Schema.Attribute.String;
    TituloDestacado: Schema.Attribute.String;
    tituloLinea1: Schema.Attribute.String;
  };
}

export interface ModulesHerpSection extends Struct.ComponentSchema {
  collectionName: 'components_modules_herp_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'arrowUp';
  };
  attributes: {
    botonTexto: Schema.Attribute.String;
    botonURL: Schema.Attribute.String;
    colorFondo: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#6D7E4F'>;
    descripcion: Schema.Attribute.Blocks;
    imagen: Schema.Attribute.Media<'images'>;
    mostrarBreadcrumbs: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitulo: Schema.Attribute.String & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ModulesImagenTexto extends Struct.ComponentSchema {
  collectionName: 'components_modules_imagen_textos';
  info: {
    displayName: 'Imagen+Texto';
  };
  attributes: {
    Contenido: Schema.Attribute.RichText;
    EnlaceBoton: Schema.Attribute.String;
    Imagen: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    PosicionImagen: Schema.Attribute.Enumeration<['izquierda', 'derecha']>;
    TextoBoton: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesLineaTiempo extends Struct.ComponentSchema {
  collectionName: 'components_modules_linea_tiempos';
  info: {
    displayName: 'LineaTiempo';
  };
  attributes: {
    pasos: Schema.Attribute.Component<'elements.paso-t-imeline', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesListaObjetivos extends Struct.ComponentSchema {
  collectionName: 'components_modules_lista_objetivos';
  info: {
    displayName: 'Lista Objetivos';
  };
  attributes: {
    bloques: Schema.Attribute.Component<'elements.objetivo-block', true>;
    columas: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    tituloSeccion: Schema.Attribute.String;
  };
}

export interface ModulesPestanaContenido extends Struct.ComponentSchema {
  collectionName: 'components_modules_pestana_contenidos';
  info: {
    displayName: 'Pestana Contenido';
  };
  attributes: {
    pestanas: Schema.Attribute.Component<'elements.elemento-pestana', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesSeccionTexto extends Struct.ComponentSchema {
  collectionName: 'components_modules_seccion_textos';
  info: {
    displayName: 'Secci\u00F3n Texto';
  };
  attributes: {
    alineacion: Schema.Attribute.Enumeration<
      ['izquierda ', 'centro', 'derecha']
    >;
    colorFondo: Schema.Attribute.Enumeration<['blanco', 'gris', 'verde']>;
    contenido: Schema.Attribute.RichText;
    titulo: Schema.Attribute.String;
  };
}

export interface ModulesTarjetasGrid extends Struct.ComponentSchema {
  collectionName: 'components_modules_tarjetas_grids';
  info: {
    displayName: 'Tarjetas Grid';
  };
  attributes: {
    columnas: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    tarjetas: Schema.Attribute.Component<'elements.card-item', true>;
    tituloSeccion: Schema.Attribute.String;
  };
}

export interface ModulesTextoImagen extends Struct.ComponentSchema {
  collectionName: 'components_modules_texto_imagens';
  info: {
    displayName: 'Texto Imagen';
  };
  attributes: {
    fondoColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#ffffff'>;
    imagen: Schema.Attribute.Media<'images' | 'files'>;
    posicion: Schema.Attribute.Enumeration<['izquierda', 'derecha']> &
      Schema.Attribute.DefaultTo<'izquierda'>;
    texto: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ModulesVideoIncrustado extends Struct.ComponentSchema {
  collectionName: 'components_modules_video_incrustados';
  info: {
    displayName: 'Video Incrustado';
  };
  attributes: {
    descripcion: Schema.Attribute.RichText;
    titulo: Schema.Attribute.String;
    urlVideo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.boton-destacado': ElementsBotonDestacado;
      'elements.card-item': ElementsCardItem;
      'elements.elemento-acordeon': ElementsElementoAcordeon;
      'elements.elemento-estadistica': ElementsElementoEstadistica;
      'elements.elemento-objetivo': ElementsElementoObjetivo;
      'elements.elemento-pestana': ElementsElementoPestana;
      'elements.objetivo-block': ElementsObjetivoBlock;
      'elements.paso-t-imeline': ElementsPasoTImeline;
      'modules.acordeon': ModulesAcordeon;
      'modules.caja-destacada': ModulesCajaDestacada;
      'modules.cta-section': ModulesCtaSection;
      'modules.cuadricula-estadistica': ModulesCuadriculaEstadistica;
      'modules.hero-avanzado': ModulesHeroAvanzado;
      'modules.herp-section': ModulesHerpSection;
      'modules.imagen-texto': ModulesImagenTexto;
      'modules.linea-tiempo': ModulesLineaTiempo;
      'modules.lista-objetivos': ModulesListaObjetivos;
      'modules.pestana-contenido': ModulesPestanaContenido;
      'modules.seccion-texto': ModulesSeccionTexto;
      'modules.tarjetas-grid': ModulesTarjetasGrid;
      'modules.texto-imagen': ModulesTextoImagen;
      'modules.video-incrustado': ModulesVideoIncrustado;
    }
  }
}
