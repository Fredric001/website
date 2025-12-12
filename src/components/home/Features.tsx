import { BookOpen, Users, Brain, Target } from "lucide-react";
import { Link } from "react-router-dom";
const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Courses",
      link: "/",
      description:
        "Master critical thinking and problem-solving skills that top universities demand.",
      bgColor: "#ff0000ff", // Light red
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: BookOpen,
      title: "Camps as employee benefits",
      description:
        "Learn to construct rigorous arguments and mathematical proofs with confidence.",
      bgColor: "#ff8c00ff", // Light orange
      imageUrl:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: Users,
      title: "Franchise",
      description:
        "Learn from graduates of Tokyo, Kyoto, and other prestigious universities.",
      bgColor: "#00ff4cff", // Light green
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: Target,
      title: "Prices",
      description:
        "Tailored curriculum designed to match your learning style and goals.",
      bgColor: "#006effff", // Light blue
      imageUrl:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className=" text-2xl md:text-3xl font-bold text-foreground mb-4"  style={{fontFamily:"Raleway, Manrope, Cairo, Helvetica Neue, Arial, -apple-system, BlinkMacSystemFont, Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, sans-serif"}}>
            Shaping young minds to not just navigate, but pioneer the evolving
            digital landscape
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: feature.bgColor }}
                className="group relative overflow-hidden rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Content on left */}
                <div
                  className="p-6 relative z-10"
                  style={{ color: "white", maxWidth: "70%" }}
                >
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className=" leading-relaxed mb-4">{feature.description}</p>
                  <a
                    href={feature.link}
                    className="bg-[#00AEEF] px-6 py-3 text-white font-bold rounded-full inline-block hover:bg-[#0099d6] transition-colors duration-300"
                  >
                    READ MORE
                   
                  </a>
                </div>

                {/* Image on right */}
                <div className="absolute right-0 bottom-0 w-44 h-34 md:w-32 md:h-32 overflow-hidden rounded-tl-2xl">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
