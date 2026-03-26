'use client';

interface SeccionTextoProps {
  data: {
    titulo?: string;
    contenido?: any;
    alineacion?: string;
    colorFondo?: string;
    titol?: string;
    contingut?: any;
    alineacio?: string;
    colorFons?: string;
  };
}

// Opcional: escapado básico para evitar que se cuele HTML en strings
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Convierte Markdown muy simple a HTML y respeta saltos de línea/párrafos
function markdownToHTML(text: string): string {
  if (!text) return '';

  // Normaliza saltos Windows -> Unix
  const normalized = text.replace(/\r\n/g, '\n');

  // 1) Escapar HTML para que no entre HTML crudo desde un string
  let html = escapeHtml(normalized);

  // 2) Formato simple
  html = html
    // Negrita: **texto**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Subrayado: __texto__
    .replace(/__(.+?)__/g, '<u>$1</u>')
    // Cursiva: *texto*
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

  // 3) Párrafos: separación por líneas en blanco
  const paragraphs = html
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    // dentro de cada párrafo, saltos simples -> <br />
    .map((p) => `<p>${p.replace(/\n/g, '<br />')}</p>`);

  return paragraphs.join('');
}

// Función para procesar Rich Text de Strapi
function richTextToHTML(richText: any): string {
  if (!richText) return '';

  // Si es string simple, aplicar markdown + saltos
  if (typeof richText === 'string') {
    return markdownToHTML(richText);
  }

  // Si es array (formato Strapi v4 blocks)
  if (Array.isArray(richText)) {
    return richText
      .map((block: any) => {
        if (block.type === 'paragraph') {
          const children = block.children || [];
          const text = children
            .map((child: any) => {
              let content = escapeHtml(child.text || '');
              if (child.bold) content = `<strong>${content}</strong>`;
              if (child.italic) content = `<em>${content}</em>`;
              if (child.underline) content = `<u>${content}</u>`;
              return content;
            })
            .join('');
          return `<p>${text}</p>`;
        }

        if (block.type === 'heading') {
          const level = block.level || 2;
          const text =
            block.children?.map((c: any) => escapeHtml(c.text || '')).join('') ||
            '';
          return `<h${level}>${text}</h${level}>`;
        }

        if (block.type === 'list') {
          const tag = block.format === 'ordered' ? 'ol' : 'ul';
          const items =
            block.children
              ?.map((item: any) => {
                const text =
                  item.children
                    ?.map((c: any) => escapeHtml(c.text || ''))
                    .join('') || '';
                return `<li>${text}</li>`;
              })
              .join('') || '';
          return `<${tag}>${items}</${tag}>`;
        }

        return '';
      })
      .join('');
  }

  return '';
}

export default function SeccionTexto({ data }: SeccionTextoProps) {
  const titulo = data.titulo || data.titol;
  const contenidoRaw = data.contenido || data.contingut;
  const alineacion = data.alineacion || data.alineacio || 'centre';
  const colorFondo = data.colorFondo || data.colorFons || 'blanc';

  const getAlignment = () => {
    switch (alineacion) {
      case 'esquerra':
      case 'izquierda':
        return 'left';
      case 'centre':
      case 'centro':
        return 'center';
      case 'dreta':
      case 'derecha':
        return 'right';
      default:
        return 'center';
    }
  };

  const getBackgroundColor = () => {
    switch (colorFondo) {
      case 'blanc':
      case 'blanco':
        return '#ffffff';
      case 'gris':
        return '#f5f5f5';
      case 'verd':
      case 'verde':
        return '#f0f4ed';
      default:
        return '#ffffff';
    }
  };

  const alignment = getAlignment();
  const bgColor = getBackgroundColor();
  const contenidoHTML = richTextToHTML(contenidoRaw);

  // Si no hay contenido ni título, no renderizar nada
  if (!titulo && !contenidoHTML) {
    return null;
  }

  return (
    <section
      style={{
        width: '100%',
        padding: '80px 20px',
        background: bgColor,
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: alignment as any,
        }}
      >
        {titulo && (
          <h2
            style={{
              fontFamily: 'Montserrat',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#6D7E4F',
              margin: '0 0 24px',
            }}
          >
            {titulo}
          </h2>
        )}

        {contenidoHTML && (
          <div
            style={{
              fontFamily: 'Open Sans',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#555',
            }}
            dangerouslySetInnerHTML={{ __html: contenidoHTML }}
          />
        )}
      </div>
    </section>
  );
}