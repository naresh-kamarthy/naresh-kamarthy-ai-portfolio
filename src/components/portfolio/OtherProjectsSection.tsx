import { memo, useState } from "react";
import { Github, Info } from "lucide-react";
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

interface Props {
  repos: GitHubRepo[];
}

// Memoised card to prevent unnecessary re-renders when drawer state changes
const ProjectCard = memo(
  ({
    repo,
    delay,
    onDetails,
  }: {
    repo: GitHubRepo;
    delay: number;
    onDetails: (detail: ProjectDetail) => void;
  }) => (
    <FadeIn delay={delay}>
      <div className="glass rounded-xl p-5 h-full flex flex-col card-hover">
        <h3 className="font-semibold text-foreground mb-1.5">{toTitle(repo.name)}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
          {repo.description || "A modern AI-powered frontend project."}
        </p>
        <div className="flex gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md glass text-xs font-medium text-foreground hover:border-primary/40 transition-all"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <button
            onClick={() => onDetails(buildDetail(repo))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-all"
          >
            <Info className="w-3.5 h-3.5" /> Details
          </button>
        </div>
      </div>
    </FadeIn>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <ProjectCard
              key={repo.name}
              repo={repo}
              delay={i * 0.06}
              onDetails={setSelectedProject}
            />
          ))}
        </div>
      </section>
      <ProjectDetailDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default OtherProjectsSection;
