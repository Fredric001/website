import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Mathematics Mastery",
      level: "Advanced",
      duration: "12 months",
      students: "Max 15 students",
      price: "¥180,000/month",
      description: "Comprehensive preparation for university-level mathematics including calculus, linear algebra, and proof techniques.",
      features: [
        "Proof-based problem solving",
        "Weekly mock examinations",
        "Individual progress tracking",
        "Advanced problem sets"
      ]
    },
    {
      title: "Logical Writing & Essays",
      level: "All Levels",
      duration: "10 months",
      students: "Max 12 students",
      price: "¥160,000/month",
      description: "Master the art of constructing compelling arguments and writing persuasive essays for entrance examinations.",
      features: [
        "Argument construction techniques",
        "Essay structure and flow",
        "Critical reading analysis",
        "Personalized feedback sessions"
      ]
    },
    {
      title: "Science Intensive",
      level: "Advanced",
      duration: "12 months",
      students: "Max 15 students",
      price: "¥170,000/month",
      description: "Rigorous preparation in physics, chemistry, and biology with focus on conceptual understanding.",
      features: [
        "Laboratory problem solving",
        "Conceptual deep dives",
        "Experiment analysis",
        "Real-world applications"
      ]
    },
    {
      title: "English Proficiency",
      level: "Intermediate to Advanced",
      duration: "10 months",
      students: "Max 15 students",
      price: "¥150,000/month",
      description: "Comprehensive English language preparation including reading comprehension, composition, and speaking.",
      features: [
        "Academic reading strategies",
        "Essay writing techniques",
        "Vocabulary building",
        "Speaking practice sessions"
      ]
    },
    {
      title: "Social Studies Excellence",
      level: "All Levels",
      duration: "10 months",
      students: "Max 18 students",
      price: "¥140,000/month",
      description: "In-depth study of history, geography, and social sciences with analytical thinking emphasis.",
      features: [
        "Historical analysis methods",
        "Geographical reasoning",
        "Data interpretation skills",
        "Essay composition"
      ]
    },
    {
      title: "Complete Exam Package",
      level: "All Levels",
      duration: "12 months",
      students: "Max 12 students",
      price: "¥380,000/month",
      description: "Comprehensive preparation covering all major subjects with personalized study planning.",
      features: [
        "All subjects covered",
        "Personal academic advisor",
        "Priority scheduling",
        "Full mock exam series",
        "University application support"
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
                Our Courses
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive programs designed to help you excel in university entrance examinations
                through logical thinking and proof-based learning.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="p-8 hover:shadow-hover transition-all duration-300 border-border flex flex-col">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                      {course.level}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {course.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-2" size={16} />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-2" size={16} />
                      {course.students}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="text-accent mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-bold text-primary">{course.price}</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                Course Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-background border-border">
                  <BookOpen className="text-primary mb-4" size={32} />
                  <h3 className="font-serif text-xl font-semibold mb-3">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Classes available on weekdays, weekends, and evening sessions to accommodate your schedule.
                  </p>
                </Card>
                <Card className="p-6 bg-background border-border">
                  <Users className="text-primary mb-4" size={32} />
                  <h3 className="font-serif text-xl font-semibold mb-3">Small Class Sizes</h3>
                  <p className="text-muted-foreground">
                    Limited enrollment ensures personalized attention and optimal learning environment.
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

export default Courses;
