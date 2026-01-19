'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function Identitat() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=400&fit=crop)',
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
            <Link href="/lescola/qui-som" style={{ color:   'white', textDecoration:   'none' }}>Qui som</Link>
            <span> / </span>
            <span>Identitat i filosofia</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Identitat i filosofia educativa
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Una nova mirada pedagògica centrada en l'alumnat
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
              Qui som i com eduquem
            </h2>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              L'Institut Escola Lluís Millet es defineix com un <strong>espai acollidor, inclusiu i innovador</strong> on les nenes, els nens i els joves creixen i es formen en un entorn que fomenta tant el seu desenvolupament personal com acadèmic. Considerem l'educació com un pilar fonamental no només per al progrés individual, sinó també per al desenvolupament col·lectiu, social i emocional del nostre alumnat.
            </p>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              El nostre alumnat és el <strong>protagonista actiu del seu aprenentatge</strong>. El professorat acompanya, valora i accepta la diversitat, entenent cada nen i nena com una persona única a qui cal acompanyar en el seu camí de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía educativa - 3 pilars */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Els pilars de la nostra filosofia educativa
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                👦
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                L'alumnat és protagonista
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                No parlem de "ensenyança" sinó d'<strong>"aprenentatge"</strong>.  Partim de la mirada i la curiositat de l'alumnat, sent ells els constructors del seu propi coneixement. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height:  '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom:  '24px', fontSize: '2rem' }}>
                🤗
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Acceptació de la diversitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                El professorat acompanya, valora i accepta la diversitat, entenent <strong>cada nen i nena com una persona única</strong> amb necessitats i ritmes propis. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                💡
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Aprenentatge significatiu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Apostem per l'<strong>aprenentatge autònom, significatiu</strong> i la gestió emocional, amb treball en equip i educació emocional durant tot el temps a l'escola.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Metodologies innovadores */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Les nostres metodologies innovadores
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  '1fr 1fr', gap:  '32px', marginBottom: '48px' }}>
            
            {/* Ambients d'aprenentatge */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Ambients d'aprenentatge
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Reorganitzem espais, materials i alumnes per fomentar aprenentatges espontanis i significatius on el nen i la nena són els protagonistes.  Els ambients permeten l'exploració lliure i la descoberta. 
              </p>
            </div>

            {/* Espais d'aprenentatge */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🏫</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Espais d'aprenentatge
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Propostes obertes i de lliure circulació per fomentar l'autonomia.  Els infants poden elegir, experimentar i aprendre al seu propi ritme amb materials manipulatius i vivencials.
              </p>
            </div>

            {/* Taller Millet */}
            <div style={{ background: 'white', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🛠️</div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Taller Millet
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Espai per al desenvolupament cognitiu, emocional i cinètic.  Un lloc on els alumnes experimenten, creen, construeixen i desenvolupen les seves capacitats de forma integral.
              </p>
            </div>

            {/* Treball per projectes */}
            <div style={{ background: 'white', padding: '32px', borderRadius:  '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📚</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.3rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 16px' }}>
                Treball per projectes
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Projectes transversals que connecten diferents àrees de coneixement, partint dels interessos de l'alumnat i fomentant la recerca, la col·laboració i l'aprenentatge competencial.
              </p>
            </div>

          </div>

          {/* Natureza y sostenibilidad */}
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '40px', borderRadius: '16px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌳</div>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 16px' }}>
              Contacte amb la natura i sostenibilitat
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.7, margin: 0, maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              Promovem exploracions a la natura, hàbits saludables i el respecte pel medi ambient. El contacte directe amb l'entorn natural forma part essencial de la nostra proposta educativa per educar ciutadans conscients i responsables. 
            </p>
          </div>
        </div>
      </section>

      {/* Continuïtat i innovació */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Continuïtat pedagògica i innovació
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap:  '32px' }}>
            
            <div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                D'Infantil a Primària i Secundària
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                El nostre centre ofereix continuïtat pedagògica des de l'educació infantil fins a la secundària, adaptant els projectes a les necessitats reals de cada etapa i garantint una transició fluida i coherent.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Les metodologies inclusives i competencials asseguren equitat i oportunitats d'èxit per a tot l'alumnat, respectant els diferents ritmes i estils d'aprenentatge.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Reptes de l'educació contemporània
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                L'organització escolar i les metodologies pretenen consolidar la nostra identitat institucional i respondre als reptes de l'educació contemporània:  inclusió, diversitat, implicació de les famílies i relació amb la comunitat.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Preparem ciutadans crítics, competents i compromesos amb la societat actual i futura, capaços d'afrontar els reptes del segle XXI.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Cita destacada */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', color: '#6D7E4F', marginBottom: '24px' }}>❝</div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 600, color: '#6D7E4F', lineHeight: 1.5, margin: '0 0 24px', fontStyle: 'italic' }}>
            "L'alumnat no és un recipient buit que cal omplir, sinó una espurna que cal encendre"
          </p>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#888', margin: 0 }}>
            Filosofia educativa Institut Escola Lluís Millet
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre el nostre projecte
            </h3>
            <p style={{ fontFamily:  'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix els nostres valors i la història del centre
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/qui-som/missio" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Missió, visió i valors
              </Link>
              <Link href="/lescola/qui-som/historia" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Història del centre
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
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