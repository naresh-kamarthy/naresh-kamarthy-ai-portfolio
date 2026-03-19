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
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut"
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
      <div className="glass rounded-xl p-6 h-full flex flex-col transition-all duration-400 hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:scale-[1.02] hover:-translate-y-[6px] group border-primary/5 hover:border-primary/20">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">{toTitle(repo.name)}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {repo.description || "A modern AI-powered frontend project focused on high-performance architecture."}
        </p>
        <div className="flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs font-semibold text-foreground hover:border-primary/40 transition-all hover:scale-[1.03]"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <button
            onClick={() => onDetails(buildDetail(repo))}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-all hover:scale-[1.03]"
          >
            <Info className="w-4 h-4" /> Details
          </button>
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
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Other Selected Projects</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-14">
            Additional AI-powered tools, experiments, and frontend systems
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
