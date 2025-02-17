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
    <div className="flex flex-col lg:flex-row gap-4 w-full m-0 mt-4 ml-4 p-0 items-center">
      <DetailsMenu selectedCar={selectedCar} />

      <ul className="flex lg:flex-col p-2 gap-[0.75vh] lg:-ml-12 z-30">
        {selectedCar.images.map((_, index) => (
          <li
            key={index}
            onClick={() => changeIndex(index)}
            className={`cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 ${
              index === currentIndex ? "w-[10vh] lg:h-[10vh] lg:w-[1.5vh]" : "h-[1.5vh] w-[1.5vh]"
            }`}
          ></li>
        ))}
      </ul>

      <div className="relative flex overflow-hidden w-10/12 lg:w-full rounded-xl lg:rounded-l-3xl md:-ml-12 z-0 aspect-[460/327]">
        <div
          className="flex transition-transform duration-500 aspect-[460/327]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${selectedCar.images.length * 100}%`,
          }}
        >
          {selectedCar.images.map((image, index) => (
            <img
              key={index}
              className="h-full object-cover aspect-[460/327]"
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
