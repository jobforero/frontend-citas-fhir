import React from 'react';

export default function MisCitasPage({ misCitas, cargando, onCancelar }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Mis Citas Agendadas</h2>
      {cargando ? (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cargando datos desde MongoDB Atlas...</p>
      ) : misCitas.length === 0 ? (
        <div className="card">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>No tienes citas registradas actualmente.</p>
        </div>
      ) : (
        misCitas.map((cita) => {
          const isCancelled = cita.recursoFHIR?.status === 'cancelled';
          return (
            <div className="card" key={cita.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge badge-fhir">FHIR: Appointment</span>
                <span className={`badge ${isCancelled ? 'badge-cancelled' : 'badge-active'}`}>
                  {isCancelled ? 'CANCELADA' : 'ACTIVA'}
                </span>
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{cita.especialidad}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tipo: {cita.tipoCita} ({cita.modalidad})</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fecha: {new Date(cita.fecha).toLocaleString()}</p>
              
              {!isCancelled && (
                <button 
                  className="btn btn-danger" 
                  style={{ marginTop: '0.75rem' }} 
                  onClick={() => onCancelar(cita.id)}
                >
                  Cancelar Cita
                </button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}