import React from "react";

const ReviewsMeanStars = () => {

  return (
    <div className="flex flex-col justify-center items-center basis-1/3">
      <h1 className="text-5xl font-bold">4.8</h1>
      <div class="flex">
        <img class="size-8" src="/star-solid.svg" alt="star-solid" />
        <img class="size-8" src="/star-solid.svg" alt="star-solid" />
        <img class="size-8" src="/star-solid.svg" alt="star-solid" />
        <img class="size-8" src="/star-solid.svg" alt="star-solid" />
        <img class="size-8" src="/star-solid.svg" alt="star-solid" />
      </div>
      <span className="text-base font-light">126 calificaciones</span>
    </div>
  );
};

export default ReviewsMeanStars;
