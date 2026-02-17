'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function MetodologiesPrimaria() {
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
            <Link href="/etapes" style={{ color: 'white', textDecoration: 'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/primaria" style={{ color: 'white', textDecoration: 'none' }}>Educació Primària</Link>
            <span> / </span>
            <span>Metodologies i Projectes</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Metodologies i Projectes
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1. 25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Primària
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              A <strong>Educació Primària</strong> de l&apos;Institut Escola Lluís Millet apliquem <strong>metodologies innovadores</strong> basades en <strong>ambients</strong> i <strong>espais d&apos;aprenentatge</strong> que situen l&apos;alumne al centre del procés educatiu.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologies principals */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Les Nostres Metodologies
          </h2>

          <div style={{ display: 'grid', gap: '32px' }}>
            
            {/* Ambients d'Aprenentatge */}
            <div style={{ background: 'white', padding: '48px 40px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3. 5rem' }}>
                  🎨
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                    Ambients d&apos;Aprenentatge (P-3 a 6è)
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                    Espais organitzats on l&apos;aprenentatge sorgeix de forma <strong>espontània</strong>, fent que l&apos;alumne sigui el <strong>protagonista</strong> del seu procés educatiu.  Els estudiants circulen lliurement per diferents espais amb propostes que incentiven l&apos;aprenentatge autònom.
                  </p>
                </div>
              </div>
            </div>

            {/* Espais d'Aprenentatge */}
            <div style={{ background: 'white', padding:  '48px 40px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns:  '120px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                  📐
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                    Espais d&apos;Aprenentatge
                  </h3>
                  <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Espais especialitzats en <strong>matemàtiques</strong> i <strong>comunicació</strong> on els alumnes treballen de forma autònoma i cooperativa, desenvolupant competències clau amb materials manipulatius i recursos didàctics diversos.
                  </p>
                </div>
              </div>
            </div>

            {/* Petites Investigacions */}
            <div style={{ background: 'white', padding:  '48px 40px', borderRadius: '16px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns:  '120px 1fr', gap: '32px', alignItems:  'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '20px', display:  'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                  🔍
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                    Petites Investigacions
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Projectes d&apos;investigació que parteixen de la <strong>curiositat</strong> dels alumnes i impulsen el <strong>treball globalitzat</strong> i transversal a través de preguntes i descobriments.  Metodologia que fomenta el pensament científic i crític. 
                  </p>
                </div>
              </div>
            </div>

            {/* Centres d'Interès */}
            <div style={{ background: 'white', padding: '48px 40px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display:  'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '20px', display:  'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                  🎯
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                    Centres d&apos;Interès
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Treball globalitzat al voltant de <strong>temes</strong> que connecten amb les necessitats i interessos dels alumnes, integrant diferents matèries i competències de forma natural i significativa.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projectes destacats */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Projectes Destacats
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Foment de la Lectura */}
            <div style={{ background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', padding: '40px 32px', borderRadius: '16px', color: 'white' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📚</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                Foment de la Lectura
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 16px', opacity: 0.95, fontWeight: 600 }}>
                15: 00 - 15:30h · Diari
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                Temps exclusiu dedicat a la lectura cada dia per promoure l&apos;hàbit lector i el gust pels llibres. 
              </p>
            </div>

            {/* Taller Millet */}
            <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '40px 32px', borderRadius: '16px', color: 'white' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎭</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                Taller Millet
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 16px', opacity: 0.95, fontWeight: 600 }}>
                Cos, Art i Medi Ambient
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                Desenvolupament cognitiu, emocional i cinètic a través d&apos;activitats relacionades amb el cos, l&apos;art i la natura.
              </p>
            </div>

            {/* Sortides a la Natura */}
            <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '40px 32px', borderRadius: '16px', color:  'white' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌳</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                Sortides a la Natura
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 16px', opacity: 0.95, fontWeight: 600 }}>
                Regulars
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                Sortides a espais naturals per gaudir, jugar i experimentar amb el medi ambient.
              </p>
            </div>

            {/* Hàbits Saludables */}
            <div style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', padding: '40px 32px', borderRadius: '16px', color:  'white' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🥗</div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 12px' }}>
                Hàbits Saludables
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 16px', opacity: 0.95, fontWeight: 600 }}>
                Transversal
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, opacity: 0.9 }}>
                Promoció d&apos;hàbits alimentaris saludables i educació en sostenibilitat ambiental.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Valors metodològics */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Principis Metodològics
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎯', title:  'Alumne Protagonista', desc: 'Al centre del procés d\'aprenentatge' },
              { icon: '🤝', title: 'Treball d\'Equip', desc: 'Col·laboració entre alumnes i mestres' },
              { icon:  '💡', title: 'Aprenentatge Espontani', desc: 'A través d\'ambients i materials' },
              { icon: '❤️', title: 'Treball Emocional', desc: 'Desenvolupament personal i social' }
            ].map((valor, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display:  'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 16px' }}>
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
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre Primària
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora les competències i l&apos;avaluació
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/primaria/competencies" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Competències Bàsiques
              </Link>
              <Link href="/etapes/primaria/avaluacio" style={{ fontFamily:  'Montserrat', fontSize: '1rem', fontWeight:  600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Avaluació i Seguiment
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}