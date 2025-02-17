import React from "react";

const ReviewsMeanStars = ({ mean, total }) => {

  return (
    <div className="flex flex-col justify-center items-center basis-1/3">
      <h1 className="text-5xl font-bold">{mean.toFixed(1)}</h1>
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) =>
          i < mean ? (
            <img key={i} className="size-8" src="/star-solid.svg" alt="star-solid" />
          ) : (
            <img key={i} className="size-8" src="/star-regular.svg" alt="star-regular" />
          )
        )}
      </div>
      <span className="text-base font-light">{total} calificaciones</span>
    </div>
  );
};

export default ReviewsMeanStars;
