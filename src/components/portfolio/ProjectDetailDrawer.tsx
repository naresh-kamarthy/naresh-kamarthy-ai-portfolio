import { X, Github, Layers, Lightbulb, Wrench, Target, Star, ArrowRight, Workflow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectDetail {
  title: string;
  overview: string;
  problem: string;
  capabilities: string[];
  architecture: string[];
  engineeringImpact: string[];
  systemFlow: string[];
  techStack: string[];
  portfolioValue: string;
  github: string;
}

interface Props {
  project: ProjectDetail | null;
  onClose: () => void;
}

const Section = ({ icon: Icon, title, children }: { icon: typeof Layers; title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4 text-primary" />
      <h4 className="font-semibold text-foreground text-sm">{title}</h4>
    </div>
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-1.5">
    {items.map((item) => (
      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const SystemFlowDiagram = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
    {steps.map((step, i) => (
      <div key={step} className="flex items-center gap-1.5 sm:gap-2">
        <div className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-[11px] sm:text-xs font-mono text-primary whitespace-nowrap">
          {step}
        </div>
        {i < steps.length - 1 && (
          <ArrowRight className="w-3 h-3 text-primary/40 shrink-0" />
        )}
      </div>
    ))}
  </div>
);

const ProjectDetailDrawer = ({ project, onClose }: Props) => (
  <AnimatePresence>
    {project && (
      <>
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <Section icon={Layers} title="Overview">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
            </Section>

            {project.problem && (
              <Section icon={Target} title="Problem It Solves">
                <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
              </Section>
            )}

            {project.capabilities.length > 0 && (
              <Section icon={Lightbulb} title="Key Capabilities">
                <BulletList items={project.capabilities} />
              </Section>
            )}

            {project.architecture.length > 0 && (
              <Section icon={Wrench} title="Architecture Highlights">
                <BulletList items={project.architecture} />
              </Section>
            )}

            {project.systemFlow.length > 0 && (
              <Section icon={Workflow} title="System Flow">
                <SystemFlowDiagram steps={project.systemFlow} />
              </Section>
            )}

            {project.portfolioValue && (
              <Section icon={Star} title="Portfolio Value">
                <p className="text-sm text-muted-foreground leading-relaxed">{project.portfolioValue}</p>
              </Section>
            )}

            <Section icon={Layers} title="Tech Stack">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </Section>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_24px_hsl(225_75%_62%/0.25)] transition-all duration-300 mt-2"
            >
              <Github className="w-4 h-4" /> View on GitHub
            </a>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default ProjectDetailDrawer;
