import React from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import VerticalTimeline from '../components/VerticalTimeline';
function About() {
  const sections = [
    {
      title: "Vision",
      mainContent: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.",
      subContent: [
        "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
        "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
        "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      ]
    }
    // Add more sections here if needed
  ];
  return (
    <div>
      <section className="text-gray-600 body-font">
        
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img className=" w-full h-full object-cover object-center" src={p1} alt="person" />

          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-black text-3xl mb-4 pb-2 font-medium font-playfair" style={{ fontFamily: 'Playfair Display', fontSize: '30px', fontWeight: 600, lineHeight: '40px', textAlign: 'left', color: '#4D4E54' }}>
  Our History
</h1>

<p className="leading-relaxed font-poppins mb-4 pb-10 text-lg" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '27.2px', textAlign: 'left', color: '#888888' }}>
  Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
</p>

            <VerticalTimeline />
          </div>
        </div>
      </section>
   <section className="text-gray-600 body-font">   
  <div className="container px-5 py-24 mx-auto flex flex-wrap" >
    {sections.map((section, index) => (
      <div key={index} className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0 ml-auto relative">
        <h1 className="text-black text-3xl mb-4 pb-2 font-medium font-playfair" style={{ fontFamily: 'Playfair Display', fontSize: '30px', fontWeight: 600, lineHeight: '40px', textAlign: 'left', color: '#4D4E54' }}>
          {section.title}
        </h1>
        <div className="absolute" style={{ border: '1px solid #A0A0A0', height: `calc(100% - ${section.subContent.length * 100}px)`, width: '2px', top: `${section.subContent.length * 65}px` }}></div>
 <p className="text-slate-500 mb-3 pb-10  font-poppins text-lg" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '27.2px', textAlign: 'left', color: '#888888' }}>
          {section.mainContent}
        </p>
        {section.subContent.map((paragraph, index) => (
          <p key={index} className="text-slate-500 mb-3 pb-3 pl-14 font-sans text-lg" style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '27.2px', textAlign: 'left', color: '#888888' }}>
            {paragraph}
          </p>
        ))}
      </div>
    ))}
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
      <img className="w-full h-full object-cover object-center" src={p2} alt="person" />
    </div>
  </div>
</section>


    </div>
  );
}

export default About;
