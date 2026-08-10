import React from 'react';

export default function Navbar({ tab, setTab }) {
  return (
    <nav style={{
      backgroundColor: '#1e293b',
      padding: '8px 12px',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      borderBottom: '1px solid #334155'
    }}>
      <button
        type="button"
        onClick={() => setTab('citas')}
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          border: 'none',
          fontSize: '0.8rem',
          fontWeight: '600',
          cursor: 'pointer',
          backgroundColor: tab === 'citas' ? '#2563eb' : 'transparent',
          color: tab === 'citas' ? '#ffffff' : '#94a3b8',
          transition: 'all 0.2s'
        }}
      >
        Mis Citas
      </button>

      <button
        type="button"
        onClick={() => setTab('agendar')}
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          border: 'none',
          fontSize: '0.8rem',
          fontWeight: '600',
          cursor: 'pointer',
          backgroundColor: tab === 'agendar' ? '#2563eb' : 'transparent',
          color: tab === 'agendar' ? '#ffffff' : '#94a3b8',
          transition: 'all 0.2s'
        }}
      >
        Agendar Cita
      </button>

      <button
        type="button"
        onClick={() => setTab('especialidades')}
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          border: 'none',
          fontSize: '0.8rem',
          fontWeight: '600',
          cursor: 'pointer',
          backgroundColor: tab === 'especialidades' ? '#2563eb' : 'transparent',
          color: tab === 'especialidades' ? '#ffffff' : '#94a3b8',
          transition: 'all 0.2s'
        }}
      >
        Especialidades
      </button>
    </nav>
  );
}