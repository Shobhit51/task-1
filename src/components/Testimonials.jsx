import React, { useState } from 'react';
import p3 from '../images/p3.png';

const Testimonials = () => {
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
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3,
    },
    {
      id: 5,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3,
    },
    {
      id: 6,
      category: 'Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3,
    },
    {
      id: 7,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3,
    },
    {
      id: 8,
      category: 'CEO Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3,
    },
    {
      id: 9,
      category: 'Kingsten',
      name: 'Kevin Whatson',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis totam mollitia. Ab veniam maiores quasi.',
      image: p3,
    },
  ];

  const [currentGroup, setCurrentGroup] = useState(0);

  const groupSize = 3;
  const totalGroups = Math.ceil(testimonials.length / groupSize);

  const handleNextGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
  };

  const handlePrevGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup - 1 + totalGroups) % totalGroups);
  };

  const displayedTestimonials = testimonials.slice(currentGroup * groupSize, (currentGroup + 1) * groupSize);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-center text-4xl font-playfair font-medium mb-14 text-[30px] font-bold leading-[33px]">
          What Our Clients Say
        </h1>

        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {displayedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="border border-gray-200 border-opacity-60 rounded-lg bg-white">
                {testimonial.image && (
                  <img
                    className="w-20 h-20 object-cover object-center mb-4 mt-4 mx-auto"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                )}
                <div className="text-center bg-white">
                  <h1 className="title-font text-lg font-medium font-poppins text-gray-900 mb-3 text-[24px] font-medium leading-[33px] text-center">
                    {testimonial.name}
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium font-poppins text-gray-400 mb-1 text-[16px] leading-[33px] text-center">
                    {testimonial.category}
                  </h2>
                </div>
                <div className="p-6 text-center bg-green-200" style={{ backgroundColor: 'rgba(2, 67, 0, 0.53)', minHeight: '150px' }}>
                  <p className="leading-relaxed mb-3 font-poppins text-white text-[16px] font-normal leading-[23px] tracking-[0.5px] text-center">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalGroups > 1 && (
  <div className="flex flex-col items-center mt-4">
    <div className="flex justify-center pb-4">
      {Array.from({ length: totalGroups }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentGroup(index)}
          className={`w-3 h-3 mx-1 rounded-full ${currentGroup === index ? 'bg-black' : 'bg-gray-300'}`}
        />
      ))}
    </div>

    <div className="flex justify-center">
  <button 
    onClick={handlePrevGroup}
    className="bg-gray-200 text-white rounded-full px-6 py-3 border border-gray-400 mr-4"
    style={{ backgroundColor: '#1B3228' }}
  >
    <svg
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-8 h-8"
      viewBox="0 0 24 24"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  </button>

  <button
    onClick={handleNextGroup}
    className="bg-gray-200 text-white rounded-full px-6 py-3 border border-gray-400"
    style={{ backgroundColor: '#1B3228' }}
  >
    <svg
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-8 h-8"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </button>
</div>

  </div>
)}
</div>
    </section>
 

  );
};

export default Testimonials;
