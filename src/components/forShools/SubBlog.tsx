import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SubBlog = () => {
  const sections = [
    {
      id: 1,
      title: "Scale your technology education!",
      description: "Logiscool takes your current IT programs further with scalable, comprehensive courses that include real-world programming languages like Python, equipping students with future-ready skills.",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      order: "image-right"
    },
    {
      id: 2,
      title: "Training platform for your staff",
      description: "With Logiscool, your current staff can easily deliver coding lessons using our intuitive platform, step-by-step guides, and professional training sessions, ensuring minimal disruption and effort.",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      order: "image-left"
    },
    {
      id: 3,
      title: "Advanced coding with easy implementation",
      description: "Logiscool provides all necessary resources, training, and ongoing support, minimizing additional staff costs. Our turnkey solutions allow schools to introduce advanced coding like Python without heavy investments.",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      order: "image-right"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Preparing Your School for Tomorrow, Today
          </h2>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${
              index < sections.length - 1 ? 'mb-12 sm:mb-16 md:mb-20' : ''
            }`}
          >
            {/* Content - order changes based on section */}
            <div className={`flex flex-col justify-center ${
              section.order === 'image-left' ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
            }`}>
              <h5 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 sm:mb-4">
                {section.title}
              </h5>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Image - order changes based on section */}
            <div className={`flex justify-center ${
              section.order === 'image-left' ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
            }`}>
              <img
                src={section.image}
                alt={section.title}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md sm:shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubBlog;