import { Github, Code2, Calendar, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import type { GitHubProfile } from "@/hooks/useGitHubData";

interface Props {
  profile: GitHubProfile | null;
  featuredCount: number;
  otherCount: number;
}

const GitHubSection = ({ featuredCount, otherCount }: Props) => {
  const totalAiRepos = featuredCount + otherCount;

  const stats = [
    { icon: Code2, label: "Featured AI Systems", value: String(featuredCount) },
    { icon: Sparkles, label: "Supporting AI Tools", value: String(otherCount) },
    { icon: Calendar, label: "Production-Ready Repositories", value: `${totalAiRepos}` },
  ];

  return (
    <section className="py-24 section-container">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Open Source &amp; <span className="text-gradient">Engineering</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed mb-10">
          My GitHub is where I build in public — from full-stack AI applications to reusable
          frontend systems and developer tools. Each project reflects real engineering decisions,
          clean architecture, and a focus on practical product value.
        </p>
      </FadeIn>
      <div className="grid gap-5 sm:grid-cols-3 mb-10">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1}>
            <div className="glass rounded-xl p-5 text-center card-hover">
              <s.icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="text-lg sm:text-2xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground font-mono">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="text-center">
          <a
            href="https://github.com/naresh-kamarthy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_24px_hsl(225_75%_62%/0.25)] transition-all duration-300"
          >
            <Github className="w-4 h-4" /> Explore My Repositories
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default GitHubSection;
