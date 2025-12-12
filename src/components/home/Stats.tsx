const Stats = () => {
  const stats = [
    { number: "2024", label: "Founded" },
    { number: "10+", label: "Counties" },
    { number: "18+", label: "Schools" },
    { number: "50+", label: "Expert Teachers" },
    { number: "120,000+", label: "Students" },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl  font-bold text-foreground"
            style={{
              fontFamily:
                "Raleway, Manrope, Cairo, Helvetica Neue, Arial, -apple-system, BlinkMacSystemFont, Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
            }}
          >
            Our award-winning tools and methodologies, backed by years of
            expertise, ensure top-quality education
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm md:text-base ">{stat.label}</div>
              <div
                className=" text-4xl md:text-5xl font-bold mb-2 text-accent"
                style={{
                  fontFamily:
                    "Raleway, Manrope, Cairo, Helvetica Neue, Arial, -apple-system, BlinkMacSystemFont, Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
                }}
              >
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
