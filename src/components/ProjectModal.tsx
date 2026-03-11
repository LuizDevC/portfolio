import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Project } from "./ProjectCarousel";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="glass-card max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base pt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg aspect-video object-cover"
        />

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button asChild className="w-full mt-2">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Acessar projeto
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
