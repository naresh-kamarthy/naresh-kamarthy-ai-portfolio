import { memo, useState } from "react";
import { Github, Info, Layers, Zap, Search, Eye, Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import FadeIn from "./FadeIn";
import ProjectCarousel from "./ProjectCarousel";
import ProjectDetailDrawer, { type ProjectDetail } from "./ProjectDetailDrawer";
import type { GitHubRepo } from "@/hooks/useGitHubData";

import nexusPipeline from "@/assets/nexus/pipeline-execution.png";
import nexusResilience from "@/assets/nexus/resilience-mode.png";
import nexusSandbox from "@/assets/nexus/sandbox-preview.png";
import nexusTest from "@/assets/nexus/test-verification.png";

import aetherFlow from "@/assets/aether/aether-flow.png";
import aetherHandoff from "@/assets/aether/agent-handoff.png";
import aetherOrch from "@/assets/aether/orchestration-main.png";
import aetherPipeline from "@/assets/aether/pipeline-output.png";
import aetherSecurity from "@/assets/aether/security-audit.png";

import lumeAmber from "@/assets/lume/amber-screen.png";
import lumeEmerald from "@/assets/lume/emerald-screen.png";
import lumeFinops from "@/assets/lume/finops-footer.png";
import lumeIntent from "@/assets/lume/intent-extraction.png";
import lumeRag from "@/assets/lume/rag-verification.png";

import uxmindDashboard from "@/assets/uxmind/audit-dashboard-main.png";
import uxmindThinking from "@/assets/uxmind/ai-thinking-process.png";
import uxmindOverlay from "@/assets/uxmind/interactive-overlay-proof.png";
import uxmindImprovements from "@/assets/uxmind/suggested-improvements.png";
import uxmindReport from "@/assets/uxmind/professional-report-export.png";

const FEATURED_SLUGS = [
  "nexus-ui-orchestrator",
  "aether-flow",
  "lume-research-engine",
  "uxmind-ai",
] as const;

interface FeaturedProject {
  slug: string;
  icon: typeof Layers;
  title: string;
  tagline: string;
  description: string;
  images: string[];
  github: string;
  detail: ProjectDetail;
}

const projects: FeaturedProject[] = [
  {
    slug: "nexus-ui-orchestrator",
    icon: Layers,
    title: "Nexus UI Orchestrator",
    tagline: "AI system that generates React components, tests, and documentation from prompts.",
    description: "Full-stack AI design system with a multi-stage orchestration pipeline that turns natural language into production-ready UI.",
    images: [nexusSandbox, nexusPipeline, nexusResilience, nexusTest],
    github: "https://github.com/naresh-kamarthy/nexus-ui-orchestrator",
    detail: {
      title: "Nexus UI Orchestrator",
      overview: "A full-stack AI-powered design system that takes natural language prompts and generates production-ready React components, automated test suites, and comprehensive documentation — all through an intelligent orchestration pipeline.",
      problem: "Building UI components is repetitive and time-consuming. Developers spend significant effort writing boilerplate code, tests, and docs for every new component. Nexus automates this entire workflow using AI.",
      capabilities: [
        "Natural language to React component generation with Gemini API",
        "Automated test suite generation with Jest/RTL patterns",
        "Live sandbox preview with hot-reload for generated components",
        "Resilience mode with automatic fallback and error recovery",
      ],
      architecture: [
        "Multi-stage orchestration pipeline (prompt → generate → test → preview)",
        "Resilient API layer with retry logic and graceful degradation",
        "Isolated sandbox environment for safe component rendering",
      ],
      engineeringImpact: [],
      systemFlow: ["User Prompt", "AI Engine", "Component Generator", "Test Suite", "UI Preview"],
      techStack: ["React", "TypeScript", "Gemini API", "Tailwind CSS", "Vite", "Component Architecture"],
      portfolioValue: "Demonstrates advanced React architecture, AI API integration, pipeline orchestration, and the ability to build developer-facing tools that ship production-quality output.",
      github: "https://github.com/naresh-kamarthy/nexus-ui-orchestrator",
    },
  },
  {
    slug: "aether-flow",
    icon: Zap,
    title: "Aether Flow",
    tagline: "Autonomous multi-agent system with deterministic state machine orchestration.",
    description: "Coordinates multiple AI agents through a finite state machine pipeline, ensuring reliable and predictable execution of complex reasoning workflows.",
    images: [aetherFlow, aetherOrch, aetherHandoff, aetherPipeline, aetherSecurity],
    github: "https://github.com/naresh-kamarthy/aether-flow",
    detail: {
      title: "Aether Flow",
      overview: "An autonomous multi-agent orchestration system that coordinates multiple AI agents through a deterministic finite state machine pipeline, ensuring reliable and predictable execution of complex reasoning workflows.",
      problem: "Multi-agent AI systems are inherently unpredictable. Without structured coordination, agents can produce inconsistent results, enter loops, or fail silently. Aether Flow solves this with deterministic state management.",
      capabilities: [
        "Deterministic FSM-based agent coordination with clear state transitions",
        "Multi-agent handoff with context preservation between pipeline stages",
        "Security audit and validation layers for AI-generated outputs",
        "Real-time pipeline visualization with execution monitoring",
      ],
      architecture: [
        "Finite State Machine engine for deterministic workflow progression",
        "Agent isolation pattern preventing cross-contamination of reasoning",
        "Event-driven architecture with real-time UI updates",
      ],
      engineeringImpact: [],
      systemFlow: ["Workflow Config", "FSM Engine", "Agent Pool", "Validation Layer", "Output"],
      techStack: ["React", "TypeScript", "FSM Architecture", "Gemini API", "Tailwind CSS", "Vite"],
      portfolioValue: "Showcases deep understanding of state machines, complex system design, and the ability to build enterprise-grade AI orchestration with predictable behavior.",
      github: "https://github.com/naresh-kamarthy/aether-flow",
    },
  },
  {
    slug: "lume-research-engine",
    icon: Search,
    title: "LUME Research Engine",
    tagline: "Self-healing research engine with grounded retrieval and cost observability.",
    description: "Uses Retrieval-Augmented Generation to deliver verifiable research results with built-in cost tracking and resilient API architecture.",
    images: [lumeEmerald, lumeAmber, lumeIntent, lumeRag, lumeFinops],
    github: "https://github.com/naresh-kamarthy/lume-research-engine",
    detail: {
      title: "LUME Research Engine",
      overview: "A self-healing AI research engine that uses Retrieval-Augmented Generation to deliver grounded, verifiable research results with built-in cost tracking, resilient API fallback, and comprehensive observability.",
      problem: "AI research tools often produce unverifiable, hallucinated results with no cost visibility. LUME addresses this by grounding every response in retrievable sources and tracking every API token spent.",
      capabilities: [
        "RAG pipeline with grounded retrieval and source verification",
        "FinOps cost tracking with per-query token and cost monitoring",
        "Self-healing architecture with automatic retry and fallback",
        "Intent extraction for precise query understanding",
      ],
      architecture: [
        "Layered retrieval pipeline with intent extraction → search → synthesis",
        "Self-healing API layer with circuit breaker and exponential backoff",
        "Real-time FinOps dashboard with cost aggregation",
      ],
      engineeringImpact: [],
      systemFlow: ["User Query", "Intent Extraction", "RAG Retrieval", "AI Synthesis", "Verified Output"],
      techStack: ["React", "TypeScript", "Gemini API", "RAG", "Tailwind CSS", "Vite"],
      portfolioValue: "Demonstrates production-minded engineering with cost-aware AI systems, resilient architecture, and the ability to build research-grade tools with real observability.",
      github: "https://github.com/naresh-kamarthy/lume-research-engine",
    },
  },
  {
    slug: "uxmind-ai",
    icon: Eye,
    title: "UXMind AI",
    tagline: "AI-powered UX auditor that turns screenshots into actionable usability reports.",
    description: "Analyzes uploaded UI screenshots using AI vision to generate comprehensive accessibility and design improvement reports with interactive annotations.",
    images: [uxmindDashboard, uxmindThinking, uxmindOverlay, uxmindImprovements, uxmindReport],
    github: "https://github.com/naresh-kamarthy/uxmind-ai",
    detail: {
      title: "UXMind AI",
      overview: "An AI-powered UX auditing tool that analyzes uploaded UI screenshots and generates comprehensive usability, accessibility, and design improvement reports with interactive overlay annotations.",
      problem: "UX reviews are expensive, slow, and often subjective. UXMind democratizes UX analysis by using AI vision to instantly evaluate any interface against usability heuristics and WCAG accessibility guidelines.",
      capabilities: [
        "AI vision-based screenshot analysis with multimodal Gemini integration",
        "Interactive overlay proof with element-level annotation feedback",
        "Comprehensive accessibility scoring against WCAG guidelines",
        "Professional report export for sharing with stakeholders",
      ],
      architecture: [
        "Multimodal AI pipeline processing images through Gemini vision API",
        "Interactive canvas overlay system for element-level feedback",
        "Report generation engine with exportable professional documents",
      ],
      engineeringImpact: [],
      systemFlow: ["UI Screenshot", "Gemini Vision API", "Heuristic Analysis", "Overlay Annotations", "Report Export"],
      techStack: ["React", "TypeScript", "Gemini API", "Canvas API", "Accessibility", "Tailwind CSS"],
      portfolioValue: "Demonstrates expertise in accessibility engineering, AI vision integration, and the ability to build professional-grade analysis tools that serve real UX/design workflows.",
      github: "https://github.com/naresh-kamarthy/uxmind-ai",
    },
  },
];

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
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  },
};

