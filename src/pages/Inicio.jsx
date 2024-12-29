import React from 'react';
import Navbar from '../components/Navbar';
import MainCard from '../components/MainCard';
import MainLayout from '../layouts/MainLayout';

const Inicio = () => {
  return (
    <MainLayout>
      <Navbar activeLink="Inicio"/>

      <div className="mt-6 mx-10 flex gap-6">
        <MainCard image="/images/car1.png" title="El mas exclusivo" name="Mercedes Benz EQE Sedan" model="Modelo 350 4MATIC" />
        <MainCard image="/images/car2.png" title="El favorito de todos" name="Mercedes Benz EQB SUV" model="Modelo 250+" />
      </div>
    </MainLayout>
  );
};

export default Inicio;
