import React, { useState, useEffect } from "react";
import $ from "jquery";
import CarSlider from "../../components/CarSlider";
import { Link } from "react-router-dom";

const ConfigRental = ({ active }) => {
  const [carsHistory, setCarsHistory] = useState([]);
  const [currentCars, setCurrentCars] = useState([]);

  useEffect(() => {
    $.ajax({
      url: `http://localhost:3000/cars/paginated/2`,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        setCarsHistory(data);
        setCurrentCars(data);
      },
      error: function () {
        console.error("Error al cargar las reseñas.");
      },
    });
  }, []);

  return (
    <nav
      className={`font-lato text-2xl text-white/75 p-4 basis-20% justify-center h-full ${
        active ? "" : "hidden"
      }`}
    >
      <form className="h-full flex flex-col gap-4 text-md" action="">
        <h1 className="text-4xl">Rentals</h1>
        <h3 className="text-xl">History and reservations</h3>
        <hr />

        <h3 className="text-xl">Current Reservations</h3>
        <CarSlider cars={currentCars} />

        <h3 className="text-xl">Reservations history</h3>
        <CarSlider cars={carsHistory} />

        <h3 className="text-xl">Notifications and policies</h3>
        <hr />

        <div className="flex flex-col lg:flex-row justify-evenly pb-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Notification preferences</h3>
            <input
              type="button"
              value="Enable SMS notifications"
              className="bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer"
            />
            <input
              type="button"
              value="Enable Email notifications"
              className="bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer"
            />
            <input
              type="button"
              value="Enable Push notifications"
              className="bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Cancellation and refund policies</h3>
            <input
              type="button"
              value="Read policies"
              className="bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </nav>
  );
};

export default ConfigRental;
