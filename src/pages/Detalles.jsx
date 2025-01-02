import React from 'react';
import Navbar from '../components/Navbar';
import DetailsCarrousel from '../components/DetailsCarrousel';
import ReviewCard from '../components/ReviewCard';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout';

const Detalles = () => {
  const cars = [
    { image: "/images/cars/car1.png", name: "Mercedes Benz EQE", model: "Sedan 350 4MATIC", year: "2023" },
    { image: "/images/cars/car2.png", name: "Mercedes Benz EQB", model: "SUV 250+", year: "2021" },
    { image: "/images/cars/car3.png", name: "Toyota Prius", model: "4º Gen", year: "2022" },
    { image: "/images/cars/car2.png", name: "Mercedes Benz EQB", model: "SUV 250+", year: "2021" },
  ];
  const reviews =[
    {name: "Jose Gomez Hidalgo", text: "Car rentals ha sido la mejor decision que he tomado para rentar un coche.", avatar: "avatar-doctor.svg", stars: 5},
    {name: "Ivan Saavedra Rodriguez ", text: "Como ha dicho Jose, Car rentals ha sido la mejor decision que he tomado para rentar un coche.", avatar: "avatar-astronaut.svg", stars: 4},
    {name: "Jose Manuel Martinez Belando", text: "Esta página merece un 10.", avatar: "avatar-teacher.svg", stars: 5}
  ];

  return (
    <MainLayout>
      <Navbar activeLink="Inicio"/>

      <DetailsCarrousel />

      <h1 className='ml-4 font-bold text-2xl text-white mt-16'>También te podría interesar...</h1>
      <div className="relative mt-6 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cars.map((car, i) => {
          return (
            <Card key={i} image={car.image} name={car.name} model={car.model} year={car.year} />
          )
        })}
      </div>

      <h1 className='ml-4 font-bold text-2xl text-white mt-16'>Lo que opinan nuestros clientes</h1>
      <div className="relative mt-6 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {reviews.map((review, i) => {
        return (
          <ReviewCard key={i} name={review.name} text={review.text} avatar={review.avatar} stars={review.stars} />
        )
      })}
      </div>

      <Footer />
    </MainLayout>
  );
};

export default Detalles;
