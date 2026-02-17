'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function Inclusio() {
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
            <Link href="/lescola/projecte-educatiu" style={{ color: 'white', textDecoration: 'none' }}>Projecte Educatiu</Link>
            <span> / </span>
            <span>Inclusió</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Inclusió i atenció a la diversitat
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Cada alumne és únic i mereix un acompanyament personalitzat
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 32px' }}>
              La diversitat com a riquesa
            </h2>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              L'Institut Escola Lluís Millet és un centre educatiu que destaca per el seu <strong>compromís amb la inclusió i l'atenció a la diversitat</strong>. Organitzem l'atenció a la diversitat com a eix fonamental del nostre dia a dia, concebent l'escola com un lloc on es reconeix i acompanya cada estudiant des de les seves necessitats i capacitats personals.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '24px', textAlign: 'left' }}>
              La diversitat és <strong>valorada i tractada com a riquesa</strong>, promovent la inclusió de tots els nens i nenes i entenent cada un com una persona única que necessita el seu propi camí d'aprenentatge.
            </p>
          </div>
        </div>
      </section>

      {/* Principis de la inclusió */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Els nostres principis inclusius
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                👥
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Reconeixement individual
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Cada nen i nena és una <strong>persona única</strong> amb necessitats, capacitats i ritmes propis que cal reconèixer i respectar. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🤗
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Acompanyament personalitzat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                El professorat <strong>acompanya, valora i accepta</strong> la diversitat, adaptant l'ensenyament a les necessitats de cada alumne. 
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                💚
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació emocional
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Treballem intensament la <strong>cohesió social, l'autoestima i el reconeixement</strong> de cada un dels alumnes. 
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Metodologies inclusives */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Metodologies inclusives
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  '1fr 1fr', gap:  '32px', marginBottom: '48px', alignItems: 'center' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1544717684-96a5e1f0f02e?w=600&h=400&fit=crop" alt="Inclusió" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Organització flexible i personalitzada
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Utilitzem metodologies com els <strong>ambients d'aprenentatge</strong>, l'organització flexible de l'espai i materials, i proposem activitats globalitzades i personalitzades que afavoreixen el desenvolupament autònom i el protagonisme de l'alumnat.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Busquem que els nens i nenes siguin els <strong>constructors actius del seu aprenentatge</strong>, a la vegada que compten amb l'acompanyament emocional i pedagògic dels docents.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎯</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Aprenentatge autònom
              </h4>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Fomentam l'autonomia permetent que cada alumne progressi al seu ritme i segons els seus interessos.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize:  '2.5rem', marginBottom: '16px' }}>🔄</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize:  '1.2rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                Adaptació curricular
              </h4>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Adaptem l'ensenyament a diferents perfils d'aprenentatge i situacions socials o familiars diverses.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>👨‍🏫</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize:  '1.2rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                Docència compartida
              </h4>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Dos docents a l'aula permeten una atenció més personalitzada i eficaç a la diversitat.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize:  '2.5rem', marginBottom: '16px' }}>🌈</div>
              <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                Materials manipulatius
              </h4>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Utilitzem materials diversos que permeten diferents formes d'aprendre i expressar el coneixement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Recursos i equips de suport */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color:  '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Recursos i equips de suport
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Equip d'educació especial
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                La plantilla inclou <strong>especialistes en educació especial</strong>, així com personal de suport específic que garanteix una atenció adequada a les necessitats educatives especials d'alguns alumnes.
              </p>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.8, color: '#666', margin: 0, paddingLeft: '20px' }}>
                <li>Mestres d'educació especial</li>
                <li>Personal vetllador</li>
                <li>Serveis externs (EAP i TIS)</li>
                <li>Orientació psicopedagògica</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Instal·lacions accessibles
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Les nostres <strong>instal·lacions són accessibles</strong>, facilitant la inclusió física i social d'estudiants amb discapacitat o mobilitat reduïda.
              </p>
              <ul style={{ fontFamily: 'Open Sans', fontSize:  '0.95rem', lineHeight: 1.8, color: '#666', margin: 0, paddingLeft: '20px' }}>
                <li>Rampes i accessos adaptats</li>
                <li>Lavabos adaptats</li>
                <li>Espais amplis i segurs</li>
                <li>Materials adaptats</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Cohesió social i convivència */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '60px 40px', borderRadius: '16px', color: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', marginBottom: '16px' }}>🤝</div>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 24px' }}>
                  Cohesió social i treball emocional
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', lineHeight: 1.8, margin: '0 0 16px' }}>
                  Treballem intensament en la <strong>cohesió social dins de l'escola</strong>, posant èmfasi en l'educació emocional, l'autoestima i el reconeixement de cada un dels alumnes.
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                  El <strong>respecte mutu, la tolerància i la convivència pacífica</strong> són valors que es promouen de forma transversal, buscant que tot l'alumnat se senti part i protagonista de l'escola.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cita destacada */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', color: '#6D7E4F', marginBottom: '24px' }}>❝</div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 600, color: '#6D7E4F', lineHeight: 1.5, margin: '0 0 24px', fontStyle: 'italic' }}>
            "La diversitat no és un problema a resoldre, sinó una riquesa a celebrar i acompanyar"
          </p>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#888', margin: 0 }}>
            Institut Escola Lluís Millet
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més sobre el nostre projecte educatiu
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize:  '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix la nostra metodologia i competències clau
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/projecte-educatiu/metodologia" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Metodologia pedagògica
              </Link>
              <Link href="/lescola/projecte-educatiu/competencies" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Competències clau
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Contacta'ns
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}