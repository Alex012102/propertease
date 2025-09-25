import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface PictureCarouselProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number; // in ms
}

const PictureCarousel: React.FC<PictureCarouselProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full  md:min-h-80 min-h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <span className="text-gray-500">No photos available</span>
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative md:min-h-160 min-h-64 overflow-hidden rounded-lg">
      {/* Images */}
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:cursor-pointer"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:cursor-pointer"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full hover:cursor-pointer ${
              idx === currentIndex
                ? "bg-brand-secondary-shade"
                : "bg-brand-secondary-light/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PictureCarousel;
