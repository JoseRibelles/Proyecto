'use client';
import React from 'react';
import Link from 'next/link';

export default function ProjecteEducatiu() {
  return (
    <>
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
            <Link href="/lescola" style={{ color: 'white', textDecoration: 'none' }}>L'Escola</Link>
            <span> / </span>
            <span>Projecte Educatiu</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Projecte Educatiu
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Una nova mirada pedagògica per al futur dels nostres alumnes
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=700&fit=crop" alt="Projecte Educatiu" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }} />
              <div style={{ fontFamily: 'Open Sans', fontSize: '0.85rem', color: '#888', marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                Institut Escola Lluís Millet - Les Oliveres
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', textAlign: 'left' }}>
                El nostre compromís educatiu
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                L'<strong>Institut Escola Lluís Millet</strong> té com a objectiu principal formar persones íntegres, crítiques i responsables, capaces d'afrontar els reptes del futur amb autonomia i creativitat.
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                El nostre projecte educatiu es fonamenta en una <strong>metodologia activa i participativa</strong>, on l'alumnat és el protagonista del seu propi aprenentatge, amb especial atenció a la diversitat i la inclusió.
              </p>
              <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', borderLeft: '5px solid #6D7E4F', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  La nostra visió
                </h4>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                  Ser un centre de referència educativa al barri de Les Oliveres, reconegut per la qualitat, la innovació i el compromís amb l'educació integral de l'alumnat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilars del projecte */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Pilars del nostre projecte educatiu
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Pilar 1 */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 24px', fontSize: '2.5rem' }}>
                🎓
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 16px' }}>
                Aprenentatge Actiu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Metodologies actives que fomenten la participació, la creativitat i el pensament crític de l'alumnat.
              </p>
            </div>

            {/* Pilar 2 */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 24px', fontSize: '2.5rem' }}>
                🤝
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 16px' }}>
                Inclusió i Diversitat
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Atenció personalitzada i respecte a la diversitat, garantint la inclusió de tot l'alumnat.
              </p>
            </div>

            {/* Pilar 3 */}
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 24px', fontSize: '2.5rem' }}>
                🌍
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 700, color: '#333', margin: '0 0 16px' }}>
                Educació en Valors
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                Foment dels valors de respecte, responsabilitat, solidaritat i compromís amb la comunitat.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Objectius */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Objectius principals
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>📚</span>
                Competències clau
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Desenvolupar les competències bàsiques i transversals</li>
                <li>Fomentar l'aprenentatge autònom i significatiu</li>
                <li>Promoure el pensament crític i creatiu</li>
                <li>Potenciar les habilitats comunicatives</li>
              </ul>
            </div>

            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>💡</span>
                Innovació pedagògica
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Incorporar metodologies actives i innovadores</li>
                <li>Integrar les TIC en el procés d'aprenentatge</li>
                <li>Treballar per projectes interdisciplinaris</li>
                <li>Fomentar el treball cooperatiu</li>
              </ul>
            </div>

            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>🌱</span>
                Desenvolupament personal
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Educar en valors democràtics i cívics</li>
                <li>Desenvolupar l'intel·ligència emocional</li>
                <li>Fomentar l'autonomia i la responsabilitat</li>
                <li>Promoure hàbits de vida saludable</li>
              </ul>
            </div>

            <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>👨‍👩‍👧‍👦</span>
                Comunitat educativa
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Potenciar la participació de les famílies</li>
                <li>Establir vincles amb l'entorn i el barri</li>
                <li>Promoure la col·laboració amb altres centres</li>
                <li>Fomentar la cohesió de la comunitat educativa</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Metodologia d'aprenentatge
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Apliquem metodologies actives que posen l'alumnat al centre del procés educatiu
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>🔬</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Aprenentatge Basat en Projectes (ABP)
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Els alumnes investiguen i treballen sobre reptes reals, desenvolupant competències transversals i aplicant coneixements de diferents àrees.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>👥</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Aprenentatge Cooperatiu
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Foment del treball en equip, la col·laboració i l'ajuda mútua entre l'alumnat per aconseguir objectius comuns.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>💻</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Competència Digital
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Integració de les TIC com a eina d'aprenentatge, desenvolupant la competència digital i l'ús responsable de la tecnologia.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>🎯</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
                    Atenció a la Diversitat
                  </h3>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                    Personalització de l'aprenentatge amb mesures d'atenció a la diversitat, reforços i plans individuals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Etapes educatives */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Etapes educatives
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {/* Infantil */}
            <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '40px', borderRadius: '16px', border: '3px solid #6D7E4F', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🧒</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.6rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Infantil
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: '0 0 16px' }}>
                3 a 6 anys
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#666', margin: 0 }}>
                Aprenentatge a través del joc, desenvolupament de l'autonomia i descoberta de l'entorn.
              </p>
            </div>

            {/* Primària */}
            <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '40px', borderRadius: '16px', border: '3px solid #6D7E4F', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>👦</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.6rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Primària
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: '0 0 16px' }}>
                6 a 12 anys
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#666', margin: 0 }}>
                Adquisició de competències bàsiques, foment de la lectura i consolidació d'aprenentatges.
              </p>
            </div>

            {/* ESO */}
            <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '40px', borderRadius: '16px', border: '3px solid #6D7E4F', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎓</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.6rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Educació Secundària
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: '0 0 16px' }}>
                12 a 16 anys
              </p>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.6, color: '#666', margin: 0 }}>
                Preparació per al futur acadèmic i professional, orientació i maduresa personal.
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
              Vols conèixer més sobre el nostre projecte?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Vine a visitar-nos i descobreix com treballem per l'educació integral dels nostres alumnes
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Contacta amb nosaltres
              </Link>
              <Link href="/admissio/preinscripcio/info" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Informació de preinscripció
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
