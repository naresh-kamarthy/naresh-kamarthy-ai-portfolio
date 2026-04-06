import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const ContactSection = () => (
  <section id="contact" className="py-24 section-container text-center">
    <FadeIn direction="up" distance={30}>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
        Let's <span className="text-gradient">Connect</span>
      </h2>
      <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-12 font-medium">
        I'm open to frontend engineering and AI-powered product opportunities. Let's talk about building something great.
      </p>
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.a
          href="mailto:kamarthinaresh79@gmail.com"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300"
        >
          <Mail className="w-5 h-5" /> Email Me
        </motion.a>
        <motion.a
          href="https://github.com/naresh-kamarthy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass font-bold text-sm text-foreground hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-primary/5"
        >
          <Github className="w-5 h-5" /> GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/naresh-kamarthy-aa1239130"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass font-bold text-sm text-foreground hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-primary/5"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </motion.a>
      </motion.div>
    </FadeIn>
  </section>
);

export default ContactSection;
