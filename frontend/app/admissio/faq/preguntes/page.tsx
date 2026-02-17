'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function PreguntesFrequents() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Col·legi Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: 'Horaris i calendari',
      questions: [
        {
          q: 'Quin és l\'horari del centre?',
          a: 'L\'horari lectiu és de 9:00h a 12:30h i de 15:00h a 16:30h de dilluns a divendres. Durant el mes de juny es fa jornada intensiva de 9:00h a 13:00h.'
        },
        {
          q: 'Quin horari té la secretaria?',
          a: 'La secretaria està oberta de dilluns a divendres de 9:00h a 13:00h. Per a tràmits que requereixin més temps, es recomana demanar cita prèvia.'
        },
        {
          q: 'On puc trobar el calendari escolar?',
          a: 'El calendari escolar complet està disponible a la secció d\'Admissió i secretaria > Calendari escolar. També el podeu descarregar en format PDF.'
        }
      ]
    },
    {
      category: 'Matrícula i admissió',
      questions: [
        {
          q: 'Com puc preinscriure el meu fill/a?',
          a: 'La preinscripció es realitza telemàticament a través del portal del Departament d\'Educació durant el període establert (generalment al març). Consulta la secció Preinscripció i matrícula per a més detalls.'
        },
        {
          q: 'Quina documentació necessito per a la matrícula?',
          a: 'Necessitaràs: DNI/NIE de l\'alumne/a, llibre de família, 4 fotos mida carnet, fotocòpia de la targeta sanitària i certificat de vacunacions. Consulta la llista completa a Formularis i documentació.'
        },
        {
          q: 'Hi ha termini per formalitzar la matrícula?',
          a: 'Sí, un cop admès l\'alumne/a, cal formalitzar la matrícula durant el període establert (generalment al juny). No fer-ho implica la pèrdua de la plaça.'
        }
      ]
    },
    {
      category: 'Serveis del centre',
      questions: [
        {
          q: 'El centre ofereix servei de menjador?',
          a: 'Sí, disposem de servei de menjador escolar amb cuina pròpia. Els menús són elaborats per nutricionistes i s\'adapten a al·lèrgies i intoleràncies. Podeu consultar el menú mensual a la web.'
        },
        {
          q: 'Hi ha acollida matinal?',
          a: 'Sí, oferim servei d\'acollida matinal des de les 8:00h fins a les 9:00h per facilitar la conciliació familiar.'
        },
        {
          q: 'Oferiu extraescolars?',
          a: 'Sí, oferim diverses activitats extraescolars (esportives, artístiques, tecnològiques) que es realitzen de 17:00h a 18:00h. La inscripció es fa a l\'inici de cada trimestre.'
        }
      ]
    },
    {
      category: 'Comunicació i seguiment',
      questions: [
        {
          q: 'Com puc comunicar-me amb els professors?',
          a: 'Podeu contactar amb els tutors mitjançant l\'agenda escolar, el correu electrònic del centre o sol·licitant una reunió presencial. També hi ha reunions programades cada trimestre.'
        },
        {
          q: 'Com faig el seguiment acadèmic del meu fill/a?',
          a: 'A través de les reunions trimestrals, els informes d\'avaluació i la comunicació constant amb el tutor/a. També podeu sol·licitar reunions individuals quan ho considereu necessari.'
        },
        {
          q: 'On puc consultar les notes?',
          a: 'Els informes d\'avaluació es lliuren presencialment en les reunions amb les famílies al final de cada trimestre.'
        }
      ]
    },
    {
      category: 'Tràmits i certificats',
      questions: [
        {
          q: 'Com puc sol·licitar un certificat d\'escolaritat?',
          a: 'Podeu sol·licitar-lo presencialment a la secretaria o mitjançant correu electrònic a a8076947@xtec.cat. El termini de lliurament és de 3-5 dies laborables.'
        },
        {
          q: 'Com justifico les absències del meu fill/a?',
          a: 'Les absències s\'han de justificar per escrit a través de l\'agenda escolar o mitjançant justificant mèdic en cas de malaltia.'
        },
        {
          q: 'He canviat de domicili, com ho comunico?',
          a: 'Cal comunicar qualsevol canvi de dades (domicili, telèfon, correu) a la secretaria del centre aportant el nou certificat d\'empadronament.'
        }
      ]
    },
    {
      category: 'Salut i seguretat',
      questions: [
        {
          q: 'Què passa si el meu fill/a es posa malalt a l\'escola?',
          a: 'En cas de malaltia o accident, es contacta immediatament amb la família. Si és necessari, s\'avisa als serveis mèdics d\'emergència.'
        },
        {
          q: 'El meu fill/a té al·lèrgies, com ho gestiono?',
          a: 'Cal informar a la secretaria i al tutor/a al començament de curs, aportant un informe mèdic. El centre disposa de protocols específics per a al·lèrgies alimentàries.'
        },
        {
          q: 'Necessita medicació durant l\'horari escolar',
          a: 'Cal presentar una autorització signada pels pares/tutors juntament amb la prescripció mèdica. El personal del centre administrarà la medicació segons les indicacions mèdiques.'
        }
      ]
    }
  ];

  return (
    <>
      

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&h=400&fit=crop)',
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
            <Link href="/admissio" style={{ color: 'white', textDecoration: 'none' }}>Admissió i secretaria</Link>
            <span> / </span>
            <Link href="/admissio/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ i tràmits</Link>
            <span> / </span>
            <span>Preguntes freqüents</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Preguntes Freqüents
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Respostes a les consultes més habituals de les famílies
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Troba la resposta que necessites
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            Hem recopilat les preguntes més habituals que ens fan arribar les famílies. Si no trobes la resposta al teu dubte, no dubtis en contactar amb la nostra secretaria.
          </p>
        </div>
      </section>

      {/* FAQ per categories */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {faqs.map((category, catIndex) => (
            <div key={catIndex} style={{ marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>📌</span> {category.category}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {category.questions.map((faq, index) => {
                  const faqIndex = catIndex * 100 + index;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <div key={index} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #e8f0dc' }}>
                      <div 
                        onClick={() => toggleFAQ(faqIndex)}
                        style={{ 
                          padding: '24px', 
                          cursor: 'pointer', 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          background: isOpen ? '#f0f4e8' : 'white',
                          transition: 'all 0.3s ease'
                        }}>
                        <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.15rem', fontWeight: 700, color: '#333', margin: 0, flex: 1 }}>
                          {faq.q}
                        </h3>
                        <div style={{ 
                          fontSize: '1.5rem', 
                          color: '#6D7E4F', 
                          fontWeight: 700,
                          transition: 'transform 0.3s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}>
                          ▼
                        </div>
                      </div>
                      
                      {isOpen && (
                        <div style={{ padding: '0 24px 24px 24px', background: '#f0f4e8' }}>
                          <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* No has trobat resposta */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #f0f4e8 0%, #e8f0dc 100%)', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', border: '2px solid #6D7E4F' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🤔</div>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
              No has trobat resposta?
            </h2>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', color: '#555', margin: '0 0 32px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              Contacta amb la nostra secretaria i t'ajudarem personalment amb el teu dubte
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/admissio/faq/contacte" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(109,126,79,0.3)' }}>
                Contactar amb secretaria
              </Link>
              <a href="tel:933913351" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', border: '2px solid #6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                📞 933 913 351
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enllaços útils */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            També et pot interessar
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <Link href="/admissio/faq/tramits" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💻</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  Tràmits online
                </h3>
              </div>
            </Link>

            <Link href="/admissio/preinscripcio/info" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📝</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  Preinscripció
                </h3>
              </div>
            </Link>

            <Link href="/admissio/calendari/horari" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #e8f0dc', transition: 'all 0.3s ease', cursor: 'pointer', textAlign: 'center' }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = '#6D7E4F';
                     e.currentTarget.style.transform = 'translateY(-4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = '#e8f0dc';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📅</div>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: 0 }}>
                  Calendari escolar
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
}