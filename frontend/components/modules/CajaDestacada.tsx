'use client';

function markdownToHTML(text: string): string {
  return (text || '')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

function richTextToHTML(value: any): string {
  if (!value) return '';

  if (typeof value === 'string') {
    return `<p>${markdownToHTML(value)}</p>`;
  }

  if (Array.isArray(value)) {
    return value
      .map((block: any) => {
        if (block?.type === 'paragraph') {
          const html = (block.children ?? [])
            .map((c: any) => {
              let t = markdownToHTML(c.text ?? '');
              if (c.bold) t = `<strong>${t}</strong>`;
              if (c.italic) t = `<em>${t}</em>`;
              if (c.underline) t = `<u>${t}</u>`;
              return t;
            })
            .join('');
          return `<p>${html}</p>`;
        }
        return '';
      })
      .join('');
  }

  return '';
}

function getThemeStyles(tema?: string | null) {
  switch (tema) {
    case 'azul':
      return {
        background: 'linear-gradient(135deg, #2f5d86 0%, #3b76aa 100%)',
        iconBg: 'rgba(255,255,255,0.18)',
      };
    case 'naranja':
      return {
        background: 'linear-gradient(135deg, #c26a1b 0%, #d9892c 100%)',
        iconBg: 'rgba(255,255,255,0.18)',
      };
    case 'verde':
    default:
      return {
        background: '#7b8f5a',
        iconBg: 'rgba(255,255,255,0.18)',
      };
  }
}

function isValidHexColor(value?: string | null) {
  if (!value) return false;
  return /^#([0-9A-Fa-f]{3}){1,2}$/.test(value.trim());
}

interface CajaDestacadaProps {
  data: {
    titulo?: string;

    Icono?: string;
    icono?: string;

    descripcion?: any;
    contenido?: any;

    TemaColor?: 'verde' | 'azul' | 'naranja' | null;
    disposicion?: 'icono-izquierda' | 'icono-arriba' | null;

    // <-- ESTO ES LO QUE TE FALTABA
    colorFondo?: string | null;
    colorTexto?: string | null;
  };
}

export default function CajaDestacada({ data }: CajaDestacadaProps) {
  const icon = data.icono ?? data.Icono ?? '';
  const html = richTextToHTML(data.descripcion ?? data.contenido);
  const isIconTop = data.disposicion === 'icono-arriba';

  const theme = getThemeStyles(data.TemaColor);

  // PRIORIDAD: colorFondo si viene desde Strapi
  const background = isValidHexColor(data.colorFondo) ? data.colorFondo!.trim() : theme.background;

  // Opcional: colorTexto configurable
  const textColor = isValidHexColor(data.colorTexto) ? data.colorTexto!.trim() : 'rgba(255,255,255,0.92)';
  const titleColor = isValidHexColor(data.colorTexto) ? data.colorTexto!.trim() : 'white';

  return (
    <section style={{ width: '100%', padding: '60px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            background, // <-- AQUÍ YA CAMBIA CON colorFondo
            color: textColor,
            padding: '56px 56px',
            borderRadius: '18px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            display: 'flex',
            gap: '28px',
            alignItems: isIconTop ? 'flex-start' : 'center',
            flexDirection: isIconTop ? 'column' : 'row',
          }}
        >
          {icon && (
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '18px',
                background: theme.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.2rem',
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
          )}

          <div style={{ flex: 1 }}>
            {data.titulo && (
              <h3
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '2.0rem',
                  fontWeight: 800,
                  margin: '0 0 14px',
                  color: titleColor,
                  lineHeight: 1.1,
                }}
              >
                {data.titulo}
              </h3>
            )}

            {html && (
              <div
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: textColor,
                }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}