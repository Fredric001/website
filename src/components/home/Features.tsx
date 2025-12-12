import { BookOpen, Users, Brain, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Courses",
      description:
        "Master critical thinking and problem-solving skills that top universities demand.",
      bgColor: "bg-red-50",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: BookOpen,
      title: "Camps as employee benefits",
      description:
        "Learn to construct rigorous arguments and mathematical proofs with confidence.",
      bgColor: "bg-red-50",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: Users,
      title: "Franchise",
      description:
        "Learn from graduates of Tokyo, Kyoto, and other prestigious universities.",
      bgColor: "bg-green-50",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: Target,
      title: "Prices",
      description:
        "Tailored curriculum designed to match your learning style and goals.",
      bgColor: "bg-blue-50",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shaping young minds to not just navigate, but pioneer the evolving
            digital landscape
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border ${feature.bgColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Content on left */}
                <div className="p-6 relative z-10">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
                
                {/* Image on right */}
                <div className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-tl-2xl">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50" />
                </div>
                
                {/* Optional decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary/10 rounded-tl-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;