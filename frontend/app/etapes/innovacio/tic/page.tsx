'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function TICRobotica() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop)',
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
            <Link href="/etapes" style={{ color:  'white', textDecoration:  'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/innovacio" style={{ color: 'white', textDecoration: 'none' }}>Projectes d&apos;Innovació</Link>
            <span> / </span>
            <span>TIC i Robòtica</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            TIC i Robòtica Educativa
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Tecnologia al servei de l&apos;aprenentatge
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              La integració de les <strong>Tecnologies de la Informació i la Comunicació (TIC)</strong> i la <strong>Robòtica Educativa</strong> al nostre centre és fonamental per preparar els alumnes per al món digital i desenvolupar les <strong>competències del segle XXI</strong>.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              No es tracta només d&apos;usar tecnologia, sinó de <strong>crear</strong>, <strong>programar</strong> i <strong>resoldre problemes</strong> utilitzant eines digitals. 
            </p>
          </div>
        </div>
      </section>

      {/* Competència Digital */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Competència Digital
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                💻
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ús Responsable
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Ensenyem l&apos;ús <strong>crític</strong>, <strong>segur</strong> i <strong>responsable</strong> de les tecnologies digitals, incloent ciberseguretat i identitat digital.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height:  '72px', background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', borderRadius: '16px', display: 'flex', alignItems:  'center', justifyContent:  'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎨
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Creació Digital
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Els alumnes no són només <strong>consumidors</strong> sinó <strong>creadors</strong> de continguts digitals:  vídeos, presentacions, webs, aplicacions.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔍
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Gestió de la Informació
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Cerca, selecció, anàlisi i avaluació crítica de la informació digital. Alfabetització mediàtica. 
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Robòtica per etapes */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Robòtica Educativa per Etapes
          </h2>

          <div style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🤖
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2. 2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Programació i Pensament Computacional
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  La robòtica educativa desenvolupa el <strong>pensament computacional</strong>, la <strong>lògica</strong>, la <strong>resolució de problemes</strong> i la <strong>creativitat tecnològica</strong> de forma pràctica i motivadora.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Infantil */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>🧸</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px', textAlign: 'center' }}>
                Educació Infantil
              </h3>
              <p style={{ fontFamily:  'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px', textAlign: 'center' }}>
                P-3, P-4, P-5 (3-6 anys)
              </p>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.8, color: '#555', margin:  0, paddingLeft: '20px' }}>
                <li>Activitats unplugged (sense dispositius)</li>
                <li>Jocs de lògica i seqüències</li>
                <li>Robots educatius (Bee-Bot/Blue-Bot)</li>
                <li>Iniciació al pensament computacional</li>
              </ul>
            </div>

            {/* Primària */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom:  '16px', textAlign: 'center' }}>📚</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px', textAlign: 'center' }}>
                Educació Primària
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px', textAlign: 'center' }}>
                1r a 6è (6-12 anys)
              </p>
              <ul style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>LEGO Education (WeDo, SPIKE)</li>
                <li>Scratch i programació visual</li>
                <li>Projectes de robòtica aplicada</li>
                <li>Introducció a la programació per blocs</li>
              </ul>
            </div>

            {/* Secundària */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '3rem', marginBottom:  '16px', textAlign: 'center' }}>🎓</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px', textAlign: 'center' }}>
                Educació Secundària (ESO)
              </h3>
              <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color:  '#8BC34A', margin:  '0 0 16px', textAlign: 'center' }}>
                1r a 4t ESO (12-16 anys)
              </p>
              <ul style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Scratch avançat / Python</li>
                <li>Arduino i electrònica bàsica</li>
                <li>Disseny 3D i impressió 3D</li>
                <li>Projectes tecnològics integrals</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Eines digitals */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Eines i Recursos Digitals
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '📱', name: 'Google Workspace', desc: 'Classroom, Drive, Docs' },
              { icon: '🎨', name: 'Canva', desc: 'Disseny gràfic' },
              { icon: '🎬', name: 'Edició de Vídeo', desc: 'iMovie, Clipchamp' },
              { icon:  '📊', name: 'Genially', desc: 'Presentacions interactives' },
              { icon: '🎮', name: 'Kahoot / Quizizz', desc: 'Gamificació' },
              { icon: '📚', name: 'Book Creator', desc: 'Creació de llibres digitals' },
              { icon:  '🖨️', name: 'Tinkercad', desc: 'Modelatge i impressió 3D' },
              { icon: '💻', name: 'Scratch', desc: 'Programació visual' }
            ].map((eina, index) => (
              <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{eina.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  {eina.name}
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#666', margin: 0 }}>
                  {eina.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Beneficis */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Beneficis de les TIC i la Robòtica
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🧠', title: 'Pensament Computacional', desc: 'Capacitat de descompondre problemes i trobar solucions algorítmiques' },
              { icon: '💡', title: 'Creativitat i Innovació', desc: 'Creació de solucions originals utilitzant tecnologia' },
              { icon: '🎯', title: 'Resolució de Problemes', desc: 'Enfrontament a reptes tecnològics complexos' },
              { icon:  '🤝', title: 'Treball Col·laboratiu', desc: 'Projectes tecnològics en equip' },
              { icon: '🔥', title: 'Motivació', desc: 'Augment de l\'interès per l\'aprenentatge' },
              { icon: '🚀', title: 'Preparació pel Futur', desc: 'Competències digitals essencials per al segle XXI' }
            ]. map((benefici, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize:  '2.5rem', marginBottom: '16px' }}>{benefici.icon}</div>
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

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(33,150,243,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més projectes d&apos;innovació
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora les altres iniciatives innovadores del centre
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/innovacio/abp" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#2196F3', display: 'inline-block' }}>
                ABP
              </Link>
              <Link href="/etapes/innovacio/educacio-emocional" style={{ fontFamily:  'Montserrat', fontSize: '1rem', fontWeight:  600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
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