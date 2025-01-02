import React from 'react';
import { Link } from 'react-router-dom';

const MainCard = ({ name, text, avatar, stars }) => {

  return (
    <div className="relative group flex flex-col w-full p-4 pt-6 bg-primary-900 text-white rounded-xl shadow-md hover:shadow-lg shadow-zinc-950/75 hover:shadow-zinc-950 transition-all duration-500 cursor-default">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={name + i}
            className="size-8"
            src={i < stars ? '/star-solid.svg' : '/star-regular.svg'}
            alt={i < stars ? 'star-solid' : 'star-regular'}
          />
        ))}
      </div>
      <p className="text-md mt-2 mb-16 transition-all duration-500 group-hover:text-stone-300/75">{text}</p>

      <div className="flex mt-6 items-center absolute bottom-4">
        <div className="rounded-full size-12 overflow-hidden">
            <img className="" src={avatar} alt={name} />
        </div>
        <p className="text-primary-100/75 text-xl ml-2 font-bold transition-all duration-500 group-hover:text-primary-300 z-10">{name}</p>
      </div>
    </div>
  );
};

export default MainCard;
