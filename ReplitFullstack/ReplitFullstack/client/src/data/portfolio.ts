export const profile = {
  name: "Kanithi Satya Sathvik",
  role: "AI Engineer | ML Engineer",
  heroTitle: "I build AI products that solve real workflow problems.",
  heroSummary:
    "Final-year AI and ML student building practical systems across NLP, RAG, RL, and forecasting.",
  email: "kanithisathvik@gmail.com",
  phoneDisplay: "+91 9515136729",
  phoneHref: "+919515136729",
  location: "Anakapalle, Andhra Pradesh, India",
  github: "https://github.com/Sathvik2005",
  linkedin: "https://www.linkedin.com/in/kanithi-satya-sathvik-2b3452252",
  resumePath: "/Kanithi-Satya-Sathvik-Resume.pdf",
  openTo:
    "Open to AI/ML internship and early AI engineer roles.",
};

export const stats = [
  { value: "8.40/10", label: "CGPA" },
  { value: "7+", label: "AI projects shipped" },
  { value: "92%", label: "Top model accuracy" },
  { value: "35%", label: "Taxi failures reduced" },
];

export const strengths = [
  {
    title: "Product-focused AI",
    description:
      "I blend model quality, UX clarity, and delivery speed.",
  },
  {
    title: "Applied NLP depth",
    description:
      "Built with RAG, embeddings, semantic search, and transformers.",
  },
  {
    title: "Shipping mindset",
    description:
      "Comfortable shipping APIs, dashboards, and end-to-end systems.",
  },
  {
    title: "Real-world scope",
    description:
      "Experience across hiring, knowledge retrieval, healthcare, RL, and forecasting.",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "Java", "SQL", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "LSTM",
      "XGBoost",
      "Feature Engineering",
      "Time-Series Forecasting",
      "Reinforcement Learning",
      "DQN",
      "PPO",
      "SARSA",
    ],
  },
  {
    title: "LLM / NLP",
    items: [
      "RAG",
      "Transformers",
      "Hugging Face",
      "Sentence Transformers",
      "DeBERTa-v3",
      "Embeddings",
      "Semantic Search",
      "Similarity Scoring",
      "FAISS",
      "ChromaDB",
    ],
  },
  {
    title: "Frameworks / Tools",
    items: [
      "FastAPI",
      "Flask",
      "Streamlit",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "MySQL",
      "Git",
      "GitHub",
      "Jupyter",
      "VS Code",
    ],
  },
];

export const projects = [
  {
    title: "Answer IQ",
    tagline: "RAG search assistant delivering faster, more accurate knowledge answers.",
    description: [
      "Keyword search missed context in long, unstructured documents.",
      "Built RAG retrieval with grounded generation for precise answers.",
    ],
    tech: ["Python", "RAG", "FAISS", "ChromaDB", "TinyLlama"],
    links: {
      github: "https://github.com/Sathvik2005/Knowledge-base-Search-engine-unthinkable-",
    },
  },
  {
    title: "InsightRecruiter",
    tagline: "AI hiring pipeline ranking resumes faster with better candidate matching.",
    description: [
      "Manual screening was slow and inconsistent for large resume pools.",
      "Automated ranking cut shortlist time by 60% across 200+ resumes.",
    ],
    tech: ["FastAPI", "Streamlit", "Python", "NLP", "Embeddings"],
    links: {
      github: "https://github.com/Sathvik2005/Ai-resume-screening-system-using-python-and-streamlit-aicte-",
    },
  },
  {
    title: "ABSA Intelligence",
    tagline: "Aspect sentiment engine extracting detailed product feedback for better decisions.",
    description: [
      "Generic sentiment missed feature-level opinions in customer reviews.",
      "Fine-tuned DeBERTa model enabled real-time aspect-level insight extraction.",
    ],
    tech: ["Python", "DeBERTa-v3", "Transformers", "PyTorch", "HF Spaces"],
    links: {
      github: "https://github.com/Sathvik2005/Product-recommendation-system-using-ABSA-",
    },
  },
  {
    title: "Autonomous Taxi Agent",
    tagline: "RL taxi agent improving navigation accuracy and drop-off reliability.",
    description: [
      "Rule-based navigation failed in dynamic route and reward states.",
      "Trained DQN, PPO, SARSA agents; reduced failed drop-offs by 35%.",
    ],
    tech: ["Python", "RL", "DQN", "PPO", "SARSA"],
    links: {
      github: "https://github.com/Sathvik2005",
    },
  },
  {
    title: "Heart Disease Prediction",
    tagline: "Clinical risk model enabling earlier, more accurate heart disease detection.",
    description: [
      "Noisy clinical records reduced reliability in early disease detection.",
      "Engineered features boosted accuracy to 90% on 1,000+ records.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "ML"],
    links: {
      github: "https://github.com/Sathvik2005/Heart_disease_classification",
    },
  },
  {
    title: "AQI Forecasting",
    tagline: "Air quality forecasting dashboard enabling earlier environmental monitoring decisions.",
    description: [
      "Teams lacked forward visibility into upcoming AQI shifts.",
      "Forecasting model reached 85% accuracy using three years of data.",
    ],
    tech: ["Python", "Streamlit", "Regression", "Time Series", "Pandas"],
    links: {
      github: "https://github.com/Sathvik2005/Air-Quality-Index-Prediction-aicte-",
    },
  },
  {
    title: "Thyroid Classifier",
    tagline: "Diagnostic model improving thyroid prediction precision on clinical datasets.",
    description: [
      "Clinical classification accuracy was weak across baseline models.",
      "Tuned XGBoost pipeline delivered 92% accuracy on 3,500+ records.",
    ],
    tech: ["Python", "XGBoost", "SVM", "Pandas", "scikit-learn"],
    links: {
      github: "https://github.com/Sathvik2005/Thyroid-Classification",
    },
  },
];

export const timeline = [
  {
    title: "B.Tech, Computer Science (AI & ML)",
    org: "VIT-AP University",
    period: "2022 - 2026",
    detail: "Final-year student, CGPA 8.40/10, focused on AI product engineering.",
  },
  {
    title: "Intermediate",
    org: "Sri Chaitanya Junior College",
    period: "2020 - 2022",
    detail: "Completed intermediate education with 90.7% overall score.",
  },
  {
    title: "ML Club Member",
    org: "VIT-AP University",
    period: "2023 - 2024",
    detail: "Led AI workshops and supported peer learning sessions.",
  },
];

export const certifications = [
  "Oracle Cloud Infrastructure 2025 - Generative AI Certified Professional",
];

export const achievements = [
  "Built deployable AI systems across NLP, healthcare, RL, and forecasting.",
  "Delivered measurable gains in accuracy, reliability, and workflow speed.",
  "Presented projects with clear business value and technical depth.",
];
