import React, { useState } from 'react';
import DetailsMenu from '../components/DetailsMenu';

const DetailsCarrousel = ({ image, title, name, model }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndex = (index) => {
    setCurrentIndex(index);
  };

  const selectedCar = 
  { name: "Hyundai SantaCruz", model: "2.5T Limited AWD", year: "2025", transmission: "Automático", speed: "0-100 km/h - 6seg", fuel: "Gasolina", engine: "281 hp @ 5800 rmp", yield: "10,7 L/100km", seats: "5", images: [
    "/images/car_details/4-1.png",
    "/images/car_details/4-2.png",
    "/images/car_details/4-3.png",
    "/images/car_details/4-4.png",
    "/images/car_details/4-5.png",
    "/images/car_details/4-6.png",
    "/images/car_details/4-7.png",
    "/images/car_details/4-8.png",
    "/images/car_details/4-9.png",
    "/images/car_details/4-10.png"
  ] };

  return (
    <div className="flex gap-4 w-full m-0 mt-4 ml-4 p-0 items-center">
      <DetailsMenu />

      <ul className="flex flex-col p-2 gap-y-1.5 -ml-12 z-30">
        {selectedCar.images.map((_, index) => (
          <li key={index} onClick={() => changeIndex(index)} className={`cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 ${index === currentIndex ? "h-8" : "h-2"}`}>
          </li>
        ))}
      </ul>

      <div className="relative flex overflow-hidden w-full rounded-l-3xl -ml-12 z-0">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${selectedCar.images.length * 100}%`,
          }}
        >
          {selectedCar.images.map((image, index) => (
            <img key={index} className="h-full object-cover" src={image} alt={`Imagen ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsCarrousel;
