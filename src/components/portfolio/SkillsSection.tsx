import FadeIn from "./FadeIn";

const groups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS"],
  },
  {
    label: "State Management",
    items: ["Redux", "Redux Toolkit", "Zustand", "React Query"],
  },
  {
    label: "Testing/Quality",
    items: ["Jest", "React Testing Library", "vitest"],
  },
  {
    label: "AI Integration",
    items: [
      "AI API Integration",
      "Prompt-driven UI Systems",
      "AI-assisted Interface Design",
      "LLM-based Workflow Interfaces",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "VS Code", "Vite"],
  },
  {
    label: "Architecture Focus",
    items: [
      "Component Architecture",
      "Performance Optimization",
      "Scalable UI Systems",
      "Frontend System Design",
    ],
  },
];

const SkillsSection = () => (
  <section className="py-24 section-container">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Skills &amp; Tech Stack</h2>
      <p className="text-muted-foreground text-sm sm:text-base mb-14">Technologies and patterns I work with daily</p>
    </FadeIn>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, gi) => (
        <FadeIn key={group.label} delay={gi * 0.08}>
          <div className="glass rounded-xl p-5 h-full">
            <h3 className="font-semibold text-foreground text-sm mb-4">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary/80 font-mono border border-primary/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default SkillsSection;
