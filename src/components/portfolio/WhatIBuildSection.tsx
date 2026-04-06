import { Briefcase, Bot, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const highlights = [
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    text: "Frontend engineering with React and TypeScript across products, platforms, and teams.",
  },
  {
    icon: Bot,
    title: "AI Product Focus",
    text: "Building AI-assisted tools, workflows, and interfaces that solve real problems.",
  },
  {
    icon: ShieldCheck,
    title: "Production Mindset",
    text: "Clean architecture, testing, UX polish, and maintainability at every stage.",
  },
];

const WhatIBuildSection = () => (
  <section className="py-24 section-container">
    <FadeIn direction="up">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">What I Build</h2>
      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed mb-14">
        I build intelligent frontend systems at the intersection of React engineering, AI workflows, and developer tooling — with a focus on usable interfaces, reliable architecture, and production-ready experiences.
      </p>
    </FadeIn>
    <FadeIn stagger direction="up" distance={30} className="grid gap-6 sm:grid-cols-3">
      {highlights.map((h) => (
        <motion.div
          key={h.title}
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
          }}
          whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 } }}
          className="glass-premium rounded-2xl p-8 card-hover h-full relative group overflow-hidden border border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <h.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{h.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-medium">{h.text}</p>
          </div>
          
          {/* Subtle bottom glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      ))}
    </FadeIn>
  </section>
);

export default WhatIBuildSection;
