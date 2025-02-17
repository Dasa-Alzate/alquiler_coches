import React from 'react';
import { Link } from 'react-router-dom';

const MainCard = ({ image, title, name, model }) => {

  return (
    <div className="relative group flex flex-col w-full p-4 pt-6 h-60 md:h-72 lg:h-80 xl:h-96 bg-primary-900 text-white rounded-xl shadow-md hover:shadow-lg shadow-zinc-950/75 hover:shadow-zinc-950 transition-all duration-500">
      <p className="text-4xl font-bold transition-all duration-500 group-hover:text-primary-300 z-10">{title}</p>
      <p className="text-md mt-3 transition-all duration-500 group-hover:text-stone-300/75">{name}</p>
      <p className="text-md transition-all duration-500 group-hover:text-stone-300/75">{model}</p>

      <Link to={`/detalles/${name}`}>
        <span className="flex justify-center items-center mt-8 h-8 w-1/4 bg-secondary-600 text-white text-center rounded-md transition-all duration-500 hover:bg-secondary-400 hover:text-secondary-900" href="">Ver mas</span>
      </Link>

      <img className="absolute bottom-2 right-2 w-2/3 z-0 transition-all duration-500 group-hover:w-3/4" src={image} alt={name} />
    </div>
  );
};

export default MainCard;
