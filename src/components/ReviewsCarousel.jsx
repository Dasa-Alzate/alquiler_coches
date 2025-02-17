import React from "react";

const ReviewsCarousel = ({ review }) => {

  return (
    <div className="relative flex md:basis-4/5 basis-auto h-96 mx-8 mt-8 md:mx-0 md:mt-0 group p-6 pr-12 md:-mr-3 bg-primary-900 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 z-10">
      <div className="ml-8">
        <img src="quote-left.svg" alt="comillas" />
        <p className="text-lg mt-5 transition-all duration-500 group-hover:text-stone-300/75">
          {review.text}
        </p>
        <div className="flex mt-6 items-center absolute bottom-4 w-5/6">
          <div className="rounded-full size-12 flex-none overflow-hidden">
            <img src={review.user.avatar} alt={review.user.name} />
          </div>
          <p className="text-primary-100/75 text-xl ml-2 mr-auto font-bold transition-all duration-500 group-hover:text-primary-300 z-10">
            {review.user.name}
          </p>
          <div className="flex ml-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                className="size-8"
                src={i < review.stars ? '/star-solid.svg' : '/star-regular.svg'}
                alt={i < review.stars ? 'star-solid' : 'star-regular'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
