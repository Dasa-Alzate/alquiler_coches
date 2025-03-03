import React from "react";
import { Link } from "react-router-dom";

const DetailsMenu = ({ selectedCar }) => {

  return (
    <div className="relative flex flex-col basis-4/5 h-[60vh] relative group p-6 pr-12 bg-primary-900 text-white rounded-2xl shadow-md hover:shadow-lg shadow-zinc-950/75 hover:shadow-zinc-950 transition-all duration-500 z-10">
      <p className="text-4xl font-bold transition-all duration-500 group-hover:text-primary-300 z-10">
        {selectedCar.id}
      </p>
      <p className="text-md mt-1 transition-all duration-500 group-hover:text-stone-300/75">
        {selectedCar.year}
      </p>
      <div className="grid grid-cols-2 gap-y-4 mt-5 mb-12">
        <div className="flex items-center">
          <div className="flex p-1 border border-2 border-secondary-500 rounded-lg mr-2">
            <img
              className="size-6"
              src="/transmission-icon.svg"
              alt="transmission-icon"
            />
          </div>
          <span>{selectedCar.transmission}</span>
        </div>
        <div className="flex items-center">
          <div className="flex p-1 border border-2 border-secondary-500 rounded-lg mr-2">
            <img className="size-6" src="/speed-icon.svg" alt="speed-icon" />
          </div>
          <span>{selectedCar.speed}</span>
        </div>
        <div className="flex items-center">
          <div className="flex p-1 border border-2 border-secondary-500 rounded-lg mr-2">
            <img className="size-6" src="/fuel-icon.svg" alt="fuel-icon" />
          </div>
          <span>{selectedCar.fuel}</span>
        </div>
        <div className="flex items-center">
          <div className="flex p-1 border border-2 border-secondary-500 rounded-lg mr-2">
            <img className="size-6" src="/engine-icon.svg" alt="engine-icon" />
          </div>
          <span>{selectedCar.engine}</span>
        </div>
        <div className="flex items-center">
          <div className="flex p-1 border border-2 border-secondary-500 rounded-lg mr-2">
            <img className="size-6" src="/yield-icon.svg" alt="yield-icon" />
          </div>
          <span>{selectedCar.yield}</span>
        </div>
        <div className="flex items-center">
          <div className="flex p-1 border border-2 border-secondary-500 rounded-lg mr-2">
            <img className="size-6" src="/seats-icon.svg" alt="seats-icon" />
          </div>
          <span>{selectedCar.seats} Asientos</span>
        </div>
      </div>

      <Link
        to="/pago"
        className="absolute bottom-6 w-2/5 flex justify-center items-center mt-6 h-8 px-4 py-1 rounded-lg text-secondary-950 bg-secondary-300 hover:shadow-md hover:shadow-secondary-800/25"
      >
        Reservar Ahora
      </Link>
    </div>
  );
};

export default DetailsMenu;
