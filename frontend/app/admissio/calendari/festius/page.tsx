'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function DiesFestiusPeriodesLectius() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=400&fit=crop)',
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
            <Link href="/admissio-i-secretaria" style={{ color: 'white', textDecoration: 'none' }}>Admissió i secretaria</Link>
            <span> / </span>
            <Link href="/admissio-i-secretaria/calendari-escolar" style={{ color: 'white', textDecoration: 'none' }}>Calendari escolar</Link>
            <span> / </span>
            <span>Dies festius i períodes lectius</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Dies Festius i Períodes Lectius
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Calendari detallat del curs 2025-2026
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Planifica el curs escolar
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            A continuació trobaràs el detall complet dels dies festius, vacances escolars i la distribució dels tres trimestres del curs 2025-2026. Aquesta informació t'ajudarà a organitzar millor les activitats familiars i escolars.
          </p>
        </div>
      </section>

      {/* DIES FESTIUS */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.5rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            📌 Dies Festius i No Lectius
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Dies en què no hi ha activitat lectiva al centre educatiu segons el calendari oficial
          </p>

          {/* Festius 1r trimestre */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#6D7E4F' }}>🍂</span> Primer trimestre (Setembre - Desembre)
            </h3>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Diada Nacional de Catalunya</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu oficial de Catalunya</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>11 Setembre</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Festa de la Mercè</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Patrona de Barcelona (festiu local)</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>24 Setembre</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Dia de la Hispanitat</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>12 Octubre</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Tots Sants</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>1 Novembre</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Dia de la Constitució</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>6 Desembre</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Dia de la Immaculada</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>8 Desembre</div>
              </div>
            </div>
          </div>

          {/* Festius 2n trimestre */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#6D7E4F' }}>❄️</span> Segon trimestre (Gener - Març)
            </h3>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Any Nou</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>1 Gener</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Reis</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>6 Gener</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Carnestoltes</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Dia no lectiu (data variable)</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>Febrer/Març</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Divendres Sant</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Setmana Santa (data variable)</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>Març/Abril</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Dilluns de Pasqua</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional (data variable)</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>Març/Abril</div>
              </div>
            </div>
          </div>

          {/* Festius 3r trimestre */}
          <div>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: '0 0 32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#6D7E4F' }}>🌸</span> Tercer trimestre (Abril - Juny)
            </h3>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Dia del Treball</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu nacional</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>1 Maig</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Segona Pasqua</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu Catalunya (data variable)</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>Maig/Juny</div>
              </div>

              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #6D7E4F', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>Dia de Sant Joan</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#666', marginTop: '4px' }}>Festiu Catalunya</div>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.3rem', fontWeight: 700, color: '#6D7E4F' }}>24 Juny</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERÍODES LECTIUS */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.5rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 24px' }}>
            📚 Períodes Lectius
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '56px', maxWidth: '800px', margin: '0 auto 56px' }}>
            Distribució dels trimestres i períodes d'avaluació del curs 2025-2026
          </p>

          {/* Primer trimestre */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '64px', height: '64px', background: '#6D7E4F', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', fontFamily: 'Montserrat', fontWeight: 700 }}>1r</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: 0 }}>Primer Trimestre</h3>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 600, color: '#6D7E4F', marginTop: '4px' }}>
                    12 Setembre 2025 - 20 Desembre 2025
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#888', marginBottom: '8px' }}>📖 PERÍODE LECTIU</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
                    Inici de curs amb normalització de rutines, adaptació i primeres unitats didàctiques
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#888', marginBottom: '8px' }}>📊 AVALUACIÓ</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
                    Lliurament de notes: finals de desembre<br/>
                    Reunions amb famílies: gener
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '24px', padding: '16px', background: 'white', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>🎄 VACANCES DE NADAL</div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                  Del 23 de desembre al 7 de gener (aproximadament)
                </div>
              </div>
            </div>
          </div>

          {/* Segon trimestre */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '64px', height: '64px', background: '#6D7E4F', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', fontFamily: 'Montserrat', fontWeight: 700 }}>2n</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: 0 }}>Segon Trimestre</h3>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 600, color: '#6D7E4F', marginTop: '4px' }}>
                    8 Gener 2026 - 27 Març 2026
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#888', marginBottom: '8px' }}>📖 PERÍODE LECTIU</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
                    Consolidació d'aprenentatges i desenvolupament de projectes. Carnestoltes i Setmana Santa
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#888', marginBottom: '8px' }}>📊 AVALUACIÓ</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
                    Lliurament de notes: finals de març<br/>
                    Reunions amb famílies: abril
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '24px', padding: '16px', background: 'white', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>🌸 VACANCES DE SETMANA SANTA</div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                  Aproximadament una setmana (dates variables segons l'any litúrgic)
                </div>
              </div>
            </div>
          </div>

          {/* Tercer trimestre */}
          <div>
            <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid #6D7E4F' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '64px', height: '64px', background: '#6D7E4F', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.8rem', fontFamily: 'Montserrat', fontWeight: 700 }}>3r</div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#333', margin: 0 }}>Tercer Trimestre</h3>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 600, color: '#6D7E4F', marginTop: '4px' }}>
                    7 Abril 2026 - 19 Juny 2026
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#888', marginBottom: '8px' }}>📖 PERÍODE LECTIU</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
                    Tancament del curs, avaluacions finals, sortides i activitats de cloenda. Jornada intensiva a juny
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#888', marginBottom: '8px' }}>📊 AVALUACIÓ</div>
                  <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
                    Lliurament de notes finals: mitjans de juny<br/>
                    Reunions amb famílies: finals de juny
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '24px', padding: '16px', background: 'white', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>☀️ VACANCES D'ESTIU</div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                  Del 20 de juny fins a l'inici del curs següent (setembre)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resum de vacances */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            🏖️ Resum de vacances escolars
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Nadal */}
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🎄
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Vacances de Nadal
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Del 23 desembre al 7 gener</strong><br/>
                Aproximadament 2 setmanes
              </p>
            </div>

            {/* Setmana Santa */}
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                🌸
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Setmana Santa
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Març/Abril (variable)</strong><br/>
                Una setmana completa
              </p>
            </div>

            {/* Estiu */}
            <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fdf5 100%)', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc', boxShadow: '0 4px 16px rgba(109,126,79,0.08)' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                ☀️
              </div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.35rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                Vacances d'estiu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', margin: 0 }}>
                <strong>Del 20 juny al 11 setembre</strong><br/>
                Aproximadament 2 mesos i mig
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA navegació */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Tens dubtes sobre el calendari escolar?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Contacta amb la secretaria del centre per a qualsevol consulta
            </p>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', marginBottom: '4px', opacity: 0.9 }}>Telèfon</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700 }}>933 913 351</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', marginBottom: '4px', opacity: 0.9 }}>Correu electrònic</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700 }}>a8076947@xtec.cat</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', marginBottom: '4px', opacity: 0.9 }}>Horari</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700 }}>9:00 - 13:00h</div>
              </div>
            </div>
            <div style={{ marginTop: '32px' }}>
              <Link href="/admissio-i-secretaria/calendari-escolar" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                ← Tornar al calendari principal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}