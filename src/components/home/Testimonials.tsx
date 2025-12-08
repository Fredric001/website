import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Takeshi Yamamoto",
      university: "University of Tokyo",
      image: "/placeholder.svg",
      quote: "The logical thinking methods taught at Logi Academy were instrumental in my success. I developed skills that went beyond exam preparation."
    },
    {
      name: "Yuki Tanaka",
      university: "Kyoto University",
      image: "/placeholder.svg",
      quote: "The teachers here are exceptional. They don't just teach you answers—they teach you how to think critically and solve complex problems."
    },
    {
      name: "Hiroshi Sato",
      university: "Waseda University",
      image: "/placeholder.svg",
      quote: "I couldn't have gotten into my dream university without Logi Academy. The proof-based approach completely transformed my study habits."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who achieved their dreams with our guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-background border-border hover:shadow-hover transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.university}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
