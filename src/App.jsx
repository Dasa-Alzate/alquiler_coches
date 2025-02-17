import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Detalles from './pages/Detalles';
import Reseñas from './pages/Reseñas';
import Contacto from './pages/Contacto';
import Configuracion from './pages/Configuracion';
import Pago from "./pages/Pago";

function App() {
  console.log("App component mounted");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/reseñas" element={<Reseñas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
