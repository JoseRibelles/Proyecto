'use client';
import React from 'react';

export default function MapLocation(): React.ReactElement {
  return (
    <section className="map-section">
      <div className="map-container">
        {/* Título de la sección */}
        <div className="map-header">
          <h2 className="map-title">Com arribar al centre</h2>
          <p className="map-subtitle">
            Vine a conèixer-nos.  Estem ben comunicats amb transport públic i disposem de zona de pàrquing proper.
          </p>
        </div>

        {/* Contenido:  Mapa + Info */}
        <div className="map-content">
          {/* Columna izquierda: Google Maps */}
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.5178533205932! 2d2.196412881956679!3d41.459366416321075!2m3! 1f0!2f0! 3f0!3m2! 1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcf63679f82d%3A0x752a94b03ed2df1a!2sInstitut%20Escola%20Llu%C3%ADs%20Millet!5e0!3m2!1sca!2sde!4v1768470119622!5m2!1sca!2sde"
              width="100%"
              height="100%"
              style={{ border:  0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicació del Col·legi Lluís Millet"
            ></iframe>
          </div>

          {/* Columna derecha: Información de transporte */}
          <div className="map-info">
            <div className="info-block">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3 className="info-title">Adreça</h3>
                <p className="info-text">
                  Carrer Lluís Millet, 22<br />
                  08924 Santa Coloma de Gramenet<br />
                  Barcelona
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">🚇</div>
              <div className="info-content">
                <h3 className="info-title">Metro</h3>
                <p className="info-text">
                  <strong>L1 (Línia Vermella):</strong> Santa Coloma<br />
                  <strong>L9 (Línia Taronja):</strong> Fondo
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">🚌</div>
              <div className="info-content">
                <h3 className="info-title">Autobús</h3>
                <p className="info-text">
                  Línies:  15, 18, 20, 27<br />
                  Parada: Lluís Millet / Sant Joan Baptista
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">🚗</div>
              <div className="info-content">
                <h3 className="info-title">En cotxe</h3>
                <p className="info-text">
                  Sortida 4 de la Ronda de Dalt (B-20)<br />
                  Zona d'aparcament als carrers propers
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">♿</div>
              <div className="info-content">
                <h3 className="info-title">Accessibilitat</h3>
                <p className="info-text">
                  Centre accessible per a persones amb mobilitat reduïda. <br />
                  Entrada adaptada i ascensor. 
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3 className="info-title">Contacte</h3>
                <p className="info-text">
                  <a href="tel:933913351">933 913 351</a><br />
                  <a href="mailto:a8076947@xtec.cat">a8076947@xtec.cat</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}