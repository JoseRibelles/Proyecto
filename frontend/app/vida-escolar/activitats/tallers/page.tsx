'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function TallersActivitats() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=400&fit=crop)',
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
            <Link href="/vida-escolar" style={{ color:    'white', textDecoration:    'none' }}>Vida Escolar</Link>
            <span> / </span>
            <Link href="/vida-escolar/activitats-sortides" style={{ color: 'white', textDecoration: 'none' }}>Activitats i Sortides</Link>
            <span> / </span>
            <span>Tallers i Activitats</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Tallers i Activitats Externes
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Aprendre amb professionals i experiències pràctiques
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Els <strong>tallers</strong> i <strong>activitats amb professionals externs</strong> complementen el treball del professorat, aportant <strong>mirades especialitzades</strong>, <strong>recursos específics</strong> i <strong>experiències pràctiques</strong> que enriqueixen l&apos;aprenentatge dels alumnes.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Aquestes activitats connecten l&apos;escola amb el <strong>món professional</strong>, la <strong>cultura</strong> i la <strong>societat</strong>. 
            </p>
          </div>
        </div>
      </section>

      {/* Tipus de tallers */}
      <section style={{ width: '100%', padding: '80px 20px', background:   '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:   '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Tipus de Tallers i Activitats
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:   'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Tallers científics */}
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔬
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Tallers Científics i Tecnològics
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Experiments i demostracions científiques</li>
                <li>Robòtica i programació amb experts</li>
                <li>Tallers de matemàtiques manipulatives</li>
                <li>Educació ambiental i sostenibilitat</li>
              </ul>
            </div>

            {/* Tallers artístics */}
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height:   '72px', background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', borderRadius: '16px', display: 'flex', alignItems:   'center', justifyContent:   'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎨
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:   '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Tallers Artístics i Creatius
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft:  '20px' }}>
                <li>Arts plàstiques i visual (pintura, escultura... )</li>
                <li>Música:   instruments, cant coral</li>
                <li>Teatre i expressió corporal</li>
                <li>Dansa i moviment creatiu</li>
              </ul>
            </div>

            {/* Tallers esportius */}
            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:   '72px', height: '72px', background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:   'white', marginBottom: '24px', fontSize: '2rem' }}>
                ⚽
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Tallers Esportius i d&apos;Activitat Física
              </h3>
              <ul style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Esports d&apos;equip amb entrenadors especialitzats</li>
                <li>Activitats d&apos;aventura:  escalada, orientació</li>
                <li>Ioga i mindfulness</li>
                <li>Educació física adaptada</li>
              </ul>
            </div>

            {/* Tallers de salut */}
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width:  '72px', height: '72px', background:   'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)', borderRadius: '16px', display:  'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ❤️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:   '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:   '0 0 16px' }}>
                Educació per a la Salut
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Educació sexual i afectiva</li>
                <li>Primers auxilis</li>
                <li>Hàbits alimentaris saludables</li>
                <li>Prevenció d&apos;addiccions</li>
              </ul>
            </div>

            {/* Tallers de valors */}
            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:    'white', marginBottom: '24px', fontSize: '2rem' }}>
                🤝
              </div>
              <h3 style={{ fontFamily:   'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació en Valors i Convivència
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft:  '20px' }}>
                <li>Tallers d&apos;intel·ligència emocional</li>
                <li>Resolució de conflictes</li>
                <li>Igualtat de gènere</li>
                <li>Drets humans i solidaritat</li>
              </ul>
            </div>

            {/* Tallers de llengües */}
            <div style={{ background: 'white', padding:  '40px 32px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🗣️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Tallers de Llengües
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0, paddingLeft: '20px' }}>
                <li>Conversa amb nadius (anglès)</li>
                <li>Teatre en anglès</li>
                <li>Tallers de lectura i escriptura creativa</li>
                <li>Contacontes i animació lectora</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Xerrades i presentacions */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:   '2rem', fontWeight:  700, color: '#6D7E4F', textAlign:  'center', margin: '0 0 48px' }}>
            Xerrades i Presentacions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              {
                icon: '👨‍💼',
                title: 'Professionals i Oficis',
                description: 'Professionals de diferents sectors expliquen la seva feina als alumnes.'
              },
              {
                icon: '📚',
                title: 'Escriptors i Artistes',
                description: 'Trobades amb autors, il·lustradors i creadors culturals.'
              },
              {
                icon: '🌍',
                title: 'Temes d\'Actualitat',
                description: 'Xerrades sobre sostenibilitat, tecnologia, drets humans, etc.'
              },
              {
                icon: '🎓',
                title: 'Orientació Acadèmica',
                description: 'Universitats, centres de FP i escoles professionals.'
              },
              {
                icon: '👨‍👩‍👧',
                title: 'Famílies i Comunitat',
                description: 'Participació de les famílies compartint experiències i sabers.'
              },
              {
                icon: '🏛️',
                title: 'Institucions',
                description: 'Visites de representants d\'institucions locals i entitats.'
              }
            ]. map((xerrada, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding:   '32px 24px', borderRadius: '12px', border:   '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{xerrada.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {xerrada.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin:   0 }}>
                  {xerrada.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Col·laboradors */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Col·laboradors i Entitats
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Treballem amb diferents entitats i professionals per oferir activitats de qualitat
          </p>

          <div style={{ display: 'grid', gridTemplateColumns:   'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            
            {[
              {
                icon: '🏛️',
                title: 'Ajuntament de Santa Coloma',
                description:  'Programes educatius municipals, ús d\'equipaments i recursos locals.'
              },
              {
                icon: '🎭',
                title: 'Centres Culturals',
                description: 'Teatres, museus i espais culturals del Barcelonès Nord.'
              },
              {
                icon: '🌳',
                title: 'Entitats Ambientals',
                description: 'Organitzacions dedicades a l\'educació ambiental i la sostenibilitat.'
              },
              {
                icon: '🏥',
                title:  'Centres de Salut',
                description: 'CAP i serveis de salut per a programes d\'educació sanitària.'
              },
              {
                icon: '📚',
                title: 'Biblioteques',
                description: 'Xarxa de biblioteques de Santa Coloma per a activitats de foment lector.'
              },
              {
                icon: '🎨',
                title: 'Escoles d\'Art i Música',
                description: 'Professionals i escoles especialitzades en arts i música.'
              }
            ].map((col·laborador, index) => (
              <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{col·laborador.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                      {col·laborador.title}
                    </h3>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                      {col·laborador.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Beneficis */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Beneficis dels Tallers Externs
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:   'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '👨‍🏫', title: 'Experts Especialitzats', desc: 'Professionals amb formació específica' },
              { icon: '🔧', title: 'Recursos Específics', desc: 'Materials i eines professionals' },
              { icon: '🌍', title: 'Obertura al Món', desc: 'Connexió amb la realitat social' },
              { icon: '💡', title: 'Noves Perspectives', desc: 'Mirades diferents sobre els temes' },
              { icon:  '🎯', title: 'Motivació', desc:   'Experiències innovadores i atractives' },
              { icon:   '🤝', title: 'Treball en Xarxa', desc: 'Col·laboració amb la comunitat' },
              { icon:   '🔍', title:  'Aprofundiment', desc: 'Tractament especialitzat de temes' },
              { icon:  '⭐', title: 'Experiències Úniques', desc: 'Moments significatius i memorables' }
            ].map((benefici, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px' }}>
                  {benefici.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
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
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius:    '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre la vida escolar
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora les excursions, colònies i altres activitats
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/activitats/excursions" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Excursions i Colònies
              </Link>
              <Link href="/vida-escolar/activitats" style={{ fontFamily:   'Montserrat', fontSize: '1rem', fontWeight:   600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Torna a Activitats
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}