import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Detalles from './pages/Detalles';
import Reseñas from './pages/Reseñas';
import Contacto from './pages/Contacto';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/reseñas" element={<Reseñas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default App;
