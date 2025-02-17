import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, name, model, year, favorited = false }) => {

  return (
    <div className="relative group flex flex-col p-0 h-60 md:h-52 lg:h-48 bg-transparent text-white rounded-xl cursor-pointer">
      <div className="flex flex-col items-center lg:items-start 
      h-36 group-hover:h-56 
      md:h-32 md:group-hover:h-52 
      lg:h-24 lg:group-hover:h-48 
      p-2 pt-3 bg-primary-900 text-white rounded-xl shadow-lg shadow-zinc-950/75 overflow-hidden transition-all duration-500">
        <p className="text-2xl lg:text-lg font-bold transition-all duration-500 group-hover:text-primary-300/75">{name}</p>
        <p className="text-md lg:text-sm transition-all duration-500 opacity-0 group-hover:opacity-100 text-stone-300/75">{model}</p>
        <p className="text-md lg:text-sm -mt-1 text-secondary-500 transition-all duration-500 opacity-0 group-hover:opacity-100 text-secondary-300/75">{year}</p>
      </div>
      <img className="absolute aspect-2/3
        bottom-10 group-hover:bottom-5 h-36 group-hover:h-32 
        md:bottom-2 md:group-hover:bottom-1 md:h-32 group-hover:md:h-28 
        lg:bottom-14 group-hover:lg:bottom-4 lg:h-20 group-hover:lg:h-24 
        right-1/2 translate-x-1/2
        transition-all duration-500" src={image} alt={name} />
      <img className={`absolute top-2 right-2 size-8 ${favorited ? "" : "hidden"}`} src="/heart-solid-icon.svg" alt={name} />
    </div>
  );
};

export default Card;
