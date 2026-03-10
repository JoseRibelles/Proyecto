export default function VideoIncrustado({ data }: any) {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.split('vimeo.com/')[1];
    return `https://player.vimeo.com/video/${videoId}`;
  };

  const getEmbedUrl = () => {
    if (data.urlVideo.includes('youtube') || data.urlVideo.includes('youtu.be')) {
      return getYouTubeEmbedUrl(data.urlVideo);
    } else if (data.urlVideo.includes('vimeo')) {
      return getVimeoEmbedUrl(data.urlVideo);
    }
    return data.urlVideo;
  };

  return (
    <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {data.titulo && (
          <h2 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '2rem', 
            fontWeight: 700, 
            color: '#6D7E4F', 
            textAlign: 'center', 
            margin: '0 0 32px' 
          }}>
            {data.titulo}
          </h2>
        )}

        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={getEmbedUrl()}
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                border: 0
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {data.descripcion && (
          <div 
            style={{ 
              fontFamily: 'Open Sans', 
              fontSize: '1rem', 
              lineHeight: 1.8, 
              color: '#555',
              textAlign: 'center',
              marginTop: '24px'
            }}
            dangerouslySetInnerHTML={{ __html: data.descripcion }}
          />
        )}
      </div>
    </section>
  );
}