# Citas Médicas FHIR - Frontend Web 🩺

Interfaz de usuario moderna y responsiva desarrollada con React y Vite, diseñada para la gestión interactiva de citas médicas integradas con el estándar de interoperabilidad HL7 FHIR (Appointment Resource).

---

## 🛠️ Tecnologías Utilizadas

* **Framework Base:** React 18 + Vite
* **Estilos:** CSS3 / Modern Flexbox & Grid
* **Iconografía:** Lucide React
* **Cliente HTTP:** Axios / Fetch API
* **Pruebas Unitarias y Cobertura:** Jest + React Testing Library + Babel
* **Despliegue Continuo (CD):** Vercel
* **Pipeline CI/CD:** GitHub Actions (Integrado con Allure Report y SonarCloud)

---

## 🚀 Características Principales

* **Autenticación y Sesión:** Autenticación local persistente por cédula del paciente.
* **Agendamiento de Citas:** Formulario interactivo con soporte para modalidades (Presencial / Telemedicina) y tipos de seguro.
* **Historial Directo:** Consulta en tiempo real de citas activas y canceladas conectadas al backend en Quarkus.
* **Catálogo de Especialidades:** Vista interactiva de especialidades médicas disponibles.
* **Manejo Dinámico de Errores:** Tarjetas de notificación (`MessageCard`) con auto-limpieza de estado al cambiar de pantalla.

---

## 📦 Estructura del Proyecto

```text
src/
├── assets/          # Recursos estáticos e imágenes
├── components/      # Componentes reutilizables (Header, Navbar, MessageCard)
├── pages/           # Vistas principales (AgendarPage, EspecialidadesPage, LoginPage, MisCitasPage)
├── services/        # Cliente y configuración de API (api.js)
├── tests/           # Suites de pruebas unitarias con Jest
├── App.jsx          # Componente raíz y enrutamiento de pestañas
├── main.jsx         # Punto de entrada de React
└── setupTests.js    # Configuración del entorno de pruebas

## 🧪 Estrategia de Pruebas y Calidad de Software (Frontend)

El proyecto cuenta con una estrategia de aseguramiento de calidad automatizada dividida en pruebas unitarias, pruebas de integración de interfaz de usuario y pruebas de extremo a extremo (E2E).

---

### 1. Pruebas Unitarias y Cobertura (Jest + React Testing Library)

Se realizan pruebas unitarias para validar el correcto renderizado de componentes, manejo de estados y consumo de hooks de la aplicación React.

Para ejecutar la suite de pruebas unitarias y generar el informe de cobertura de código local:

```bash
npm test -- --coverage --watchAll=false