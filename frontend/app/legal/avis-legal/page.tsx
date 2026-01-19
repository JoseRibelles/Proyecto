'use client';
import React from 'react';
import LegalPageLayout from '../../../components/LegalPageLayout';

export default function AvisLegal() {
  return (
    <LegalPageLayout 
      title="Avís Legal" 
      lastUpdated="14 de gener de 2026"
    >
      <h2>1. Dades identificatives</h2>
      <p>
        En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic, s'informa que:
      </p>
      <div className="legal-info-box">
        <p><strong>Denominació:</strong> Col·legi Lluís Millet</p>
        <p><strong>Adreça:</strong> Carrer Lluís Millet, 22 - 08924 Santa Coloma de Gramenet (Barcelona)</p>
        <p><strong>Telèfon:</strong> 933 913 351</p>
        <p><strong>Email:</strong> a8076947@xtec.cat</p>
        <p><strong>Codi de centre: </strong> 08076947</p>
      </div>

      <h2>2. Condicions d'ús</h2>
      <p>
        L'accés i ús d'aquest lloc web atribueix la condició d'usuari i implica l'acceptació plena i sense reserves de totes i cadascuna de les disposicions incloses en aquest Avís Legal.
      </p>

      <h2>3. Responsabilitat dels continguts</h2>
      <p>
        El Col·legi Lluís Millet es reserva el dret de modificar, sense avís previ, la informació continguda al seu lloc web, així com la seva configuració i presentació.
      </p>

      <h2>4. Propietat intel·lectual i industrial</h2>
      <p>
        Tots els continguts d'aquest lloc web (textos, fotografies, gràfics, imatges, tecnologia, software, links, continguts, disseny gràfic, codi font, etc.) són propietat intel·lectual del Col·legi Lluís Millet o de tercers, sense que puguin entendre's cedits a l'usuari cap dels drets d'explotació reconeguts per la normativa vigent en matèria de propietat intel·lectual sobre els mateixos. 
      </p>

      <h2>5. Legislació aplicable</h2>
      <p>
        Aquest Avís Legal es regeix en tots i cadascun dels seus extrems per la llei espanyola.  Per a qualsevol controvèrsia que pogués derivar-se de l'accés o l'ús d'aquest lloc web, el Col·legi Lluís Millet i l'usuari acorden sotmetre's als jutjats i tribunals de Barcelona, amb renúncia expressa a qualsevol altre fur que pogués correspondre'ls.
      </p>
    </LegalPageLayout>
  );
}