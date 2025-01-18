import React, { useState, useEffect } from 'react';
import $ from "jquery";
import Navbar from '../components/Navbar';
import DetailsCarrousel from '../components/DetailsCarrousel';
import ReviewCard from '../components/ReviewCard';
import CarSlider from '../components/CarSlider';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout';

const Detalles = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'database.json',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        setCars(data.cars);
        setSelectedCar(data.selectedCar);
        setReviews(data.reviews);
      },
      error: function () {
        console.log('Error al cargar las reseñas.');
        setError('Error al cargar las reseñas.');
      },
    });
  }, []);

  return (
    <MainLayout>
      <Navbar activeLink="Inicio"/>

      {Object.keys(selectedCar).length > 0 && (
        <DetailsCarrousel selectedCar={selectedCar} />
      )}

      <h1 className='ml-4 mb-6 font-bold text-2xl text-white mt-16'>También te podría interesar...</h1>
      <CarSlider cars={cars}/>

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
