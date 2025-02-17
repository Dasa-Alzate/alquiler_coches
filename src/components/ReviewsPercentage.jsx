import React from "react";

const ReviewsPercentage = ({ total, recommended }) => {

  return (
    <div className="flex flex-col justify-center items-center basis-1/3">
      <h1 className="text-5xl font-bold">{(recommended*100 / total).toFixed(0)}%</h1>
      <span className="text-base font-light">Nos recomiendan</span>
      <span className="text-base font-light">({recommended} de {total})</span>
    </div>
  );
};

export default ReviewsPercentage;
