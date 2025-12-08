import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Dr. Kenji Watanabe",
      title: "Mathematics Department Head",
      education: "Ph.D. Mathematics, University of Tokyo",
      experience: "18 years",
      specialization: "Advanced Calculus & Proof Theory",
      achievements: [
        "Published researcher in mathematical logic",
        "Former UTokyo entrance exam committee member",
        "500+ students placed in top universities"
      ]
    },
    {
      name: "Prof. Yuki Nakamura",
      title: "Physics & Science Lead",
      education: "Ph.D. Physics, Kyoto University",
      experience: "15 years",
      specialization: "Theoretical Physics & Problem Solving",
      achievements: [
        "Kyoto University Physics Medal recipient",
        "Specialized in Olympiad preparation",
        "95% success rate in physics placement"
      ]
    },
    {
      name: "Dr. Haruka Yamamoto",
      title: "English & Writing Director",
      education: "Ph.D. Literature, Waseda University",
      experience: "12 years",
      specialization: "Academic Writing & Critical Analysis",
      achievements: [
        "Published author and translator",
        "Former entrance exam essay evaluator",
        "Expert in logical argumentation"
      ]
    },
    {
      name: "Prof. Takeshi Sato",
      title: "Chemistry Specialist",
      education: "Ph.D. Chemistry, Tokyo Institute of Technology",
      experience: "14 years",
      specialization: "Organic Chemistry & Lab Techniques",
      achievements: [
        "Research published in Nature Chemistry",
        "Tokyo Tech Teaching Excellence Award",
        "Innovative problem-solving approaches"
      ]
    },
    {
      name: "Dr. Aiko Tanaka",
      title: "Biology & Life Sciences",
      education: "Ph.D. Biology, Osaka University",
      experience: "10 years",
      specialization: "Molecular Biology & Genetics",
      achievements: [
        "Medical school entrance specialist",
        "Published research in cell biology",
        "Mentored 200+ medical students"
      ]
    },
    {
      name: "Prof. Hiroshi Matsuda",
      title: "Social Studies Chair",
      education: "Ph.D. History, Hitotsubashi University",
      experience: "16 years",
      specialization: "Japanese & World History",
      achievements: [
        "Curriculum development expert",
        "National essay competition judge",
        "Historical analysis methodology pioneer"
      ]
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
                Our Teachers
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Learn from graduates of Japan's most prestigious universities, each bringing extensive
                experience and proven expertise in university entrance preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <GraduationCap className="mx-auto text-accent mb-4" size={40} />
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Top Universities</h3>
                <p className="text-muted-foreground">
                  All faculty hold advanced degrees from institutions like UTokyo, Kyoto University, and Tokyo Tech
                </p>
              </Card>
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <BookOpen className="mx-auto text-accent mb-4" size={40} />
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Proven Experience</h3>
                <p className="text-muted-foreground">
                  Average 14 years of teaching experience in university entrance exam preparation
                </p>
              </Card>
              <Card className="p-8 text-center border-border hover:shadow-hover transition-shadow">
                <Award className="mx-auto text-accent mb-4" size={40} />
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Published Experts</h3>
                <p className="text-muted-foreground">
                  Many of our teachers are published researchers and recognized authorities in their fields
                </p>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Meet Our Faculty
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated educators committed to your academic success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <Card key={index} className="p-8 border-border hover:shadow-hover transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="font-serif font-bold text-primary text-3xl">
                        {teacher.name.split(' ')[1].charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground text-center mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-accent text-center font-medium mb-2">{teacher.title}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">Education</div>
                      <div className="text-sm text-foreground">{teacher.education}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">Experience</div>
                      <div className="text-sm text-foreground">{teacher.experience}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-semibold mb-1">Specialization</div>
                      <div className="text-sm text-foreground">{teacher.specialization}</div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">Key Achievements</div>
                    <ul className="space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                Our Teaching Philosophy
              </h2>
              
              <div className="space-y-8">
                <Card className="p-8 bg-background border-border">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Academic Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our faculty members are not just teachers—they are active scholars and researchers who bring
                    cutting-edge knowledge and real-world academic experience to the classroom.
                  </p>
                </Card>

                <Card className="p-8 bg-background border-border">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Personalized Mentorship
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Small class sizes allow our teachers to develop deep understanding of each student's strengths,
                    weaknesses, and learning style, enabling truly personalized guidance.
                  </p>
                </Card>

                <Card className="p-8 bg-background border-border">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Continuous Professional Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our teachers regularly attend seminars, review the latest entrance exam trends, and refine
                    their pedagogical approaches to ensure students receive the most effective instruction.
                  </p>
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

export default Teachers;
