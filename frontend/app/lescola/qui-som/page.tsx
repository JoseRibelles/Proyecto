'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export default function QuiSom() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
      <TopBar text={defaultSite.topBarText} phone={defaultSite.topBarPhones} />
      <Header site={defaultSite} />
      <Nav />

      <section className="page-hero">
        <div className="page-hero-overlay">
          <h1 className="page-hero-title">Qui som</h1>
          <p className="page-hero-subtitle">
            Coneix la nostra història, valors i l'equip que fa possible una educació de qualitat
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <div className="intro-block">
            <h2 className="section-title">El Col·legi Lluís Millet</h2>
            <p className="intro-text">
              El Col·legi Lluís Millet és un centre educatiu de línia 2 situat a Santa Coloma de Gramenet que imparteix Educació Infantil i Educació Primària.   Amb més de 25 anys d'experiència, el nostre compromís és oferir una educació de qualitat basada en la innovació pedagògica, l'atenció personalitzada i els valors de respecte, esforç i convivència.
            </p>
            <p className="intro-text">
              Som un equip de professionals dedicats a l'educació que treballa cada dia per acompanyar els nostres alumnes en el seu creixement personal i acadèmic, preparant-los per als reptes del futur amb una mirada contemporània i respectuosa amb les seves necessitats individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section alternate-bg">
        <div className="content-container">
          <h2 className="section-title">Descobreix més sobre nosaltres</h2>
          <div className="subsection-grid">
            <Link href="/lescola/qui-som/historia" className="subsection-card">
              <div className="subsection-icon">📜</div>
              <h3 className="subsection-title">Història del centre</h3>
              <p className="subsection-description">
                Més de 25 anys acompanyant les famílies de Santa Coloma en l'educació dels seus fills i filles. 
              </p>
              <span className="subsection-link">Llegir més →</span>
            </Link>

            <Link href="/lescola/qui-som/missio-visio-valors" className="subsection-card">
              <div className="subsection-icon">⭐</div>
              <h3 className="subsection-title">Missió, visió i valors</h3>
              <p className="subsection-description">
                Els pilars fonamentals que guien la nostra tasca educativa i el nostre projecte de centre.
              </p>
              <span className="subsection-link">Llegir més →</span>
            </Link>

            <Link href="/lescola/qui-som/identitat-filosofia" className="subsection-card">
              <div className="subsection-icon">💡</div>
              <h3 className="subsection-title">Identitat i filosofia educativa</h3>
              <p className="subsection-description">
                La nostra manera d'entendre l'educació:   innovadora, inclusiva i centrada en l'alumne.
              </p>
              <span className="subsection-link">Llegir més →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">El nostre centre en xifres</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">350+</div>
              <div className="stat-label">Alumnes</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25</div>
              <div className="stat-label">Anys d'experiència</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Professionals</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">18</div>
              <div className="stat-label">Aules equipades</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alternate-bg">
        <div className="content-container">
          <h2 className="section-title">Equip directiu</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="Directora" />
              </div>
              <h3 className="team-name">Maria García López</h3>
              <p className="team-role">Directora</p>
              <p className="team-bio">
                Amb més de 15 anys d'experiència en educació, lidera el projecte educatiu del centre amb una visió innovadora i participativa.
              </p>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" alt="Cap d'Estudis" />
              </div>
              <h3 className="team-name">Joan Martínez Pons</h3>
              <p className="team-role">Cap d'Estudis</p>
              <p className="team-bio">
                Coordina l'activitat pedagògica del centre i vetlla per la qualitat educativa i la innovació metodològica.
              </p>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop" alt="Secretària" />
              </div>
              <h3 className="team-name">Anna Rodríguez Vila</h3>
              <p className="team-role">Secretària</p>
              <p className="team-bio">
                Gestiona els processos administratius i d'atenció a les famílies amb eficiència i proximitat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}