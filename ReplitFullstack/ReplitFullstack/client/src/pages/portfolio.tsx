import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, ExternalLink, Database, Brain, TrendingUp, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const skills = [
  { name: "Python", category: "Programming" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Natural Language Processing", category: "AI/ML" },
  { name: "Deep Learning", category: "AI/ML" },
  { name: "Data Science", category: "Data" },
  { name: "TensorFlow", category: "Frameworks" },
  { name: "PyTorch", category: "Frameworks" },
  { name: "Scikit-learn", category: "Frameworks" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Streamlit", category: "Frameworks" },
  { name: "SQL", category: "Data" },
  { name: "Git", category: "Tools" },
  { name: "Jupyter", category: "Tools" },
  { name: "Time Series Analysis", category: "AI/ML" },
  { name: "Computer Vision", category: "AI/ML" },
];

const projects = [
  {
    title: "AI Resume Screening System",
    description: "Intelligent resume screening system using NLP and Streamlit for automated candidate evaluation and ranking based on job requirements.",
    tech: ["Python", "NLP", "Streamlit", "Machine Learning"],
    github: "https://github.com/Sathvik2005/Ai-resume-screening-system-using-python-and-streamlit-aicte-",
    icon: Brain,
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model for predicting heart disease risk using patient health data with high accuracy classification algorithms.",
    tech: ["Python", "Scikit-learn", "Classification", "Healthcare AI"],
    github: "https://github.com/Sathvik2005/Heart_disease_classification",
    icon: Database,
  },
  {
    title: "AQI Forecasting System",
    description: "Time-series forecasting model for Air Quality Index prediction using advanced ML algorithms to analyze environmental data patterns.",
    tech: ["Python", "Time Series", "LSTM", "Environmental AI"],
    github: "https://github.com/Sathvik2005/Air-Quality-Index-Prediction-aicte-",
    icon: TrendingUp,
  },
];

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const fullTitle = "Machine Learning Engineer | NLP | AI | Data Science";
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    },
  });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: InsertContactMessage) => {
    await contactMutation.mutateAsync(data);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-gradient-shift" data-testid="text-name">
              Kanithi Satya Sathvik
            </h1>
            <div className="h-16 md:h-20 mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground font-light" data-testid="text-title">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-muted-foreground mb-8">
              <a href="mailto:kanithisathvik@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-email">
                <Mail className="w-5 h-5" />
                <span>kanithisathvik@gmail.com</span>
              </a>
              <a href="tel:9515136729" className="flex items-center gap-2 hover:text-primary transition-colors" data-testid="link-phone">
                <Phone className="w-5 h-5" />
                <span>9515136729</span>
              </a>
              <span className="flex items-center gap-2" data-testid="text-location">
                <MapPin className="w-5 h-5" />
                <span>Anakapalle, Andhra Pradesh</span>
              </span>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-stark hover:opacity-90 text-primary-foreground border-0"
                asChild
                data-testid="button-github"
              >
                <a href="https://github.com/Sathvik2005" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-panel text-foreground hover:bg-muted/20"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection("about")}
            data-testid="button-scroll-down"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" data-testid="text-about-heading">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="glass-panel">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-about-description">
                      I'm a passionate Machine Learning Engineer specializing in Natural Language Processing, 
                      Artificial Intelligence, and Data Science. With a strong foundation in Python and modern 
                      ML frameworks, I build innovative solutions that leverage data to solve real-world problems.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mt-4" data-testid="text-about-expertise">
                      My expertise spans across developing intelligent systems for resume screening, healthcare 
                      predictions, and environmental forecasting. I'm committed to creating impactful AI applications 
                      that make a difference.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-primary/20 hover-elevate active-elevate-2" data-testid="card-stat-projects">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-projects">3+</div>
                    <div className="text-muted-foreground" data-testid="text-stat-projects-label">Major Projects</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border-accent/20 hover-elevate active-elevate-2" data-testid="card-stat-skills">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2" data-testid="text-stat-skills">15+</div>
                    <div className="text-muted-foreground" data-testid="text-stat-skills-label">Technologies</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border-secondary/20 hover-elevate active-elevate-2" data-testid="card-stat-focus">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-secondary mb-2" data-testid="text-stat-focus">AI/ML</div>
                    <div className="text-muted-foreground" data-testid="text-stat-focus-label">Specialization</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-muted/10 to-muted/5 backdrop-blur-sm border-muted/20 hover-elevate active-elevate-2" data-testid="card-stat-passion">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-muted-foreground mb-2" data-testid="text-stat-passion">100%</div>
                    <div className="text-muted-foreground" data-testid="text-stat-passion-label">Dedication</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" data-testid="text-skills-heading">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="glass-panel hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-skill-${index}`}>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-foreground mb-1" data-testid={`text-skill-name-${index}`}>{skill.name}</div>
                        <Badge variant="secondary" className="text-xs bg-muted/20 text-muted-foreground border-0" data-testid={`badge-skill-category-${index}`}>
                          {skill.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" data-testid="text-projects-heading">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-panel h-full flex flex-col hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-project-${index}`}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4" data-testid={`icon-project-${index}`}>
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground" data-testid={`text-project-title-${index}`}>{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground" data-testid={`text-project-description-${index}`}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={tech} variant="secondary" className="bg-muted/20 text-muted-foreground border-0" data-testid={`badge-project-tech-${index}-${techIndex}`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full glass-panel text-foreground hover:bg-muted/20"
                        asChild
                        data-testid={`button-project-github-${index}`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" data-testid="text-contact-heading">
              Get In Touch
            </h2>
            <Card className="glass-panel">
              <CardContent className="p-8">
                {showSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                    data-testid="text-success-message"
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your name"
                                className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="your.email@example.com"
                                className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Your message..."
                                rows={6}
                                className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-stark hover:opacity-90 text-primary-foreground border-0"
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit"
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Mail className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Kanithi Satya Sathvik. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm" data-testid="text-footer-tech">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
