import React from 'react';
import Navbar from '../components/Navbar';
import ReviewCard from '../components/ReviewCard';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout';
import ReviewsCarousel from '../components/ReviewsCarousel';
import ReviewsMeanStars from '../components/ReviewsMeanStars';
import ReviewsPercentage from '../components/ReviewsPercentage';
import ReviewsStarBars from '../components/ReviewsStarBars';

const Reseñas = () => {
  const reviews =[
    {name: "Jose Gomez Hidalgo", text: "Car rentals ha sido la mejor decision que he tomado para rentar un coche.", avatar: "avatar-doctor.svg", stars: 5},
    {name: "Ivan Saavedra Rodriguez ", text: "Como ha dicho Jose, Car rentals ha sido la mejor decision que he tomado para rentar un coche.", avatar: "avatar-astronaut.svg", stars: 4},
    {name: "Jose Manuel Martinez Belando", text: "Esta página merece un 10.", avatar: "avatar-teacher.svg", stars: 5}
  ];

  return (
    <MainLayout>
      <Navbar activeLink="Reseñas"/>

      <div className="flex w-full mt-4">
        <div className="flex flex-col basis-4/5 text-white pt-12 pl-12 pr-24 ">
          <h1 className='text-4xl font-bold text-balance'>Nuestros clientes aman lo que hacemos</h1>
          <h2 className='text-xl mt-3'>Con mas de 15 años de trayectoria en el alquiler de coches, hemos crecido junto a nuestros clientes para brindar cada día un mejor servicio y llegar a mas personas.</h2>
        </div>
        <ReviewsCarousel />
      </div>

      <div className="flex w-full ml-4 mb-6 font-bold text-2xl text-white mt-16">
        <ReviewsMeanStars />
        <ReviewsPercentage />
        <ReviewsStarBars />
      </div>

      <div className="relative mt-20 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

export default Reseñas;
