import { memo, useState } from "react";
import { Github, Info } from "lucide-react";
import { motion, Variants } from "framer-motion";
import FadeIn from "./FadeIn";
import ProjectDetailDrawer, { type ProjectDetail } from "./ProjectDetailDrawer";
import type { GitHubRepo } from "@/hooks/useGitHubData";

function toTitle(name: string) {
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildDetail(repo: GitHubRepo): ProjectDetail {
  return {
    title: toTitle(repo.name),
    overview: repo.description || `A ${repo.language || "web"} project focused on modern frontend development.`,
    problem: "Addresses common challenges in modern frontend workflows by providing reusable patterns and clean architecture.",
    capabilities: [
      `Built with ${repo.language || "modern web technologies"}`,
      repo.description || "Focused on clean architecture and developer experience",
    ],
    architecture: [
      "Modular component structure with clear separation of concerns",
      "Scalable patterns suitable for production use",
    ],
    engineeringImpact: [],
    systemFlow: [],
    techStack: [repo.language || "TypeScript"].filter(Boolean),
    portfolioValue: "Demonstrates practical engineering skills with a focus on code quality and maintainability.",
    github: repo.html_url,
  };
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  },
};

interface Props {
  repos: GitHubRepo[];
}

// Memoised card to prevent unnecessary re-renders when drawer state changes
const ProjectCard = memo(
  ({
    repo,
    onDetails,
  }: {
    repo: GitHubRepo;
    onDetails: (detail: ProjectDetail) => void;
  }) => (
    <motion.div variants={item} className="h-full">
      <div className="glass rounded-2xl p-7 h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group border-primary/5 hover:border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <h3 className="font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors text-xl tracking-tight relative z-10">
          {toTitle(repo.name)}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1 font-medium relative z-10">
          {repo.description || "A modern AI-powered frontend project focused on high-performance architecture."}
        </p>
        
        <div className="flex gap-4 relative z-10 mt-auto">
          <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-[11px] font-bold text-foreground border-primary/10 hover:border-primary/40 transition-all shadow-lg hover:shadow-primary/5"
          >
            <Github className="w-4 h-4" /> GitHub
          </motion.a>
          <motion.button
            onClick={() => onDetails(buildDetail(repo))}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-[11px] font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <Info className="w-4 h-4" /> Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
);

ProjectCard.displayName = "ProjectCard";

const OtherProjectsSection = ({ repos }: Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  // repos are already filtered to ai-project topic by Index.tsx
  if (repos.length === 0) return null;

  return (
    <>
      <section className="py-24 section-container">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Other Selected <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-16 font-medium max-w-2xl">
            Additional AI-powered tools, experiments, and frontend systems that showcase diverse engineering skills.
          </p>
        </FadeIn>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {repos.map((repo) => (
            <ProjectCard
              key={repo.name}
              repo={repo}
              onDetails={setSelectedProject}
            />
          ))}
        </motion.div>
      </section>
      <ProjectDetailDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default OtherProjectsSection;
