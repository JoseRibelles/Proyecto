'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function Historia() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/lescola/qui-som" style={{ color:  'white', textDecoration:  'none' }}>Qui som</Link>
            <span> / </span>
            <span>Història</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Història del centre
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Més de 50 anys d'educació al barri de Les Oliveres
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap:  '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=700&fit=crop" alt="Escola" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Des de 1972, compromesos amb l'educació de qualitat
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                Una mica d'història
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                L'<strong>Institut Escola Lluís Millet</strong> va ser fundat l'any <strong>1972</strong> en un context històric molt particular de Santa Coloma de Gramenet. Després de la Guerra Civil i durant l'època franquista, entre 1950 i 1975, la ciutat va experimentar una gran metamorfosi demogràfica:  de 15. 000 habitants va arribar fins a 135.000 habitants. 
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                Aquesta transformació va ser conseqüència de la gran migració provinent principalment del sud d'Espanya, persones que buscaven feina i una major qualitat de vida.  Això va comportar un creixement urbanístic frenètic i sense previsió, amb la construcció de blocs de pisos, i quan ja no hi havia espai, es van aixecar edificis de forma irregular a les faldilles de la muntanya, donant origen a barris com <strong>Les Oliveres</strong> i <strong>Can Franquesa</strong>.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  El naixement del centre
                </h4>
                <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  Davant de l'augment considerable de la població al barri de Les Oliveres, el centre educatiu va néixer el 1972 per donar resposta a les necessitats educatives de les famílies del barri. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El barri */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            El barri de Les Oliveres
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px' }}>
              El barri de Les Oliveres té una característica especial: actualment es troba força allunyat del centre de la ciutat, fins i tot es podria dir que aïllat de la resta de la població. El barri no disposa de gaires serveis, sent l'escola un dels equipaments principals, i només arriben dues línies d'autobús i la línia 9 del metro que el connecten amb la resta de barris de Santa Coloma.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px' }}>
              Aquesta situació està molt propera a canviar en un futur proper amb la construcció de la nova comissaria de la policia local, una llar d'infants, equipaments esportius i noves construccions en les arteries de comunicació amb el barri de Singuerlin.  Això permetrà l'aparició de nous serveis i, a la vegada, l'ampliació en un futur de l'escola.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px' }}>
              Pel que fa a la població, no escapa a la situació que ens trobem a Santa Coloma. La majoria dels habitants d'aquest barri són descendents de l'onada migratòria que hi va haver entre els anys 60 i 70, principalment d'Andalusia.  A l'actualitat s'ha d'afegir l'arribada d'immigració àrab provinent del nord d'Àfrica.  Per tant, ens trobem amb una realitat predominantment <strong>castellanoparlant</strong>, que evidentment es reflecteix a l'escola. 
            </p>
          </div>

          {/* 3 Tarjetas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '56px' }}>
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3. 13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Context demogràfic
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Barri format principalment per població descendent de la <strong style={{ color: '#6D7E4F' }}>migració dels anys 60-70</strong> provinent del sud d'Espanya, i <strong style={{ color: '#6D7E4F' }}>nova immigració nord-africana</strong> dels últims anys. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Situació geogràfica
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Barri ubicat a les <strong style={{ color: '#6D7E4F' }}>faldilles de la muntanya</strong>, amb connexió limitada però en procés de millora amb nous equipaments municipals.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Diversitat lingüística
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Predomini del <strong style={{ color: '#6D7E4F' }}>castellà</strong> com a llengua familiar, amb política activa de <strong style={{ color: '#6D7E4F' }}>normalització lingüística del català</strong> a l'escola. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'escola avui - Estadísticas MEJORADAS */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            L'Institut Escola Lluís Millet avui
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(4, 1fr)', gap: '24px', marginTop: '48px' }}>
            <div style={{ background: '#f0f4e8', padding: '40px 24px', borderRadius: '12px', textAlign: 'center', border:  '2px solid #6D7E4F', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '12px' }}>214</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#666' }}>Alumnes</div>
            </div>
            <div style={{ background: '#f0f4e8', padding: '40px 24px', borderRadius: '12px', textAlign: 'center', border: '2px solid #6D7E4F', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '12px' }}>30</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#666' }}>Docents</div>
            </div>
            <div style={{ background: '#f0f4e8', padding: '40px 24px', borderRadius: '12px', textAlign: 'center', border: '2px solid #6D7E4F', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color:  '#6D7E4F', marginBottom: '12px' }}>50+</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#666' }}>Anys d'història</div>
            </div>
            <div style={{ background:  '#f0f4e8', padding: '40px 24px', borderRadius: '12px', textAlign: 'center', border: '2px solid #6D7E4F', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '12px' }}>9</div>
              <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#666' }}>Grups classe</div>
            </div>
          </div>
        </div>
      </section>

      {/* El nostre compromís amb el barri */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily:  'Montserrat', fontSize: '2rem', fontWeight:  700, color: '#6D7E4F', textAlign:  'center', margin: '0 0 48px' }}>
            El nostre compromís amb el barri
          </h2>
          <div style={{ maxWidth: '900px', margin:  '0 auto' }}>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              Des de la seva fundació el 1972, l'Institut Escola Lluís Millet ha estat un pilar fonamental en la vida educativa i social del barri de Les Oliveres.  Més enllà de ser un centre educatiu, som un espai de trobada, d'integració i de cohesió social per a les famílies del barri.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              El nostre compromís és oferir una educació de qualitat que respecti la diversitat cultural i lingüística del nostre alumnat, treballant per la igualtat d'oportunitats i el desenvolupament integral de cada nen i nena.
            </p>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              Ens adaptem als canvis del barri i de la societat, mantenint sempre els valors que ens han caracteritzat durant més de 50 anys:  respecte, esforç, convivència i compromís amb l'educació pública de qualitat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius:  '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Vols conèixer més sobre el nostre projecte educatiu?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Descobreix la nostra identitat pedagògica i els nostres valors
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/qui-som/missio" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Missió, visió i valors
              </Link>
              <Link href="/lescola/qui-som/identitat" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Filosofia educativa
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border:  '2px solid white', display:  'inline-block', transition:  'all 0.3s ease' }}>
                Contacta'ns
              </Link>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
}