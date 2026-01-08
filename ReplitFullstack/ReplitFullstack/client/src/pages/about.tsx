import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Sparkles, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { 
    icon: Award, 
    value: "8.40", 
    label: "CGPA (VIT-AP)",
    color: "from-primary/10 to-primary/5 border-primary/20",
    iconColor: "text-primary"
  },
  { 
    icon: Target, 
    value: "4", 
    label: "Major AI/ML Projects",
    color: "from-accent/10 to-accent/5 border-accent/20",
    iconColor: "text-accent"
  },
  { 
    icon: Sparkles, 
    value: "90%+", 
    label: "Model Accuracy",
    color: "from-secondary/10 to-secondary/5 border-secondary/20",
    iconColor: "text-secondary"
  },
  { 
    icon: Zap, 
    value: "2026", 
    label: "Graduation Year",
    color: "from-muted/10 to-muted/5 border-muted/20",
    iconColor: "text-muted-foreground"
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Chapter opening - story reveal
    gsap.from(".about-header", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
    });

    // Story paragraphs reveal like pages turning
    gsap.from(".story-paragraph", {
      opacity: 0,
      x: -100,
      rotateY: -15,
      duration: 1,
      ease: "back.out(1.5)",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Stats counter animation
    gsap.from(".stat-card", {
      scale: 0,
      rotation: 360,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Floating stat cards
    gsap.to(".stat-card", {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });

    // Skills reveal with cinematic wipe
    gsap.from(".skill-area", {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="about-header text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient" data-testid="text-about-heading">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Passionate about transforming data into intelligent solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story Section */}
          <div className="story-section">
            <Card className="glass-panel h-full">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl font-display font-semibold text-foreground mb-4">My Journey</h2>
                <p className="story-paragraph text-muted-foreground text-lg leading-relaxed font-body" data-testid="text-about-description">
                  I'm a final-year B.Tech (CSE – AI & ML) student at VIT-AP University with a CGPA of 8.40. 
                  I'm passionate about building scalable AI solutions for healthcare, environment, and enterprise 
                  applications, with expertise in machine learning, NLP, and data analytics.
                </p>
                <p className="story-paragraph text-muted-foreground text-lg leading-relaxed font-body" data-testid="text-about-expertise">
                  My expertise spans developing intelligent systems that have real-world impact: AI resume screening 
                  (60% time reduction), heart disease prediction (90% accuracy), AQI forecasting (85% accuracy), 
                  and thyroid classification (92% accuracy). I'm an Oracle Cloud Infrastructure 2025 Generative AI 
                  Certified Professional.
                </p>
                <p className="story-paragraph text-muted-foreground text-lg leading-relaxed font-body">
                  As a member of the ML Club at VIT-AP (2023–2024), I led peer workshops and mini-projects. 
                  I believe in continuous learning and staying at the forefront of AI/ML advancements, developing 
                  and deploying ML apps using real-world healthcare and environmental datasets.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <Card className={`stat-card bg-gradient-to-br ${stat.color} backdrop-blur-sm hover-elevate active-elevate-2 transition-all h-full`} data-testid={`card-stat-${index}`}>
                    <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
                      <div className={`w-12 h-12 ${stat.iconColor} mb-4`}>
                        <Icon className="w-full h-full" />
                      </div>
                      <div className={`text-4xl font-display font-bold ${stat.iconColor} mb-2`} data-testid={`text-stat-value-${index}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 font-body" data-testid={`text-stat-label-${index}`}>
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* What I Do Section */}
        <div className="skills-section">
          <h2 className="text-4xl font-display font-semibold text-white mb-8 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="skill-area bg-white/5 backdrop-blur-sm border-white/10 hover-elevate active-elevate-2 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-3">Machine Learning</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Developing predictive models and classification systems using state-of-the-art ML algorithms 
                  for healthcare, hiring, and environmental applications.
                </p>
              </CardContent>
            </Card>
            <Card className="skill-area bg-white/5 backdrop-blur-sm border-white/10 hover-elevate active-elevate-2 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-accent mb-3">NLP & AI</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Building intelligent systems that understand and process human language, from resume 
                  screening to text analysis and information extraction.
                </p>
              </CardContent>
            </Card>
            <Card className="skill-area bg-white/5 backdrop-blur-sm border-white/10 hover-elevate active-elevate-2 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">Data Science</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Analyzing complex datasets, time-series forecasting, and extracting actionable insights 
                  to drive data-informed decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
