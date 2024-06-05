import React, { useState } from 'react';
import p3 from '../images/p3.png';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const testimonials = [
    {
      id: 1,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3, 
    },
    {
      id: 2,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3, 
    },
    {
      id: 3,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3, 
    },
    {
      id: 4,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: p3, 
    },
    {
      id: 5,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: p3, 
    },
    {
      id: 6,
      category: 'Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: p3, 
    },
    {
      id: 7,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3, 
    },
    {
      id: 8,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3, 
    },
    {
      id: 9,
      category: 'Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3, 
    },
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
      <h1 className="text-center  text-4xl font-serif font-medium mb-14">What Our Clients Say </h1>  
        <div className="relative overflow-hidden w-full">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-none md:w-1/3 px-4">
                <div className=" border border-gray-200 border-opacity-60 rounded-lg bg-white">
                  {testimonial.image && (
                    <img className="w-20 h-20 object-cover object-center mb-4 mt-4 mx-auto" src={testimonial.image} alt={testimonial.name} />
                  )}
                 <div className="text-center bg-white">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{testimonial.name}</h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{testimonial.category}</h2>
                </div>
                <div className="p-6 text-center bg-green-200 flex-1" style={{ backgroundColor: 'rgb(93, 165, 133)' }}>
                  <p className="leading-relaxed mb-3 text-white">{testimonial.testimonial}</p>
                </div>
             
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 mx-1 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-500'}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="bg-gray-200 text-gray-600 rounded-full px-6 py-3 mr-4 border border-gray-400"
            style={{ backgroundColor: "#649A82" }}
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="bg-gray-200 text-gray-600 rounded-full px-6 py-3 border border-gray-400"
            style={{ backgroundColor: "#649A82" }}
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M9 5l6 6-6 6"/>
            </svg>
          </button>
       
      </div>
    </section>
  );
};

export default Testimonials;
