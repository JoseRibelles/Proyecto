'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ABP() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=400&fit=crop)',
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
            <Link href="/etapes/innovacio" style={{ color: 'white', textDecoration: 'none' }}>Projectes d&apos;Innovació</Link>
            <span> / </span>
            <span>ABP</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Aprenentatge Basat en Projectes
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Aprendre fent, creant i investigant
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>Aprenentatge Basat en Projectes (ABP)</strong> és una metodologia activa que situa l&apos;alumne al <strong>centre del procés d&apos;aprenentatge</strong>, treballant sobre <strong>reptes reals</strong> i <strong>preguntes significatives</strong> que connecten amb els seus interessos i necessitats.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              A través de les <strong>Petites Investigacions</strong> i els <strong>Centres d&apos;Interès</strong>, els alumnes desenvolupen projectes que integren diferents matèries i competències.
            </p>
          </div>
        </div>
      </section>

      {/* Què és l'ABP */}
      <section style={{ width: '100%', padding: '80px 20px', background:   '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Què és l&apos;ABP?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ❓
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Pregunta Motriu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                El projecte s&apos;inicia amb una <strong>pregunta motivadora</strong> que desperta la curiositat i connecta amb els interessos dels alumnes.  Exemple:   "Com podem fer que el nostre barri sigui més sostenible?"
              </p>
            </div>

            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔍
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Investigació
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Els alumnes investiguen, busquen informació, experimenten i exploren diferents fonts per trobar respostes i solucions.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height:  '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                🤝
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Treball Cooperatiu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Els alumnes treballen en <strong>equips heterogenis</strong>, compartint responsabilitats, prenent decisions conjuntes i aprenent els uns dels altres.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎬
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Producte Final
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                El projecte culmina amb la creació d&apos;un <strong>producte final</strong> (presentació, vídeo, maqueta, informe.. .) que es comparteix amb la comunitat educativa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Com es treballa */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Com Treballem amb ABP?
          </h2>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {[
              {
                num: '1',
                title: 'Plantejament del Repte',
                description: 'El mestre presenta una pregunta o repte motivador que connecta amb els interessos dels alumnes i amb el currículum.'
              },
              {
                num: '2',
                title: 'Què Sabem?  Què Volem Saber?',
                description: 'Els alumnes comparteixen els seus coneixements previs i generen preguntes d\'investigació.'
              },
              {
                num: '3',
                title: 'Planificació',
                description: 'Organització del treball en equips, distribució de tasques i establiment d\'un calendari.'
              },
              {
                num: '4',
                title: 'Investigació i Creació',
                description: 'Cerca d\'informació, experimentació, creació de prototips i elaboració del producte final.'
              },
              {
                num: '5',
                title: 'Presentació i Avaluació',
                description: 'Els alumnes presenten els seus treballs davant dels companys i la comunitat.   Autoavaluació, coavaluació i feedback.'
              }
            ].map((fase, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', marginBottom: '24px', borderLeft: '6px solid #6D7E4F' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display:  'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', fontWeight: 700, flexShrink: 0 }}>
                    {fase.num}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {fase.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                      {fase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Beneficis */}
      <section style={{ width: '100%', padding: '80px 20px', background:  '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Beneficis de l&apos;ABP
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎯', title: 'Aprenentatge Profund', desc: 'Comprensió real i duradora dels conceptes' },
              { icon: '💪', title: 'Autonomia', desc: 'Desenvolupament de l\'autoregulació i iniciativa' },
              { icon: '🤝', title: 'Treball en Equip', desc: 'Habilitats de col·laboració i comunicació' },
              { icon:  '💡', title: 'Pensament Crític', desc: 'Capacitat d\'anàlisi, síntesi i resolució de problemes' },
              { icon: '🔥', title: 'Motivació', desc: 'Increment de l\'interès i engagement' },
              { icon: '🌍', title: 'Connexió amb la Realitat', desc: 'Aprenentatge aplicat a situacions reals' }
            ].map((benefici, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{benefici.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {benefici.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin:  0 }}>
                  {benefici.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Exemples */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Exemples de Projectes
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            Alguns exemples de projectes ABP que desenvolupem al centre
          </p>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gap: '32px' }}>
            
            {[
              {
                etapa: 'Infantil',
                title: 'El nostre entorn natural',
                description: 'Exploració de la natura de Santa Coloma amb sortides, observació i registre de descobriments.'
              },
              {
                etapa: 'Primària',
                title: 'Petites Investigacions',
                description: 'Projectes d\'investigació que parteixen de les preguntes dels alumnes sobre temes que els interessen.'
              },
              {
                etapa: 'Primària',
                title: 'Centres d\'Interès',
                description: 'Treball globalitzat al voltant de temes transversals que integren diferents matèries.'
              },
              {
                etapa: 'Secundària',
                title: 'Projectes transversals',
                description: 'Reptes que connecten amb la realitat social i desenvolupen competències globals.'
              }
            ]. map((projecte, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '6px 16px', borderRadius:  '20px', fontSize: '0.85rem', fontFamily: 'Montserrat', fontWeight: 600, marginBottom: '16px' }}>
                  {projecte. etapa}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {projecte.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                  {projecte.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més projectes d&apos;innovació
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora les altres iniciatives innovadores del centre
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/innovacio/tic-robotica" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                TIC i Robòtica
              </Link>
              <Link href="/etapes/innovacio/educacio-emocional" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding:  '14px 32px', borderRadius: '8px', textDecoration: 'none', background:  'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Educació Emocional
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}