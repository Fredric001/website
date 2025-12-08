import { BookOpen, Users, Award, TrendingUp, Brain, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Courses",
      description: "Master critical thinking and problem-solving skills that top universities demand."
    },
    {
      icon: BookOpen,
      title: "Camps as employee benefits",
      description: "Learn to construct rigorous arguments and mathematical proofs with confidence."
    },
    {
      icon: Users,
      title: "Franchise",
      description: "Learn from graduates of Tokyo, Kyoto, and other prestigious universities."
    },
    {
      icon: Target,
      title: "Prices",
      description: "Tailored curriculum designed to match your learning style and goals."
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Shaping young minds to not just navigate, but pioneer the evolving digital landscape
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
