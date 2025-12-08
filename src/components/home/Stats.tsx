const Stats = () => {
  const stats = [
    { number: "2024", label: "Founded" },
    { number: "10+", label: "Counties" },
    { number: "18+", label: "Schools" },
    { number: "50+", label: "Expert Teachers" },
    { number: "120,000+", label: "Students" }
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our award-winning tools and methodologies, backed by years of expertise, ensure top-quality education
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
               <div className="text-sm md:text-base ">
                {stat.label}
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2 text-accent">
                {stat.number}
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
