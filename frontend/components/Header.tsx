'use client';
import React from 'react';

export default function Header({ site }: { site?: any }) {
  // Si tu campo tiene otro nombre, cámbialo aquí
  const logoSrc = site?.logoUrl ?? site?.logo?.data?.attributes?.url ?? '/logo.png';
  const rightText = site?.rightHeaderText ?? site?.rightHeader ?? 'UNA NOVA MIRADA PEDAGÒGICA';

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="logo-and-title">
          <a href="/" aria-label="Inicio">
            {/* img con fallback y atributos accesibles */}
            <img src={logoSrc} alt="Logo" className="site-logo" onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png'; }} />
          </a>
        </div>

        <div className="header-right" aria-hidden={false}>
          {rightText}
        </div>
      </div>
    </header>
  );
}