import type { Schema, Struct } from '@strapi/strapi';

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
    subtitulo: Schema.Attribute.String & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.card-item': ElementsCardItem;
      'elements.objetivo-block': ElementsObjetivoBlock;
      'modules.cta-section': ModulesCtaSection;
      'modules.herp-section': ModulesHerpSection;
      'modules.lista-objetivos': ModulesListaObjetivos;
      'modules.tarjetas-grid': ModulesTarjetasGrid;
      'modules.texto-imagen': ModulesTextoImagen;
    }
  }
}
