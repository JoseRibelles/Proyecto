'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ObjectiusInfantil() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
      
      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex:  1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color:  'white', textDecoration:  'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/etapes" style={{ color: 'white', textDecoration: 'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/infantil" style={{ color: 'white', textDecoration: 'none' }}>Educació Infantil</Link>
            <span> / </span>
            <span>Objectius d&apos;Etapa</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Objectius d&apos;Etapa
          </h1>
          <p style={{ fontFamily:  'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Infantil
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin:  '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Els <strong>objectius de l&apos;etapa d&apos;Educació Infantil</strong> es centren en el desenvolupament integral dels infants en totes les seves dimensions:  física, emocional, social i cognitiva. 
            </p>
          </div>
        </div>
      </section>

      {/* Objectius principals */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Objectius Generals
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            
            {[
              {
                icon: '🧠',
                title: 'Desenvolupament Cognitiu',
                description: 'Estimular la curiositat, la capacitat d\'observació, l\'exploració i la manipulació per descobrir les propietats dels objectes i les relacions entre ells.'
              },
              {
                icon: '❤️',
                title: 'Desenvolupament Emocional i Social',
                description: 'Afavorir el desenvolupament de l\'autoestima, la confiança en un mateix i l\'autonomia personal.  Aprendre a relacionar-se amb els altres de forma positiva i respectuosa.'
              },
              {
                icon: '💪',
                title: 'Desenvolupament Motor',
                description: 'Potenciar el desenvolupament de les capacitats motrius gruixudes i fines, el control corporal i la coordinació a través del joc i l\'activitat física.'
              },
              {
                icon:  '🗣️',
                title: 'Desenvolupament del Llenguatge',
                description: 'Enriquir el vocabulari, millorar l\'expressió oral i comprendre missatges diversos. Iniciar-se en el llenguatge escrit i en l\'aprenentatge d\'altres llengües.'
              },
              {
                icon: '🎨',
                title: 'Desenvolupament Creatiu',
                description: 'Fomentar la creativitat i la capacitat d\'expressió a través de diferents llenguatges:  plàstic, musical, corporal i dramàtic.'
              },
              {
                icon: '🌱',
                title: 'Valors i Hàbits',
                description: 'Adquirir hàbits d\'higiene, alimentació, ordre i convivència. Desenvolupar actituds de respecte, solidaritat i cura del medi ambient.'
              }
            ].map((objectiu, index) => (
              <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems:  'flex-start' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                    {objectiu. icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {objectiu.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize:  '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                      {objectiu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Àmbits d'experiència */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Àmbits d&apos;Experiència
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>🙋</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Descoberta d&apos;un Mateix
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, textAlign: 'center' }}>
                Coneixement del propi cos, identitat personal, autonomia i equilibri emocional. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', textAlign:  'center', marginBottom: '16px' }}>🌍</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Descoberta de l&apos;Entorn
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, textAlign:  'center' }}>
                Exploració de l&apos;entorn físic, natural, social i cultural que envolta l&apos;infant.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom:  '16px' }}>💬</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                Comunicació i Llenguatges
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, textAlign: 'center' }}>
                Desenvolupament del llenguatge verbal i altres formes d&apos;expressió i representació.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre Educació Infantil
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora els nostres projectes i coneix l&apos;equip docent
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/infantil/projectes" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Projectes i Activitats
              </Link>
              <Link href="/etapes/infantil/equip" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Equip Docent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}