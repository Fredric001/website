import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily:
                "Raleway, Manrope, Cairo, Helvetica Neue, Arial, -apple-system, BlinkMacSystemFont, Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
            }}
          >
            Proud Moments, Real Skills
          </h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            Give children the confidence—and the recognition—they deserve with a
            Logiscool diploma!
          </p>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            We offer the exams exclusively to our current students – you can
            find the available exams by clicking <a href="">here</a> .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className=" hover:bg-accent/90 text-accent-foreground group"
              >
                Find a course
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </Link>
            <Link to="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-gradient-to-r from-blue-600 to-orange-500 text-primary-foreground hover:bg-primary-foreground "
              >
                join an Open day
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
