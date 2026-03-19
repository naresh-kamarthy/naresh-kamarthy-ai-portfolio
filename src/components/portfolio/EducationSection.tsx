import FadeIn from "./FadeIn";

const EducationSection = () => (
  <section id="education" className="py-24 section-container">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Education</h2>
      <div className="mt-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
          <h3 className="text-lg font-bold text-foreground">Master of Science (Computer Science)</h3>
          <span className="text-muted-foreground font-mono text-sm">2015 - 2017</span>
        </div>
        <div className="text-primary/90 font-medium mt-1">Rayalaseema University</div>
      </div>
    </FadeIn>
  </section>
);

export default EducationSection;
