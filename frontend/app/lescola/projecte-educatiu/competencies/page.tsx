'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function Competencies() {
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
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/projecte-educatiu" style={{ color: 'white', textDecoration: 'none' }}>Projecte Educatiu</Link>
            <span> / </span>
            <span>Competències</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Competències clau i aprenentatge competencial
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize:  '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Desenvolupament integral per afrontar els reptes del segle XXI
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
              Què és l'aprenentatge competencial?
            </h2>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              L'aprenentatge competencial va més enllà de la simple adquisició de coneixements.  Busca <strong>desenvolupar capacitats i actituds</strong> que permetin a l'alumnat afrontar els reptes del segle XXI i desenvolupar-se de manera autònoma i crítica en la societat actual.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              Cada competència inclou <strong>sabers, habilitats pràctiques i actituds</strong>, afavorint així un aprenentatge significatiu i transferible a contextos reals de la vida quotidiana, professional i social.
            </p>
          </div>
        </div>
      </section>

      {/* Les 8 competències clau */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Les 8 competències clau
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '24px' }}>
            
            {/* Competència 1 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Comunicació lingüística (CCL)
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Capacitat per expressar-se oralment i per escrit, comprendre missatges i participar activament en converses i debats.
              </p>
            </div>

            {/* Competència 2 */}
            <div style={{ background:  'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌍</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Plurilingüe (CP)
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Domini de diverses llengües per comunicar-se eficaçment en contextos diversos i comprendre altres cultures.
              </p>
            </div>

            {/* Competència 3 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize:  '2.5rem', marginBottom: '16px' }}>🔢</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Matemàtica i STEM (CMCTE)
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Raonament matemàtic, comprensió científica i tecnològica per resoldre problemes i entendre el món que ens envolta.
              </p>
            </div>

            {/* Competència 4 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💻</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                Digital (CD)
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Ús creatiu, crític i segur de les tecnologies digitals per aprendre, treballar i participar en la societat. 
              </p>
            </div>

            {/* Competència 5 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🧠</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                Personal, social i aprendre a aprendre (CPSAA)
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Capacitat de reflexionar sobre un mateix, gestionar el temps, treballar en equip i mantenir la motivació per aprendre.
              </p>
            </div>

            {/* Competència 6 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                Ciutadana (CC)
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Participació plena en la vida social i cívica, respecte als drets humans, la democràcia i la sostenibilitat.
              </p>
            </div>

            {/* Competència 7 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🚀</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                Emprenedora (CE)
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Creativitat, iniciativa i capacitat per transformar idees en accions, assumint riscos i treballant de forma col·laborativa.
              </p>
            </div>

            {/* Competència 8 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Consciència i expressió culturals (CCEC)
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Comprensió i respecte de les idees, experiències i emocions expressades en diferents manifestacions culturals i artístiques.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Com treballem les competències */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Com treballem les competències al centre? 
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                📚
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Treball transversal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Les competències es treballen de manera transversal en totes les àrees i etapes educatives, des d'Infantil fins a Secundària.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                🎯
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Situacions reals
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Proposem situacions d'aprenentatge connectades amb la vida real perquè l'alumnat pugui transferir el que aprèn. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ⚖️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Avaluació contínua
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                L'avaluació és contínua i global, a partir de descriptors específics per a cada nivell educatiu.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Desenvolupament integral */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '60px 40px', borderRadius: '16px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🌟</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 24px' }}>
              Desenvolupament integral de l'alumnat
            </h2>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: '0 auto', maxWidth: '800px' }}>
              L'enfocament competencial té com a objectiu central el <strong>desenvolupament integral de l'alumne</strong>:  cognitiu, emocional, social, físic i ètic.  Treballem totes les dimensions de la persona en un ambient inclusiu i motivador on l'alumnat és el protagonista del seu aprenentatge.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius:  '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre el nostre projecte educatiu
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix la nostra metodologia i atenció a la diversitat
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/projecte-educatiu/metodologia" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Metodologia pedagògica
              </Link>
              <Link href="/projecte-educatiu/inclusio" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding:  '14px 32px', borderRadius: '8px', textDecoration: 'none', background:  'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Inclusió i diversitat
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
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