import React, { useState } from 'react';
import p3 from '../images/p3.png';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    // Your testimonial data here...
  ];

  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const goToSlide = (index) => {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    setCurrentSlide(index);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-center text-black text-4xl font-serif font-medium mb-14">What Our Clients Say</h1>
        <div className="flex flex-wrap overflow-hidden">
          {/* Display three testimonials at once */}
          {testimonials
            .slice(currentSlide * testimonialsPerSlide, (currentSlide + 1) * testimonialsPerSlide)
            .map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 px-4 overflow-hidden">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center bg-white">
                  {testimonial.image && (
                    <img className="w-20 h-20 object-cover object-center mb-4 mt-4" src={testimonial.image} alt={testimonial.name} />
                  )}
                  <div className="p-6 text-center bg-white">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{testimonial.name}</h1>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{testimonial.category}</h2>
                  </div>
                  <div className="p-6 text-center bg-green-200" style={{ backgroundColor: 'rgb(93, 165, 133)' }}>
                    <p className="leading-relaxed mb-3 text-white">{testimonial.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-4">
          {/* Display pagination dots */}
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 mx-1 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-500'}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {/* Arrow buttons */}
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="bg-gray-200 text-gray-600 rounded-full px-6 py-3 mr-4 border border-gray-400"
            style={{ backgroundColor: '#649A82' }}
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide(currentSlide + 1)} // Update to next slide index
            className="bg-gray-200 text-gray-600 rounded-full px-6 py-3 border border-gray-400"
            style={{ backgroundColor: '#649A82' }}
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M9 5l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
