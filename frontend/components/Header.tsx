'use client';
import React from 'react';

export default function Header({ site }: { site? :    any }) {
  const logoSrc = site?.logoUrl ??  site?.logo?. data?.attributes?.url ??  '/logo.png';
  const rightText = site?.rightHeaderText ??  site?.rightHeader ??  'UNA NOVA MIRADA PEDAGÒGICA';

  return (
    <>
      <header style={{
        background: '#ffffff',
        color: '#333',
        padding:   '10px 20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        borderBottom: '1px solid #e8e8e8'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent:  'space-between',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          {/* Logo */}
          <div>
            <a href="/" style={{ display: 'flex', alignItems:   'center', textDecoration: 'none' }}>
              <img 
                src={logoSrc} 
                alt="Logo" 
                style={{
                  height: '120px',
                  width: 'auto'
                }}
                onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png'; }} 
              />
            </a>
          </div>

          {/* UNA NOVA MIRADA PEDAGÒGICA */}
          <div>
            <span className="header-slogan">{rightText}</span>
          </div>
        </div>
      </header>

      <style jsx global>{`
        .header-slogan {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 2.5px;
          color: #6D7E4F;
          text-transform: uppercase;
          transition: all 0.3s ease;
          cursor: default;
        }

        .header-slogan:hover {
          color: #4a5a33;
          letter-spacing: 3px;
        }

        /* Responsive Header */
        @media (max-width: 768px) {
          header {
            padding: 24px 16px !important;
          }

          header > div {
            flex-direction:  column !important;
            text-align: center !important;
          }

          header img {
            height: 60px !important;
          }

          .header-slogan {
            font-size: 0.85rem !important;
            letter-spacing: 2px !important;
          }

          .header-slogan:hover {
            letter-spacing: 2.3px !important;
          }
        }

        @media (max-width:  480px) {
          header {
            padding: 20px 12px !important;
          }

          header img {
            height: 50px ! important;
          }

          . header-slogan {
            font-size: 0.75rem !important;
            letter-spacing: 1.5px ! important;
          }

          . header-slogan:hover {
            letter-spacing: 1.7px !important;
          }
        }
      `}</style>
    </>
  );
}