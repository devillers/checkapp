'use client';

import { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2); // Default to 2 slides for mobile view

  // Set slides per view based on the viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth >= 1280) {
      setSlidesPerView(5); // 5 slides for very large desktops
    } else if (window.innerWidth >= 1024) {
      setSlidesPerView(4); // 4 slides for larger desktops
    } else if (window.innerWidth >= 768) {
      setSlidesPerView(3); // 3 slides for tablets
    } else {
      setSlidesPerView(2); // 2 slides for all mobile devices
    }
  };

  useEffect(() => {
    // Initial setup
    updateSlidesPerView();

    // Event listener to handle window resizing
    window.addEventListener('resize', updateSlidesPerView);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const totalSlides = slides.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slidesPerView : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - slidesPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute text-xl drop-shadow-md flex items-center justify-center left-2 top-1/2 h-8 w-8 transform -translate-y-1/2 bg-gray-700 transition-all duration-300 ease-linear bg-opacity-60 hover:bg-opacity-80 hover:scale-105 text-white p-1 rounded-full z-10"
      >
        &#8249; {/* Left Arrow */}
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute text-xl drop-shadow-md flex items-center justify-center right-2 top-1/2 h-8 w-8 transform -translate-y-1/2 bg-gray-700 transition-all duration-300 ease-linear bg-opacity-60 hover:bg-opacity-80 hover:scale-105 text-white p-1 rounded-full z-10"
      >
        &#8250; {/* Right Arrow */}
      </button>

      {/* Slide Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-[${100 / slidesPerView}%] p-1 sm:p-2`}
            style={{
              flex: `0 0 ${100 / slidesPerView}%`,
            }}
          >
            <div className="h-full bg-white rounded-lg drop-shadow-sm flex flex-col justify-between mx-auto">
              <img
                src={slide.picture}
                alt={slide.name}
                className="w-full max-h-[150px] object-cover rounded-t-lg mb-1"
              />
              <div className="p-2 flex flex-wrap gap-1">
                <h3 className="text-[9px] rounded-full px-1 border-orange-500 border-[1px] bg-white text-orange-500">
                  {slide.category}
                </h3>
                <h4 className="text-[9px] rounded-full px-1 border-purple-500 border-[1px] bg-white text-purple-500">
                  {slide.name}
                </h4>
              </div>
              <div className="px-2">
                <p className="text-[9px] text-gray-500">{slide.description}</p>
                <div className=" flex justify-end ">
                  <button
                    onClick={() => console.log('Edit slide:', slide)}
                    className="my-2 tracking-wide  text-[9px] rounded-full px-1 border-gray-500 border-[1px] bg-white text-gray-500"
                  >
                    editer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
