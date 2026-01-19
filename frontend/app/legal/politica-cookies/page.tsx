'use client';
import React from 'react';
import LegalPageLayout from '../../../components/LegalPageLayout';

export default function PoliticaCookies() {
  return (
    <LegalPageLayout 
      title="Política de Cookies" 
      lastUpdated="14 de gener de 2026"
    >
      <h2>1. Què són les cookies?</h2>
      <p>
        Les cookies són petits arxius de text que els llocs web emmagatzemen al vostre dispositiu (ordinador, tauleta o mòbil) quan els visiteu. S'utilitzen per fer que els llocs web funcionin de manera més eficient, millorar l'experiència de navegació i proporcionar informació als propietaris del lloc.
      </p>

      <h2>2. Tipus de cookies que utilitzem</h2>
      
      <h3>2.1. Segons l'entitat que les gestiona</h3>
      <ul>
        <li><strong>Cookies pròpies:</strong> Enviades al vostre dispositiu des del nostre propi domini</li>
        <li><strong>Cookies de tercers:</strong> Enviades des de dominis de tercers (p.  ex., Google Analytics)</li>
      </ul>

      <h3>2.2. Segons la seva finalitat</h3>
      <ul>
        <li>
          <strong>Cookies tècniques (necessàries):</strong> Permeten la navegació pel lloc web i l'ús de les diferents opcions o serveis que hi ha.  Sense aquestes cookies, el lloc web no pot funcionar correctament.
        </li>
        <li>
          <strong>Cookies de personalització:</strong> Permeten recordar informació perquè accediu al servei amb determinades característiques (idioma, nombre de resultats, etc.).
        </li>
        <li>
          <strong>Cookies d'anàlisi:</strong> Permeten quantificar el nombre d'usuaris i fer mesuraments i anàlisi estadística de l'ús que fan els usuaris del servei.  Per això s'analitza la vostra navegació al nostre lloc web per millorar l'oferta de productes o serveis.
        </li>
      </ul>

      <h3>2.3. Segons el termini de temps</h3>
      <ul>
        <li><strong>Cookies de sessió: </strong> S'eliminen quan tanqueu el navegador</li>
        <li><strong>Cookies persistents:</strong> Romanen al vostre dispositiu durant un període determinat</li>
      </ul>

      <h2>3. Cookies utilitzades en aquest lloc web</h2>
      
      <div className="legal-info-box">
        <p><strong>Cookies tècniques</strong></p>
        <ul>
          <li><strong>Nom:</strong> cookie_consent</li>
          <li><strong>Finalitat:</strong> Emmagatzemar la vostra preferència sobre l'ús de cookies</li>
          <li><strong>Durada:</strong> 1 any</li>
          <li><strong>Tipus:</strong> Pròpia, necessària</li>
        </ul>
      </div>

      <div className="legal-info-box">
        <p><strong>Cookies d'anàlisi (Google Analytics) - Opcional</strong></p>
        <ul>
          <li><strong>Nom:</strong> _ga, _gid, _gat</li>
          <li><strong>Finalitat:</strong> Analitzar el comportament dels usuaris per millorar el lloc web</li>
          <li><strong>Durada:</strong> Entre 1 dia i 2 anys</li>
          <li><strong>Tipus:</strong> De tercers (Google), anàlisi</li>
          <li><strong>Més informació:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacitat de Google</a></li>
        </ul>
      </div>

      <h2>4. Com gestionar i desactivar les cookies</h2>
      <p>
        Podeu permetre, bloquejar o eliminar les cookies instal·lades al vostre dispositiu mitjançant la configuració de les opcions del navegador instal·lat al vostre dispositiu: 
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/ca/kb/cookies" target="_blank" rel="noopener">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/ca-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari (macOS)</a></li>
        <li><a href="https://support.apple.com/ca-es/HT201265" target="_blank" rel="noopener">Safari (iOS)</a></li>
        <li><a href="https://support.microsoft.com/ca-es/microsoft-edge" target="_blank" rel="noopener">Microsoft Edge</a></li>
      </ul>
      <p>
        Si bloquegeu les cookies, és possible que algunes funcionalitats del lloc web no estiguin disponibles.
      </p>

      <h2>5. Acceptació de la Política de Cookies</h2>
      <p>
        En accedir a aquest lloc web i utilitzar-lo, accepteu l'ús de cookies d'acord amb aquesta Política de Cookies.  Si no accepteu l'ús de cookies, hauríeu d'ajustar la configuració del vostre navegador o abandonar el lloc web.
      </p>

      <h2>6. Modificacions</h2>
      <p>
        El Col·legi Lluís Millet es reserva el dret a modificar aquesta Política de Cookies en funció de les exigències legislatives, reglamentàries, o amb la finalitat d'adaptar aquesta política a les instruccions dictades per l'Autoritat Catalana de Protecció de Dades. 
      </p>

      <h2>7. Més informació</h2>
      <p>
        Per a qualsevol dubte sobre aquesta Política de Cookies, podeu contactar-nos a: 
      </p>
      <ul>
        <li>Email: a8076947@xtec.cat</li>
        <li>Telèfon: 933 913 351</li>
      </ul>
    </LegalPageLayout>
  );
}