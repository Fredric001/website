import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Mastering Logical Proofs: A Guide for University Entrance Exams",
      excerpt: "Learn the fundamental techniques for constructing rigorous mathematical proofs that impress examiners...",
      author: "Dr. Kenji Watanabe",
      date: "March 15, 2024",
      category: "Study Tips",
      readTime: "8 min read"
    },
    {
      title: "Top 5 Universities Accepting International Students in 2024",
      excerpt: "An overview of Japan's leading universities and what they look for in international applicants...",
      author: "Prof. Haruka Yamamoto",
      date: "March 10, 2024",
      category: "University Guide",
      readTime: "6 min read"
    },
    {
      title: "The Science of Effective Study Habits",
      excerpt: "Research-backed strategies to maximize your study efficiency and retention during exam preparation...",
      author: "Prof. Yuki Nakamura",
      date: "March 5, 2024",
      category: "Study Tips",
      readTime: "10 min read"
    },
    {
      title: "Understanding the New Entrance Exam Format Changes",
      excerpt: "Key changes to the 2025 university entrance examinations and how to prepare effectively...",
      author: "Dr. Kenji Watanabe",
      date: "February 28, 2024",
      category: "News",
      readTime: "7 min read"
    },
    {
      title: "Essay Writing Excellence: From Good to Outstanding",
      excerpt: "Transform your essay writing with these advanced techniques used by top-scoring students...",
      author: "Prof. Haruka Yamamoto",
      date: "February 20, 2024",
      category: "Study Tips",
      readTime: "12 min read"
    },
    {
      title: "Career Paths After Tokyo University: Alumni Success Stories",
      excerpt: "Inspiring stories from UTokyo graduates who started their journey at Logi Academy...",
      author: "Prof. Takeshi Sato",
      date: "February 15, 2024",
      category: "Success Stories",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Study Tips", "University Guide", "News", "Success Stories"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Blog & News
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Insights, tips, and updates from our expert faculty to help you succeed in your
                university entrance journey.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-border hover:shadow-hover transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-primary/5 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                        Featured Article
                      </div>
                      <div className="font-serif text-6xl font-bold text-primary">📚</div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 w-fit">
                      Study Tips
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                      Mastering Logical Proofs: A Guide for University Entrance Exams
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Learn the fundamental techniques for constructing rigorous mathematical proofs
                      that impress examiners and demonstrate deep conceptual understanding.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <User size={16} className="mr-2" />
                      <span className="mr-4">Dr. Kenji Watanabe</span>
                      <Calendar size={16} className="mr-2" />
                      <span>March 15, 2024</span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 group w-fit">
                      Read Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Recent Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="p-6 bg-background border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4 w-fit">
                    {article.category}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User size={14} className="mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group">
                      Read More
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-12 text-center border-border shadow-soft">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest study tips, university news, and success stories.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
