# Demostración de Arquitectura de Microfrontends

![Demo Screenshot](./screenshot.png)

## Instrucciones de Ejecución

Se requiere ejecutar tres terminales simultáneamente para levantar la arquitectura completa.

### 1. Terminal 1: Remote Header (Navegación)
Generamos los archivos estáticos (`build`) y los servimos en producción para asegurar la disponibilidad del manifiesto.

```bash
cd remote-header
npm install
npm run build
npm run preview -- --port 5001 --strictPort
```
### 2. Terminal 2: Remote Card (Producto)
Repetimos el proceso para el segundo microfrontend.

```bash
cd remote-card
npm install
npm run build
npm run preview -- --port 5002 --strictPort
```

### 3. Terminal 3: Host App (Orquestador)
Iniciamos la aplicación principal en modo desarrollo para consumir los remotos servidos anteriormente.

```bash
cd host-app
npm install
npm run dev -- --force
```

Verificación
Abra su navegador en http://localhost:5000.

Deberá visualizar la barra de navegación (Header) y las tarjetas (Card) integradas en una sola página.