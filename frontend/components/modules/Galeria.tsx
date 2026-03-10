import { strapiMedia } from '@/lib/strapi';

export default function Galeria({ data }: any) {
  const getColumns = () => {
    switch(data.columnas) {
      case 'col2': return 'repeat(2, 1fr)';
      case 'col3': return 'repeat(3, 1fr)';
      case 'col4': return 'repeat(4, 1fr)';
      default: return 'repeat(3, 1fr)';
    }
  };

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {data.titulo && (
          <h2 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '2rem', 
            fontWeight: 700, 
            color: '#6D7E4F', 
            textAlign: 'center', 
            margin: '0 0 48px' 
          }}>
            {data.titulo}
          </h2>
        )}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: getColumns(), 
          gap: '16px' 
        }}>
          {data.imagenes && data.imagenes.map((imagen: any, index: number) => (
            <div 
              key={index}
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={strapiMedia(imagen)} 
                alt={`Imagen ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '250px', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}