import { GraduationCap, Scroll, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const EducationCertifications = () => {
  return (
    <section id="education-certifications" className="py-24 section-container">
      <FadeIn stagger direction="up" distance={30} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Education Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          whileHover={{ y: -5 }}
          className="group h-full relative p-10 rounded-[2.5rem] border border-primary/10 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-[0_30px_60px_rgba(var(--primary-rgb),0.08)] flex flex-col"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors uppercase">Education</h2>
          </div>

          <div className="flex-grow">
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                M.Sc Computer Science
              </h3>
              <span className="w-fit text-muted-foreground font-mono text-[10px] px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 uppercase tracking-widest font-bold">
                2015 - 2017
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-xl font-bold text-primary/90 underline decoration-primary/20 decoration-2 underline-offset-8">Rayalaseema University</p>
                <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-primary font-black text-sm uppercase tracking-tighter shadow-sm">
                  Final Score: 85%
                </div>
              </div>
              
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm font-medium">
                Advanced studies in computer science, focusing on software engineering principles and data structures.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
          whileHover={{ y: -5 }}
          className="group h-full relative p-10 rounded-[2.5rem] border border-primary/10 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-[0_30px_60px_rgba(var(--primary-rgb),0.08)] flex flex-col"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shadow-inner">
              <Scroll className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors uppercase">Certifications</h2>
          </div>

          <div className="flex-grow">
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                AI Product Development
              </h3>
              <span className="w-fit text-muted-foreground font-mono text-[10px] px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 uppercase tracking-widest font-bold">
                Dec 2025
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <p className="text-xl font-bold text-primary/90">Google for Startups</p>
                <span className="text-[10px] px-3 py-1 rounded bg-accent/20 border border-accent/20 text-accent font-black uppercase tracking-widest shadow-sm">
                  AI SPECIALIST
                </span>
              </div>
              
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm font-medium">
                AI Product Development – Prompt to Prototype. Focused on building AI-driven products, LLM integration, and intelligent UI systems.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <motion.a
              href="/google-ai-product.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <ExternalLink className="w-5 h-5" />
              View Certificate
            </motion.a>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
};

export default EducationCertifications;
