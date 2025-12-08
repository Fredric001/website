import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200),
  message: z.string().trim().min(1, { message: "Message is required" }).max(2000)
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["1-2-3 Innovation Avenue, Tom Mboya", "Nairobi, Kenya"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 713 820 055", "Mon-Sat: 9:00 AM - 8:00 PM"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["cobotkidsacademy@gmail.com", "admissions@cobotkidsacademy@gmail.com"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 10:00 AM - 6:00 PM"]
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
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Get in touch with us to learn more about our programs or schedule a consultation.
                We're here to help you achieve your academic goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8 border-border shadow-soft">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+81 3-1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're here to answer your questions and help you start your journey toward academic excellence.
                    Reach out through any of the methods below.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="p-6 border-border hover:shadow-hover transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-primary" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <Card className="p-6 border-border">
                  <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto text-primary mb-2" size={32} />
                      <p className="text-sm text-muted-foreground">Interactive Map</p>
                    </div>
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

export default Contact;
