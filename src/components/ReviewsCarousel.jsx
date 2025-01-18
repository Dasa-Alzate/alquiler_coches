import React from "react";
import { Link } from "react-router-dom";

const ReviewsCarousel = () => {

  return (
    <div className="relative flex basis-4/5 h-96 relative group p-6 pr-12 -mr-3 bg-primary-900 text-white rounded-2xl shadow-md hover:shadow-lg shadow-zinc-950/75 hover:shadow-zinc-950 transition-all duration-500 z-10">
      <ul className="flex flex-col gap-y-1.5 justify-center h-full -ml-2 ">
        <li className="cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 h-12"></li>
        <li className="cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 h-2"></li>
        <li className="cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 h-2"></li>
        <li className="cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 h-2"></li>
        <li className="cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 h-2"></li>
        <li className="cursor-pointer w-2 rounded-full bg-zinc-400 transition-all duration-300 h-2"></li>
      </ul>
      <div className="ml-8">
        <img src="quote-left.svg" alt="comillas" />
        <p className="text-lg mt-5 transition-all duration-500 group-hover:text-stone-300/75">Car rentals ha sido la mejor decision que he tomado para rentar un coche.</p>

        <div className="flex mt-6 items-center absolute bottom-4 w-5/6">
          <div className="rounded-full size-12 flex-none overflow-hidden">
            <img src="avatar-doctor.svg" alt="Jose Gomez Hidalgo" />
          </div>
          <p className="text-primary-100/75 text-xl ml-2 mr-auto grow font-bold transition-all duration-500 group-hover:text-primary-300 z-10">Jose Gomez Hidalgo</p>
          <div className="flex ml-auto flex-none">
            <img className="size-8" src="/star-solid.svg" alt="star-solid" />
            <img className="size-8" src="/star-solid.svg" alt="star-solid" />
            <img className="size-8" src="/star-solid.svg" alt="star-solid" />
            <img className="size-8" src="/star-solid.svg" alt="star-solid" />
            <img className="size-8" src="/star-solid.svg" alt="star-solid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
