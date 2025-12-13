const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Academic skills",
      subtitleOne: "Algorithmic thinking",
      subtitleTwo: "Problem solving",
      subtitleThree: "Analytic and logical thinking",
      subtitleFour: "A better understanding of STEM",
      subtitleFive: "Multitasking",
      subtitleSix: "Critical thinking",
      imageOne:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageTwo:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageThree:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageFour:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
    },
    {
      id: 2,
      title: "Soft skills",
      subtitleOne: "Creativity",
      subtitleTwo: "Focus and precision",
      subtitleThree: "Concentration and perseverance",
      subtitleFour: "Self-confidence",
      subtitleFive: "Adaptability",
      subtitleSix: "Recognition",
      imageOne:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageTwo:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageThree:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageFour:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Essential Digital and AI Skills for Life
          </h2>
          <p className="text-gray-600 text-lg  mx-auto">
            At Logiscool, we go beyond digital skills by helping children build
            a well-rounded foundation for academic, personal, and long-term
            success. Our programs equip them with skills that last a lifetime —
            preparing them not just for school, but for future careers and
            everyday life in a digital world.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8  ">
          {skills.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {/* Content Box */}
              <div
                style={{ alignSelf: "center" }}
                className=" text-center md:p-8 "
              >
                <h2 className="text-2xl font-bold text-[#002B45] mb-4">
                  {feature.title}
                </h2>
                {/* Kids Image */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8  ">
                  <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8  ">
                    <img
                      src={feature.imageOne}
                      alt="Kids learning"
                      className="max-h-64 max-w-64"
                      style={{ display: "flex", justifySelf: "center" }}
                    />

                    <p>{feature.subtitleOne}</p>
                  </div>
                  <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8  ">
                    <img
                      src={feature.imageOne}
                      alt="Kids learning"
                      className="max-h-64 max-w-64"
                      style={{ display: "flex", justifySelf: "center" }}
                    />

                    <p>{feature.subtitleOne}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8  ">
                  <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8  ">
                    <img
                      src={feature.imageOne}
                      alt="Kids learning"
                      className="max-h-64 max-w-64"
                      style={{ display: "flex", justifySelf: "center" }}
                    />

                    <p>{feature.subtitleOne}</p>
                  </div>
                  <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8  ">
                    <img
                      src={feature.imageOne}
                      alt="Kids learning"
                      className="max-h-64 max-w-64"
                      style={{ display: "flex", justifySelf: "center" }}
                    />

                    <p>{feature.subtitleOne}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8  ">
                  <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8  ">
                    <img
                      src={feature.imageOne}
                      alt="Kids learning"
                      className="max-h-64 max-w-64"
                      style={{ display: "flex", justifySelf: "center" }}
                    />

                    <p>{feature.subtitleOne}</p>
                  </div>
                  <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8  ">
                    <img
                      src={feature.imageOne}
                      alt="Kids learning"
                      className="max-h-64 max-w-64"
                      style={{ display: "flex", justifySelf: "center" }}
                    />

                    <p>{feature.subtitleOne}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 text-center mb-16">
          <div className="mt-24 text-center mb-16">
            <p className="text-gray-600 text-lg ">
              AI is seamlessly woven into our curriculum, methods, and
              platforms. We go beyond simply instructing "how to use AI" and
              "how AI works" — it's ingrained in every lesson, right from the
              start. As AI evolves swiftly, the fundamental skills to comprehend
              its mechanics endure.
            </p>
          </div>
          <div>
            <img
              src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
              alt="Kids learning"
              //   className="max-h-64 max-w-64"
              style={{ display: "flex", justifySelf: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
