'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ExcursionsColonies() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
      
      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&h=400&fit=crop)',
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
            <Link href="/vida-escolar" style={{ color:   'white', textDecoration:   'none' }}>Vida Escolar</Link>
            <span> / </span>
            <Link href="/vida-escolar/activitats-sortides" style={{ color: 'white', textDecoration: 'none' }}>Activitats i Sortides</Link>
            <span> / </span>
            <span>Excursions i Colònies</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Excursions i Colònies
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Experiències a la natura i l&apos;entorn
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Les <strong>excursions</strong> i <strong>colònies</strong> són activitats essencials que permeten als alumnes <strong>sortir de l&apos;aula</strong>, connectar amb la <strong>natura</strong>, descobrir el <strong>patrimoni cultural</strong> i desenvolupar l&apos;<strong>autonomia personal</strong> i les <strong>habilitats socials</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sortides a la Natura */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Sortides a la Natura
          </h2>

          <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🌳
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Contacte Regular amb la Natura
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Totes les etapes educatives realitzen <strong>sortides regulars</strong> a espais naturals de l&apos;entorn de <strong>Santa Coloma de Gramenet</strong>, el <strong>Parc de la Serralada de Marina</strong> i altres indrets naturals del <strong>Barcelonès Nord</strong>.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🦋', title: 'Observació de la Natura', desc: 'Flora, fauna i ecosistemes locals' },
              { icon: '🎒', title: 'Senderisme', desc: 'Rutes adaptades a cada edat' },
              { icon: '🔍', title: 'Recerca i Experimentació', desc: 'Projectes d\'investigació al medi natural' },
              { icon:  '🌱', title: 'Educació Ambiental', desc: 'Consciència ecològica i sostenibilitat' },
              { icon: '🎨', title: 'Art i Natura', desc: 'Creació artística amb elements naturals' },
              { icon: '🏃', title: 'Jocs a l\'Aire Lliure', desc: 'Activitats lúdiques i esportives' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activitat.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {activitat.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin:  0 }}>
                  {activitat.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Excursions culturals */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Excursions Culturals i Educatives
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {[
              {
                icon: '🏛️',
                title: 'Museus i Centres Culturals',
                description: 'Visites al MNAC, Museu de Ciències Naturals, CosmoCaixa, museus locals de Santa Coloma i exposicions temporals.'
              },
              {
                icon: '🎭',
                title: 'Teatre i Espectacles',
                description: 'Assistència a obres teatrals en català, castellà i anglès.   Espectacles musicals i dansa.'
              },
              {
                icon: '🏰',
                title: 'Patrimoni Històric',
                description: 'Rutes pel patrimoni de Catalunya:   castells, monestirs, conjunts medievals i jaciments arqueològics.'
              },
              {
                icon: '🔬',
                title: 'Centres Científics',
                description: 'Tallers i activitats pràctiques en centres de divulgació científica i tecnològica.'
              },
              {
                icon: '🏢',
                title: 'Món Professional',
                description: 'Visites a empreses, centres de recerca i institucions per conèixer diferents sectors professionals.'
              },
              {
                icon: '🌍',
                title: 'Entorn Local',
                description: 'Descoberta del patrimoni i recursos de Santa Coloma de Gramenet i el Barcelonès Nord.'
              }
            ].map((excursio, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '3rem', flexShrink: 0 }}>{excursio.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {excursio.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                      {excursio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Colònies per etapes */}
      <section style={{ width: '100%', padding: '80px 20px', background:  '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Colònies i Estades
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Experiències d&apos;estada que fomenten l&apos;autonomia, la convivència i l&apos;aprenentatge vivencial
          </p>

          <div style={{ display: 'grid', gap: '32px' }}>
            
            {/* Infantil */}
            <div style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🧸</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Educació Infantil - Sortida d&apos;1 Dia
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Els més petits realitzen una <strong>sortida d&apos;un dia complet</strong> a una granja escola o espai natural proper, amb activitats adaptades a la seva edat:   contacte amb animals, jocs a la natura i dinàmiques de grup.
                  </p>
                </div>
              </div>
            </div>

            {/* Primària */}
            <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns:  '100px 1fr', gap: '32px', alignItems:  'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🏕️</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Educació Primària - Colònies
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Estades de <strong>2 a 5 dies</strong> en cases de colònies amb activitats d&apos;<strong>aventura</strong>, <strong>esport</strong>, <strong>natura</strong> i <strong>convivència</strong>.  Cada curs té una proposta adaptada al seu nivell i objectius educatius.
                  </p>
                </div>
              </div>
            </div>

            {/* Secundària */}
            <div style={{ background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display:  'grid', gridTemplateColumns: '100px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ fontSize: '4rem', textAlign: 'center' }}>🎒</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 12px' }}>
                    Educació Secundària - Viatges d&apos;Estudis
                  </h3>
                  <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Viatges culturals i <strong>immersions lingüístiques</strong> amb estades de fins a <strong>una setmana</strong>.   Visites a ciutats d&apos;interès històric, artístic i cultural, amb possibilitat de viatges a l&apos;estranger per practicar idiomes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Beneficis */}
      <section style={{ width: '100%', padding: '80px 20px', background:  'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Beneficis de les Colònies
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '💪', title: 'Autonomia', desc: 'Gestió personal i independència' },
              { icon: '🤝', title: 'Convivència', desc: 'Relacions socials fora de l\'aula' },
              { icon:  '🌟', title: 'Autoconfiança', desc: 'Superació de reptes personals' },
              { icon:  '❤️', title: 'Gestió Emocional', desc: 'Adaptació a nous entorns' },
              { icon:  '🎯', title: 'Responsabilitat', desc: 'Cura de les pertinences i espais' },
              { icon: '🌍', title: 'Descoberta', desc: 'Nous entorns i experiències' },
              { icon: '🏃', title: 'Activitat Física', desc: 'Esport i moviment a la natura' },
              { icon: '🧠', title: 'Aprenentatge Vivencial', desc: 'Experiències significatives' }
            ].map((benefici, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px' }}>
                  {benefici.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.1rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  {benefici.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', lineHeight: 1.6, color: '#666', margin: 0 }}>
                  {benefici.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius:  '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més activitats
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora els tallers i activitats externes
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/activitats/tallers" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Tallers i Activitats
              </Link>
              <Link href="/vida-escolar/activitats" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight:  600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Torna a Activitats
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}