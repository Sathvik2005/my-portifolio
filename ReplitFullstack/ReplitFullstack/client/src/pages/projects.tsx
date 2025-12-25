import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Brain, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "AI Resume Screening System",
    description: "Intelligent resume screening system using NLP and Streamlit for automated candidate evaluation and ranking based on job requirements. Leverages natural language processing to extract key skills, experience, and qualifications from resumes.",
    tech: ["Python", "NLP", "Streamlit", "Machine Learning", "Text Analysis"],
    github: "https://github.com/Sathvik2005/Ai-resume-screening-system-using-python-and-streamlit-aicte-",
    icon: Brain,
    color: "from-primary to-accent",
    features: [
      "Automated resume parsing and analysis",
      "Skill extraction and matching",
      "Candidate ranking system",
      "Interactive Streamlit dashboard",
    ],
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model for predicting heart disease risk using patient health data with high accuracy classification algorithms. Helps in early detection and preventive healthcare measures.",
    tech: ["Python", "Scikit-learn", "Classification", "Healthcare AI", "Data Analysis"],
    github: "https://github.com/Sathvik2005/Heart_disease_classification",
    icon: Database,
    color: "from-accent to-secondary",
    features: [
      "Multiple ML classification models",
      "Patient health data analysis",
      "Risk prediction with high accuracy",
      "Feature importance visualization",
    ],
  },
  {
    title: "AQI Forecasting System",
    description: "Time-series forecasting model for Air Quality Index prediction using advanced ML algorithms to analyze environmental data patterns. Provides insights for better air quality management and public health.",
    tech: ["Python", "Time Series", "LSTM", "Environmental AI", "Forecasting"],
    github: "https://github.com/Sathvik2005/Air-Quality-Index-Prediction-aicte-",
    icon: TrendingUp,
    color: "from-secondary to-muted",
    features: [
      "Time-series data analysis",
      "LSTM-based forecasting",
      "Environmental pattern recognition",
      "Predictive insights for air quality",
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient" data-testid="text-projects-heading">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Real-world applications of AI and machine learning solving impactful problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-panel overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`card-project-${index}`}>
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Icon & Title Section */}
                    <div className={`lg:col-span-1 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-center items-center text-center`}>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4" data-testid={`icon-project-${index}`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-white mb-2" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </h2>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8">
                      <CardDescription className="text-muted-foreground text-lg mb-6 leading-relaxed font-body" data-testid={`text-project-description-${index}`}>
                        {project.description}
                      </CardDescription>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide font-body">Key Features</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-gray-400 font-body">
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
                              className="bg-white/10 text-gray-300 border-0 font-body"
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
                        className="bg-white/5 border-white/20 text-white hover:bg-white/10 font-body"
                        asChild
                        data-testid={`button-project-github-${index}`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
