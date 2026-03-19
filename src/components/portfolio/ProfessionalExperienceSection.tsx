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
            <h3 className="text-xl font-bold text-foreground">Frontend Engineer</h3>
            <span className="text-muted-foreground font-mono text-sm px-3 py-1 rounded-full bg-muted/50">Jan 2022 – Feb 2025</span>
          </div>
          <div className="text-primary font-semibold text-lg mb-4">Navajna Technologies Pvt Ltd</div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">Project:</span>
              <span className="text-foreground font-medium">MasterCard</span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base list-disc pl-5">
              <li>Built scalable React.js and TypeScript UI systems used across multiple enterprise modules</li>
              <li>Reduced unnecessary re-renders and improved performance through optimized component architecture</li>
              <li>Increased code reliability by implementing unit testing using Jest</li>
              <li>Maintained high code quality through reviews and best practices</li>
            </ul>
          </div>
        </div>

        {/* Company 2 */}
        <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors">
          <div className="absolute w-4 h-4 bg-primary/60 rounded-full -left-[9px] top-0" />
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">Software Engineer</h3>
            <span className="text-muted-foreground font-mono text-sm px-3 py-1 rounded-full bg-muted/50">Jun 2019 – Dec 2021</span>
          </div>
          <div className="text-primary font-semibold text-lg mb-4">Vectramind Technologies Pvt Ltd</div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">Project:</span>
              <span className="text-foreground font-medium">Firstpass</span>
            </div>
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base list-disc pl-5">
              <li>Built healthcare platform UI for patient check-in and scheduling workflows</li>
              <li>Built responsive dashboards handling dynamic real-time data</li>
              <li>Integrated REST APIs and improved data rendering efficiency</li>
              <li>Collaborated across teams to deliver stable production features</li>
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);

export default ProfessionalExperienceSection;
