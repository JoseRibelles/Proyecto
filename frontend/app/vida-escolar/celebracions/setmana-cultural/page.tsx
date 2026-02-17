'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function SetmanaCultural() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=400&fit=crop)',
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
            <span>Setmana Cultural</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Setmana Cultural
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Jornades especials dedicades a la cultura i la creativitat
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              La <strong>Setmana Cultural</strong> és un dels moments més destacats del curs a l&apos;Institut Escola Lluís Millet. Durant aquests dies, canviem l&apos;estructura habitual de les classes per donar pas a <strong>activitats diverses</strong> que fomenten la <strong>creativitat</strong>, la <strong>participació activa</strong> i l&apos;<strong>aprenentatge lúdic</strong>.
            </p>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginTop: '16px' }}>
              És un projecte que implica tota la comunitat educativa: <strong>alumnes</strong>, <strong>professorat</strong>, <strong>famílies</strong> i <strong>entitats del barri de Les Oliveres</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Objectius */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Objectius de la Setmana Cultural
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎨', title: 'Creativitat i Expressió', desc: 'Desenvolupar la creativitat a través de diferents llenguatges artístics' },
              { icon: '🌍', title: 'Interculturalitat', desc: 'Celebrar la diversitat cultural del barri i de les famílies' },
              { icon: '🤝', title: 'Participació Comunitària', desc: 'Implicar famílies, alumnes i entitats en activitats conjuntes' },
              { icon: '📚', title: 'Aprenentatge Vivencial', desc: 'Aprendre de manera pràctica i significativa' },
              { icon: '🎭', title: 'Expressió Artística', desc: 'Donar protagonisme a les arts, la música i el teatre' },
              { icon: '💡', title: 'Treball Interdisciplinari', desc: 'Integrar diferents àrees del currículum' }
            ].map((objectiu, index) => (
              <div key={index} style={{ background: 'white', padding: '32px 24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{objectiu.icon}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 12px' }}>
                  {objectiu.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#555', margin: 0 }}>
                  {objectiu.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Activitats */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Tipus d&apos;Activitats
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Tallers Creatius */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ✂️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Tallers Creatius i Manualitats
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Taller de gravat i enquadernació</li>
                <li>Creació de roses i punts de llibre</li>
                <li>Pintura, escultura i arts plàstiques</li>
                <li>Manualitats amb materials reciclats</li>
              </ul>
            </div>

            {/* Exposicions */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🖼️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Exposicions Temàtiques
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Treballs dels alumnes de totes les etapes</li>
                <li>Exposicions literàries i artístiques</li>
                <li>Decoració del centre amb frases sobre lectura</li>
                <li>Murals i projectes col·lectius</li>
              </ul>
            </div>

            {/* Actuacions */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎭
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Actuacions i Presentacions
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Teatre i representacions dels alumnes</li>
                <li>Concerts i actuacions musicals</li>
                <li>Danses i balls tradicionals</li>
                <li>Poesia i recitals literaris</li>
              </ul>
            </div>

            {/* Participació Famílies */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                👨‍👩‍👧
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Participació de les Famílies
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Xerrades de pares i mares sobre cultures</li>
                <li>Tallers impartits per famílies</li>
                <li>Contacontes i explicació de tradicions</li>
                <li>Recollida de receptes de tot el món</li>
              </ul>
            </div>

            {/* Sortides */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🚶
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Sortides Culturals
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Visites a museus de Barcelona</li>
                <li>Passejades pel casc antic</li>
                <li>Laberint d&apos;Horta i espais naturals</li>
                <li>Teatres i espectacles culturals</li>
              </ul>
            </div>

            {/* Cinema i audiovisual */}
            <div style={{ background: '#f9f9f9', padding: '40px 32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎬
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Cinefòrum i Audiovisuals
              </h3>
              <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0, paddingLeft: '20px' }}>
                <li>Projecció de pel·lícules educatives</li>
                <li>Debats i reflexions col·lectives</li>
                <li>Creació de vídeos pels alumnes</li>
                <li>Documentals sobre diversitat cultural</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Temàtiques */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            Temàtiques Habituals
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            Cada any la setmana cultural pot tenir una temàtica diferent
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            
            {[
              { icon: '📚', name: 'Literatura i Lectura' },
              { icon: '🌍', name: 'Cultures del Món' },
              { icon: '🎨', name: 'Art i Creativitat' },
              { icon: '🎵', name: 'Música i Dansa' },
              { icon: '🌱', name: 'Sostenibilitat' },
              { icon: '🔬', name: 'Ciència i Tecnologia' },
              { icon: '🏛️', name: 'Patrimoni Cultural' },
              { icon: '🎭', name: 'Arts Escèniques' }
            ].map((tematica, index) => (
              <div key={index} style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{tematica.icon}</div>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  {tematica.name}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Beneficis */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Beneficis de la Setmana Cultural
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            
            {[
              { icon: '🎯', title: 'Motivació', desc: 'Activitats atractives que motiven l\'aprenentatge' },
              { icon: '🤝', title: 'Convivència', desc: 'Reforç dels vincles entre la comunitat educativa' },
              { icon: '💡', title: 'Creativitat', desc: 'Desenvolupament de la imaginació i expressió' },
              { icon: '🌈', title: 'Diversitat', desc: 'Celebració de la riquesa cultural' },
              { icon: '📖', title: 'Aprenentatge', desc: 'Aprendre de forma lúdica i significativa' },
              { icon: '❤️', title: 'Inclusió', desc: 'Participació de tothom en igualtat' },
              { icon: '🎨', title: 'Expressió', desc: 'Diferents formes d\'expressió artística' },
              { icon: '👨‍👩‍👧', title: 'Famílies', desc: 'Implicació activa de les famílies' }
            ].map((benefici, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 16px' }}>
                  {benefici.icon}
                </div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.1rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                  {benefici.title}
                </h3>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', lineHeight: 1.6, color: '#666', margin: 0 }}>
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
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Descobreix més celebracions
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Explora les festes del centre i les diades commemoratives
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vida-escolar/celebracions/festes" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Festes del Centre
              </Link>
              <Link href="/vida-escolar/celebracions/diades" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Diades i Commemoracions
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}