import FadeIn from "./FadeIn";
import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 section-container">
      <FadeIn>
        <div className="flex items-center gap-3 mb-10">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Certification Card 1 */}
          <div className="group relative p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-1">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-mono text-xs px-3 py-1 rounded-full bg-muted/50 border border-border/50 uppercase tracking-wider">
                  Dec 2025
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                AI Product Development – Prompt to Prototype
              </h3>
              <p className="text-primary/90 font-semibold text-sm mb-3">Google for Startups</p>

              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Focused on building AI-driven products, LLM integration, and intelligent UI systems.
              </p>

              <div className="mt-auto">
                <a
                  href="/google-ai-product.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-foreground bg-muted hover:bg-primary/10 border border-border/50 px-4 py-2 rounded-lg transition-all"
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default CertificationsSection;
