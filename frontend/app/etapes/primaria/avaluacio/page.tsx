'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function AvaluacioPrimaria() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=400&fit=crop)',
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
            <Link href="/etapes" style={{ color: 'white', textDecoration: 'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/primaria" style={{ color: 'white', textDecoration: 'none' }}>Educació Primària</Link>
            <span> / </span>
            <span>Avaluació i Seguiment</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Avaluació i Seguiment
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Primària
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>avaluació</strong> és un procés <strong>continu</strong>, <strong>formatiu</strong> i <strong>personalitzat</strong> que ens permet conèixer el progrés de cada alumne i adaptar l&apos;ensenyament a les seves necessitats.  No es tracta només de qualificar, sinó d&apos;<strong>acompanyar l&apos;aprenentatge</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Tipus d'avaluació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Tipus d&apos;Avaluació
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                📊
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Avaluació Inicial
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                A l&apos;inici de curs i de cada unitat per conèixer els coneixements previs i ajustar la programació. 
              </p>
            </div>

            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔄
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Avaluació Formativa
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Contínua durant tot el procés d&apos;aprenentatge. Retroalimentació constant per millorar. 
              </p>
            </div>

            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                ✅
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Avaluació Sumativa
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Al final de cada trimestre per certificar el nivell d&apos;assoliment de les competències.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Instruments d'avaluació */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Instruments d&apos;Avaluació
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            Utilitzem eines variades per obtenir una visió completa de l&apos;aprenentatge
          </p>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '24px' }}>
            
            {[
              {
                icon: '📝',
                title: 'Observació Directa',
                description: 'Registre sistemàtic del comportament, actituds i participació a l\'aula.'
              },
              {
                icon: '📋',
                title: 'Rúbriques',
                description: 'Criteris clars i transparents per avaluar treballs, projectes i competències.'
              },
              {
                icon: '📚',
                title: 'Portfolis',
                description: 'Recull dels treballs de l\'alumne que mostren la seva evolució.'
              },
              {
                icon: '🎯',
                title: 'Proves i Exàmens',
                description: 'Avaluació de coneixements i competències en moments determinats.'
              },
              {
                icon: '🗣️',
                title: 'Autoavaluació',
                description: 'L\'alumne reflexiona sobre el seu propi aprenentatge i progressa.'
              },
              {
                icon: '👥',
                title: 'Coavaluació',
                description: 'Els alumnes s\'avaluen mútuament en treballs cooperatius.'
              },
              {
                icon: '💬',
                title: 'Entrevistes',
                description: 'Diàlegs individuals per aprofundir en el procés d\'aprenentatge.'
              },
              {
                icon: '📊',
                title: 'Diana d\'Avaluació',
                description: 'Eina visual per reflexionar sobre diferents aspectes de l\'aprenentatge.'
              }
            ].map((instrument, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2. 5rem', flexShrink: 0 }}>{instrument.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                      {instrument.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin:  0 }}>
                      {instrument.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Sistema de qualificació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Sistema de Qualificació
          </h2>

          <div style={{ maxWidth: '900px', margin:  '0 auto' }}>
            
            <div style={{ background: 'white', padding: '48px 40px', borderRadius: '16px', border: '2px solid #e8f0dc', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'center' }}>
                Nivells de Desenvolupament de les Competències
              </h3>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                
                <div style={{ display: 'flex', alignItems:  'center', gap: '16px', padding: '16px', background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', borderRadius: '8px', color: 'white' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, width: '60px', textAlign: 'center' }}>EA</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Excel·lent Assoliment</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', opacity: 0.95 }}>L&apos;alumne supera àmpliament els objectius i mostra capacitats excepcionals.</div>
                  </div>
                </div>

                <div style={{ display:  'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '8px', color: 'white' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, width: '60px', textAlign:  'center' }}>NA</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Notable Assoliment</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', opacity: 0.95 }}>L&apos;alumne assoleix satisfactòriament els objectius previstos.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background:  'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)', borderRadius: '8px', color: 'white' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, width: '60px', textAlign: 'center' }}>AS</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Assoliment Satisfactori</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', opacity: 0.95 }}>L&apos;alumne assoleix els objectius mínims de l&apos;etapa.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'linear-gradient(135deg, #FF5722 0%, #D32F2F 100%)', borderRadius: '8px', color: 'white' }}>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, width:  '60px', textAlign: 'center' }}>PA</div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Progrés Adequat</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', opacity: 0.95 }}>L&apos;alumne està en procés.  Necessita més temps i suport per assolir els objectius.</div>
                  </div>
                </div>

              </div>
            </div>

            <div style={{ background:  'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                💡 <strong>Important:</strong> Les qualificacions es complementen amb <strong>informes detallats</strong> que descriuen els progressos, els punts forts i les àrees de millora de cada alumne.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Seguiment i comunicació */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Seguiment i Comunicació amb les Famílies
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📅</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Tutories Individuals
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Reunions trimestrals per comentar el progrés de l&apos;alumne i establir objectius compartits.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📱</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Plataforma Digital
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Accés en temps real a les qualificacions, tasques i comunicacions del centre.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom:  '16px' }}>📋</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Informes Trimestrals
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Documents detallats amb l&apos;avaluació de totes les competències i àrees. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize:  '3rem', marginBottom: '16px' }}>👥</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Reunions Grupals
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Trobades amb totes les famílies del grup per explicar projectes i metodologies.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💬</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Comunicació Permanent
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Disponibilitat dels mestres per resoldre dubtes i compartir informació.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Plans Personalitzats
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Per a alumnes amb necessitats específiques de suport educatiu.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Tens dubtes sobre l&apos;avaluació? 
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Contacta amb nosaltres o descobreix més sobre Educació Primària
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Contacta&apos;ns
              </Link>
              <Link href="/etapes/primaria" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Torna a Primària
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}