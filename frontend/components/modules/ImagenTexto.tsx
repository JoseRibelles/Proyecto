import { strapiMedia } from '@/lib/strapi';
import Link from 'next/link';

export default function ImagenTexto({ data }: any) {
  const imagenUrl = data.imagen ? strapiMedia(data.imagen) : '';
  const isImageLeft = data.posicionImagen === 'izquierda';

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '48px', 
          alignItems: 'center'
        }}>
          {isImageLeft ? (
            <>
              <div>
                {imagenUrl && (
                  <img 
                    src={imagenUrl} 
                    alt={data.titulo} 
                    style={{ 
                      width: '100%', 
                      borderRadius: '12px', 
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)' 
                    }} 
                  />
                )}
              </div>
              <div>
                {data.titulo && (
                  <h3 style={{ 
                    fontFamily: 'Montserrat', 
                    fontSize: '1.8rem', 
                    fontWeight: 700, 
                    color: '#6D7E4F', 
                    margin: '0 0 16px' 
                  }}>
                    {data.titulo}
                  </h3>
                )}
                {data.contenido && (
                  <div 
                    style={{ 
                      fontFamily: 'Open Sans', 
                      fontSize: '1rem', 
                      lineHeight: 1.8, 
                      color: '#555', 
                      marginBottom: data.textoBoton ? '24px' : '0' 
                    }}
                    dangerouslySetInnerHTML={{ __html: data.contenido }}
                  />
                )}
                {data.textoBoton && data.enlaceBoton && (
                  <Link 
                    href={data.enlaceBoton} 
                    style={{ 
                      fontFamily: 'Montserrat', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      padding: '14px 32px', 
                      borderRadius: '8px', 
                      textDecoration: 'none', 
                      background: '#6D7E4F', 
                      color: 'white', 
                      display: 'inline-block' 
                    }}
                  >
                    {data.textoBoton}
                  </Link>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                {data.titulo && (
                  <h3 style={{ 
                    fontFamily: 'Montserrat', 
                    fontSize: '1.8rem', 
                    fontWeight: 700, 
                    color: '#6D7E4F', 
                    margin: '0 0 16px' 
                  }}>
                    {data.titulo}
                  </h3>
                )}
                {data.contenido && (
                  <div 
                    style={{ 
                      fontFamily: 'Open Sans', 
                      fontSize: '1rem', 
                      lineHeight: 1.8, 
                      color: '#555', 
                      marginBottom: data.textoBoton ? '24px' : '0' 
                    }}
                    dangerouslySetInnerHTML={{ __html: data.contenido }}
                  />
                )}
                {data.textoBoton && data.enlaceBoton && (
                  <Link 
                    href={data.enlaceBoton} 
                    style={{ 
                      fontFamily: 'Montserrat', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      padding: '14px 32px', 
                      borderRadius: '8px', 
                      textDecoration: 'none', 
                      background: '#6D7E4F', 
                      color: 'white', 
                      display: 'inline-block' 
                    }}
                  >
                    {data.textoBoton}
                  </Link>
                )}
              </div>
              <div>
                {imagenUrl && (
                  <img 
                    src={imagenUrl} 
                    alt={data.titulo} 
                    style={{ 
                      width: '100%', 
                      borderRadius: '12px', 
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)' 
                    }} 
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}