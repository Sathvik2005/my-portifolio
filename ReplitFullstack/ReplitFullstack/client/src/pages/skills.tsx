import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-primary to-accent",
    skills: [
      "Python",
      "Java",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "ML & Data Science",
    color: "from-accent to-secondary",
    skills: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "XGBoost",
      "SVM",
      "EDA",
      "Time-Series Analysis",
    ],
  },
  {
    title: "Visualization & Deployment",
    color: "from-secondary to-muted",
    skills: [
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-muted to-primary",
    skills: [
      "MySQL",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
    ],
  },
  {
    title: "Core Strengths",
    color: "from-primary to-accent",
    skills: [
      "Model Deployment",
      "Data Cleaning",
      "Hyperparameter Tuning",
      "Problem-Solving",
      "Leadership",
    ],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Floating animation for skill cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.to(card, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-2, 2)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      });
    });

    // Scroll-triggered animations
    const cards = containerRef.current.querySelectorAll(".skill-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: (index % 5) * 0.1,
        }
      );
    });

    // Flowing line animation
    const lines = containerRef.current.querySelectorAll(".category-line");
    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient" data-testid="text-skills-heading">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-6">
                <h2 className={`text-3xl font-display font-semibold mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                  {category.title}
                </h2>
                <div className={`category-line h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    ref={(el) => {
                      const index = categoryIndex * 10 + skillIndex;
                      cardsRef.current[index] = el;
                    }}
                  >
                    <Card 
                      className="skill-card glass-panel hover-elevate active-elevate-2 transition-all group cursor-pointer h-full"
                      data-testid={`card-skill-${categoryIndex}-${skillIndex}`}
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity mb-3 flex items-center justify-center`}>
                          <span className={`text-2xl font-display font-bold bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                            {skill.charAt(0)}
                          </span>
                        </div>
                        <div className="text-base font-body font-medium text-white mb-2" data-testid={`text-skill-name-${categoryIndex}-${skillIndex}`}>
                          {skill}
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-white/10 text-gray-400 border-0"
                          data-testid={`badge-skill-category-${categoryIndex}-${skillIndex}`}
                        >
                          {category.title.split(' ')[0]}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-muted/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground font-body">
                <span className="font-semibold text-primary">Continuous Learning:</span> I'm constantly expanding my skill set and 
                staying updated with the latest advancements in AI, ML, and data science to deliver cutting-edge solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
