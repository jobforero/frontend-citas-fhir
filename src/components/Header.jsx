import React from 'react';
import { LogOut, ShieldCheck } from 'lucide-react';

export default function Header({ usuario, onLogout }) {
  return (
    <header>
      <div>
        <h1>Citas Médicas FHIR</h1>
        {usuario && (
          <p style={{ fontSize: '0.75rem', opacity: 0.9 }}>
            {usuario.nombre} ({usuario.cedula})
          </p>
        )}
      </div>
      {usuario ? (
        <LogOut size={20} style={{ cursor: 'pointer' }} onClick={onLogout} />
      ) : (
        <ShieldCheck size={24} />
      )}
    </header>
  );
}