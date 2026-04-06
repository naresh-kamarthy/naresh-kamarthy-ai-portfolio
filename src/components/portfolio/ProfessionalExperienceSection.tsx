import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const ProfessionalExperienceSection = () => (
    <section id="professional-experience" className="py-24 section-container">
      <FadeIn direction="up">
        <h2 className="text-2xl sm:text-3xl font-bold mb-16">Professional Experience</h2>
      </FadeIn>

      <FadeIn stagger direction="up" distance={30} className="space-y-20">
        {/* Company 1 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="relative pl-10 border-l-2 border-primary/20 hover:border-primary/50 transition-all duration-500 group"
        >
          <motion.div 
            whileHover={{ scale: 1.5 }}
            className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-0 shadow-[0_0_15px_hsl(var(--primary)/0.6)] z-10 transition-transform" 
          />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
              Senior Software Engineer
            </h3>
            <span className="text-muted-foreground font-mono text-[10px] sm:text-xs px-4 py-1.5 rounded-full bg-muted/50 uppercase border border-border/50 font-bold tracking-widest whitespace-nowrap">
              Jan 2022 – Feb 2025
            </span>
          </div>
          <div className="text-primary font-extrabold text-lg sm:text-xl mb-6">Navajna Technologies Pvt Ltd</div>

          <div className="space-y-4">
            <ul className="space-y-4 text-muted-foreground text-sm sm:text-base list-none pl-0">
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span><span className="text-foreground font-bold underline decoration-primary/30 decoration-2 underline-offset-4">MasterCard:</span> Built reusable React components for global enterprise fintech products and maintained 90%+ test coverage using Jest, RTL and SonarQube.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span><span className="text-foreground font-bold underline decoration-primary/30 decoration-2 underline-offset-4">Pixofix:</span> Engineered an image transformation platform with multi-role access control and integrated RESTful APIs.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span><span className="text-foreground font-bold underline decoration-primary/30 decoration-2 underline-offset-4">BoxFit:</span> Implemented real-time video call functionality using Jitsi Meet Web SDK for live fitness sessions.</span>
              </li>
              <li className="flex gap-3 text-foreground/80 font-medium italic">
                <span className="text-primary mt-1.5 shrink-0">→</span>
                <span>Collaborated with cross-functional teams to deliver scalable architectures for enterprise applications.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Company 2 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="relative pl-10 border-l-2 border-primary/10 hover:border-primary/40 transition-all duration-500 group"
        >
          <motion.div 
            whileHover={{ scale: 1.5 }}
            className="absolute w-5 h-5 bg-primary/40 rounded-full -left-[11px] top-0 z-10 transition-transform" 
          />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
              Software Engineer
            </h3>
            <span className="text-muted-foreground font-mono text-[10px] sm:text-xs px-4 py-1.5 rounded-full bg-muted/50 uppercase border border-border/50 font-bold tracking-widest whitespace-nowrap">
              Jun 2019 – Dec 2021
            </span>
          </div>
          <div className="text-primary font-extrabold text-lg sm:text-xl mb-6 opacity-80">Vectramind Technologies Pvt Ltd</div>

          <div className="space-y-4">
            <ul className="space-y-4 text-muted-foreground text-sm sm:text-base list-none pl-0">
              <li className="flex gap-3">
                <span className="text-primary/60 mt-1.5 shrink-0">•</span>
                <span><span className="text-foreground font-bold underline decoration-primary/20 decoration-2 underline-offset-4">Firstpass:</span> Developed contact-less healthcare kiosks using React and TypeScript, optimizing for low-latency touch response.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary/60 mt-1.5 shrink-0">•</span>
                <span><span className="text-foreground font-bold underline decoration-primary/20 decoration-2 underline-offset-4">Synapse:</span> Built an Angular platform for high-volume campaign orchestration and real-time event tracking.</span>
              </li>
              <li className="flex gap-3 text-foreground/80 font-medium italic opacity-80">
                <span className="text-primary/60 mt-1.5 shrink-0">→</span>
                <span>Optimized state management and API integrations for high performance across diverse hardware.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </FadeIn>
    </section>
);

export default ProfessionalExperienceSection;
