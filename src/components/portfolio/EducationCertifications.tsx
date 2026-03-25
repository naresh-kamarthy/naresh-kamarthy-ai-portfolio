import { GraduationCap, Scroll, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

const EducationCertifications = () => {
  return (
    <section id="education-certifications" className="py-24 section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Education Card */}
        <FadeIn className="h-full" delay={0.1}>
          <div className="group h-full relative p-8 rounded-3xl border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:scale-[1.01] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  M.Sc Computer Science
                </h3>
                <span className="text-muted-foreground font-mono text-xs px-3 py-1 rounded-full bg-muted/50 border border-border/50 uppercase tracking-wider">
                  2015 - 2017
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-primary/90">Rayalaseema University</p>
                  <p className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-primary font-bold text-sm">
                    Score: 85%
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  Advanced studies in computer science, focusing on software engineering principles and data structures.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Certifications Card */}
        <FadeIn className="h-full" delay={0.2}>
          <div className="group h-full relative p-8 rounded-3xl border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:scale-[1.01] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Scroll className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  AI Product Development
                </h3>
                <span className="text-muted-foreground font-mono text-xs px-3 py-1 rounded-full bg-muted/50 border border-border/50 uppercase tracking-wider">
                  Dec 2025
                </span>
              </div>

              <div className="space-y-4 mb-4">
                <div className="flex items-center gap-3">
                  <p className="text-lg font-semibold text-primary/90">Google for Startups</p>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-tighter">
                    AI / LLM
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  AI Product Development – Prompt to Prototype. Focused on building AI-driven products, LLM integration, and intelligent UI systems.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/google-ai-product.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 glass text-foreground hover:border-primary/40 hover:bg-primary/5"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationCertifications;
