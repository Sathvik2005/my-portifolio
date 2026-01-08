import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [, setLocation] = useLocation();
  const fullTitle = "Machine Learning Engineer | NLP | AI | Data Science";
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!containerRef.current || !heroRef.current) return;

    // Cinematic opening scene
    const tl = gsap.timeline();
    
    tl.from(".hero-bg-orb", {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
      stagger: 0.3,
    })
    .from(".greeting", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
    }, "-=1")
    .from(".hero-name", {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.5")
    .from(".contact-item", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    }, "-=0.8")
    .from(".cta-button", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.15,
    }, "-=0.4");

    // Parallax scroll effect
    gsap.to(".hero-bg-orb", {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="hero-bg-orb absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="hero-bg-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="hero-bg-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div>
            {/* Greeting */}
            <p
              className="greeting text-accent font-body text-lg mb-4 tracking-wide"
              data-testid="text-greeting"
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="hero-name text-6xl md:text-8xl font-display font-bold mb-6 text-gradient animate-gradient-shift" data-testid="text-name">
              Kanithi Satya Sathvik
            </h1>

            {/* Typing Animation Title */}
            <div className="h-20 md:h-24 mb-8 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground font-body font-light" data-testid="text-title">
                {typedText}<span className="animate-pulse text-accent">|</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-muted-foreground mb-12 flex-wrap">
              <a href="mailto:kanithisathvik@gmail.com" className="contact-item flex items-center gap-2 hover:text-accent transition-colors group" data-testid="link-email">
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-body">kanithisathvik@gmail.com</span>
              </a>
              <a href="tel:+919515136729" className="contact-item flex items-center gap-2 hover:text-accent transition-colors group" data-testid="link-phone">
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-body">+91 9515136729</span>
              </a>
              <span className="contact-item flex items-center gap-2" data-testid="text-location">
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-body">Anakapalle, AP</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="cta-button bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-8 py-6 text-base font-body font-medium"
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
                className="cta-button bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-body font-medium"
                onClick={() => setLocation("/projects")}
                data-testid="button-projects"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-16 flex flex-wrap gap-4 justify-center">
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
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2"
            data-testid="scroll-indicator"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-500 text-sm font-body">Explore More</span>
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
