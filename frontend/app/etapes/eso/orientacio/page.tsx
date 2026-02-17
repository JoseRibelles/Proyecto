'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function OrientacioSecundaria() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition:  'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/etapes" style={{ color: 'white', textDecoration: 'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/secundaria" style={{ color: 'white', textDecoration: 'none' }}>Educació Secundària</Link>
            <span> / </span>
            <span>Orientació Acadèmica i Personal</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Orientació Acadèmica i Personal
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Secundària
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>orientació acadèmica i personal</strong> és un procés d&apos;<strong>acompanyament continu</strong> que ajuda els alumnes a <strong>conèixer-se millor</strong>, <strong>prendre decisions</strong> sobre el seu futur i desenvolupar les competències necessàries per a la seva <strong>realització personal i professional</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Àrees d'orientació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Àrees d&apos;Orientació
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎓
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Orientació Acadèmica
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Informació sobre itineraris educatius, opcions de Batxillerat, Cicles Formatius i estudis universitaris.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems:  'center', justifyContent:  'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                💼
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Orientació Professional
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Exploració de professions, sortides laborals, competències professionals i món del treball.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                ❤️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Orientació Personal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Autoconeixement, gestió emocional, habilitats socials i desenvolupament personal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Servei d'orientació */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Servei d&apos;Orientació
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            
            {[
              {
                icon: '👨‍🏫',
                title: 'Departament d\'Orientació',
                description: 'Equip de professionals especialitzats en psicologia educativa i orientació que treballen de manera coordinada amb tutors i equip docent.'
              },
              {
                icon: '📅',
                title: 'Tutories Individuals',
                description: 'Sessions personalitzades per tractar aspectes acadèmics, personals o d\'orientació professional amb cada alumne.'
              },
              {
                icon: '👥',
                title: 'Tutories Grupals',
                description: 'Activitats d\'orientació integrades en l\'hora de tutoria:  autoconeixement, presa de decisions, tècniques d\'estudi.'
              },
              {
                icon: '🏢',
                title: 'Visites a Centres Educatius',
                description: 'Sortides a instituts, universitats i centres de formació professional per conèixer les diferents opcions.'
              },
              {
                icon: '💬',
                title: 'Xerrades Professionals',
                description: 'Professionals de diferents sectors vénen a l\'escola a explicar la seva trajectòria i la realitat del seu àmbit.'
              },
              {
                icon: '📊',
                title: 'Tests Vocacionals',
                description: 'Proves d\'interessos professionals i aptituds que ajuden a identificar preferències i capacitats.'
              },
              {
                icon: '👪',
                title: 'Sessions per a Famílies',
                description: 'Reunions informatives sobre el sistema educatiu, opcions postobligatòries i com acompanyar els fills.'
              },
              {
                icon: '📚',
                title: 'Recursos i Documentació',
                description:  'Guies, dossiers informatius i accés a plataformes digitals d\'orientació acadèmica i professional.'
              }
            ]. map((servei, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems:  'flex-start' }}>
                  <div style={{ fontSize: '2. 5rem', flexShrink: 0 }}>{servei.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {servei.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                      {servei.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Itineraris postobligatoris */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Opcions després de l&apos;ESO
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Després de completar l&apos;ESO, els alumnes poden continuar la seva formació en diferents vies
          </p>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Batxillerat */}
            <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>🎓</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px', textAlign: 'center' }}>
                Batxillerat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: '0 0 24px', opacity: 0.95 }}>
                Preparació per a estudis universitaris.  Durada:  2 anys. 
              </p>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '24px', borderRadius:  '12px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize:  '1.2rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Modalitats: 
                </h4>
                <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, margin: 0, paddingLeft: '20px' }}>
                  <li>Ciències i Tecnologia</li>
                  <li>Humanitats i Ciències Socials</li>
                  <li>Arts</li>
                  <li>General</li>
                </ul>
              </div>
            </div>

            {/* Cicles Formatius */}
            <div style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', padding: '48px 40px', borderRadius: '16px', color:  'white' }}>
              <div style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>🔧</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px', textAlign: 'center' }}>
                Cicles Formatius
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: '0 0 24px', opacity: 0.95 }}>
                Formació professional orientada al món laboral. 
              </p>
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '24px', borderRadius: '12px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 12px' }}>
                  Nivells:
                </h4>
                <ul style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, margin: 0, paddingLeft: '20px' }}>
                  <li>CFGM (Grau Mitjà) - 2 anys</li>
                  <li>CFGS (Grau Superior) - 2 anys</li>
                  <li>Pràctiques en empreses</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Acompanyament per cursos */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Acompanyament per Cursos
          </h2>

          <div style={{ display: 'grid', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            
            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc', borderLeft: '6px solid #6D7E4F' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                1r i 2n ESO
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Focus:</strong> Adaptació a l&apos;ESO, tècniques d&apos;estudi, organització personal i autoconeixement.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', borderLeft: '6px solid #8BC34A' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 12px' }}>
                3r ESO
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Focus:</strong> Exploració d&apos;interessos professionals, tests vocacionals i tria d&apos;optatives per a 4t.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', borderLeft:  '6px solid #FF9800' }}>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                4t ESO
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Focus:</strong> Decisió sobre estudis postobligatoris (Batxillerat o CFGM), visites a centres i sessions informatives intensives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Necessites orientació?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              El nostre equip d&apos;orientació està a la teva disposició
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Contacta amb Orientació
              </Link>
              <Link href="/etapes/eso" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding:  '14px 32px', borderRadius: '8px', textDecoration: 'none', background:  'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Torna a Secundària
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}