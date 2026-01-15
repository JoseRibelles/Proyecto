'use client';
import React from 'react';
import Link from 'next/link';

type CTACard = {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  isPrimary?:  boolean;
};

const ctaCards: CTACard[] = [
  {
    id:  1,
    icon: "📞",
    title: "Contacta'ns",
    description: "Resol els teus dubtes i descobreix com podem ajudar-te",
    buttonText: "Formulari de contacte",
    buttonLink:  "/contacte/formulari",
    isPrimary: true
  },
  {
    id: 2,
    icon:  "📄",
    title:  "Descarrega el nostre projecte",
    description:  "Coneix en detall la nostra proposta pedagògica i educativa",
    buttonText: "Descarregar PDF",
    buttonLink: "/documents/projecte-educatiu. pdf",
    isPrimary:  false
  }
];

export default function CallToAction(): React.ReactElement {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {ctaCards.map((cta) => (
          <div key={cta.id} className={`cta-card ${cta.isPrimary ? 'cta-primary' : 'cta-secondary'}`}>
            <div className="cta-icon">{cta.icon}</div>
            <h3 className="cta-title">{cta.title}</h3>
            <p className="cta-description">{cta. description}</p>
            <Link href={cta.buttonLink} className="cta-button">
              {cta.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}