import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const AboutSection = () => (
  <section id="about" className="py-24 section-container">
    <FadeIn stagger direction="up" distance={30} className="max-w-3xl">
      <motion.h2 
        className="text-4xl sm:text-5xl font-extrabold mb-10 tracking-tight"
        variants={{
          hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" }
        }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>
      
      {[
        <>Frontend Engineer with <motion.span whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px hsl(var(--primary)/0.4))" }} className="text-foreground font-bold underline decoration-primary/40 decoration-2 underline-offset-8 cursor-default transition-all">5+ years of experience</motion.span> building scalable web applications using React and TypeScript.</>,
        <>I focus on designing <motion.span whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px hsl(var(--primary)/0.4))" }} className="text-foreground font-bold underline decoration-primary/40 decoration-2 underline-offset-8 cursor-default transition-all">maintainable frontend architectures</motion.span> and implementing AI-powered systems across real product workflows.</>,
        <>My work centers on <motion.span whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px hsl(var(--primary)/0.4))" }} className="text-foreground font-bold underline decoration-primary/40 decoration-2 underline-offset-8 cursor-default transition-all">intelligent UI platforms</motion.span>, developer tooling, and performance-focused product interfaces.</>
      ].map((text, i) => (
        <motion.p 
          key={i}
          className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8 last:mb-0 font-medium tracking-tight"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
          }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {text}
        </motion.p>
      ))}
    </FadeIn>
  </section>
);

export default AboutSection;
