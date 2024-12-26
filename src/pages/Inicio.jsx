import React from 'react';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/MainLayout';

const Inicio = () => {
  return (
    <MainLayout>
      <Navbar />
      
      <div className="inicio-content">
        <h1>Bienvenido a la Página de Inicio</h1>
        <p>Esta es la página de inicio de la aplicación.</p>
      </div>
    </MainLayout>
  );
};

export default Inicio;
