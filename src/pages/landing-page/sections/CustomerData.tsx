import React, { useState } from "react";

import reviews from "../../../utils/mocks/reviews";

const CustomerData: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(reviews[1]);

  return (
    <div className="flex bg-brand-subtle h-[30rem] w-full">
      {/* Reviews */}
      <div id="review-card" className="bg-brand-secondary-tint">
        <div className="flex mb-8">
          {reviews.map((review, index) => (
            <img
              className="max-w-[5rem] rounded-xl me-3 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-md hover:scale-105"
              src={review.img}
              alt={review.name}
              key={index}
              onMouseEnter={() => setCurrentReview(review)}
            />
          ))}
        </div>

        <p className="text-white body-text text-4xl font-sans font-semibold text-center leading-relaxed mb-8 h-[2.5rem]">
          " {currentReview.review} "
        </p>
        <h2 className="text-2xl font-bold text-gray-100">
          {currentReview.name}
        </h2>
        <p className="text-md italic text-gray-300">{currentReview.title}</p>
      </div>
      {/* DATA / Statistics */}
      <div className="flex items-end justify-around w-full mb-12">
        <div className="flex flex-col text-center">
          <span className="font-mono text-7xl mb-2">$782.3B</span>
          <p className="text-3xl">Assets on platform</p>
        </div>
        <div className="flex flex-col text-center">
          <span className="font-mono text-7xl mb-2">$1.684B</span>
          <p className="text-3xl">Annual payments serviced</p>
        </div>
        <div className="flex flex-col text-center">
          <span className="font-mono text-7xl mb-2">12,000+</span>
          <p className="text-3xl">Units</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;