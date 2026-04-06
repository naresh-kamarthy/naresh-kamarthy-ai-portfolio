import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 section-container">
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
        </div>
      </FadeIn>

      <FadeIn stagger direction="up" distance={20} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {/* Certification Card 1 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group relative p-6 rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.1)]"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                < Award className="w-6 h-6 text-primary" />
              </div>
              <span className="text-muted-foreground font-mono text-[10px] px-3 py-1 rounded-full bg-muted/50 border border-border/50 uppercase tracking-widest font-bold">
                Dec 2025
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
              AI Product Development – Prompt to Prototype
            </h3>
            <p className="text-primary/90 font-bold text-sm mb-4">Google for Startups</p>

            <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
              Focused on building AI-driven products, LLM integration, and intelligent UI systems.
            </p>

            <div className="mt-auto">
              <motion.a
                href="/google-ai-product.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-xs font-bold text-foreground bg-muted hover:bg-primary/10 border border-border/50 px-5 py-2.5 rounded-xl transition-all shadow-sm"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
};

export default CertificationsSection;
