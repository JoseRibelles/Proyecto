/**
 * Script de importación automática de menú completo para Strapi
 * Uso: node scripts/import-menu. js
 * 
 * Requisitos:
 * 1. Strapi corriendo en http://localhost:1337
 * 2. API Token con permisos de create en Menu (Settings → API Tokens)
 * 3. Pegar el token en la variable API_TOKEN abajo
 */

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = '56d4aaa96f6b0c3f8ab9a0b0bd66781c7de7bd6325052fae623f7a3aa94fe3cff2888db1eb2a557d1ca760e36bfb935f0c1909056deb8bba67016c46b483ea3ba1120654f2df0c6e108ac37a18e46597d055903ff563499693b27521c864f5c66913570530e8225dbbb0f2dea4139864d67d8b388b03e8eca608de7dd0bc1d69';

// Organigrama completo con jerarquía correcta (93 items)
const menuData = [
  // Nivel 1 (raíz)
  { id: 1, title: 'Inici', slug: '/', order: 1, parent:  null },
  
  { id: 2, title: "L'Escola", slug: '/lescola', order: 2, parent: null },
  { id: 19, title: 'Etapes Educatives', slug: '/etapes', order: 3, parent: null },
  { id: 36, title: 'Vida Escolar', slug: '/vida-escolar', order: 4, parent: null },
  { id: 51, title: 'Comunitat', slug: '/comunitat', order: 5, parent: null },
  { id: 60, title: 'Serveis i Recursos', slug: '/serveis', order: 6, parent: null },
  { id:  73, title: 'Admissió i Secretaria', slug: '/admissio', order: 7, parent: null },
  { id: 85, title: 'Contacte', slug: '/contacte', order: 8, parent: null },
  
  // L'Escola - nivel 2
  { id: 3, title: 'Qui som', slug: '/lescola/qui-som', order: 1, parent: 2 },
  { id: 7, title: 'Equip docent', slug: '/lescola/equip-docent', order: 2, parent:  2 },
  { id: 11, title: 'Projecte Educatiu', slug: '/lescola/projecte-educatiu', order:  3, parent: 2 },
  { id: 15, title: 'Premis i reconeixements', slug: '/lescola/premis', order: 4, parent: 2 },
  
  // Qui som - nivel 3
  { id: 4, title: 'Història del centre', slug: '/lescola/qui-som/historia', order: 1, parent: 3 },
  { id:  5, title: 'Missió, visió i valors', slug: '/lescola/qui-som/missio', order: 2, parent: 3 },
  { id:  6, title: 'Identitat i filosofia educativa', slug: '/lescola/qui-som/identitat', order: 3, parent:  3 },
  
  // Equip docent - nivel 3
  { id: 8, title: 'Professorat per etapes', slug: '/lescola/equip-docent/professorat', order: 1, parent: 7 },
  { id: 9, title: 'Equip directiu', slug: '/lescola/equip-docent/directiu', order: 2, parent: 7 },
  { id: 10, title: "Personal d'administració i serveis", slug: '/lescola/equip-docent/pas', order: 3, parent: 7 },
  
  // Projecte Educatiu - nivel 3
  { id: 12, title: 'Metodologia i enfocament pedagògic', slug: '/lescola/projecte-educatiu/metodologia', order: 1, parent: 11 },
  { id:  13, title: 'Competències clau i aprenentatge competencial', slug: '/lescola/projecte-educatiu/competencies', order: 2, parent:  11 },
  { id: 14, title: 'Inclusió i atenció a la diversitat', slug: '/lescola/projecte-educatiu/inclusio', order: 3, parent: 11 },
  
  // Premis i reconeixements - nivel 3
  { id: 16, title: 'Premis acadèmics', slug: '/lescola/premis/academics', order: 1, parent:  15 },
  { id: 17, title: 'Projectes destacats', slug:  '/lescola/premis/projectes', order: 2, parent: 15 },
  { id: 18, title: 'Reconeixements institucionals', slug: '/lescola/premis/institucionals', order: 3, parent: 15 },
  
  // Etapes Educatives - nivel 2
  { id: 20, title: 'Educació Infantil', slug: '/etapes/infantil', order: 1, parent: 19 },
  { id: 24, title: 'Educació Primària', slug: '/etapes/primaria', order: 2, parent: 19 },
  { id: 28, title: 'Educació Secundària (ESO)', slug: '/etapes/eso', order: 3, parent: 19 },
  { id: 32, title: "Projectes d'Innovació", slug: '/etapes/innovacio', order:  4, parent: 19 },
  
  // Educació Infantil - nivel 3
  { id: 21, title: "Objectius d'etapa", slug: '/etapes/infantil/objectius', order: 1, parent: 20 },
  { id: 22, title: 'Projectes i activitats', slug: '/etapes/infantil/projectes', order: 2, parent: 20 },
  { id:  23, title: 'Equip docent', slug: '/etapes/infantil/equip', order: 3, parent: 20 },
  
  // Educació Primària - nivel 3
  { id: 25, title: 'Metodologies i projectes', slug: '/etapes/primaria/metodologies', order: 1, parent:  24 },
  { id: 26, title: 'Competències bàsiques', slug: '/etapes/primaria/competencies', order: 2, parent: 24 },
  { id: 27, title: 'Avaluació i seguiment', slug: '/etapes/primaria/avaluacio', order: 3, parent: 24 },
  
  // Educació Secundària (ESO) - nivel 3
  { id: 29, title: 'Projectes transversals', slug: '/etapes/eso/projectes', order: 1, parent: 28 },
  { id: 30, title: 'Orientació acadèmica i personal', slug: '/etapes/eso/orientacio', order: 2, parent: 28 },
  { id: 31, title:  'Activitats complementàries', slug: '/etapes/eso/activitats', order: 3, parent: 28 },
  
  // Projectes d'Innovació - nivel 3
  { id: 33, title: 'Aprenentatge basat en projectes (ABP)', slug: '/etapes/innovacio/abp', order: 1, parent: 32 },
  { id: 34, title: 'TIC i robòtica educativa', slug: '/etapes/innovacio/tic', order:  2, parent: 32 },
  { id: 35, title: 'Educació emocional i valors', slug: '/etapes/innovacio/emocional', order: 3, parent:  32 },
  
  // Vida Escolar - nivel 2
  { id: 37, title: 'Activitats i sortides', slug: '/vida-escolar/activitats', order: 1, parent: 36 },
  { id: 40, title: 'Celebracions i tradicions', slug: '/vida-escolar/celebracions', order: 2, parent:  36 },
  { id: 44, title: 'Galeria multimèdia', slug:  '/vida-escolar/galeria', order: 3, parent:  36 },
  { id: 47, title: "Blog d'aula", slug: '/vida-escolar/blog', order: 4, parent: 36 },
  
  // Activitats i sortides - nivel 3
  { id: 38, title: 'Excursions i colònies', slug: '/vida-escolar/activitats/excursions', order: 1, parent: 37 },
  { id: 39, title: 'Tallers i activitats internes', slug: '/vida-escolar/activitats/tallers', order: 2, parent: 37 },
  
  // Celebracions i tradicions - nivel 3
  { id: 41, title: 'Festes de centre', slug: '/vida-escolar/celebracions/festes', order: 1, parent:  40 },
  { id: 42, title: 'Setmana cultural', slug: '/vida-escolar/celebracions/setmana-cultural', order: 2, parent: 40 },
  { id: 43, title: 'Diades i commemoracions', slug: '/vida-escolar/celebracions/diades', order: 3, parent: 40 },
  
  // Galeria multimèdia - nivel 3
  { id: 45, title: 'Fotos', slug: '/vida-escolar/galeria/fotos', order: 1, parent: 44 },
  { id: 46, title: 'Vídeos', slug: '/vida-escolar/galeria/videos', order: 2, parent: 44 },
  
  // Blog d'aula - nivel 3
  { id: 48, title: 'Infantil', slug: '/vida-escolar/blog/infantil', order: 1, parent: 47 },
  { id: 49, title: 'Primària', slug: '/vida-escolar/blog/primaria', order: 2, parent: 47 },
  { id: 50, title: 'Secundària', slug: '/vida-escolar/blog/secundaria', order: 3, parent: 47 },
  
  // Comunitat - nivel 2
  { id: 52, title: 'Famílies i AFA', slug: '/comunitat/families', order: 1, parent:  51 },
  { id: 56, title: 'Treballa amb nosaltres', slug: '/comunitat/treballa', order:  2, parent: 51 },
  
  // Famílies i AFA - nivel 3
  { id: 53, title: 'Objectius i funcions', slug: '/comunitat/families/objectius', order: 1, parent:  52 },
  { id: 54, title: 'Activitats familiars', slug: '/comunitat/families/activitats', order: 2, parent: 52 },
  { id: 55, title: 'Participació i voluntariat', slug: '/comunitat/families/participacio', order: 3, parent: 52 },
  
  // Treballa amb nosaltres - nivel 3
  { id: 57, title:  'Ofertes laborals', slug: '/comunitat/treballa/ofertes', order: 1, parent: 56 },
  { id: 58, title: 'Formulari de candidatura', slug: '/comunitat/treballa/formulari', order:  2, parent: 56 },
  { id: 59, title: 'Pràctiques i col·laboracions', slug: '/comunitat/treballa/practiques', order: 3, parent: 56 },
  
  // Serveis i Recursos - nivel 2
  { id: 61, title: 'Menjador i acollida', slug: '/serveis/menjador', order: 1, parent: 60 },
  { id: 65, title: 'Documentació i descàrregues', slug: '/serveis/documentacio', order: 2, parent: 60 },
  { id:  69, title: 'Intranet / ClickEdu', slug: '/serveis/intranet', order: 3, parent: 60 },
  
  // Menjador i acollida - nivel 3
  { id: 62, title: 'Menú mensual', slug: '/serveis/menjador/menu', order: 1, parent: 61 },
  { id:  63, title: 'Horaris i funcionament', slug:  '/serveis/menjador/horaris', order: 2, parent: 61 },
  { id: 64, title: 'Equip de monitoratge', slug: '/serveis/menjador/equip', order:  3, parent: 61 },
  
  // Documentació i descàrregues - nivel 3
  { id:  66, title: 'Autoritzacions i permisos', slug: '/serveis/documentacio/autoritzacions', order:  1, parent: 65 },
  { id: 67, title: 'Normatives del centre', slug: '/serveis/documentacio/normatives', order:  2, parent: 65 },
  { id: 68, title: 'Informes i formularis', slug: '/serveis/documentacio/informes', order:  3, parent: 65 },
  
  // Intranet / ClickEdu - nivel 3
  { id:  70, title: 'Accés famílies', slug: '/serveis/intranet/families', order: 1, parent:  69 },
  { id: 71, title: 'Accés professorat', slug: '/serveis/intranet/professorat', order: 2, parent:  69 },
  { id: 72, title: "Manual d'ús", slug: '/serveis/intranet/manual', order: 3, parent:  69 },
  
  // Admissió i Secretaria - nivel 2
  { id: 74, title: 'Preinscripció i matrícula', slug: '/admissio/preinscripcio', order: 1, parent: 73 },
  { id: 78, title: 'Calendari escolar', slug: '/admissio/calendari', order: 2, parent: 73 },
  { id: 81, title: 'FAQ i tràmits', slug: '/admissio/faq', order: 3, parent: 73 },
  
  // Preinscripció i matrícula - nivel 3
  { id:  75, title: 'Informació general', slug: '/admissio/preinscripcio/info', order: 1, parent:  74 },
  { id: 76, title: 'Calendari i terminis', slug: '/admissio/preinscripcio/calendari', order: 2, parent: 74 },
  { id: 77, title:  'Formularis i documentació', slug: '/admissio/preinscripcio/formularis', order: 3, parent:  74 },
  
  // Calendari escolar - nivel 3
  { id: 79, title: 'Horari del curs', slug: '/admissio/calendari/horari', order: 1, parent: 78 },
  { id: 80, title: 'Dies festius i períodes lectius', slug: '/admissio/calendari/festius', order: 2, parent: 78 },
  
  // FAQ i tràmits - nivel 3
  { id: 82, title: 'Preguntes freqüents', slug: '/admissio/faq/preguntes', order: 1, parent: 81 },
  { id: 83, title: 'Tràmits online', slug: '/admissio/faq/tramits', order: 2, parent: 81 },
  { id: 84, title: 'Contacte secretaria', slug: '/admissio/faq/contacte', order: 3, parent: 81 },
  
  // Contacte - nivel 2
  { id:  86, title: 'Formulari de contacte', slug: '/contacte/formulari', order:  1, parent: 85 },
  { id: 87, title: 'Xarxes socials', slug: '/contacte/xarxes', order: 2, parent: 85 },
  { id: 91, title: 'Ubicació i mapa', slug: '/contacte/ubicacio', order: 3, parent: 85 },
  
  // Xarxes socials - nivel 3
  { id: 88, title: 'Instagram', slug: 'https://instagram.com/escola', order: 1, parent:  87 },
  { id: 89, title: 'Facebook', slug: 'https://facebook.com/escola', order: 2, parent: 87 },
  { id: 90, title: 'YouTube', slug: 'https://youtube.com/escola', order: 3, parent: 87 },
  
  // Ubicació i mapa - nivel 3
  { id: 92, title: 'Com arribar', slug: '/contacte/ubicacio/com-arribar', order: 1, parent: 91 },
  { id: 93, title: "Horaris d'atenció", slug: '/contacte/ubicacio/horaris', order: 2, parent: 91 },
];

