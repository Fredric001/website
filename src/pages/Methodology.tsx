import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Users, BookOpen, Award } from "lucide-react";

const Methodology = () => {
  const principles = [
    {
      icon: Brain,
      title: "Logical Foundation",
      description: "We build a strong foundation in logical reasoning and critical thinking, essential for solving complex academic problems."
    },
    {
      icon: Target,
      title: "Proof-Based Learning",
      description: "Students learn to construct rigorous mathematical and logical proofs, developing deep understanding rather than memorization."
    },
    {
      icon: TrendingUp,
      title: "Progressive Mastery",
      description: "Our curriculum follows a carefully designed progression, building skills incrementally from fundamentals to advanced concepts."
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "Small class sizes allow our teachers to provide individual attention and adapt teaching methods to each student's needs."
    },
    {
      icon: BookOpen,
      title: "Active Learning",
      description: "Students engage in problem-solving sessions, group discussions, and peer teaching to reinforce their understanding."
    },
    {
      icon: Award,
      title: "Continuous Assessment",
      description: "Regular evaluations and mock exams help track progress and identify areas for improvement throughout the year."
    }
  ];

  const approaches = [
    {
      title: "Socratic Method",
      description: "We use guided questioning to help students discover solutions independently, fostering deeper understanding and retention."
    },
    {
      title: "Problem-Based Learning",
      description: "Students work through real entrance exam problems, learning to apply theoretical knowledge to practical scenarios."
    },
    {
      title: "Collaborative Study",
      description: "Group work and peer discussions encourage students to articulate their reasoning and learn from different perspectives."
    },
    {
      title: "Metacognitive Training",
      description: "We teach students to monitor their own thinking processes, helping them become more effective and independent learners."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Our Methodology
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A proven approach to university entrance exam preparation, combining logical thinking,
                proof-based learning, and personalized instruction.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Core Principles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our teaching philosophy is built on six fundamental principles that guide every aspect of our instruction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-hover transition-all duration-300 border-border">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Teaching Approaches */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Teaching Approaches
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We employ diverse teaching methods to engage students and maximize learning outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {approaches.map((approach, index) => (
                <Card key={index} className="p-8 bg-background border-border hover:shadow-hover transition-shadow">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Logi Difference */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                The Logi Difference
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Beyond Memorization
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike traditional cram schools that focus on rote memorization, we emphasize deep conceptual understanding.
                    Our students learn to think critically and solve problems they've never seen before.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Proof-Based Reasoning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We train students to construct logical arguments and mathematical proofs from first principles.
                    This skill is invaluable not only for entrance exams but for university-level work and beyond.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Holistic Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just prepare students for exams—we develop lifelong learners with strong analytical skills,
                    intellectual curiosity, and the confidence to tackle challenging problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;
