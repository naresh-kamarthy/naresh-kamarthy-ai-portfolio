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
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98]
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
      <div className="group glass-premium rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-3 border border-white/5 hover:border-primary/30">
        <div className="overflow-hidden relative h-48 sm:h-64">
          <motion.div
            className="h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCarousel images={project.images} alt={project.title} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
        <div className="p-6 sm:p-8 flex flex-col flex-1 relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:rotate-12" />
              </div>
              <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-extrabold tracking-widest uppercase border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
              <Star className="w-3 h-3 fill-primary" /> Featured
            </span>
          </div>
          <p className="text-sm text-balance text-muted-foreground/90 mb-6 leading-relaxed font-semibold italic tracking-tight">{project.tagline}</p>
          <div className="mb-6 flex-1">
            <p className="text-sm text-muted-foreground/90 leading-relaxed mb-4">{project.description}</p>
            <div className="text-[11px] text-primary/90 font-mono px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
              {project.slug === "nexus-ui-orchestrator" && "• Reduced schema processing time using optimized JSON parsing"}
              {project.slug === "aether-flow" && "• Improved AI response accuracy with retrieval-based context injection"}
              {project.slug === "lume-research-engine" && "• Designed scalable UI for handling large structured datasets"}
              {project.slug === "uxmind-ai" && "• Improved report generation efficiency through async heuristic analysis"}
            </div>
          </div>
          <div className="flex gap-4 mt-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass text-xs font-bold text-foreground border border-white/5 hover:border-primary/40 transition-all shadow-xl hover:shadow-primary/10"
            >
              <Github className="w-4 h-4" /> GitHub
            </motion.a>
            <motion.button
              onClick={() => onDetails(project.detail)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:shadow-[0_5px_20px_hsl(var(--primary)/0.4)] transition-all"
            >
              <Info className="w-4 h-4" /> Details
            </motion.button>
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
