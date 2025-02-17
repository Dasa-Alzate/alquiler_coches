import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  const root = document.getElementById('root');
  if (!root) {
    console.error('El elemento root no se encuentra en el HTML.');
  } else {
    console.log('Elemento root encontrado, inicializando React...');
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
          <App />
      </React.StrictMode>,
    );
  }
} catch (error) {
  console.error('Error al inicializar React:', error);
}
