'use client';
import React from 'react';
import Link from 'next/link';

type HighlightCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const highlightedCards: HighlightCard[] = [
  {
    id: 1,
    title: "El nostre projecte educatiu",
    description: "Un enfocament pedagògic innovador que acompanya cada infant en el seu creixement integral",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    link: "/lescola/projecte-educatiu"
  },
  {
    id: 2,
    title: "Acompanyament personalitzat",
    description: "Atenció individualitzada i suport emocional per a cada alumne i les seves famílies",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop",
    link: "/lescola/projecte-educatiu/metodologia"
  },
  {
    id: 3,
    title: "Entorn d'aprenentatge",
    description: "Espais dissenyats per fomentar la creativitat, l'autonomia i el treball cooperatiu",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=400&fit=crop",
    link: "/lescola/qui-som/missio"
  },
  {
    id: 4,
    title: "Convivència i valors",
    description: "Construïm una comunitat basada en el respecte, la inclusió i la col·laboració",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    link: "/comunitat"
  },
  {
    id: 5,
    title: "Vida quotidiana a l'escola",
    description: "Més enllà de les aules:  menjador, acollida, sortides i projectes que enriqueixen el dia a dia",
    image:  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    link: "/serveis/menjador"
  },
  {
    id: 6,
    title: "Comunitat educativa activa",
    description: "Famílies, professorat i alumnat treballant junts per construir una escola millor",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    link: "/comunitat/families/objectius"
  }
];

export default function HighlightedCards(): React.ReactElement {
  return (
    <section className="highlighted-section">
      <h2 className="highlighted-title">Descobreix la nostra escola</h2>
      <div className="highlighted-grid">
        {highlightedCards.map((card) => (
          <Link href={card.link} key={card.id} className="highlight-card">
            <div className="highlight-card-image">
              <img 
                src={card. image} 
                alt={card.title}
              />
            </div>
            <div className="highlight-card-content">
              <h3 className="highlight-card-title">{card.title}</h3>
              <p className="highlight-card-description">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}