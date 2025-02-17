import React, { useState, useEffect } from 'react';
import $ from "jquery";
import Navbar from '../components/Navbar';
import ReviewCard from '../components/ReviewCard';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout';
import ReviewsCarousel from '../components/ReviewsCarousel';
import ReviewsMeanStars from '../components/ReviewsMeanStars';
import ReviewsPercentage from '../components/ReviewsPercentage';
import ReviewsStarBars from '../components/ReviewsStarBars';

const Reseñas = () => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    mean: 0,
    total: 0,
    recommended: 0,
    count: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  });

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3000/reviews/',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        setReviews(data);
        let mean;
        let total;
        let recommended;
        let count;

        total = data.length;

        recommended = data.reduce((acc, review) => acc + (review.stars > 3 ? 1 : 0), 0);
        mean = data.reduce((acc, review) => acc + review.stars, 0) / total;
        
        count = data.reduce((acc, review) => {
          acc[review.stars] = (acc[review.stars] || 0) + 1;
          return acc;
        }, { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

        setStats({
          mean: mean,
          total: total,
          recommended: recommended,
          count: count
        });
      },
      error: function () {
        console.error('Error al cargar las reseñas.');
      },
    });
  }, []);

  return (
    <MainLayout>
      <Navbar activeLink="Reseñas"/>

      <div className="flex flex-col md:flex-row w-full mt-4">
        <div className="flex flex-col basis-4/5 text-white pt-12 pl-12 pr-24 ">
          <h1 className='text-4xl font-bold text-balance'>Nuestros clientes aman lo que hacemos</h1>
          <h2 className='text-xl mt-3'>Con mas de 15 años de trayectoria en el alquiler de coches, hemos crecido junto a nuestros clientes para brindar cada día un mejor servicio y llegar a mas personas.</h2>
        </div>
        {reviews.length > 0 && <ReviewsCarousel review={reviews[Math.floor(Math.random() * reviews.length)]} />}
      </div>

      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 w-full ml-4 mb-6 font-bold text-2xl text-white mt-16">
        <ReviewsMeanStars mean={stats.mean} total={stats.total} />
        <ReviewsPercentage total={stats.total} recommended={stats.recommended} />
        <ReviewsStarBars count={stats.count} total={stats.total} />
      </div>

      <div className="relative mt-20 mx-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {reviews.map((review, i) => {
        return (
          <ReviewCard key={i} name={review.user.name} text={review.text} avatar={review.user.avatar} stars={review.stars} />
        )
      })}
      </div>

      <Footer />
    </MainLayout>
  );
};

export default Reseñas;
