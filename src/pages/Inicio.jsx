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
  const [page, setPage] = useState(1);
  const [highlightedCar1, setHighlightedCar1] = useState([]);
  const [highlightedCar2, setHighlightedCar2] = useState([]);

  useEffect(() => {
    $.ajax({
      url: `http://localhost:3000/cars/paginated/${page}`,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log([...cars, ...data])
        setCars([...cars, ...data]);
        if (page === 1) {
          setHighlightedCar1(data[Math.floor(Math.random()*data.length)]);
          setHighlightedCar2(data[Math.floor(Math.random()*data.length)]);
        }
      },
      error: function () {
        console.error('Error al cargar las reseñas.');
      },
    });
  }, [page]);

  return (
    <MainLayout>
      <Navbar activeLink="Inicio"/>

      <div className="my-6 mx-10 flex flex-col md:flex-row gap-6">
        <MainCard image={highlightedCar1.image} title="El mas exclusivo" name={highlightedCar1.id} model={highlightedCar1.model} />
        <MainCard image={highlightedCar2.image} title="El favorito de todos" name={highlightedCar2.id} model={highlightedCar2.model} />
      </div>

      <Filterbar />

      <div className="relative mt-6 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cars.map((car, i) => {
            return (
              <Link to={`/detalles/${car.id}`} key={i}>
                <Card image={car.image} name={car.id} model={car.model} year={car.year} />
              </Link>
            )
        })}
      </div>
      <div className='h-6 w-full flex justify-center items-end text-zinc-200 bg-gradient-to-t from-zinc-600/75 via-70% via-zinc-700/10 transition-all duration-300 hover:h-10 hover:-mt-4 hover:font-bold hover:from-zinc-400/50 cursor-pointer'onClick={() => setPage(page+1)} ><span className='h-fit'>Ver mas</span></div>

      <Footer />
    </MainLayout>
  );
};

export default Inicio;
