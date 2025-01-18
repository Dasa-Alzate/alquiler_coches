import React, { useState, useEffect } from 'react';
import $ from "jquery";
import Navbar from '../components/Navbar';
import Filterbar from '../components/Filterbar';
import MainCard from '../components/MainCard';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Inicio = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'database.json',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        setCars(data.cars);
      },
      error: function () {
        setError('Error al cargar las reseñas.');
      },
    });
  }, []);

  return (
    <MainLayout>
      <Navbar activeLink="Inicio"/>

      <div className="my-6 mx-10 flex flex-col md:flex-row gap-6">
        <MainCard image="/images/cars/car1.webp" title="El mas exclusivo" name="Mercedes Benz EQE" model="Sedan 350 4MATIC" />
        <MainCard image="/images/cars/car2.webp" title="El favorito de todos" name="Mercedes Benz EQB" model="SUV 250+" />
      </div>

      <Filterbar />

      <div className="relative mt-6 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cars.map((car, i) => {
            return (
              <Link to={`/detalles`} key={i}>
                <Card image={car.image} name={car.name} model={car.model} year={car.year} />
              </Link>
            )
        })}
      </div>
      <div className='h-6 w-full flex justify-center items-end text-zinc-200 bg-gradient-to-t from-zinc-600/75 via-70% via-zinc-700/10 transition-all duration-300 hover:h-10 hover:-mt-4 hover:font-bold hover:from-zinc-400/50 cursor-pointer'><span className='h-fit'>Ver mas</span></div>

      <Footer />
    </MainLayout>
  );
};

export default Inicio;
