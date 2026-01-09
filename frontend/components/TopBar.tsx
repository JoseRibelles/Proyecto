'use client';
import React from 'react';

interface Props {
  text?: string | null;
  phone?: string | null;
}

const TopBar: React.FC<Props> = ({ text, phone }) => {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">{text || 'Carrer Lluís Millet, 22, 08924'}</div>
        <div className="topbar-right">{phone || '933 913 351 | a8076947@xtec.cat'}</div>
      </div>
    </div>
  );
};

export default TopBar;