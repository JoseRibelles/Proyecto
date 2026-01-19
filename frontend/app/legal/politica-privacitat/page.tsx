'use client';
import React from 'react';
import LegalPageLayout from '../../../components/LegalPageLayout';

export default function PoliticaPrivacitat() {
  return (
    <LegalPageLayout 
      title="Política de Privacitat" 
      lastUpdated="14 de gener de 2026"
    >
      <h2>1. Responsable del tractament</h2>
      <div className="legal-info-box">
        <p><strong>Responsable:</strong> Col·legi Lluís Millet</p>
        <p><strong>Adreça:</strong> Carrer Lluís Millet, 22 - 08924 Santa Coloma de Gramenet (Barcelona)</p>
        <p><strong>Telèfon:</strong> 933 913 351</p>
        <p><strong>Email:</strong> a8076947@xtec. cat</p>
      </div>

      <h2>2. Finalitat del tractament de dades</h2>
      <p>
        Les dades personals que ens proporcioni a través dels formularis de contacte, sol·licituds d'informació o preinscripció seran tractades amb les següents finalitats:
      </p>
      <ul>
        <li>Gestionar les sol·licituds d'informació sobre el centre educatiu</li>
        <li>Tramitar processos de preinscripció i matrícula</li>
        <li>Comunicar-nos amb les famílies i tutors legals</li>
        <li>Gestionar l'activitat educativa i administrativa del centre</li>
        <li>Complir amb les obligacions legals aplicables</li>
      </ul>

      <h2>3. Legitimació</h2>
      <p>
        La base legal per al tractament de les seves dades és: 
      </p>
      <ul>
        <li><strong>Consentiment de l'interessat: </strong> En enviar un formulari de contacte o sol·licitud d'informació</li>
        <li><strong>Execució d'un contracte:</strong> Matrícula i prestació de serveis educatius</li>
        <li><strong>Obligació legal:</strong> Compliment de la normativa educativa vigent</li>
        <li><strong>Interès legítim:</strong> Millora dels serveis educatius</li>
      </ul>

      <h2>4. Destinataris de les dades</h2>
      <p>
        Les dades personals podran ser comunicades a:
      </p>
      <ul>
        <li>Departament d'Educació de la Generalitat de Catalunya</li>
        <li>Altres organismes públics quan sigui legalment obligatori</li>
        <li>Proveïdors de serveis (gestió acadèmica, menjador, extraescolars) amb les garanties adequades</li>
      </ul>
      <p>
        No es realitzaran transferències internacionals de dades.
      </p>

      <h2>5. Conservació de les dades</h2>
      <p>
        Les dades es conservaran durant el temps necessari per complir amb la finalitat per a la qual es van recaptar i per determinar les possibles responsabilitats que es poguessin derivar d'aquesta finalitat i del tractament de les dades, així com els terminis establerts per la normativa aplicable.
      </p>

      <h2>6. Drets de les persones interessades</h2>
      <p>
        Pot exercir els següents drets: 
      </p>
      <ul>
        <li><strong>Dret d'accés:</strong> Obtenir informació sobre si estem tractant les seves dades</li>
        <li><strong>Dret de rectificació:</strong> Sol·licitar la correcció de dades inexactes</li>
        <li><strong>Dret de supressió:</strong> Sol·licitar l'eliminació de les seves dades</li>
        <li><strong>Dret de limitació:</strong> Sol·licitar la limitació del tractament</li>
        <li><strong>Dret d'oposició:</strong> Oposar-se al tractament de les seves dades</li>
        <li><strong>Dret a la portabilitat:</strong> Rebre les seves dades en format estructurat</li>
      </ul>
      <p>
        Per exercir aquests drets, pot contactar-nos a través de:
      </p>
      <ul>
        <li>Correu electrònic: a8076947@xtec.cat</li>
        <li>Correu postal: Carrer Lluís Millet, 22 - 08924 Santa Coloma de Gramenet</li>
      </ul>
      <p>
        També té dret a presentar una reclamació davant l'Autoritat Catalana de Protecció de Dades (www.apd.cat).
      </p>

      <h2>7. Seguretat de les dades</h2>
      <p>
        El Col·legi Lluís Millet ha adoptat les mesures tècniques i organitzatives necessàries per garantir la seguretat de les dades personals i evitar la seva alteració, pèrdua, tractament o accés no autoritzat.
      </p>

      <h2>8. Dades de menors</h2>
      <p>
        Per al tractament de dades de menors de 14 anys, es requereix el consentiment dels pares o tutors legals.  El centre educatiu tractarà aquestes dades amb especial cura i protecció, complint amb la normativa vigent de protecció de dades i la legislació sobre drets dels menors.
      </p>

      <h2>9. Modificacions</h2>
      <p>
        El Col·legi Lluís Millet es reserva el dret de modificar aquesta Política de Privacitat per adaptar-la a les novetats legislatives o jurisprudencials, així com a les pràctiques del sector.
      </p>
    </LegalPageLayout>
  );
}