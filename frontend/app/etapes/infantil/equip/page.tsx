'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function EquipInfantil() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  const equip = [
    {
      name: 'Maria García',
      role: 'Tutora P3',
      description: 'Especialista en educació emocional i ambients d\'aprenentatge.',
      image: 'https://i.pravatar.cc/300?img=1'
    },
    {
      name: 'Laura Martínez',
      role: 'Tutora P4',
      description: 'Experta en psicomotricitat i desenvolupament infantil.',
      image: 'https://i.pravatar.cc/300?img=5'
    },
    {
      name: 'Anna Rodríguez',
      role:  'Tutora P5',
      description: 'Especialista en lectoescriptura i projectes globals.',
      image: 'https://i.pravatar.cc/300?img=9'
    },
    {
      name: 'Carla Sánchez',
      role: 'Mestra de Suport',
      description: 'Especialista en atenció a la diversitat i inclusió.',
      image: 'https://i.pravatar.cc/300?img=10'
    },
    {
      name: 'David López',
      role: 'Mestre de Música',
      description: 'Especialista en educació musical i expressió corporal.',
      image: 'https://i.pravatar.cc/300?img=12'
    },
    {
      name: 'Sarah Johnson',
      role: 'Mestra d\'Anglès',
      description: 'Native speaker, especialista en early learning.',
      image: 'https://i.pravatar.cc/300?img=20'
    }
  ];

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
            <Link href="/etapes" style={{ color: 'white', textDecoration: 'none' }}>Etapes Educatives</Link>
            <span> / </span>
            <Link href="/etapes/infantil" style={{ color: 'white', textDecoration: 'none' }}>Educació Infantil</Link>
            <span> / </span>
            <span>Equip Docent</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize:  '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Equip Docent
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Educació Infantil
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{ width: '100%', padding:  '80px 20px', background: 'white' }}>
        <div style={{ maxWidth:  '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem', lineHeight: 1.8, color: '#555', textAlign: 'center' }}>
              L&apos;<strong>equip docent d&apos;Educació Infantil</strong> està format per mestres especialitzats i compromesos amb l&apos;<strong>educació de qualitat</strong>, que acompanyen els infants en el seu desenvolupament integral amb <strong>professionalitat</strong>, <strong>vocació</strong> i <strong>afecte</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Equip */}
      <section style={{ width: '100%', padding: '80px 20px', background:  '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            
            {equip.map((membre, index) => (
              <div key={index} style={{ 
                background: 'white', 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e. currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(109,126,79,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
              }}>
                <div style={{ 
                  width: '100%', 
                  height: '280px', 
                  background:  `url(${membre.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition:  'center'
                }} />
                <div style={{ padding: '32px 24px' }}>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                    {membre. name}
                  </h3>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, color: '#8BC34A', margin: '0 0 16px' }}>
                    {membre.role}
                  </p>
                  <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                    {membre.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Valors de l'equip */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize:  '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Els nostres valors
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns:  'repeat(4, 1fr)', gap: '32px' }}>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem',
                margin: '0 auto 16px'
              }}>
                ❤️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize:  '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                Vocació
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Passió per l&apos;educació infantil
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', 
                borderRadius:  '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem',
                margin: '0 auto 16px'
              }}>
                🎓
              </div>
              <h3 style={{ fontFamily:  'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 8px' }}>
                Formació
              </h3>
              <p style={{ fontFamily:  'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Actualització constant
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', 
                borderRadius:  '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem',
                margin: '0 auto 16px'
              }}>
                🤝
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 8px' }}>
                Treball en Equip
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Coordinació i col·laboració
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent:  'center', 
                fontSize: '2.5rem',
                margin: '0 auto 16px'
              }}>
                👨‍👩‍👧‍👦
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color:  '#6D7E4F', margin: '0 0 8px' }}>
                Implicació Familiar
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', lineHeight: 1.7, color: '#666', margin: 0 }}>
                Comunicació amb famílies
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius:  '16px', textAlign: 'center', boxShadow:  '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Vols conèixer-nos? 
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Demana informació o vine a visitar-nos
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block' }}>
                Contacta&apos;ns
              </Link>
              <Link href="/etapes/infantil" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block' }}>
                Torna a Infantil
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}