import React from "react";

function Funbase() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fun-based AI, Digital Literacy and Coding for Children
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2  mb-16">
          <div className="mb-16">
            <div>
              <h2 className="font-serif text-2xl md:text-2xl font-bold text-foreground ">
                Skills Beyond Basic Computer Use
              </h2>
            </div>
          </div>
          <div>
           <div>
              <h2 className="font-serif text-2xl md:text-2xl font-bold text-foreground ">
              From Passive to Active Screen Time
              </h2>
            </div>
          </div>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-2  mb-16">
          <div className="mb-16">
            <div>
              <h2 className="font-serif text-2xl md:text-2xl font-bold text-foreground ">
               Flexibility & Progressing at Own Speed
              </h2>
            </div>
          </div>
          <div>
           <div>
              <h2 className="font-serif text-2xl md:text-2xl font-bold text-foreground ">
              Gamified Tech Learning
              </h2>
            </div>
          </div>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-2  mb-16">
          <div className="mb-16">
            <div>
              <h2 className="font-serif text-2xl md:text-2xl font-bold text-foreground ">
              Future-Proof Skills
              </h2>
            </div>
          </div>
          <div>
           <div>
              <h2 className="font-serif text-2xl md:text-2xl font-bold text-foreground ">
                Real-World Application
              </h2>
            </div>
          </div>
        </div>
      
      
         <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
           We have Locations all around the world. Find the closest one and check out our local offers!
          </h2>
        </div>
     
      
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Find Location{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Funbase;
