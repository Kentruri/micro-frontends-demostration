# Demostración de Arquitectura de Microfrontends

## Resumen

El presente repositorio contiene un proyecto de demostración que ilustra los principios fundamentales de la arquitectura de microfrontends (MFE). El objetivo principal es exhibir cómo una aplicación anfitriona (Host) puede cargar y renderizar dinámicamente un componente expuesto por una aplicación remota (Remote) en tiempo de ejecución.

Esta implementación se realiza utilizando **Vite** como entorno de desarrollo y **Module Federation** (a través del plugin `@originjs/vite-plugin-federation`) como estrategia de integración.

## Conceptos Fundamentales

### Arquitectura de Microfrontends

Un enfoque arquitectónico donde las aplicaciones de frontend se descomponen en componentes más pequeños, autónomos y desplegables de forma independiente. Esta estrategia, análoga a los microservicios en el backend, promueve el desacoplamiento de los equipos de desarrollo, facilita la escalabilidad y permite la autonomía tecnológica (aunque en esta demo ambas aplicaciones usen React).

### Module Federation

Module Federation es una característica, popularizada por Webpack y portada a Vite, que permite a una aplicación JavaScript cargar código dinámicamente desde otra aplicación separada en tiempo de ejecución. En este proyecto, se utiliza para que el "Host" consuma un componente del "Remote" sin que exista una dependencia de compilación (build-time) entre ellos.

## Arquitectura de la Demostración

El proyecto está estructurado en dos aplicaciones Vite + React independientes, ubicadas en este mismo repositorio:

1.  **`host-app` (Aplicación Anfitriona):**
    * **Rol:** Actúa como el contenedor principal o "caparazón" (shell) de la aplicación.
    * **Puerto:** `http://localhost:5000`
    * **Función:** Se configura como un anfitrión de Module Federation. Importa y renderiza de forma asíncrona (utilizando `React.lazy` y `Suspense`) el componente `Header` expuesto por el `remote-app`.

2.  **`remote-app` (Aplicación Remota):**
    * **Rol:** Es un microfrontend autónomo que posee una funcionalidad de negocio específica (en este caso, un componente `Header`).
    * **Puerto:** `http://localhost:5001`
    * **Función:** Se configura como un remoto de Module Federation. Expone el componente `./src/Header.jsx` bajo el alias `Header` a través de su manifiesto `remoteEntry.js`.

## Tecnologías Utilizadas

* **Vite:** Herramienta de frontend de próxima generación para el desarrollo y compilación.
* **React:** Biblioteca para la construcción de interfaces de usuario.
* **@originjs/vite-plugin-federation:** Plugin que implementa la especificación de Module Federation para el ecosistema de Vite.

## Instalación y Ejecución

Para replicar esta demostración, se requieren dos instancias de terminal ejecutándose de forma concurrente.

### Prerrequisitos

* Node.js (v18 o superior)
* NPM (o gestor de paquetes alternativo)

### Terminal 1: Ejecución de `remote-app` (MFE)

Esta terminal servirá el microfrontend que expone el componente.

```bash
# Navegar al directorio del microfrontend
cd remote-app

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo en el puerto 5001
npm run dev