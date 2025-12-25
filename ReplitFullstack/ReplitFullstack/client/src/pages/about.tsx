import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Sparkles, Zap } from "lucide-react";

const stats = [
  { 
    icon: Award, 
    value: "3+", 
    label: "Major Projects",
    color: "from-primary/10 to-primary/5 border-primary/20",
    iconColor: "text-primary"
  },
  { 
    icon: Target, 
    value: "15+", 
    label: "Technologies",
    color: "from-accent/10 to-accent/5 border-accent/20",
    iconColor: "text-accent"
  },
  { 
    icon: Sparkles, 
    value: "AI/ML", 
    label: "Specialization",
    color: "from-secondary/10 to-secondary/5 border-secondary/20",
    iconColor: "text-secondary"
  },
  { 
    icon: Zap, 
    value: "100%", 
    label: "Dedication",
    color: "from-muted/10 to-muted/5 border-muted/20",
    iconColor: "text-muted-foreground"
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient" data-testid="text-about-heading">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Passionate about transforming data into intelligent solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-panel h-full">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl font-display font-semibold text-foreground mb-4">My Journey</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-body" data-testid="text-about-description">
                  I'm a passionate Machine Learning Engineer specializing in Natural Language Processing, 
                  Artificial Intelligence, and Data Science. With a strong foundation in Python and modern 
                  ML frameworks, I build innovative solutions that leverage data to solve real-world problems.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed font-body" data-testid="text-about-expertise">
                  My expertise spans across developing intelligent systems for resume screening, healthcare 
                  predictions, and environmental forecasting. I'm committed to creating impactful AI applications 
                  that make a difference in people's lives.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed font-body">
                  I believe in continuous learning and staying at the forefront of AI/ML advancements. 
                  Every project is an opportunity to push boundaries and explore new possibilities in 
                  machine learning and data science.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm hover-elevate active-elevate-2 transition-all h-full`} data-testid={`card-stat-${index}`}>
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-4xl font-display font-semibold text-white mb-8 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-elevate active-elevate-2 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-3">Machine Learning</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Developing predictive models and classification systems using state-of-the-art ML algorithms 
                  for healthcare, hiring, and environmental applications.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-elevate active-elevate-2 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-accent mb-3">NLP & AI</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Building intelligent systems that understand and process human language, from resume 
                  screening to text analysis and information extraction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-elevate active-elevate-2 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">Data Science</h3>
                <p className="text-gray-400 font-body leading-relaxed">
                  Analyzing complex datasets, time-series forecasting, and extracting actionable insights 
                  to drive data-informed decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
