import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [, setLocation] = useLocation();
  const fullTitle = "Machine Learning Engineer | NLP | AI | Data Science";

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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-body text-lg mb-4 tracking-wide"
              data-testid="text-greeting"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient animate-gradient-shift" data-testid="text-name">
              Kanithi Satya Sathvik
            </h1>

            {/* Typing Animation Title */}
            <div className="h-20 md:h-24 mb-8 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground font-body font-light" data-testid="text-title">
                {typedText}<span className="animate-pulse text-accent">|</span>
              </p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-center text-muted-foreground mb-12 flex-wrap"
            >
              <a href="mailto:kanithisathvik@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors group" data-testid="link-email">
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-body">kanithisathvik@gmail.com</span>
              </a>
              <a href="tel:9515136729" className="flex items-center gap-2 hover:text-accent transition-colors group" data-testid="link-phone">
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-body">9515136729</span>
              </a>
              <span className="flex items-center gap-2" data-testid="text-location">
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-body">Anakapalle, Andhra Pradesh</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-8 py-6 text-base font-body font-medium"
                asChild
                data-testid="button-github"
              >
                <a href="https://github.com/Sathvik2005" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-body font-medium"
                onClick={() => setLocation("/projects")}
                data-testid="button-projects"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-16 flex flex-wrap gap-4 justify-center"
            >
              <Button variant="ghost" className="text-gray-400 hover:text-primary font-body" onClick={() => setLocation("/about")} data-testid="link-about">
                About Me
              </Button>
              <span className="text-gray-600">•</span>
              <Button variant="ghost" className="text-gray-400 hover:text-primary font-body" onClick={() => setLocation("/skills")} data-testid="link-skills">
                Skills
              </Button>
              <span className="text-gray-600">•</span>
              <Button variant="ghost" className="text-gray-400 hover:text-primary font-body" onClick={() => setLocation("/contact")} data-testid="link-contact">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            data-testid="scroll-indicator"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-500 text-sm font-body">Explore More</span>
              <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
