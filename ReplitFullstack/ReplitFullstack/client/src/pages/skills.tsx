import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "from-primary to-accent",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Deep Learning",
      "Time Series Analysis",
      "Computer Vision",
    ],
  },
  {
    title: "Programming Languages",
    color: "from-accent to-secondary",
    skills: [
      "Python",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "from-secondary to-muted",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Streamlit",
    ],
  },
  {
    title: "Data Science",
    color: "from-muted to-primary",
    skills: [
      "Data Science",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Tools & Technologies",
    color: "from-primary to-accent",
    skills: [
      "Git",
      "Jupyter",
    ],
  },
];

export default function Skills() {
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
                <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Card 
                      className="glass-panel hover-elevate active-elevate-2 transition-all group cursor-pointer h-full"
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
                  </motion.div>
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
