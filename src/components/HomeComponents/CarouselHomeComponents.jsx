import { useState } from "react";

export const CarouselHomeComponents = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://cdna.artstation.com/p/assets/images/images/089/620/562/large/forbellone-crash-2.jpg?1751461235",
    },
    {
      id: 2,
      image:
        "https://cdnb.artstation.com/p/assets/images/images/089/560/001/large/forbellone-crash-1.jpg?1751303697",
    },
    {
      id: 3,
      image:
        "https://cdnb.artstation.com/p/assets/images/images/089/555/883/large/forbellone-card-model-art-70.jpg?1751297256",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden h-128">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-scale-down"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};
