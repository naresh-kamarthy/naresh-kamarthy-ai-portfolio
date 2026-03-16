import FadeIn from "./FadeIn";

const AboutSection = () => (
  <section id="about" className="py-24 section-container">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">About Me</h2>
      <div className="max-w-3xl">
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
          Frontend Engineer with <span className="text-foreground font-medium">5+ years of experience</span> building scalable web applications using React and TypeScript.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
          I focus on designing <span className="text-foreground font-medium">maintainable frontend architectures</span> and implementing AI-powered systems across real product workflows.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          My work centers on <span className="text-foreground font-medium">intelligent UI platforms</span>, developer tooling, and performance-focused product interfaces.
        </p>
      </div>
    </FadeIn>
  </section>
);

export default AboutSection;
