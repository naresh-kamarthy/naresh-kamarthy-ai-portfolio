import FadeIn from "./FadeIn";

const ProfessionalExperienceSection = () => (
  <section id="professional-experience" className="py-24 section-container">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-12">Professional Experience</h2>

      <div className="space-y-16">
        {/* Company 1 */}
        <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground tracking-tight uppercase">Senior Software Engineer</h3>
            <span className="text-muted-foreground font-mono text-xs px-3 py-1 rounded-full bg-muted/50 uppercase border border-border/50">
              Jan 2022 – Feb 2025
            </span>
          </div>
          <div className="text-primary font-bold text-lg mb-4">Navajna Technologies Pvt Ltd</div>

          <div className="space-y-4">
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base list-disc pl-5">
              <li><span className="text-foreground font-semibold">MasterCard (Client):</span>  Built reusable React components for global enterprise fintech products and maintained 90%+ test coverage using Jest, React Testing Library and SonarQube.</li>
              <li><span className="text-foreground font-semibold">Pixofix :</span> Engineered an image transformation platform with multi-role access control and integrated RESTful APIs.</li>
              <li><span className="text-foreground font-semibold">BoxFit :</span> Implemented real-time video call functionality using Jitsi Meet Web SDK for live fitness training sessions.</li>
              <li>Collaborated with cross-functional teams to deliver scalable frontend architectures for enterprise-grade applications.</li>
            </ul>
          </div>
        </div>

        {/* Company 2 */}
        <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors">
          <div className="absolute w-4 h-4 bg-primary/60 rounded-full -left-[9px] top-0" />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground tracking-tight uppercase">SOFTWARE ENGINEER</h3>
            <span className="text-muted-foreground font-mono text-xs px-3 py-1 rounded-full bg-muted/50 uppercase border border-border/50">
              Jun 2019 – Dec 2021
            </span>
          </div>
          <div className="text-primary font-bold text-lg mb-4">Vectramind Technologies Pvt Ltd</div>

          <div className="space-y-4">
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base list-disc pl-5">
              <li><span className="text-foreground font-semibold">Firstpass:</span> Developed contact-less check-in kiosks for healthcare systems using React and TypeScript, optimizing for low-latency touch response.</li>
              <li><span className="text-foreground font-semibold">Synapse:</span> Built a comprehensive Angular-based platform for high-volume SMS/Email campaign orchestration.</li>
              <li>Optimized RESTful API integrations and state management patterns to ensure high performance across diverse hardware platforms.</li>
              <li>Designed and implemented responsive UI systems for enterprise SaaS products with a focus on accessibility and performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);

export default ProfessionalExperienceSection;
