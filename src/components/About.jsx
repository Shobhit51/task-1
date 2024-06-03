import React from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import VerticalTimeline from '../components/VerticalTimeline';
function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img className=" w-full h-full object-cover object-center" src={p1} alt="person" />

          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-black  text-3xl mb-4   font-medium font-serif"> Our History</h1>
            <p className="leading-relaxed font-serif mb-4 text-lg ">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
            </p>
            <VerticalTimeline />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-black  text-3xl mb-4   font-medium font-serif">Vision</h1>
            <p className="text-slate-500 font-serif text-lg " >
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
            </p>
            <div className="relative pl-8 sm:pl-20 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"></div>
              <div className="text-slate-500 font-serif" >
                <div className="leading-relaxed mb-4 text-lg ">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
                </div>
                 <div className="text-slate-500 mb-4  font-serif text-lg " >
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
                </div>
                <div className="text-slate-500  mb-4 font-serif text-lg " >
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
                </div>
                 <div className="leading-relaxed mb-4 text-lg ">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
                </div>
                 <div className="leading-relaxed mb-4 text-lg ">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <img className=" w-full h-full object-cover object-center" src={p2} alt="person" />

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