interface Props {
  repos: GitHubRepo[];
}

// Memoised card — stable across drawer open/close cycles
const FeaturedCard = memo(
  ({
    project,
    onDetails,
  }: {
    project: FeaturedProject;
    onDetails: (detail: ProjectDetail) => void;
  }) => (
    <motion.div variants={item} className="h-full">
      <div className="group gradient-border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-400 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02] hover:-translate-y-[6px]">
        <div className="overflow-hidden relative h-48 sm:h-56">
          <div className="transition-transform duration-700 group-hover:scale-110 h-full">
            <ProjectCarousel images={project.images} alt={project.title} />
          </div>
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-1 bg-background/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <project.icon className="w-4 h-4 text-primary shrink-0" />
            <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
            <span className="inline-flex items-center gap-1 ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary font-medium tracking-tight">
              <Star className="w-3 h-3" /> Featured
            </span>
          </div>
          <p className="text-xs text-muted-foreground/70 mb-3 leading-relaxed font-medium">{project.tagline}</p>
          <div className="mb-6 flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
            <div className="text-[11px] text-primary/80 font-medium px-2 py-1 rounded bg-primary/5 inline-block border border-primary/10">
              {project.slug === "nexus-ui-orchestrator" && "• Reduced schema processing time using optimized JSON parsing"}
              {project.slug === "aether-flow" && "• Improved AI response accuracy with retrieval-based context injection"}
              {project.slug === "lume-research-engine" && "• Designed scalable UI for handling large structured datasets"}
              {project.slug === "uxmind-ai" && "• Improved report generation efficiency through async heuristic analysis"}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs font-semibold text-foreground hover:border-primary/40 transition-all hover:scale-[1.03]"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <button
              onClick={() => onDetails(project.detail)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-all hover:scale-[1.03]"
            >
              <Info className="w-4 h-4" /> Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
);

FeaturedCard.displayName = "FeaturedCard";

interface Props {
  repos: GitHubRepo[];
}

const FeaturedProjectsSection = ({ repos }: Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <>
      <section id="projects" className="py-24 section-container">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-14">
            AI-powered tools and platforms I've designed and built
          </p>
        </FadeIn>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <FeaturedCard
              key={project.title}
              project={project}
              onDetails={setSelectedProject}
            />
          ))}
        </motion.div>
      </section>
      <ProjectDetailDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export { FEATURED_SLUGS };
export default FeaturedProjectsSection;
