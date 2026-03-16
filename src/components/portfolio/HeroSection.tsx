import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesCanvas from "./ParticlesCanvas";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:px-6 text-center overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[140px] animate-pulse-glow" />
    <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    <ParticlesCanvas />

    <motion.div
      className="relative z-10 max-w-3xl"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-glow">
        <span className="text-gradient">Naresh Kamarthy</span>
      </h1>

      <p className="max-w-2xl mx-auto text-foreground/90 text-base sm:text-lg md:text-xl font-medium mb-3 leading-snug">
        Frontend Engineer with 5+ years designing scalable architectures and building AI-powered product interfaces
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {["React", "TypeScript", "AI-Driven Interfaces", "Frontend Architecture"].map((tag) => (
          <span
            key={tag}
            className="text-[11px] sm:text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_24px_hsl(225_75%_62%/0.25)] transition-all duration-300"
        >
          <ArrowDown className="w-4 h-4" /> View Projects
        </a>
        <a
          href="https://github.com/naresh-kamarthy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass font-medium text-sm text-foreground hover:border-primary/40 transition-all duration-300"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/naresh-kamarthy-aa1239130"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass font-medium text-sm text-foreground hover:border-primary/40 transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href="mailto:kamarthinaresh79@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass font-medium text-sm text-foreground hover:border-primary/40 transition-all duration-300"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
