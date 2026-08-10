import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function EspecialidadesPage({ especialidades }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Catálogo de Especialidades</h2>
      {especialidades.length === 0 ? (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cargando catálogo...</p>
      ) : (
        especialidades.map((esp, i) => (
          <div className="card" key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Stethoscope color="var(--primary)" size={24} />
            <div>
              <h3 style={{ fontSize: '0.95rem' }}>{esp.nombre || esp}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Disponible para agendamiento inmediato</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}