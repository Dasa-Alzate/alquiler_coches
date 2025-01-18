import React, { useState, useEffect, useRef } from 'react';
import DetailsMenu from '../components/DetailsMenu';

const DetailsCarrousel = ({ selectedCar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedCar.images.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, selectedCar.images.length]);

  const changeIndex = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="flex gap-4 w-full m-0 mt-4 ml-4 p-0 items-center">
      <DetailsMenu selectedCar={selectedCar} />

      <ul className="flex flex-col p-2 gap-y-1.5 -ml-12 z-30">
        {selectedCar.images.map((_, index) => (
          <li
            key={index}
            onClick={() => changeIndex(index)}
            className={`cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 ${
              index === currentIndex ? "h-8" : "h-2"
            }`}
          ></li>
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
            <img
              key={index}
              className="h-full object-cover"
              src={"/public/images" + image}
              alt={`Imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsCarrousel;
