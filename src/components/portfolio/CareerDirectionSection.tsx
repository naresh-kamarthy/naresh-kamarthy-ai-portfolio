import { TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";

const CareerDirectionSection = () => (
  <section className="py-24 section-container">
    <FadeIn>
      <div className="glass rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto text-center">
        <TrendingUp className="w-8 h-8 text-primary mx-auto mb-5" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Where I'm Headed</h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
          With 5+ years of frontend engineering experience as my foundation, I'm now focused on the 
          intersection of <span className="text-foreground font-medium">modern React development</span> and 
          <span className="text-foreground font-medium"> AI-powered product engineering</span>.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          I'm building toward a future where intelligent interfaces aren't just experiments — they're 
          production-ready products with clean architecture, thoughtful UX, and real user value. 
          My portfolio projects represent this direction: practical AI tools built with senior-level 
          frontend craft.
        </p>
      </div>
    </FadeIn>
  </section>
);

export default CareerDirectionSection;
