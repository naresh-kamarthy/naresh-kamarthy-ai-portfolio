import { motion, type Variants } from "framer-motion";
import FadeIn from "./FadeIn";

const groups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS"],
  },
  {
    label: "State Management",
    items: ["Redux", "Redux Toolkit", "Zustand", "React Query"],
  },
  {
    label: "Testing/Quality",
    items: ["Jest", "React Testing Library", "vitest"],
  },
  {
    label: "AI Integration",
    items: [
      "AI Orchestration",
      "Prompt Engineering",
      "LLM Integration",
      "AI System Design",
      "RAG Implementation",
      "AI API Optimization",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "VS Code", "Vite"],
  },
  {
    label: "Architecture Focus",
    items: [
      "Component Architecture",
      "Performance Optimization",
      "Scalable UI Systems",
      "Frontend System Design",
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  },
};

const chipVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
};

const SkillsSection = () => (
  <section className="py-24 section-container">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Skills &amp; Tech Stack</h2>
      <p className="text-muted-foreground text-sm sm:text-base mb-6">Technologies and systems I build with daily</p>
      <p className="text-primary/90 text-sm font-medium mb-12 max-w-2xl leading-relaxed">
        Focused on building AI-integrated frontend systems with emphasis on performance, scalability, and developer experience.
      </p>
    </FadeIn>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {groups.map((group) => (
        <motion.div key={group.label} variants={itemVariant} className="group">
          <div className="glass rounded-2xl p-6 h-full border-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <h3 className="font-bold text-foreground text-sm mb-5 group-hover:text-primary transition-colors">{group.label}</h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{
                show: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={chipVariant}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.12)" }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-primary/5 text-primary/90 font-mono border border-primary/10 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
