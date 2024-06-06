

import React from 'react';

const timelineData = [
  {
    year: '2024',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis in ',
  },
  {
    year: '2023',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis in ',
  
  },
  {
    year: '2022',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis in ',
  
  },
  {
    year: '2021',
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque accusamus impedit fugiat commodi, culpa dolorum quas eveniet quis ',
  
  },
];

const VerticalTimeline = () => {
  return (
    <div >
      <div className="flex flex-col md:grid md:grid-cols-12 ">
        {timelineData.map((item, index) => (
          <div key={index} className="flex md:contents">
            
            {/* Year Column */}
            <div className="col-start-1 col-end-2 md:mx-auto relative">
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-xl font-playfair font-bold pb-20" style={{ fontFamily: 'Playfair Display', fontSize: '16px', fontWeight: 600, lineHeight: '21px', textAlign: 'left', color: '#4D4E54' }}>
  {item.year}
</div>

            
              </div>
            </div>

            
            {/* Marker Column */}
            <div className="col-start-2 col-end-3 md:mx-auto relative">
              <div className="h-full w-4 flex items-center justify-center">
              {index === timelineData.length - 1 ? null : <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>}
              </div>
              <div className="w-5 h-5 absolute top-1 -mt-3 pt-5 rounded-full bg-gray-500 shadow"></div>
            </div>

            {/* Event Content Column */}
            <div className="col-start-3 col-end-12 ">
             
           <p className="leading-tight text-justify pd-3 font-sans" style={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: 400, lineHeight: '20px', textAlign: 'left', color: '#888888' }}>
  {item.description}
</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default VerticalTimeline;
