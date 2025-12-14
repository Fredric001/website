import DigitalSkillsEducation from "./DigitalSkillsEducation";

const Skills = () => {
 

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Innovative digital education
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            Top-tier coding lessons and digital skills program that set your students and school apart.
          </p>
        </div>

        <DigitalSkillsEducation/>

        
      </div>
    </section>
  );
};

export default Skills;