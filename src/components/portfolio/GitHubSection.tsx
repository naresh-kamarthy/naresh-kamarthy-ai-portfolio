import { Github, Code2, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
      <FadeIn stagger direction="up" distance={20} className="grid gap-5 sm:grid-cols-3 mb-10">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-6 text-center card-hover border-primary/5 hover:border-primary/20 transition-all duration-300"
          >
            <s.icon className="w-6 h-6 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" />
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1 tracking-tight">{s.value}</p>
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{s.label}</p>
          </motion.div>
        ))}
      </FadeIn>
      <FadeIn delay={0.2} direction="up" distance={20}>
        <div className="text-center">
          <motion.a
            href="https://github.com/naresh-kamarthy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            <Github className="w-5 h-5" /> Explore My Repositories
          </motion.a>
        </div>
      </FadeIn>
    </section>
  );
};

export default GitHubSection;
