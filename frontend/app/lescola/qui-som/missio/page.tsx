'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function Missio() {
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

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex:  1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/lescola/qui-som" style={{ color: 'white', textDecoration: 'none' }}>Qui som</Link>
            <span> / </span>
            <span>Missió, visió i valors</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Missió, visió i valors
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Els pilars fonamentals que guien el nostre projecte educatiu
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
              Una nova mirada pedagògica
            </h2>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              L'Institut Escola Lluís Millet es defineix com un espai d'aprenentatge on els nens i joves creixen i es formen en un entorn acollidor, inclusiu i innovador. El nostre projecte educatiu es basa en l'acompanyament personalitzat, la valoració de la diversitat i el protagonisme real de l'alumnat en el seu procés d'aprenentatge.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              Els nostres docents actuen com a acompanyants atents que entenen cada nen i nena com una persona única que ha de ser acompanyada en el seu camí vital, fomentant la curiositat, la motivació i l'autonomia. 
            </p>
          </div>
        </div>
      </section>

      {/* Missió i Visió */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Missió */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                La nostra missió
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Acompanyar cada alumne de manera individualitzada en el seu procés d'aprenentatge i creixement personal, fomentant la curiositat, la motivació, l'autonomia i el protagonisme real en la construcció del seu coneixement.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: '16px 0 0', textAlign: 'left' }}>
                Oferim un espai educatiu acollidor, inclusiu i innovador on els docents actuen com a facilitadors i acompanyants emocionals, valorant la diversitat i entenent cada infant com una persona única amb les seves pròpies necessitats i potencialitats.
              </p>
            </div>

            {/* Visió */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize:  '3rem', marginBottom: '20px' }}>🌟</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                La nostra visió
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Ser un centre educatiu de referència centrat en la qualitat educativa i en la formació integral, tant personal com social i acadèmica, dels nostres alumnes.  Aspirem a provocar l'interès i la curiositat de l'alumnat, oferint respostes reals a les seves necessitats en les diferents etapes educatives.
              </p>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.7, color: '#666', margin: '16px 0 0', textAlign: 'left' }}>
                Impulsar el treball en equip, l'aprenentatge experiencial, significatiu i autònom, preparant els nostres alumnes per ser ciutadans crítics, creatius i compromesos amb la societat del futur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Els nostres valors */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Els nostres valors
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Valor 1 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Respecte i diversitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Valorem i respectem la diversitat de cada alumne, entenent que cadascú és únic i té el seu propi ritme i manera d'aprendre. Fomentem la inclusió i l'atenció personalitzada. 
              </p>
            </div>

            {/* Valor 2 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💚</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Acompanyament emocional
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Oferim un acompanyament emocional constant que garanteix el benestar dels nostres alumnes, creant un entorn segur i acollidor on es poden desenvolupar plenament. 
              </p>
            </div>

            {/* Valor 3 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center', border:  '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👥</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Treball en equip
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Promovem la col·laboració entre alumnes, docents i famílies, fomentant la convivència positiva i la participació activa de tota la comunitat educativa. 
              </p>
            </div>

            {/* Valor 4 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚀</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Autonomia i protagonisme
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Els nostres alumnes són els autèntics protagonistes del seu aprenentatge.  Fomentem l'autonomia, la presa de decisions i la responsabilitat personal. 
              </p>
            </div>

            {/* Valor 5 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center', border:  '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Curiositat i innovació
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Estimulem la curiositat natural dels infants i implementem metodologies innovadores que fan l'aprenentatge més significatiu, experiencial i motivador.
              </p>
            </div>

            {/* Valor 6 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌱</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Sostenibilitat i salut
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0, textAlign: 'left' }}>
                Promovem hàbits saludables, el respecte pel medi ambient i la sostenibilitat, educant ciutadans conscients i responsables amb el seu entorn.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Com ho fem realitat */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Com ho fem realitat? 
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1. 5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9. 01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Metodologies innovadores
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Entrada relaxada, ambients d'aprenentatge per interessos, treball per projectes, investigació, tallers diversos i activitats a l'aire lliure.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display:  'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3. 13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Atenció personalitzada
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Acompanyament individualitzat de cada alumne segons les seves necessitats, ritmes i interessos, amb especial atenció a la diversitat. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Participació familiar
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Fomentem la convivència i la participació activa de les famílies a través de l'AFA i diferents activitats que enforteixen la comunitat educativa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix com treballem el nostre projecte educatiu
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix la nostra filosofia i metodologia pedagògica
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/qui-som/identitat-filosofia" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Filosofia educativa
              </Link>
              <Link href="/lescola/qui-som/historia" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Història del centre
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Contacta'ns
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}