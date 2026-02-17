'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ProjectesSecundaria() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop)',
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
            <Link href="/etapes/secundaria" style={{ color: 'white', textDecoration: 'none' }}>Educació Secundària</Link>
            <span> / </span>
            <span>Projectes Transversals</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Projectes Transversals
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Secundària
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>Institut Escola Lluís Millet</strong> de Santa Coloma de Gramenet implementa <strong>metodologies innovadores</strong> que situen l&apos;alumne al centre del procés d&apos;aprenentatge, promovent l&apos;<strong>aprenentatge significatiu</strong>, la <strong>participació activa</strong> i el <strong>pensament crític</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Ambients d'Aprenentatge */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Ambients i Espais d&apos;Aprenentatge
          </h2>

          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🎨
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2. 2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Ambients d&apos;Aprenentatge (P-3 a 6è)
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: '0 0 20px', opacity: 0.95 }}>
                  Espais organitzats on l&apos;aprenentatge sorgeix de forma <strong>espontània</strong>, fent que l&apos;alumne sigui el <strong>protagonista</strong> del seu procés educatiu.  
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                  Els estudiants circulen lliurement per diferents espais amb propostes que incentiven l&apos;aprenentatge autònom, especialitzat en matemàtiques i comunicació.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🔍
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Petites Investigacions
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Projectes d&apos;investigació que parteixen de la curiositat dels alumnes i impulsen el treball globalitzat i transversal a través de preguntes i descobriments.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display:  'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎯
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Centres d&apos;Interès
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Treball globalitzat al voltant de temes que connecten amb les necessitats i interessos reals dels adolescents, integrant diferents matèries. 
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Taller Millet */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Taller Millet
          </h2>

          <div style={{ background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display:  'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background:  'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🎭
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Taller Millet
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Espai dedicat al desenvolupament <strong>cognitiu</strong>, <strong>emocional</strong> i <strong>cinètic</strong> a través d&apos;activitats relacionades amb el <strong>cos</strong>, l&apos;<strong>art</strong> i el <strong>medi ambient</strong>.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎭</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Expressió Corporal
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Treball del cos i el moviment com a eines d&apos;expressió i comunicació.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Creació Artística
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Desenvolupament de la creativitat a través de diferents llenguatges artístics. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize:  '3rem', marginBottom: '16px' }}>🌱</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Medi Ambient
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Consciència ecològica i connexió amb la natura.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Lectura i altres projectes */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Altres Projectes Destacats
          </h2>

          <div style={{ display: 'grid', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', backdropFilter: 'blur(10px)' }}>
                  📚
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.8rem', fontWeight: 700, margin: '0 0 16px' }}>
                    Foment de la Lectura
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    <strong>Cada dia de 15:00 a 15:30h</strong> es dedica temps exclusiu a la lectura, promovent tant l&apos;aprenentatge com el gust pels llibres.  Aquest projecte diari és un dels pilars del centre.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns:  '120px 1fr', gap: '32px', alignItems:  'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems:  'center', justifyContent:  'center', fontSize: '3.5rem', backdropFilter: 'blur(10px)' }}>
                  🌳
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, margin: '0 0 16px' }}>
                    Sortides a la Natura
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Sortides regulars a l&apos;entorn natural per gaudir, jugar i experimentar amb la natura.  Connexió directa amb el medi ambient i aprenentatge vivencial.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', padding: '48px 40px', borderRadius: '16px', color: 'white' }}>
              <div style={{ display:  'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', backdropFilter: 'blur(10px)' }}>
                  🥗
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.8rem', fontWeight: 700, margin: '0 0 16px' }}>
                    Hàbits Saludables i Sostenibilitat
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                    Promoció d&apos;hàbits alimentaris saludables i educació en sostenibilitat ambiental com a eixos transversals del projecte educatiu.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metodologia innovadora */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Projecte Innovador de Secundària
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin:  '0 auto 48px' }}>
            Continuïtat del projecte de Primària amb metodologies actives adaptades a les necessitats reals de l&apos;adolescent
          </p>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎯', title: 'Alumne Protagonista', desc: 'Al centre del procés d\'aprenentatge' },
              { icon: '🤝', title: 'Treball d\'Equip', desc: 'Col·laboració i suport mutu' },
              { icon:  '💡', title: 'Aprenentatge Actiu', desc: 'Metodologies participatives i pràctiques' },
              { icon: '❤️', title: 'Treball Emocional', desc: 'Desenvolupament personal i social' }
            ].map((valor, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 16px' }}>
                  {valor.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  {valor.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                  {valor.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background:  '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre Secundària
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix l&apos;orientació i les activitats complementàries
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/eso/orientacio" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Orientació Acadèmica
              </Link>
              <Link href="/etapes/eso/activitats" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding:  '14px 32px', borderRadius: '8px', textDecoration: 'none', background:  'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Activitats Complementàries
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}