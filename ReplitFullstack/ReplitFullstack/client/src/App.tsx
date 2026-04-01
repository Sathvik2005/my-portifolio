import { FormEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  achievements,
  certifications,
  profile,
  projects,
  skillGroups,
  stats,
  strengths,
  timeline,
} from "@/data/portfolio";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const body = document.body;
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  body.classList.toggle("dark", isDark);
  root.setAttribute("data-theme", theme);
  body.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  body.style.colorScheme = theme;
}

gsap.registerPlugin(ScrollTrigger);

function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useLayoutEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsIntroVisible(false), 680);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        const id = visible[0].target.getAttribute("id");
        if (!id) return;
        setActiveSection(id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-15% 0px -50% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const hero = rootRef.current.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const setCenterGlow = () => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${rect.width * 0.72}px`);
      hero.style.setProperty("--my", `${rect.height * 0.34}px`);
      hero.style.setProperty("--glow-opacity", "0.6");
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--my", `${event.clientY - rect.top}px`);
      hero.style.setProperty("--glow-opacity", "1");
    };

    const onPointerLeave = () => {
      hero.style.setProperty("--glow-opacity", "0.45");
    };

    setCenterGlow();
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);

    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".site-header", {
        y: -24,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      });

      gsap.from(".ambient-orb", {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });

      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .from("[data-hero-name]", {
          opacity: 0,
          y: 18,
          duration: 0.44,
        })
        .from(
          "[data-hero-title]",
          {
            opacity: 0,
            y: 24,
            duration: 0.58,
          },
          "-=0.2",
        )
        .from(
          "[data-hero-copy]",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          "[data-hero-cta]",
          {
            opacity: 0,
            y: 16,
            duration: 0.46,
            stagger: 0.08,
          },
          "-=0.28",
        )
        .from(
          "[data-hero-stats]",
          {
            opacity: 0,
            y: 18,
            duration: 0.52,
          },
          "-=0.24",
        );

      gsap.to(".orb-a", {
        xPercent: 8,
        yPercent: -12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-b", {
        xPercent: -10,
        yPercent: 10,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-grid", {
        yPercent: -5,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-scene-section]").forEach((section) => {
        const sceneLayer = section.querySelector<HTMLElement>(".scene-layer");
        const sceneContainer = section.querySelector<HTMLElement>(".container");

        if (sceneLayer) {
          gsap.fromTo(
            sceneLayer,
            { opacity: 0, scale: 0.94, y: 24 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.72,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            },
          );
        }

        if (sceneContainer) {
          gsap.fromTo(
            sceneContainer,
            { opacity: 0.55, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.68,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                once: true,
              },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 18,
          duration: 0.56,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
        const items = Array.from(container.children) as HTMLElement[];
        if (!items.length) return;

        gsap.from(items, {
          opacity: 0,
          y: 18,
          scale: 0.985,
          duration: 0.52,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.from("[data-project-card]", {
        opacity: 0,
        y: 20,
        scale: 0.97,
        duration: 0.52,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-project-grid]",
          start: "top 82%",
          once: true,
        },
      });

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-card",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.from(".timeline-dot", {
        opacity: 0,
        scale: 0,
        duration: 0.35,
        stagger: 0.14,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".timeline-card",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".timeline-content", {
        opacity: 0,
        x: 20,
        duration: 0.48,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-card",
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? body?.message ?? "Failed to send message");
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitState("error");
      setSubmitError(error instanceof Error ? error.message : "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell" id="home" ref={rootRef}>
      <header className={`site-header${isScrolled ? " scrolled" : ""}`}>
        <div className="container nav-wrap">
          <button className="brand" onClick={() => scrollToSection("home")} type="button">
            <span className="brand-mark">KS</span>
            <span className="brand-text">{profile.name}</span>
          </button>
          <div className="nav-actions">
            <nav className="nav-links">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`nav-link${activeSection === section.id ? " nav-link-active" : ""}`}
                  onClick={() => scrollToSection(section.id)}
                  type="button"
                >
                  {section.label}
                </button>
              ))}
            </nav>
            <button
              aria-label="Toggle dark mode"
              className="theme-toggle"
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
              type="button"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`loading-intro${isIntroVisible ? "" : " loading-intro-hide"}`} aria-hidden={!isIntroVisible}>
        <div className="loading-mark">KS</div>
      </div>

      <main>
        <section className="hero scene-section" aria-labelledby="hero-title" data-scene-section>
          <div className="scene-layer" aria-hidden="true" />
          <div className="ambient-orb orb-a" aria-hidden="true" />
          <div className="ambient-orb orb-b" aria-hidden="true" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow" data-hero-name>
                AI-first engineer building real-world intelligent systems
              </span>
              <h1 data-hero-title id="hero-title">
                {profile.heroTitle}
              </h1>
              <p className="hero-summary" data-hero-copy>
                {profile.heroSummary}
              </p>

              <div className="hero-actions">
                <button className="btn btn-primary" data-hero-cta onClick={() => scrollToSection("projects")} type="button">
                  View Projects
                  <ArrowRight size={16} />
                </button>
                <a className="btn btn-secondary" data-hero-cta href={profile.resumePath} target="_blank" rel="noreferrer">
                  <FileText size={16} />
                  Download Resume
                </a>
                <button className="btn btn-secondary" data-hero-cta onClick={() => scrollToSection("contact")} type="button">
                  <Mail size={16} />
                  Contact
                </button>
              </div>

              <div className="stats-grid" data-hero-stats>
                {stats.map((stat) => (
                  <article className="card stat-card" key={stat.label}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="card profile-card" data-reveal>
              <span className="eyebrow">Profile Snapshot</span>
              <h2>{profile.name}</h2>
              <p className="muted">{profile.role}</p>
              <div className="profile-links">
                <a href={`mailto:${profile.email}`}>
                  <Mail size={15} />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phoneHref}`}>
                  <Phone size={15} />
                  {profile.phoneDisplay}
                </a>
                <span>
                  <MapPin size={15} />
                  {profile.location}
                </span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={15} />
                  GitHub
                </a>
              </div>
              <div className="focus-box">
                <Sparkles size={16} />
                <p>{profile.openTo}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section scene-section" id="about" data-scene-section>
          <div className="scene-layer" aria-hidden="true" />
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="eyebrow">About</span>
              <h2>I build AI systems people can actually use.</h2>
              <p>
                Final-year AI and ML student focused on deployable products. I turn models into clean, useful tools
                for real workflows. Work includes RAG, hiring AI, healthcare ML, RL, and forecasting.
              </p>
            </div>

            <div className="strength-grid" data-stagger>
              {strengths.map((strength) => (
                <article className="card strength-card" key={strength.title}>
                  <BrainCircuit size={18} />
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section scene-section" id="skills" data-scene-section>
          <div className="scene-layer" aria-hidden="true" />
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="eyebrow">Skills</span>
              <h2>Core tools I use to ship fast.</h2>
            </div>

            <div className="skills-grid" data-stagger>
              {skillGroups.map((group) => (
                <article className="card skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chip-grid">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section scene-section" id="projects" data-scene-section>
          <div className="scene-layer" aria-hidden="true" />
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="eyebrow">Projects</span>
              <h2>Compact project snapshots with clear outcomes.</h2>
              <p>Each card shows what it does, tech used, and impact in seconds.</p>
            </div>

            <div className="projects-grid" data-project-grid>
              {projects.slice(0, 6).map((project) => (
                <article className="card project-card" data-project-card key={project.title}>
                  <div className="project-top">
                    <span className="project-title">{project.title}</span>
                    <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="View GitHub">
                      <Github size={16} />
                    </a>
                  </div>
                  <h3>{project.tagline}</h3>
                  <div className="project-block">
                    <h4>Description</h4>
                    <p>{project.description[0]}</p>
                    <p>{project.description[1]}</p>
                  </div>
                  <div className="project-block">
                    <h4>Tech Stack</h4>
                    <div className="chip-grid">
                      {project.tech.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-footer">
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      View GitHub
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section scene-section" id="experience" data-scene-section>
          <div className="scene-layer" aria-hidden="true" />
          <div className="container experience-grid">
            <div className="section-head" data-reveal>
              <span className="eyebrow">Experience & Education</span>
              <h2>Education and leadership highlights.</h2>
            </div>

            <article className="card timeline-card" data-reveal>
              <div className="timeline-line" aria-hidden="true" />
              {timeline.map((item) => (
                <div className="timeline-item" key={`${item.title}-${item.period}`}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <strong>{item.org}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </article>

            <div className="side-cards" data-stagger>
              <article className="card mini-card">
                <div className="mini-head">
                  <Award size={16} />
                  <h3>Certifications</h3>
                </div>
                <ul>
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="card mini-card">
                <div className="mini-head">
                  <GraduationCap size={16} />
                  <h3>Achievements</h3>
                </div>
                <ul>
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="card mini-card">
                <div className="mini-head">
                  <BriefcaseBusiness size={16} />
                  <h3>Current Focus</h3>
                </div>
                <p>Building agentic AI tools, robust LLM workflows, and deployable APIs.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section scene-section" id="contact" data-scene-section>
          <div className="scene-layer" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="section-head" data-reveal>
              <span className="eyebrow">Contact</span>
              <h2>Let&apos;s talk about AI products, internships, and high-impact engineering work.</h2>
              <p>
                The form below sends directly to the portfolio backend. You can also reach me by email, LinkedIn, or
                GitHub.
              </p>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <form className="card contact-form" data-reveal onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  name="name"
                  minLength={2}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Your name"
                  required
                  value={formData.name}
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  name="email"
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={formData.email}
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  minLength={10}
                  name="message"
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                  placeholder="Tell me about the role, project, or collaboration."
                  required
                  rows={6}
                  value={formData.message}
                />
              </label>

              <button className="btn btn-primary" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight size={15} />
              </button>

              {submitState === "success" ? <p className="ok">Message sent successfully.</p> : null}
              {submitState === "error" ? <p className="err">{submitError}</p> : null}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
