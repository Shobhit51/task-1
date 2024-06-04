

import React from 'react';

const timelineData = [
  {
    year: '2024',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis in harum, perspiciatis placeat quibusdam. Nisi maiores animi illum dolore minima doloremque',
  },
  {
    year: '2023',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis in harum, perspiciatis placeat quibusdam. Nisi maiores animi illum dolore minima doloremque',
  
  },
  {
    year: '2022',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis in harum, perspiciatis placeat quibusdam. Nisi maiores animi illum dolore minima doloremque',
  
  },
];

const VerticalTimeline = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-4">
        {timelineData.map((item, index) => (
          <div key={index} className="flex md:contents">
            
            {/* Year Column */}
            <div className="col-start-1 col-end-2 md:mx-auto relative">
              <div className="h-full w-full flex items-center justify-center">
              <div className="text-xl  font-bold  pd-3 mr-3">{item.year}</div>
            
              </div>
            </div>

            
            {/* Marker Column */}
            <div className="col-start-2 col-end-3 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-700 shadow"></div>
            </div>

            {/* Event Content Column */}
            <div className="col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md  bg-gray-100">
             
              <p className="leading-tight text-justify font-sans">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
