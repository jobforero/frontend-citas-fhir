import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MisCitasPage from './pages/MisCitasPage.jsx';
import AgendarPage from './pages/AgendarPage.jsx';
import EspecialidadesPage from './pages/EspecialidadesPage.jsx';
import { obtenerEspecialidades, registrarCita, obtenerCitasPorPaciente, cancelarCita } from './services/api.js';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [tab, setTab] = useState('citas');
  const [especialidades, setEspecialidades] = useState([]);
  const [misCitas, setMisCitas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const cargarCitas = async (cedula) => {
    setCargando(true);
    try {
      const data = await obtenerCitasPorPaciente(cedula);
      setMisCitas(data);
    } catch (err) {
      console.error('Error al cargar citas:', err);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    if (usuario) {
      cargarCitas(usuario.cedula);
      obtenerEspecialidades()
        .then(data => setEspecialidades(data))
        .catch(err => console.error(err));
    }
  }, [usuario]);

  const handleAgendar = async (formCita) => {
    setCargando(true);
    setMensaje(null);
    try {
      const payload = {
        pacienteCedula: usuario.cedula,
        nombrePaciente: usuario.nombre,
        ...formCita
      };
      await registrarCita(payload);
      setMensaje({ tipo: 'éxito', texto: '¡Cita registrada con éxito y vinculada a HL7 FHIR!' });
      await cargarCitas(usuario.cedula);
      setTimeout(() => {
        setMensaje(null);
        setTab('citas');
      }, 1500);
    } catch (err) {
      setMensaje({ tipo: 'error', texto: 'Incapaz de registrar cita. Intenta de nuevo.' });
    } finally {
      setCargando(false);
    }
  };

  const handleCancelar = async (id) => {
    if (window.confirm('¿Deseas cancelar esta cita?')) {
      try {
        await cancelarCita(id);
        await cargarCitas(usuario.cedula);
      } catch (err) {
        alert('Error al cancelar la cita');
      }
    }
  };

  if (!usuario) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header usuario={null} />
        <main className="max-w-md mx-auto p-4">
          <LoginPage onLogin={(user) => setUsuario(user)} />
        </main>
      </div>
    );
  }

return (
    <div className="app-container">
      <Header usuario={usuario} onLogout={() => setUsuario(null)} />

      {/* Reubicado inmediatamente debajo del Header */}
      <Navbar tab={tab} setTab={setTab} onLogout={() => setUsuario(null)} />

      <main>
        {mensaje && (
          <div className="card" style={{ backgroundColor: mensaje.tipo === 'éxito' ? '#dcfce7' : '#fee2e2' }}>
            <p style={{ fontSize: '0.85rem', color: mensaje.tipo === 'éxito' ? '#15803d' : '#b91c1c' }}>
              {mensaje.texto}
            </p>
          </div>
        )}

        {tab === 'citas' && (
          <MisCitasPage misCitas={misCitas} cargando={cargando} onCancelar={handleCancelar} />
        )}
        {tab === 'agendar' && (
          <AgendarPage onAgendar={handleAgendar} cargando={cargando} />
        )}
        {tab === 'especialidades' && (
          <EspecialidadesPage especialidades={especialidades} />
        )}
      </main>
    </div>
  );
}