'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function Metodologia() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff? text=LOGO+ESCOLA'
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=400&fit=crop)',
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
            <span>Metodologia</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Metodologia i enfocament pedagògic
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            L'alumnat com a protagonista del seu aprenentatge
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
              Una nova mirada pedagògica
            </h2>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              La paraula clau no és ja <strong>"ensenyança"</strong> sinó <strong>"aprenentatge"</strong>.  Partim de la mirada i la curiositat de l'alumnat, sent ells els autèntics constructors del seu propi coneixement.  El rol del mestre és d'acompanyament, posant en valor i acceptant la diversitat i entenent cada alumne com a únic en el seu procés d'aprenentatge.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              Organitzem els espais, els materials i les agrupacions de manera diferent, propiciant <strong>ambients on l'aprenentatge sorgeix de forma espontània</strong>, fomentant l'autonomia i la construcció activa del coneixement.
            </p>
          </div>
        </div>
      </section>

      {/* Ambients d'aprenentatge */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Ambients d'aprenentatge
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap:  '32px', marginBottom: '48px', alignItems: 'center' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop" alt="Ambients" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Què són els ambients? 
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Els <strong>ambients d'aprenentatge</strong> són espais organitzats de manera que l'aprenentatge sorgeixi de forma espontània.  Reorganitzem espais, materials i alumnes per fomentar aprenentatges significatius on el nen i la nena són els protagonistes. 
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Presents des de <strong>P3 fins a 6è de primària</strong>, aquests ambients permeten l'exploració lliure, la descoberta i el desenvolupament autònom de les capacitats de cada infant. 
              </p>
            </div>
          </div>

          <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'center' }}>
              Característiques dels ambients
            </h3>
            <div style={{ display:  'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🎨</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize:  '1.1rem', fontWeight: 600, color: '#6D7E4F', margin:  '0 0 8px' }}>Materials diversos</h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#666', margin: 0 }}>Manipulatius, sensorials i vivencials</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize:  '2.5rem', marginBottom: '12px' }}>🔄</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: '#6D7E4F', margin: '0 0 8px' }}>Lliure circulació</h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#666', margin: 0 }}>Els infants escullen on i com aprendre</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>👥</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize:  '1.1rem', fontWeight: 600, color: '#6D7E4F', margin:  '0 0 8px' }}>Treball cooperatiu</h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: '#666', margin: 0 }}>Aprendre amb i dels companys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espais d'aprenentatge */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Espais d'aprenentatge
          </h2>

          <div style={{ display:  'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🏫</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Infantil
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Els espais donen resposta a les diferents capacitats curriculars. Els infants poden circular lliurement i triar les propostes segons els seus interessos, fomentant l'autonomia des dels primers anys.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📚</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Educació Primària
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Els espais s'especialitzen en àrees matemàtiques i comunicatives.  Propostes obertes que permeten a l'alumnat experimentar, crear i aprendre al seu propi ritme amb acompanyament docent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taller Millet y Proyectos */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🛠️</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Taller Millet
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Espai per al desenvolupament <strong>cognitiu, emocional i cinètic</strong>. Un lloc on els alumnes experimenten, creen, construeixen i desenvolupen les seves capacitats de forma integral, relacionant el cos, l'art i l'entorn.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Treball per projectes
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                L'aprenentatge es basa en <strong>projectes, petites investigacions i preguntes d'interès</strong> formulades pels propis nens.  Activitats globalitzades que estimulen la curiositat i el pensament crític.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Organització del dia a dia */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Organització del dia a dia
          </h2>

          <div style={{ display:  'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            
            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌅</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>Entrada relaxada</h4>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>Els estudiants entren de forma tranquil·la, amb espais on poden expressar inquietuds i pensaments, reforçant l'acollida emocional.</p>
            </div>

            <div style={{ background: 'white', padding:  '24px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📖</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>Lectura diària</h4>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>Temps específic cada dia dedicat al foment de la lectura i el plaer per llegir.</p>
            </div>

            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2rem', marginBottom:  '12px' }}>🌳</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>Sortides a la natura</h4>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>Excursions i activitats a l'aire lliure són freqüents per experimentar i aprendre en contacte amb la natura.</p>
            </div>

            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🥗</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>Hàbits saludables</h4>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', margin: 0 }}>Promovem bons hàbits alimentaris i educació per a la sostenibilitat.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre el nostre projecte educatiu
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix les competències i la nostra atenció a la diversitat
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/projecte-educatiu/competencies" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius:  '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Competències clau
              </Link>
              <Link href="/projecte-educatiu/inclusio" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
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