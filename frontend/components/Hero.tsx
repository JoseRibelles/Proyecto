'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getStrapiData } from '../lib/strapi';

type Props = {
  imageUrl?: string | null;
  mesaje?: string | null;
};

export default function Hero({ imageUrl: propImageUrl = null, mesaje: propMesaje = null }: Props): React.ReactElement | null {
  const [mesaje, setMesaje] = useState<string | null>(propMesaje);
  const [loading, setLoading] = useState<boolean>(!propMesaje);

  useEffect(() => {
    let mounted = true;

    if (propMesaje) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const json = await getStrapiData('/api/home-page?populate=*');
        if (!mounted) return;
        const attrs = json?.data?.attributes ?? json?.data ?? {};

        if (!propMesaje) {
          const possibleText =
            attrs.mesaje ??
            attrs.mensaje ??
            attrs.message ??
            attrs.heroQuote ??
            attrs.quote ??
            attrs.texto ??
            '';
          setMesaje(String(possibleText || ''));
        }
      } catch (err: any) {
        console.error('Error fetching home-page', err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [propMesaje]);

  if (loading) {
    return (
      <div className="hero-wrapper">
        <div style={{ padding: 40, textAlign: 'center', fontSize: '1.1rem', color: '#6D7E4F' }}>
          Carregant...
        </div>
      </div>
    );
  }

  // IMAGEN MEJORADA - Entrada de escuela con niños (puertas abiertas)
  const bgImage = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&q=80';

  return (
    <>
      <div className="hero-wrapper">
        <section className="hero-portes-obertes" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="hero-overlay"></div>
          
          {/* Partículas decorativas */}
          <div className="particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
          </div>

          <div className="hero-content">
            {/* Badge mejorado */}
            <div className="badge-container">
              <div className="badge-portes-obertes">
                <div className="badge-icon">🚪</div>
                <div className="badge-text">
                  <div className="badge-title">JORNADA DE PORTES OBERTES</div>
                  <div className="badge-subtitle">Curs 2025-2026</div>
                </div>
              </div>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line-1">Benvinguts a l'Institut Escola</span>
              <span className="title-line-2">Lluís Millet</span>
            </h1>
            
            <p className="hero-description">
              Vine a conèixer el nostre centre educatiu al cor de Les Oliveres, Santa Coloma de Gramenet. 
              <strong> Una proposta pedagògica innovadora</strong> que acompanya els teus fills i filles en el seu creixement.
            </p>

            <div className="hero-buttons">
              <Link href="/admissio/preinscripcio/info" className="btn-primary">
                <span className="btn-icon">📝</span>
                <span className="btn-text">
                  <span className="btn-main">Fes la preinscripció</span>
                  <span className="btn-sub">Procés 2025-2026</span>
                </span>
              </Link>

              <Link href="/lescola/qui-som/historia" className="btn-secondary">
                <span className="btn-icon">🏫</span>
                <span className="btn-text">
                  <span className="btn-main">Descobreix el centre</span>
                  <span className="btn-sub">Qui som i què fem</span>
                </span>
              </Link>
            </div>

            {/* Características destacadas */}
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">👨‍🏫</div>
                <div className="feature-text">Equip docent qualificat</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌱</div>
                <div className="feature-text">Educació en valors</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-text">Activitats extraescolars</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🍎</div>
                <div className="feature-text">Menjador propi</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mensaje/Quote si existe */}
        {mesaje && (
          <div className="hero-quote-section">
            <div className="container">
              <div className="quote-icon">"</div>
              <blockquote
                className="hero-quote"
                dangerouslySetInnerHTML={{ __html: mesaje }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .hero-wrapper {
          width: 100%;
          position: relative;
        }

        .hero-portes-obertes {
          width: 100%;
          min-height: 700px;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(109, 126, 79, 0.88) 0%, rgba(88, 101, 63, 0.85) 50%, rgba(109, 126, 79, 0.88) 100%);
          z-index: 1;
        }

        /* Partículas decorativas */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          animation: float 20s infinite;
        }

        .particle-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          left: -150px;
          animation-delay: 0s;
        }

        .particle-2 {
          width: 200px;
          height: 200px;
          bottom: -100px;
          right: 10%;
          animation-delay: 5s;
        }

        .particle-3 {
          width: 250px;
          height: 250px;
          top: 30%;
          right: -125px;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1000px;
          padding: 60px 20px;
        }

        /* Badge mejorado */
        .badge-container {
          margin-bottom: 40px;
          animation: fadeInDown 1s ease;
        }

        .badge-portes-obertes {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.15);
          padding: 16px 32px;
          border-radius: 60px;
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          transition: all 0.4s ease;
        }

        .badge-portes-obertes:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .badge-icon {
          font-size: 2.5rem;
          line-height: 1;
          animation: doorOpen 2s ease infinite;
        }

        @keyframes doorOpen {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }

        .badge-text {
          text-align: left;
        }

        .badge-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: white;
          letter-spacing: 1.5px;
          line-height: 1.2;
        }

        .badge-subtitle {
          font-family: 'Open Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 2px;
        }

        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          color: white;
          margin: 0 0 32px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 1s ease 0.2s backwards;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .title-line-1 {
          font-size: 2.2rem;
          font-weight: 600;
          opacity: 0.95;
        }

        .title-line-2 {
          font-size: 4.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #e8f0dc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-description {
          font-family: 'Open Sans', sans-serif;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 48px;
          line-height: 1.8;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease 0.4s backwards;
        }

        .hero-description strong {
          color: #e8f0dc;
          font-weight: 700;
        }

        .hero-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 56px;
          animation: fadeInUp 1s ease 0.6s backwards;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          padding: 20px 40px;
          border-radius: 60px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ffffff 0%, #f0f4e8 100%);
          color: #6D7E4F;
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);
          border: 3px solid rgba(255, 255, 255, 0.8);
        }

        .btn-primary:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 50px rgba(255, 255, 255, 0.5);
          background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.25);
          color: white;
          border: 3px solid rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: translateY(-5px) scale(1.02);
          border-color: white;
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.3);
        }

        .btn-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .btn-main {
          font-size: 1.1rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .btn-sub {
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 1;
        }

        /* Features grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
          animation: fadeInUp 1s ease 0.8s backwards;
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 8px;
        }

        .feature-text {
          font-family: 'Open Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: white;
          line-height: 1.3;
        }

        .hero-quote-section {
          background: linear-gradient(135deg, #f9fdf5 0%, #f0f4e8 100%);
          padding: 80px 20px;
          border-top: 5px solid #6D7E4F;
          position: relative;
        }

        .quote-icon {
          font-family: Georgia, serif;
          font-size: 8rem;
          color: rgba(109, 126, 79, 0.15);
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          line-height: 1;
        }

        .hero-quote {
          font-family: 'Open Sans', sans-serif;
          font-size: 1.4rem;
          line-height: 1.9;
          color: #333;
          font-style: italic;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-portes-obertes {
            min-height: 650px;
          }

          .title-line-1 {
            font-size: 1.8rem;
          }

          .title-line-2 {
            font-size: 3.5rem;
          }

          .hero-description {
            font-size: 1.2rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-portes-obertes {
            min-height: 600px;
            background-attachment: scroll !important;
          }

          .badge-portes-obertes {
            flex-direction: column;
            gap: 8px;
            padding: 16px 24px;
          }

          .badge-icon {
            font-size: 2rem;
          }

          .badge-text {
            text-align: center;
          }

          .badge-title {
            font-size: 0.95rem;
          }

          .title-line-1 {
            font-size: 1.5rem;
          }

          .title-line-2 {
            font-size: 2.8rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 16px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .feature-icon {
            font-size: 2rem;
          }

          .feature-text {
            font-size: 0.85rem;
          }

          .hero-quote {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-portes-obertes {
            min-height: 550px;
          }

          .hero-content {
            padding: 40px 16px;
          }

          .badge-title {
            font-size: 0.85rem;
          }

          .badge-subtitle {
            font-size: 0.75rem;
          }

          .title-line-1 {
            font-size: 1.2rem;
          }

          .title-line-2 {
            font-size: 2.2rem;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 32px;
          }

          .btn-main {
            font-size: 1rem;
          }

          .btn-sub {
            font-size: 0.75rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .hero-quote-section {
            padding: 60px 16px;
          }

          .hero-quote {
            font-size: 1rem;
          }

          .quote-icon {
            font-size: 5rem;
          }
        }
      `}</style>
    </>
  );
}