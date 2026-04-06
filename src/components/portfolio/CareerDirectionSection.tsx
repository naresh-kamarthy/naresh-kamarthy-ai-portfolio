import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const CareerDirectionSection = () => (
  <section className="py-24 section-container">
    <FadeIn stagger direction="up" distance={30}>
      <motion.div 
        whileHover={{ y: -5 }}
        className="glass rounded-[2rem] p-10 sm:p-14 max-w-4xl mx-auto text-center border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-primary/5"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner"
        >
          <TrendingUp className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.h2 
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
          }}
          className="text-3xl sm:text-4xl font-black mb-8 tracking-tight"
        >
          Where I'm <span className="text-gradient">Headed</span>
        </motion.h2>

        <div className="space-y-6">
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-medium"
          >
            With 5+ years of frontend engineering experience as my foundation, I'm now focused on the 
            intersection of <motion.span whileHover={{ scale: 1.05 }} className="text-foreground font-bold underline decoration-primary/30 decoration-2 underline-offset-8 cursor-default">modern React development</motion.span> and 
            <motion.span whileHover={{ scale: 1.05 }} className="text-foreground font-bold underline decoration-primary/30 decoration-2 underline-offset-8 cursor-default"> AI-powered product engineering</motion.span>.
          </motion.p>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed font-medium opacity-80"
          >
            I'm building toward a future where intelligent interfaces aren't just experiments — they're 
            production-ready products with clean architecture, thoughtful UX, and real user value. 
            My portfolio projects represent this direction: practical AI tools built with senior-level 
            frontend craft.
          </motion.p>
        </div>
      </motion.div>
    </FadeIn>
  </section>
);

export default CareerDirectionSection;
