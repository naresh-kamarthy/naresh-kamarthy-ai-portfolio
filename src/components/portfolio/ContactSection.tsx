import { Mail, Github, Linkedin } from "lucide-react";
import FadeIn from "./FadeIn";

const ContactSection = () => (
  <section id="contact" className="py-24 section-container text-center">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Let's <span className="text-gradient">Connect</span>
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-10">
        I'm open to frontend engineering and AI-powered product opportunities. Let's talk about building something great.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="mailto:kamarthinaresh79@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_24px_hsl(225_75%_62%/0.25)] transition-all duration-300"
        >
          <Mail className="w-4 h-4" /> Email Me
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
      </div>
    </FadeIn>
  </section>
);

export default ContactSection;
