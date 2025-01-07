import React from "react";

const ReviewsStarBars = () => {

  return (
    <div className="flex flex-col justify-center items-center basis-1/3">
      <div className="grid grid-cols-4 gap-2 justify-center items-center">
        <span className="text-base text-zinc-300/50">5 estrellas</span>
        <div className="flex w-48 col-span-2 rounded-md overflow-hidden">
          <div className="bg-primary-500 h-4 w-[92%]"></div>
          <div className="bg-zinc-200/90 h-4 w-[8%]"></div>
        </div>
        <span className="text-base text-zinc-300/50">92</span>

        <span className="text-base text-zinc-300/50">4 estrellas</span>
        <div className="flex w-48 col-span-2 rounded-md overflow-hidden">
          <div className="bg-primary-500 h-4 w-[20%]"></div>
          <div className="bg-zinc-200/90 h-4 w-[80%]"></div>
        </div>
        <span className="text-base text-zinc-300/50">20</span>

        <span className="text-base text-zinc-300/50">3 estrellas</span>
        <div className="flex w-48 col-span-2 rounded-md overflow-hidden">
          <div className="bg-primary-500 h-4 w-[6%]"></div>
          <div className="bg-zinc-200/90 h-4 w-[94%]"></div>
        </div>
        <span className="text-base text-zinc-300/50">6</span>

        <span className="text-base text-zinc-300/50">2 estrellas</span>
        <div className="flex w-48 col-span-2 rounded-md overflow-hidden">
          <div className="bg-primary-500 h-4 w-[2%]"></div>
          <div className="bg-zinc-200/90 h-4 w-[98%]"></div>
        </div>
        <span className="text-base text-zinc-300/50">2</span>

        <span className="text-base text-zinc-300/50">1 estrella</span>
        <div className="flex w-48 col-span-2 rounded-md overflow-hidden">
          <div className="bg-primary-500 h-4 w-[6%]"></div>
          <div className="bg-zinc-200/90 h-4 w-[94%]"></div>
        </div>
        <span className="text-base text-zinc-300/50">6</span>
      </div>
    </div>
  );
};

export default ReviewsStarBars;
