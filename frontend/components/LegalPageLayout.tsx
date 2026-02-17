'use client';
import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  site?:  any;
};

export default function LegalPageLayout({ title, lastUpdated, children, site }: LegalPageLayoutProps): React.ReactElement {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec. cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  const siteData = site || defaultSite;

  return (
    <>
      
      
      <main className="legal-page">
        <div className="legal-container">
          <header className="legal-header">
            <h1 className="legal-title">{title}</h1>
            <p className="legal-updated">Última actualització: {lastUpdated}</p>
          </header>
          
          <article className="legal-content">
            {children}
          </article>
        </div>
      </main>

     
    </>
  );
}