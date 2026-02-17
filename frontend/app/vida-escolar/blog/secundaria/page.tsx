'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '../../../../components/TopBar';
import Header from '../../../../components/Header';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

export default function BlogSecundaria() {
  const defaultSite = {
    topBarText: 'Carrer Lluís Millet, 22, 08924 Santa Coloma de Gramenet',
    topBarPhones: '933 913 351 | a8076947@xtec.cat',
    title: 'Institut Escola Lluís Millet',
    rightHeaderText: 'UNA NOVA MIRADA PEDAGÒGICA',
    logoUrl: 'https://via.placeholder.com/150x60/4CAF50/ffffff?text=LOGO+ESCOLA'
  };

  return (
    <>
     

      {/* Hero */}
      <section style={{
        width: '100%',
        height: '320px',
        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.91) 0%, rgba(138, 157, 101, 0.93) 100%), url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.93)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inici</Link>
            <span> / </span>
            <Link href="/blog-escolar" style={{ color: 'white', textDecoration: 'none' }}>Blog Escolar</Link>
            <span> / </span>
            <span>Secundària</span>
          </div>
          <h1 style={{ fontFamily: 'Montserrat', fontSize: '2.6rem', fontWeight: 700, color: 'white', margin: '0 0 16px', textShadow: '0 2px 9px rgba(0,0,0,0.25)' }}>
            Blog de Secundària
          </h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.18rem', color: 'rgba(255,255,255,0.97)', margin: 0, lineHeight: 1.6 }}>
            Innovació, recerca i participació: el dia a dia de l&apos;alumnat de Secundària a Les Oliveres.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ width: '100%', padding: '60px 20px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Open Sans', fontSize: '1.15rem', lineHeight: 1.7, color: '#555', textAlign: 'center', marginBottom: '30px' }}>
            A Secundària, els nois i noies del CEIP Lluís Millet viuen activitats i projectes que connecten amb la realitat, fomentant l&apos;autonomia i la creativitat, sempre vinculats a la comunitat de Les Oliveres.
          </p>
        </div>
      </section>

      {/* Apartados destacados */}
      <section style={{ width: '100%', padding: '48px 0', background: '#f5faf4' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto', display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
          {[
            {
              icon: '🔎',
              title: "Projectes d'investigació i STEAM",
              desc: "Elaboració de projectes interdisciplinaris, experiments i recerca, amb l'alumnat com a protagonista."
            },
            {
              icon: '🌍',
              title: "Sortides i col·laboracions amb l'entorn",
              desc: 'Treballem amb la comunitat, empreses i institucions del barri per créixer plegats.'
            },
            {
              icon: '🗣️',
              title: 'Expressió, debat i participació',
              desc: 'Donem veu als nois i noies: opinions, reportatges, produccions multimèdia i foment de la participació.'
            },
            {
              icon: '🎯',
              title: 'Orientació i creixement personal',
              desc: 'Tutories, orientació i activitats d\'auto-coneixement per preparar nous reptes acadèmics i de vida.'
            }
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '15px', padding: '36px 24px', boxShadow: '0 2px 10px rgba(76,175,80,0.11)', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 240 }}>
              <div style={{ fontSize: '2.7rem', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, color: '#4caf50', margin: '0 0 9px', textAlign: 'center' }}>{item.title}</h3>
              <p style={{ fontFamily: 'Open Sans', fontSize: '1.04rem', color: '#444', textAlign: 'center', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: '45px 20px', background: 'white' }}>
        <div style={{ maxWidth: '875px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/blog" style={{
            fontFamily: 'Montserrat', fontSize: '1.07rem', fontWeight: 600,
            padding: '14px 32px', color: '#4caf50', border: '2px solid #4caf50', borderRadius: '8px',
            background: 'transparent', textDecoration: 'none', letterSpacing: '0.04em'
          }}>
            &larr; Torna a Blog Escolar
          </Link>
        </div>
      </section>

     
    </>
  );
}