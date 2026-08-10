import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [cedula, setCedula] = useState('8-888-8888');
  const [nombre, setNombre] = useState('Juan Perez');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cedula && nombre) {
      onLogin({ cedula, nombre });
    }
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cédula del Paciente</label>
          <input 
            type="text" 
            value={cedula} 
            onChange={(e) => setCedula(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn">Ingresar al Portal</button>
      </form>
    </div>
  );
}