import React, { useState } from 'react';

export default function AgendarPage({ onAgendar, cargando }) {
  const [formCita, setFormCita] = useState({
    especialidad: 'Medicina General',
    tipoSeguro: 'CSS',
    numeroSeguro: 'CSS-12345',
    tipoCita: 'Consulta General',
    modalidad: 'PRESENCIAL',
    fecha: '2026-08-15T10:00:00'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatear la fecha para asegurar siempre segundos `:00` antes de enviar a Quarkus
    const fechaFormateada = formCita.fecha.length === 16 
      ? `${formCita.fecha}:00` 
      : formCita.fecha;

    onAgendar({
      ...formCita,
      fecha: fechaFormateada
    });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Agendar Nueva Cita</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Especialidad</label>
            <select 
              value={formCita.especialidad} 
              onChange={(e) => setFormCita({ ...formCita, especialidad: e.target.value })}
            >
              <option value="Medicina General">Medicina General</option>
              <option value="Odontología">Odontología</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Cardiología">Cardiología</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tipo de Seguro</label>
            <select 
              value={formCita.tipoSeguro} 
              onChange={(e) => setFormCita({ ...formCita, tipoSeguro: e.target.value })}
            >
              <option value="CSS">Caja de Seguro Social (CSS)</option>
              <option value="PRIVADO">Seguro Privado</option>
              <option value="PARTICULAR">Particular</option>
            </select>
          </div>

          <div className="form-group">
            <label>Número de Seguro / Póliza</label>
            <input 
              type="text" 
              value={formCita.numeroSeguro} 
              onChange={(e) => setFormCita({ ...formCita, numeroSeguro: e.target.value })} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Modalidad</label>
            <select 
              value={formCita.modalidad} 
              onChange={(e) => setFormCita({ ...formCita, modalidad: e.target.value })}
            >
              <option value="PRESENCIAL">Presencial</option>
              <option value="TELEMEDICINA">Telemedicina</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fecha y Hora</label>
            <input 
              type="datetime-local" 
              value={formCita.fecha.slice(0, 16)} 
              onChange={(e) => setFormCita({ ...formCita, fecha: e.target.value })} 
              required 
            />
          </div>

          <button type="submit" className="btn" disabled={cargando}>
            {cargando ? 'Registrando en Quarkus...' : 'Confirmar Cita'}
          </button>
        </form>
      </div>
    </div>
  );
}