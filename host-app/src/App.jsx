import React, { lazy, Suspense } from 'react';

const RemoteHeader = lazy(() => import('remoteApp/Header'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando Header...</div>}>
        <RemoteHeader />
      </Suspense>

      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1>Bienvenido a la Aplicación Principal (Host)</h1>
        <p>
          El contenido de arriba (el header púrpura) no existe en este proyecto.
        </p>
        <p>
          Fue cargado dinámicamente en tiempo de ejecución desde 
          <code>localhost:5001</code>.
        </p>
      </div>

    </div>
  );
}

export default App;