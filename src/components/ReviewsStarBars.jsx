import React from "react";

const ReviewsStarBars = ({ count, total }) => {

  return (
    <div className="flex flex-col justify-center items-center basis-1/3">
      {[5, 4, 3, 2, 1].map((star) => {
        const percentage = Math.round((count[star] * 100) / total);
        return (
          <div key={star} className="flex items-center gap-2 w-full px-32">
            <span className="text-base text-zinc-300/50 basis-4/12 w-max text-nowrap">{star} estrella{star > 1 ? "s" : ""}</span>
            <div className="flex w-48 rounded-md overflow-hidden basis-7/12">
              <div className="bg-primary-500 h-4" style={{ width: `${percentage}%` }}></div>
              <div className="bg-zinc-200/90 h-4" style={{ width: `${100 - percentage}%` }}></div>
            </div>
            <span className="text-base text-zinc-300/50 w-max basis-1/12 text-nowrap">{count[star]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsStarBars;
