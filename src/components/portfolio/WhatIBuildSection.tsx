import { Briefcase, Bot, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const highlights = [
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    text: "Frontend engineering with React and TypeScript across products, platforms, and teams.",
  },
  {
    icon: Bot,
    title: "AI Product Focus",
    text: "Building AI-assisted tools, workflows, and interfaces that solve real problems.",
  },
  {
    icon: ShieldCheck,
    title: "Production Mindset",
    text: "Clean architecture, testing, UX polish, and maintainability at every stage.",
  },
];

const WhatIBuildSection = () => (
  <section className="py-24 section-container">
    <FadeIn>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">What I Build</h2>
      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed mb-14">
        I build intelligent frontend systems at the intersection of React engineering, AI workflows, and developer tooling — with a focus on usable interfaces, reliable architecture, and production-ready experiences.
      </p>
    </FadeIn>
    <div className="grid gap-5 sm:grid-cols-3">
      {highlights.map((h, i) => (
        <FadeIn key={h.title} delay={i * 0.1}>
          <div className="glass rounded-xl p-6 card-hover h-full">
            <h.icon className="w-6 h-6 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default WhatIBuildSection;
