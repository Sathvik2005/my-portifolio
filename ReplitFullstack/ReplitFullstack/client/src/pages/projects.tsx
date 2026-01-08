import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Brain, TrendingUp, Activity } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Resume Screening System",
    description: "Automated JD-resume matching system using TF-IDF and cosine similarity. Tested on 200+ resumes with an interactive recruiter dashboard, reducing shortlisting time by 60%.",
    tech: ["Python", "NLP", "Streamlit", "TF-IDF", "Cosine Similarity"],
    github: "https://github.com/Sathvik2005/Ai-resume-screening-system-using-python-and-streamlit-aicte-",
    icon: Brain,
    color: "from-primary to-accent",
    features: [
      "Automated JD-resume matching using TF-IDF",
      "Tested on 200+ resumes",
      "Reduced shortlisting time by 60%",
      "Interactive recruiter dashboard",
    ],
    stats: "200+ resumes tested • 60% time reduction",
  },
  {
    title: "Heart Disease Prediction",
    description: "Built multiple ML classifiers on 1,000+ patient records with feature engineering. Achieved 90% accuracy, representing a 15% improvement over baseline models for early disease detection.",
    tech: ["Python", "ML Models", "scikit-learn", "Feature Engineering"],
    github: "https://github.com/Sathvik2005/Heart_disease_classification",
    icon: Database,
    color: "from-accent to-secondary",
    features: [
      "Trained on 1,000+ patient records",
      "Advanced feature engineering",
      "90% prediction accuracy",
      "15% higher than baseline models",
    ],
    stats: "1,000+ records • 90% accuracy",
  },
  {
    title: "Air Quality Index (AQI) Forecasting",
    description: "Forecasted AQI using 3 years of pollutant data with regression and time-series models. Deployed Streamlit dashboard achieving 85% forecasting accuracy for environmental monitoring.",
    tech: ["Python", "Time Series", "Regression", "Streamlit", "Data Analytics"],
    github: "https://github.com/Sathvik2005/Air-Quality-Index-Prediction-aicte-",
    icon: TrendingUp,
    color: "from-secondary to-muted",
    features: [
      "3 years of pollutant data analysis",
      "Regression + time-series models",
      "85% forecasting accuracy",
      "Deployed Streamlit dashboard",
    ],
    stats: "3 years data • 85% accuracy",
  },
  {
    title: "Thyroid Disease Classification",
    description: "Trained classification models on 3,500+ medical records with optimized preprocessing and hyperparameter tuning. Selected XGBoost achieving 92% accuracy for thyroid disease detection.",
    tech: ["Python", "SVM", "XGBoost", "Hyperparameter Tuning", "Medical AI"],
    github: "https://github.com/Sathvik2005/Thyroid-Disease-Classification",
    icon: Activity,
    color: "from-muted to-primary",
    features: [
      "Trained on 3,500+ medical records",
      "Optimized preprocessing pipeline",
      "Advanced hyperparameter tuning",
      "XGBoost with 92% accuracy",
    ],
    stats: "3,500+ records • 92% accuracy",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Film strip entrance animation
    gsap.from(".projects-header", {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power3.out",
    });

    // Project cards reveal like film scenes
    gsap.from(".project-scene", {
      opacity: 0,
      y: 150,
      rotateX: 45,
      transformPerspective: 1000,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Project icon spotlight effect
    gsap.from(".project-icon", {
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Feature items typewriter reveal
    gsap.from(".feature-item", {
      opacity: 0,
      x: -30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".feature-item",
        start: "top 85%",
      },
    });

    // Tech badges pop in
    gsap.from(".tech-badge", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(2)",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".tech-badge",
        start: "top 90%",
      },
    });

    // Stats badge reveal
    gsap.from(".stats-badge", {
      opacity: 0,
      y: 20,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-badge",
        start: "top 85%",
      },
    });

    // Floating project cards
    gsap.to(".project-scene", {
      y: "random(-10, 10)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="projects-header text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient" data-testid="text-projects-heading">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Real-world AI and ML solutions for healthcare, environment, and enterprise applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={project.title}>
                <Card className="project-scene glass-panel overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-project-${index}`}>
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Icon & Title Section */}
                    <div className={`lg:col-span-1 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                      </div>
                      <div className="project-icon w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 relative z-10" data-testid={`icon-project-${index}`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-white mb-3 relative z-10" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </h2>
                      <Badge className="stats-badge bg-white/20 text-white border-0 relative z-10 text-sm">
                        {project.stats}
                      </Badge>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8">
                      <CardDescription className="text-muted-foreground text-lg mb-6 leading-relaxed font-body" data-testid={`text-project-description-${index}`}>
                        {project.description}
                      </CardDescription>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide font-body">Key Features & Achievements</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="feature-item flex items-start gap-2 text-gray-400 font-body">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide font-body">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="tech-badge bg-white/10 text-gray-300 border-0 font-body"
                              data-testid={`badge-project-tech-${index}-${techIndex}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white hover:bg-white/10 font-body group"
                        asChild
                        data-testid={`button-project-github-${index}`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground font-body mb-4">
                Interested in seeing more of my work?
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 font-body"
                asChild
                data-testid="button-all-projects"
              >
                <a href="https://github.com/Sathvik2005" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
