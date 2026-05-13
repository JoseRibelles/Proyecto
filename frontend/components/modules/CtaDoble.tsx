'use client';

import Link from 'next/link';

function Box({ box }: any) {
  const isGreen = box?.fondo === 'verde';

  return (
    <div style={{
      borderRadius: 14,
      padding: '34px 30px',
      background: isGreen ? '#6D7E4F' : 'white',
      border: isGreen ? 'none' : '2px solid #e9efd9',
      color: isGreen ? 'white' : '#2b2b2b',
      boxShadow: '0 10px 28px rgba(0,0,0,0.08)',
      textAlign: 'center'
    }}>
      {box?.icono && <div style={{ fontSize: '1.2rem', marginBottom: 12, opacity: isGreen ? 0.95 : 0.8 }}>{box.icono}</div>}
      <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.5rem', marginBottom: 10 }}>
        {box?.titulo}
      </div>
      {box?.descripcion && (
        <div style={{ fontFamily: 'Open Sans', lineHeight: 1.65, opacity: isGreen ? 0.92 : 0.75, marginBottom: 16 }}>
          {box.descripcion}
        </div>
      )}
      {box?.boton?.texto && box?.boton?.enlace && (
        <Link
          href={box.boton.enlace}
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            background: isGreen ? 'white' : '#6D7E4F',
            color: isGreen ? '#6D7E4F' : 'white',
            padding: '12px 22px',
            borderRadius: 10,
            fontFamily: 'Montserrat',
            fontWeight: 800
          }}
        >
          {box.boton.texto}
        </Link>
      )}
    </div>
  );
}

export default function CtaDoble({ data }: any) {
  return (
    <section style={{ width: '100%', padding: '70px 20px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <Box box={data.izquierda} />
        <Box box={data.derecha} />
      </div>
    </section>
  );
}