// Función para calcular profundidad (nivel jerárquico)
function getDepth(id, data) {
  const item = data.find(i => i.id === id);
  if (!item || !item.parent) return 0;
  return 1 + getDepth(item.parent, data);
}

// Función principal de importación
async function importMenu() {
  console.log('🚀 Iniciando importación de menú...\n');
  
  if (API_TOKEN === 'TU_API_TOKEN_AQUI') {
    console.error('❌ ERROR:  Debes pegar tu API Token en la línea 13 del script.');
    console.error('   Ve a Strapi Admin → Settings → API Tokens → Create new API Token');
    console.error('   Token type: Full access, luego copia y pega el token.\n');
    process.exit(1);
  }

  const idMap = {}; // mapa de id temporal → documentId real de Strapi
  const created = [];
  const errors = [];

  // Ordenar por profundidad (padres primero)
  const sorted = [... menuData].sort((a, b) => {
    const aDepth = getDepth(a.id, menuData);
    const bDepth = getDepth(b.id, menuData);
    if (aDepth !== bDepth) return aDepth - bDepth;
    return a.order - b. order;
  });

  console.log(`📋 Total de items a crear: ${sorted.length}\n`);

  for (const item of sorted) {
    try {
      const payload = {
        title: item.title,
        slug: item.slug,
        order: item.order,
        showInMenu: true,
      };

      // Si tiene parent, vincular al documentId real del padre
      if (item.parent) {
        const parentDocId = idMap[item.parent];
        if (parentDocId) {
          payload.menu = parentDocId;
        } else {
          console.warn(`⚠️  Parent no encontrado para "${item.title}" (parent ID: ${item.parent})`);
        }
      }

      const res = await fetch(`${STRAPI_URL}/api/menus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ data: payload }),
      });

      if (!res.ok) {
        const errText = await res.text();
        errors.push({ item: item.title, error: errText });
        console.error(`❌ Error creando "${item.title}": ${res.status} ${res.statusText}`);
        continue;
      }

      const json = await res.json();
      const docId = json.data?. documentId || json.data?.id;
      
      if (! docId) {
        errors.push({ item: item.title, error: 'No se recibió documentId' });
        console.error(`❌ "${item.title}": respuesta sin documentId`);
        continue;
      }

      idMap[item.id] = docId;
      created.push(item. title);
      
      const indent = '  '.repeat(getDepth(item.id, menuData));
      console.log(`${indent}✓ ${item.title}`);

    } catch (e) {
      errors.push({ item: item.title, error: e.message });
      console.error(`❌ Excepción con "${item.title}": `, e.message);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Total creados: ${created.length}/${menuData.length}`);
  if (errors.length) {
    console.log(`❌ Errores:  ${errors.length}`);
    console.log('\nDetalles de errores:');
    errors.forEach(e => console.log(`  - ${e.item}: ${e. error}`));
  }
  console.log(`${'='.repeat(60)}\n`);
}

// Ejecutar
importMenu().catch(err => {
  console.error('❌ Error fatal:', err);
  process.exit(1);
});
