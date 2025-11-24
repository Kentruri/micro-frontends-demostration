import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('remoteHeader/Header'));
const Card = lazy(() => import('remoteCard/Card'));

function App() {
  return (
    <div style={{ fontFamily: 'Arial' }}>
      <Suspense fallback={<div>Cargando Header...</div>}>
        <Header />
      </Suspense>

      <div style={{ padding: '20px' }}>
        <h1>🔵 Aplicación Host (Main)</h1>
        <p>Esta aplicación orquesta los microfrontends.</p>
        
        <hr />
        
        <h3>Productos Recomendados:</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Suspense fallback={<div>Cargando Tarjeta...</div>}>
            <Card />
            <Card /> 
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;