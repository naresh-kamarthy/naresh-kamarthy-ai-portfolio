import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesCanvas from "./ParticlesCanvas";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:px-6 text-center overflow-hidden bg-background">
    {/* Animated Background Glow */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />
    </div>


    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[140px] animate-pulse-glow" />
    <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    <ParticlesCanvas />

    <div className="relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-glow leading-[1.1]">
          <span className="text-gradient">Naresh Kamarthy</span>
        </h1>

        <p className="max-w-2xl mx-auto text-foreground/90 text-base sm:text-lg md:text-xl font-medium mb-2 leading-snug">
          Frontend Engineer with 5+ years building scalable React systems and AI-powered product interfaces. Specializing in AI orchestration, performance optimization, and modern UI architectures.
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm font-medium mb-8">
          Focused on production-ready AI systems and high-performance frontend engineering.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["React", "TypeScript", "AI-Driven Interfaces", "Frontend Architecture"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="text-[11px] sm:text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 font-mono bg-primary/5 shadow-[0_0_10px_hsl(var(--primary)/0.05)]"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {[
          { href: "#projects", label: "View Projects", icon: ArrowDown, primary: true },
          { href: "/Naresh_Kamarthy_Resume.pdf", label: "Download Resume", icon: null },
          { href: "https://github.com/naresh-kamarthy", label: "GitHub", icon: Github },
          { href: "https://www.linkedin.com/in/naresh-kamarthy-aa1239130", label: "LinkedIn", icon: Linkedin },
          { href: "mailto:kamarthinaresh79@gmail.com", label: "Email", icon: Mail },
        ].map((btn, i) => (
          <motion.a
            key={btn.label}
            href={btn.href}
            target={btn.href.startsWith("http") || btn.href.endsWith(".pdf") ? "_blank" : undefined}
            rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.03] ${btn.primary
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "glass text-foreground hover:border-primary/40"
              }`}
          >
            {btn.icon && <btn.icon className="w-4 h-4" />}
            {btn.label}
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
