'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function CompetenciesPrimaria() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText:  'UNA NOVA MIRADA PEDAGÒGICA',
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
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex:  1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/etapes" style={{ color:  'white', textDecoration:  'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/primaria" style={{ color:  'white', textDecoration:  'none' }}>Educació Primària</Link>
            <span> / </span>
            <span>Competències Bàsiques</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Competències Bàsiques
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Primària
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin:  '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              Les <strong>competències bàsiques</strong> són el conjunt de <strong>coneixements</strong>, <strong>habilitats</strong> i <strong>actituds</strong> que els alumnes han de desenvolupar per aconseguir la seva <strong>realització personal</strong>, exercir la <strong>ciutadania activa</strong> i incorporar-se a la vida adulta de manera satisfactòria.
            </p>
          </div>
        </div>
      </section>

      {/* Competències clau */}
      <section style={{ width: '100%', padding:  '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Les 8 Competències Clau
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            
            {/* Competència 1 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                  🗣️
                </div>
                <div>
                  <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                    1. Competència en Comunicació Lingüística i Audiovisual
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Capacitat per expressar-se i comprendre missatges orals i escrits en català, castellà i anglès. Desenvolupament de la lectura comprensiva, l&apos;expressió escrita, l&apos;oralitat i la competència audiovisual.
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 2 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink:  0 }}>
                  🌍
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                    2. Competència Plurilingüe
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                    Ús de diverses llengües de manera apropiada i eficaç per a la comunicació.  Immersió lingüística en català, castellà i anglès amb metodologies AICLE (Aprenentatge Integrat de Continguts i Llengües Estrangeres).
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 3 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:  '2rem', flexShrink: 0 }}>
                  🔢
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                    3. Competència Matemàtica i en Ciència, Tecnologia i Enginyeria
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize:  '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Raonament lògic-matemàtic, resolució de problemes, mètode científic, pensament computacional i robòtica. Desenvolupament del pensament STEM per entendre el món i transformar-lo. 
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 4 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink:  0 }}>
                  💻
                </div>
                <div>
                  <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                    4. Competència Digital
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize:  '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Ús creatiu, crític, segur i responsable de les tecnologies digitals. Cerca i gestió d&apos;informació, creació de continguts digitals, programació, seguretat en línia i identitat digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 5 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                  🤝
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                    5. Competència Personal, Social i d&apos;Aprendre a Aprendre
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Reflexió sobre un mateix, gestió del temps i la informació, treball individual i en equip, resiliència i capacitat per afrontar la incertesa i la complexitat.
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 6 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink:  0 }}>
                  🏛️
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.5rem', fontWeight: 700, color: '#6D7E4F', margin:  '0 0 12px' }}>
                    6. Competència Ciutadana
                  </h3>
                  <p style={{ fontFamily:  'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Capacitat d&apos;actuar com a ciutadans responsables i participar plenament en la vida social i cívica. Comprensió dels valors democràtics, drets humans, igualtat i sostenibilitat.
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 7 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                  💼
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                    7. Competència Emprenedora
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Capacitat per actuar sobre oportunitats i idees, i transformar-les en activitats personals, socials o professionals que generin valor.  Creativitat, iniciativa, assumpció de riscos i lideratge.
                  </p>
                </div>
              </div>
            </div>

            {/* Competència 8 */}
            <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border:  '2px solid #e8f0dc', boxShadow:  '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', height: '72px', background:  'linear-gradient(135deg, #8BC34A 0%, #6D7E4F 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                  🎨
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                    8. Competència en Consciència i Expressions Culturals
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Comprensió i respecte de diferents manifestacions culturals i artístiques. Expressió d&apos;idees, experiències i emocions mitjançant diferents llenguatges artístics:  música, arts plàstiques, dansa, teatre. 
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Com les treballem */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Com les treballem? 
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔄</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                De forma Transversal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin:  0 }}>
                Integrades en totes les àrees i projectes del currículum escolar. 
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize:  '3rem', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Amb Situacions Reals
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                A través de reptes i problemes connectats amb la vida quotidiana.
              </p>
            </div>

            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📊</div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Amb Avaluació Contínua
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize:  '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Seguiment permanent del grau d&apos;assoliment de cada competència.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix com avaluem les competències
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Coneix el nostre sistema d&apos;avaluació i seguiment
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/etapes/primaria/avaluacio" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius:  '8px', textDecoration:  'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Avaluació i Seguiment
              </Link>
              <Link href="/etapes/primaria/metodologies" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Metodologies i Projectes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}