'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function ComArribar() {
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
        background: 'linear-gradient(135deg, rgba(109, 126, 79, 0.9) 0%, rgba(138, 157, 101, 0.9) 100%), url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=400&fit=crop)',
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
            <Link href="/contacte" style={{ color: 'white', textDecoration: 'none' }}>Contacte</Link>
            <span> / </span>
            <Link href="/contacte/ubicacio-i-mapa" style={{ color: 'white', textDecoration: 'none' }}>Ubicació i mapa</Link>
            <span> / </span>
            <span>Com arribar</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '3rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Com Arribar
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.6 }}>
            Totes les opcions per arribar al nostre centre
          </p>
        </div>
      </section>

      {/* Introducció */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
            Indicacions per arribar al centre
          </h2>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
            L'Institut Escola Lluís Millet està ben comunicat amb diferents opcions de transport públic i privat. A continuació trobaràs informació detallada sobre com arribar-hi.
          </p>
        </div>
      </section>

      {/* EN METRO */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '32px', fontSize: '4rem' }}>
                🚇
              </div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
                En Metro
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                La manera més còmoda d'arribar al centre és utilitzant el <strong>metro de Barcelona</strong>.
              </p>
            </div>
            <div>
              <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: '24px' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '40px', height: '40px', background: '#FF6B35', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>L9</span>
                  Línia 9 (Línia Orbital)
                </h3>
                <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555' }}>
                  <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', marginBottom: '16px' }}>
                    <strong>📍 Estació:</strong> Església Major<br/>
                    <strong>⏱️ Temps a peu:</strong> 10 minuts aproximadament<br/>
                    <strong>📏 Distància:</strong> 750 metres
                  </div>
                  
                  <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '24px 0 12px' }}>
                    Indicacions des de l'estació:
                  </h4>
                  <ol style={{ paddingLeft: '20px', lineHeight: 2 }}>
                    <li>Surt de l'estació Església Major (sortida Carrer Irlanda)</li>
                    <li>Gira a la dreta pel Carrer Irlanda</li>
                    <li>Continua recte fins arribar al Carrer Lluís Millet</li>
                    <li>Gira a l'esquerra al Carrer Lluís Millet</li>
                    <li>El centre està al número 22-26, a mà dreta</li>
                  </ol>
                </div>
              </div>

              <div style={{ padding: '20px', background: '#e0f2fe', borderRadius: '12px', borderLeft: '4px solid #0284c7' }}>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#0c4a6e', margin: 0 }}>
                  💡 <strong>Consell:</strong> La línia 9 connecta amb les principals línies de metro de Barcelona. Consulta el mapa de metro per planificar el teu trajecte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EN AUTOBÚS */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ background: '#f9fdf5', padding: '32px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 20px' }}>
                  Línies d'autobús disponibles
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '2px solid #6D7E4F' }}>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>50</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                      Pl. Llucmajor - Besòs - Les Oliveres
                    </div>
                  </div>

                  <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '2px solid #6D7E4F' }}>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>51</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                      Besòs - Fondo - Les Oliveres
                    </div>
                  </div>

                  <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '2px solid #6D7E4F' }}>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>60</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                      Circular Santa Coloma
                    </div>
                  </div>

                  <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '2px solid #6D7E4F' }}>
                    <div style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', marginBottom: '8px' }}>62</div>
                    <div style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#555' }}>
                      Besòs - Singuerlin - Les Oliveres
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '32px', fontSize: '4rem' }}>
                🚌
              </div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
                En Autobús
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                Diverses línies d'autobús de <strong>TMB (Transports Metropolitans de Barcelona)</strong> tenen parada propera al centre.
              </p>

              <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Parades més properes:
                </h4>
                <ul style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', paddingLeft: '20px' }}>
                  <li><strong>Lluís Millet - Oliveres:</strong> 2 minuts a peu</li>
                  <li><strong>Irlanda - Can Franquesa:</strong> 5 minuts a peu</li>
                  <li><strong>Església Major:</strong> 7 minuts a peu</li>
                </ul>
              </div>

              <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#78350f', margin: 0 }}>
                  ℹ️ Consulta els horaris actualitzats de les línies d'autobús al web de TMB o a l'aplicació mòbil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EN COTXE */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '32px', fontSize: '4rem' }}>
                🚗
              </div>
              <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 24px' }}>
                En Cotxe
              </h2>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.05rem', lineHeight: 1.8, color: '#555', marginBottom: '20px' }}>
                Si vens en cotxe, pots utilitzar l'<strong>aparcament públic</strong> disponible a la zona del centre.
              </p>

              <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: '24px' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Des de Barcelona ciutat:
                </h4>
                <ol style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', paddingLeft: '20px' }}>
                  <li>Agafa la <strong>Ronda de Dalt (B-20)</strong> direcció Badalona</li>
                  <li>Sortida 3 - Santa Coloma de Gramenet</li>
                  <li>Segueix indicacions cap a <strong>Les Oliveres</strong></li>
                  <li>Continua per Av. Generalitat fins a C/ Lluís Millet</li>
                </ol>
              </div>

              <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <h4 style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px' }}>
                  Des de l'autopista (AP-7):
                </h4>
                <ol style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 2, color: '#555', paddingLeft: '20px' }}>
                  <li>Sortida 14 - Santa Coloma de Gramenet</li>
                  <li>Segueix indicacions <strong>Centre urbà</strong></li>
                  <li>Direcció barri de <strong>Les Oliveres</strong></li>
                </ol>
              </div>
            </div>

            <div>
              <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: '24px' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.5rem', fontWeight: 700, color: '#333', margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '2rem' }}>🅿️</span>
                  Aparcament
                </h3>
                <div style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555' }}>
                  <div style={{ padding: '16px', background: '#f0f4e8', borderRadius: '8px', marginBottom: '16px' }}>
                    <strong>📍 Zones d'aparcament:</strong>
                    <ul style={{ margin: '12px 0 0', paddingLeft: '20px' }}>
                      <li>Carrer Lluís Millet (zona blava/verda)</li>
                      <li>Carrers adjacents al centre</li>
                      <li>Plaça pública propera</li>
                    </ul>
                  </div>

                  <div style={{ padding: '16px', background: '#f9fdf5', borderRadius: '8px' }}>
                    <strong>💰 Tarifes:</strong>
                    <ul style={{ margin: '12px 0 0', paddingLeft: '20px' }}>
                      <li><strong>Zona blava:</strong> De pagament en horari comercial</li>
                      <li><strong>Zona verda:</strong> Residents (cal distintiu)</li>
                      <li><strong>Gratuït:</strong> Dissabtes, diumenges i festius</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                <p style={{ fontFamily: 'Open Sans', fontSize: '0.95rem', color: '#78350f', margin: 0 }}>
                  ⚠️ <strong>Important:</strong> En horari d'entrada i sortida escolar (8:30-9:30h i 16:00-17:00h), la zona pot tenir més afluència de trànsit. Calcula temps extra.
                </p>
              </div>

              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <a href="https://maps.google.com/?q=Carrer+Lluís+Millet+22+Santa+Coloma+de+Gramenet" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: '#6D7E4F', color: 'white', display: 'inline-block', transition: 'all 0.3s ease', boxShadow: '0 4px 12px rgba(109,126,79,0.3)' }}>
                  🗺️ Obtenir indicacions GPS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PEU O EN BICI */}
      <section style={{ width: '100%', padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, color: '#6D7E4F', textAlign: 'center', margin: '0 0 48px' }}>
            Altres opcions de mobilitat
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            {/* A peu */}
            <div style={{ background: '#f9fdf5', padding: '40px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>🚶</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                A peu
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '20px' }}>
                El centre està ben connectat amb els barris veïns a través de carrers amb voreres amples i passos de vianants senyalitzats.
              </p>
              <div style={{ padding: '16px', background: 'white', borderRadius: '8px' }}>
                <strong>Distàncies aproximades:</strong>
                <ul style={{ margin: '12px 0 0', paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Des de Can Franquesa: 10 min</li>
                  <li>Des de Singuerlin: 15 min</li>
                  <li>Des d'Església Major: 12 min</li>
                </ul>
              </div>
            </div>

            {/* En bici */}
            <div style={{ background: '#f9fdf5', padding: '40px', borderRadius: '16px', border: '2px solid #e8f0dc' }}>
              <div style={{ fontSize: '4rem', marginBottom: '24px', textAlign: 'center' }}>🚴</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.8rem', fontWeight: 700, color: '#6D7E4F', margin: '0 0 16px', textAlign: 'center' }}>
                En bicicleta
              </h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1rem', lineHeight: 1.8, color: '#555', textAlign: 'center', marginBottom: '20px' }}>
                Opció sostenible i saludable. El barri disposa de carrils bici i zones per aparcar bicicletes.
              </p>
              <div style={{ padding: '16px', background: 'white', borderRadius: '8px' }}>
                <strong>Aparcament de bicicletes:</strong>
                <ul style={{ margin: '12px 0 0', paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>A l'entrada del centre</li>
                  <li>Aparcament públic proper</li>
                  <li>Zona segura i vigilada</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #6D7E4F 0%, #8a9d65 100%)', color: 'white', padding: '60px 40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 8px 32px rgba(109,126,79,0.3)' }}>
            <h3 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px' }}>
              Necessites més informació?
            </h3>
            <p style={{ fontFamily: 'Open Sans', fontSize: '1.1rem', margin: '0 0 32px', opacity: 0.95 }}>
              Consulta els horaris d'atenció o contacta amb nosaltres
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacte/ubicacio/horaris" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'white', color: '#6D7E4F', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Horaris d'atenció
              </Link>
              <Link href="/contacte/formulari" style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', background: 'transparent', color: 'white', border: '2px solid white', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Formulari de contacte
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}