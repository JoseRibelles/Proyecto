'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function PremisAcademics() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop)',
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
            <Link href="/lescola" style={{ color: 'white', textDecoration: 'none' }}>L'Escola</Link>
            <span> / </span>
            <span>Premis Acadèmics</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Premis i Reconeixements
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Reconeixements a l'excel·lència educativa
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L'<strong>Institut Escola Lluís Millet</strong> ha estat reconegut amb diversos premis que avalen el nostre <strong>compromís amb la innovació pedagògica</strong>, la <strong>transformació educativa</strong> i l'<strong>excel·lència</strong>. 
            </p>
          </div>
        </div>
      </section>

      {/* Premi Cercle d'Economia 2022 */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', padding: '60px 40px', borderRadius: '16px', color: 'white', boxShadow: '0 8px 24px rgba(109,126,79,0.3)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize: '6rem' }}>🏆</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 16px' }}>
                  Candidatura Premi Cercle d'Economia 2022
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: '0 0 20px', opacity: 0.95 }}>
                  L'escola va ser <strong>candidata al Premi Ensenyament 2022</strong> atorgat pel <strong>Cercle d'Economia</strong>, en reconeixement a la <strong>capacitat de millora i transformació</strong> del centre educatiu. 
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Aquest reconeixement valora especialment el <strong>canvi metodològic</strong>, la <strong>implicació de les famílies</strong> i l'aposta per la <strong>innovació pedagògica</strong>, la <strong>inclusió</strong> i el <strong>treball globalitzat</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premi Baldiri Reixach 2019 */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: '#f9f9f9', padding: '60px 40px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontSize:  '6rem' }}>🎓</div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Premi Baldiri Reixach 2019
                </h2>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: '0 0 20px' }}>
                  Reconeixement atorgat pel <strong>Consell Comarcal del Baix Llobregat</strong> que premia la trajectòria educativa i el compromís amb la innovació pedagògica de l'escola.
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                  Aquest premi destaca l'esforç del centre per impulsar <strong>metodologies actives</strong>, l'<strong>atenció a la diversitat</strong> i la creació d'un <strong>projecte educatiu transformador</strong> que posa l'alumnat al centre de l'aprenentatge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Els nostres valors premiats */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Els nostres valors premiats
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🏫
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Innovació Pedagògica
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Metodologies actives com ambients d'aprenentatge i aprenentatge per projectes que transformen l'educació.
              </p>
            </div>

            <div style={{ background:  'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color:  'white', marginBottom: '24px', fontSize: '2rem' }}>
                🤝
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 16px' }}>
                Inclusió Educativa
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Atenció a la diversitat amb estratègies adaptades per garantir l'èxit de tot l'alumnat.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                👨‍👩‍👧‍👦
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Comunitat Educativa
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Implicació activa de les famílies i creació d'una comunitat cohesionada i participativa.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius:  '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🌱
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Sostenibilitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight:  1.8, color: '#555', margin: 0 }}>
                Compromís ambiental integrat al currículum per educar en valors ecològics i responsables.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                📖
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Promoció de la Lectura
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Programes que incentiven l'hàbit lector i el gaudi de la literatura des de les primeres edats.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize:  '2rem' }}>
                🎨
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Creativitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Espais com el Taller Millet que fomenten l'autonomia i la creativitat dels alumnes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix el nostre projecte educatiu
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix les metodologies i projectes que han fet possible aquests reconeixements
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lescola/premis/projectes" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Projectes Destacats
              </Link>
              <Link href="/lescola/projecte-educatiu/metodologia" style={{ fontFamily: 'Montserrat', fontSize:  '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Metodologia
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Contacta&apos;ns
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}