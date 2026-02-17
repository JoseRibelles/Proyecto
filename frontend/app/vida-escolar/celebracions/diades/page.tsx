'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function DiadesCommemora() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)',
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
            <Link href="/vida-escolar" style={{ color: 'white', textDecoration: 'none' }}>Vida Escolar</Link>
            <span> / </span>
            <Link href="/vida-escolar/celebracions-tradicions" style={{ color: 'white', textDecoration: 'none' }}>Celebracions i Tradicions</Link>
            <span> / </span>
            <span>Diades i Commemoracions</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Diades i Commemoracions
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació en valors i consciència social
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;Institut Escola Lluís Millet commemora al llarg del curs diferents <strong>diades internacionals</strong> i <strong>dies especials</strong> amb activitats educatives que promouen valors com la <strong>pau</strong>, la <strong>igualtat</strong>, el <strong>respecte</strong> i la <strong>sostenibilitat</strong>.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              Aquestes commemoracions són moments de <strong>reflexió</strong>, <strong>sensibilització</strong> i <strong>compromís</strong> amb una societat més justa i equitativa, alineades amb el nostre projecte educatiu i amb els valors del barri de Les Oliveres.
            </p>
          </div>
        </div>
      </section>

      {/* Dia de la Pau */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #42A5F5 0%, #1E88E5 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🕊️
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Dia Escolar de la Pau i la No Violència
                </h3>
                <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 12px' }}>
                  30 de gener
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Commemoració dedicada a fomentar la <strong>pau</strong>, la <strong>convivència</strong> i el rebuig a qualsevol tipus de <strong>violència</strong> dins i fora de l&apos;àmbit escolar. Activitats cooperatives, murals col·lectius, música, reflexions i dinàmiques de grup.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎨', title: 'Murals per la Pau', desc: 'Creació col·lectiva de murals amb missatges de pau' },
              { icon: '🎵', title: 'Cançons i Música', desc: 'Cantada de cançons per la pau i himnes de convivència' },
              { icon: '🤝', title: 'Dinàmiques Cooperatives', desc: 'Jocs i activitats que fomenten la col·laboració' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activitat.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {activitat.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {activitat.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Dia de la Dona */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                ♀️
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Dia Internacional de la Dona
                </h3>
                <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 12px' }}>
                  8 de març
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Commemoració de la lluita per la <strong>igualtat de gènere</strong> i els <strong>drets de les dones</strong>. Xerrades, exposicions, tallers sobre referents femenins, debats sobre igualtat i activitats de sensibilització contra la discriminació.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '👩‍🔬', name: 'Dones Referents' },
              { icon: '📚', name: 'Lectures i Biografies' },
              { icon: '🎨', name: 'Exposicions' },
              { icon: '💬', name: 'Xerrades i Debats' },
              { icon: '🎬', name: 'Documentals' },
              { icon: '✊', name: 'Murals Reivindicatius' },
              { icon: '📖', name: 'Contes Coeducatius' },
              { icon: '🌍', name: 'Dones al Món' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{activitat.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {activitat.name}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 25 de novembre */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                💜
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Dia Internacional contra la Violència envers les Dones
                </h3>
                <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 12px' }}>
                  25 de novembre
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Activitats de <strong>sensibilització</strong> i <strong>reflexió</strong> sobre la violència de gènere. Campanyes de conscienciació, tallers sobre relacions saludables, i treball transversal sobre el respecte i la igualtat.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '💬', title: 'Reflexió i Debat', desc: 'Espais de diàleg sobre relacions igualitàries' },
              { icon: '🎗️', title: 'Campanyes de Conscienciació', desc: 'Murals, llaços violetes i missatges de suport' },
              { icon: '📖', title: 'Materials Educatius', desc: 'Lectures, vídeos i recursos sobre prevenció' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{activitat.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {activitat.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {activitat.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Dia del Medi Ambient */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', padding: '60px 50px', borderRadius: '20px', color: 'white', marginBottom: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '40px', alignItems: 'center' }}>
              <div style={{ width: '140px', height: '140px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', backdropFilter: 'blur(10px)' }}>
                🌍
              </div>
              <div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, margin: '0 0 20px' }}>
                  Dia Mundial del Medi Ambient
                </h3>
                <p style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 12px' }}>
                  5 de juny (i 26 de gener - Dia de l&apos;Educació Ambiental)
                </p>
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, margin: 0, opacity: 0.95 }}>
                  Sensibilització sobre la <strong>sostenibilitat</strong>, el <strong>respecte pel medi ambient</strong> i les <strong>accions de cura de la natura</strong>. Sortides, tallers de reciclatge, plantació d&apos;arbres i projectes mediambientals.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '♻️', name: 'Reciclatge' },
              { icon: '🌱', name: 'Plantació d\'Arbres' },
              { icon: '🚶', name: 'Neteja d\'Espais' },
              { icon: '💧', name: 'Estalvi d\'Aigua' },
              { icon: '🌳', name: 'Sortides Naturals' },
              { icon: '📊', name: 'Projectes Ambientals' },
              { icon: '🎨', name: 'Art amb Materials Reciclats' },
              { icon: '🌏', name: 'Consciència Global' }
            ].map((activitat, index) => (
              <div key={index} style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{activitat.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {activitat.name}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Altres commemoracions */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Altres Diades i Commemoracions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {[
              {
                icon: '🌈',
                title: 'Dia de la Diversitat Cultural',
                date: '21 de maig',
                description: 'Celebració de la riquesa cultural i la convivència intercultural del nostre centre i del barri de Les Oliveres.'
              },
              {
                icon: '🚫',
                title: 'Dia contra el Bullying',
                date: '2 de maig',
                description: 'Activitats de prevenció de l\'assetjament escolar i promoció del bon tracte i el respecte entre companys.'
              },
              {
                icon: '🔬',
                title: 'Setmana de la Ciència',
                date: 'Novembre',
                description: 'Tallers, experiments, xerrades i activitats per fomentar la curiositat científica i el pensament crític.'
              },
              {
                icon: '📚',
                title: 'Dia de les Biblioteques',
                date: '24 d\'octubre',
                description: 'Foment de la lectura amb activitats especials a la biblioteca escolar, contacontes i recomanacions literàries.'
              },
              {
                icon: '🎓',
                title: 'Dia Internacional de l\'Educació',
                date: '24 de gener',
                description: 'Reflexió sobre el dret a l\'educació i el valor de l\'aprenentatge per a tothom.'
              },
              {
                icon: '🌍',
                title: 'Dia dels Drets Humans',
                date: '10 de desembre',
                description: 'Treball sobre els drets humans universals, la dignitat i la justícia social.'
              }
            ].map((commemoracio, index) => (
              <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #e8f0dc' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '3rem', flexShrink: 0 }}>{commemoracio.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                      {commemoracio.title}
                    </h3>
                    <p style={{ fontFamily: 'Montserrat', fontSize: '0.95rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 12px' }}>
                      {commemoracio.date}
                    </p>
                    <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                      {commemoracio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Valors transversals */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Valors que Treballem
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🕊️', title: 'Pau i Convivència' },
              { icon: '⚖️', title: 'Igualtat de Gènere' },
              { icon: '🤝', title: 'Respecte i Tolerància' },
              { icon: '🌍', title: 'Sostenibilitat' },
              { icon: '❤️', title: 'Empatia i Solidaritat' },
              { icon: '🌈', title: 'Diversitat Cultural' },
              { icon: '⚖️', title: 'Justícia Social' },
              { icon: '🎓', title: 'Dret a l\'Educació' }
            ].map((valor, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px' }}>
                  {valor.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {valor.title}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Torna a Celebracions i Tradicions
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora les altres celebracions del centre
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/celebracions/festes" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Festes del Centre
              </Link>
              <Link href="/vida-escolar/celebracions/setmana-cultural" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Setmana Cultural
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}