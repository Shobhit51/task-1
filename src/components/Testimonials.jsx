
import React from 'react';
import p3 from '../images/p3.png';

function Testimonials() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-center text-black text-3xl font-medium mb-12">What Our Clients Say</h1>
        <div className="flex flex-wrap -m-4">

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center">
            <div className="pt-4"> 
              <img className="rounded-full w-32 h-32 object-cover object-center" src={p3} alt="person" />
            </div>
            <div className="p-6 text-center flex flex-col items-center w-full" style={{ backgroundColor: '#fff' }}>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kevin Whatson</h1>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CEO Kingsten</h2>
            </div>
            <div className="p-6 text-center w-full" style={{ backgroundColor: '#5DA585' }}>
              <p className="leading-relaxed mb-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempora cupiditate facilis libero id voluptas nihil numquam quis maxime 
                
              </p>
            </div>
          </div>
        </div>

          <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center">
            <div className="pt-4"> {/* Added padding to top */}
              <img className="rounded-full w-32 h-32 object-cover object-center" src={p3} alt="person" />
            </div>
            <div className="p-6 text-center flex flex-col items-center w-full" style={{ backgroundColor: '#fff' }}>

              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kevin Whatson</h1>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CEO Kingsten</h2>
            </div>
            <div className="p-6 text-center w-full" style={{ backgroundColor: '#5DA585' }}>
              <p className="leading-relaxed mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempora cupiditate facilis libero id voluptas nihil numquam quis maxime
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center">
          <div className="pt-4"> {/* Added padding to top */}
            <img className="rounded-full w-32 h-32 object-cover object-center" src={p3} alt="person" />
          </div>
          <div className="p-6 text-center flex flex-col items-center w-full" style={{ backgroundColor: '#fff' }}>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kevin Whatson</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CEO Kingsten</h2>
          </div>
          <div className="p-6 text-center w-full" style={{ backgroundColor: '#5DA585' }}>
            <p className="leading-relaxed mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempora cupiditate facilis libero id voluptas nihil numquam quis maxime, 
            </p>
          </div>
        </div>
      </div>



   
        </div>
        
      </div>
       
    </section>
   
  );
}

export default Testimonials;