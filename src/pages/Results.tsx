import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users, Star } from "lucide-react";

const Results = () => {
  const universities = [
    { name: "University of Tokyo", acceptances: 156 },
    { name: "Kyoto University", acceptances: 142 },
    { name: "Tokyo Institute of Technology", acceptances: 98 },
    { name: "Osaka University", acceptances: 87 },
    { name: "Tohoku University", acceptances: 76 },
    { name: "Waseda University", acceptances: 203 },
    { name: "Keio University", acceptances: 189 },
    { name: "Hitotsubashi University", acceptances: 64 }
  ];

  const successStories = [
    {
      name: "Akira Matsumoto",
      university: "University of Tokyo (Engineering)",
      year: "2024",
      quote: "The logical thinking approach at Logi Academy helped me solve problems I never thought I could tackle. I'm now thriving at UTokyo.",
      achievement: "Top 5% in entrance exam"
    },
    {
      name: "Sakura Kimura",
      university: "Kyoto University (Medicine)",
      year: "2024",
      quote: "The personalized attention and proof-based learning gave me the confidence to pursue medicine. Forever grateful to my teachers.",
      achievement: "Full scholarship recipient"
    },
    {
      name: "Daiki Nakamura",
      university: "Tokyo Institute of Technology",
      year: "2023",
      quote: "I struggled with mathematics until I came to Logi Academy. Their methods transformed my understanding and opened doors I never imagined.",
      achievement: "Mathematics perfect score"
    },
    {
      name: "Mei Tanaka",
      university: "Waseda University (Law)",
      year: "2023",
      quote: "The essay writing and logical argumentation skills I learned here are invaluable. I use them every day in my law courses.",
      achievement: "Highest essay score in cohort"
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
                Our Results
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A proven track record of excellence spanning 28 years and over 5,000 successful students.
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <TrendingUp className="mx-auto text-accent mb-4" size={40} />
                <div className="font-serif text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </Card>
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <Users className="mx-auto text-accent mb-4" size={40} />
                <div className="font-serif text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Students Placed</div>
              </Card>
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <Award className="mx-auto text-accent mb-4" size={40} />
                <div className="font-serif text-4xl font-bold text-primary mb-2">28</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <Star className="mx-auto text-accent mb-4" size={40} />
                <div className="font-serif text-4xl font-bold text-primary mb-2">Top 10</div>
                <div className="text-muted-foreground">National Ranking</div>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                2024 University Acceptances
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our students have been accepted to Japan's most prestigious universities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {universities.map((uni, index) => (
                <Card key={index} className="p-6 border-border hover:shadow-hover transition-shadow">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {uni.name}
                  </h3>
                  <div className="text-3xl font-bold text-accent">{uni.acceptances}</div>
                  <div className="text-sm text-muted-foreground">acceptances</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real stories from students who achieved their dreams with our guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, index) => (
                <Card key={index} className="p-8 bg-background border-border hover:shadow-hover transition-shadow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground mb-1">{story.name}</div>
                    <div className="text-sm text-primary mb-1">{story.university}</div>
                    <div className="text-sm text-muted-foreground mb-2">Class of {story.year}</div>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {story.achievement}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistical Excellence */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                Excellence by the Numbers
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6 border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Top-tier University Acceptance Rate</span>
                    <span className="text-2xl font-bold text-accent">98%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-accent rounded-full h-3" style={{ width: '98%' }}></div>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Students Achieving Top 10% Scores</span>
                    <span className="text-2xl font-bold text-accent">76%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-accent rounded-full h-3" style={{ width: '76%' }}></div>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Student Satisfaction Rate</span>
                    <span className="text-2xl font-bold text-accent">97%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-accent rounded-full h-3" style={{ width: '97%' }}></div>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Students Gaining First-choice University</span>
                    <span className="text-2xl font-bold text-accent">89%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-accent rounded-full h-3" style={{ width: '89%' }}></div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
