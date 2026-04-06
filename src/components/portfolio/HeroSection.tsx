import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import ParticlesCanvas from "./ParticlesCanvas";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:px-6 text-center overflow-hidden bg-background">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.08), transparent)`
          ),
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <ParticlesCanvas />

      <div className="relative z-10 max-w-4xl">
        <FadeIn stagger direction="up" distance={20}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-glow leading-[1.1]"
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="shimmer-text">Naresh Kamarthy</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-foreground/90 text-base sm:text-lg md:text-xl font-medium mb-2 leading-snug"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Frontend Engineer with 5+ years building scalable React systems and AI-powered product interfaces. Specializing in AI orchestration, performance optimization, and modern UI architectures.
          </motion.p>
          <motion.p
            className="text-muted-foreground text-xs sm:text-sm font-medium mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Focused on production-ready AI systems and high-performance frontend engineering.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
          >
            {["React", "TypeScript", "AI-Driven Interfaces", "Frontend Architecture"].map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
                className="text-[11px] sm:text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 font-mono bg-primary/5 shadow-[0_0_10px_hsl(var(--primary)/0.05)] cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>

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
              whileHover={{ scale: 1.05, y: -2, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${btn.primary
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                  : "glass-premium text-foreground hover:border-primary/50"
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
};

export default HeroSection;
