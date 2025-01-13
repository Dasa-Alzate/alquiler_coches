import React from 'react';
import CarSlider from '../../components/CarSlider';
import { Link } from 'react-router-dom';

const ConfigRental = ({ active }) => {
  const carsHistory = [
    { image: "/images/cars/car3.webp", name: "Toyota Prius - 12/Aug/24", model: "4º Gen", year: "2022" },
    { image: "/images/cars/car2.webp", name: "Mercedes Benz EQB - 22/Sep/24", model: "SUV 250+", year: "2021" },
    { image: "/images/cars/car1.webp", name: "Mercedes Benz EQE - 20/Dec/24", model: "Sedan 350 4MATIC", year: "2023" },
  ];

  const currentCars = [
    { image: "/images/cars/car4.webp", name: "Hyundai SantaCruz - 25/Jan/25", model: "2.5T Limited AWD", year: "2025" },
    { image: "/images/cars/car2.webp", name: "Mercedes Benz EQB - 25/Jan/25", model: "SUV 250+", year: "2021" },
  ];

  return (
    <nav className={`font-lato text-2xl text-white/75 p-4 basis-20% justify-center h-full ${active ? "" : "hidden"}`}>
      <form className="h-full flex flex-col gap-4 text-md" action="">
        <h1 className='text-4xl'>Rentals</h1>
        <h3 className='text-xl'>History and reservations</h3>
        <hr />
        
        <h3 className='text-xl'>Current Reservations</h3>
        <CarSlider cars={currentCars}/>

        <h3 className='text-xl'>Reservations history</h3>
        <CarSlider cars={carsHistory}/>

        <h3 className='text-xl'>Notifications and policies</h3>
        <hr />

        <div className="flex justify-evenly mb-8">
          <div className="flex flex-col gap-4">
            <h3 className='text-xl'>Notification preferences</h3>
            <input type="button" value="Enable SMS notifications" className='bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
            <input type="button" value="Enable Email notifications" className='bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
            <input type="button" value="Enable Push notifications" className='bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className='text-xl'>Cancellation and refund policies</h3>
            <input type="button" value="Read policies" className='bg-primary-700 rounded-lg px-3 py-1 text-lg mx-auto px-6 shadow-lg shadow-zinc-950/75 cursor-pointer'/>
          </div>
        </div>

      </form>
    </nav>
  );
};

export default ConfigRental;
