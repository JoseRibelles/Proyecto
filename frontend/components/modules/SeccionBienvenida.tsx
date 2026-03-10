import { strapiMedia } from '@/lib/strapi';
import Link from 'next/link';

export default function SeccionBienvenida({ data }: any) {
  const imagenUrl = data.imagen ? strapiMedia(data.imagen) : '';
  const isImageLeft = data.posicionImagen === 'izquierda';

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
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
                      borderRadius: '16px', 
                      boxShadow: '0 12px 32px rgba(0,0,0,0.15)' 
                    }} 
                  />
                )}
              </div>

              <div>
                {data.titulo && (
                  <h2 style={{ 
                    fontFamily: 'Montserrat', 
                    fontSize: '2.5rem', 
                    fontWeight: 700, 
                    color: '#6D7E4F', 
                    margin: '0 0 16px',
                    lineHeight: 1.2
                  }}>
                    {data.titulo}
                  </h2>
                )}

                {data.subtitulo && (
                  <p style={{ 
                    fontFamily: 'Montserrat', 
                    fontSize: '1.3rem', 
                    fontWeight: 600, 
                    color: '#8a9d65', 
                    margin: '0 0 24px' 
                  }}>
                    {data.subtitulo}
                  </p>
                )}

                {data.descripcion && (
                  <div 
                    style={{ 
                      fontFamily: 'Open Sans', 
                      fontSize: '1.05rem', 
                      lineHeight: 1.8, 
                      color: '#555', 
                      marginBottom: '24px' 
                    }}
                    dangerouslySetInnerHTML={{ __html: data.descripcion }}
                  />
                )}

                {data.puntosDestacados && data.puntosDestacados.length > 0 && (
                  <ul style={{ 
                    fontFamily: 'Open Sans', 
                    fontSize: '1.05rem', 
                    lineHeight: 2, 
                    color: '#555', 
                    marginBottom: '32px',
                    paddingLeft: '24px'
                  }}>
                    {data.puntosDestacados.map((punto: any, index: number) => (
                      <li key={index} style={{ marginBottom: '8px' }}>
                        <strong>{punto.texto}</strong>
                      </li>
                    ))}
                  </ul>
                )}

                {data.textoBoton && data.enlaceBoton && (
                  <Link 
                    href={data.enlaceBoton} 
                    style={{ 
                      fontFamily: 'Montserrat', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      padding: '16px 40px', 
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
                  <h2 style={{ 
                    fontFamily: 'Montserrat', 
                    fontSize: '2.5rem', 
                    fontWeight: 700, 
                    color: '#6D7E4F', 
                    margin: '0 0 16px',
                    lineHeight: 1.2
                  }}>
                    {data.titulo}
                  </h2>
                )}

                {data.subtitulo && (
                  <p style={{ 
                    fontFamily: 'Montserrat', 
                    fontSize: '1.3rem', 
                    fontWeight: 600, 
                    color: '#8a9d65', 
                    margin: '0 0 24px' 
                  }}>
                    {data.subtitulo}
                  </p>
                )}

                {data.descripcion && (
                  <div 
                    style={{ 
                      fontFamily: 'Open Sans', 
                      fontSize: '1.05rem', 
                      lineHeight: 1.8, 
                      color: '#555', 
                      marginBottom: '24px' 
                    }}
                    dangerouslySetInnerHTML={{ __html: data.descripcion }}
                  />
                )}

                {data.puntosDestacados && data.puntosDestacados.length > 0 && (
                  <ul style={{ 
                    fontFamily: 'Open Sans', 
                    fontSize: '1.05rem', 
                    lineHeight: 2, 
                    color: '#555', 
                    marginBottom: '32px',
                    paddingLeft: '24px'
                  }}>
                    {data.puntosDestacados.map((punto: any, index: number) => (
                      <li key={index} style={{ marginBottom: '8px' }}>
                        <strong>{punto.texto}</strong>
                      </li>
                    ))}
                  </ul>
                )}

                {data.textoBoton && data.enlaceBoton && (
                  <Link 
                    href={data.enlaceBoton} 
                    style={{ 
                      fontFamily: 'Montserrat', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      padding: '16px 40px', 
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
                      borderRadius: '16px', 
                      boxShadow: '0 12px 32px rgba(0,0,0,0.15)' 
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