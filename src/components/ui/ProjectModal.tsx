import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    tools: string;
    description: string;
    image: string;
    features?: string[];
    role?: string;
    outcomes?: string[];
    liveUrl?: string;
    codeUrl?: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
          aria-label="Close project details"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>

          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <DialogTitle className="text-2xl md:text-3xl">{project.title}</DialogTitle>
                <Badge variant="secondary" className="w-fit">
                  {project.category}
                </Badge>
              </div>
            </div>
            <DialogDescription className="text-base mt-4">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {project.role && (
            <div>
              <h4 className="font-semibold mb-2">Role</h4>
              <p className="text-sm text-muted-foreground">{project.role}</p>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <p className="text-sm text-cyber-secondary terminal-text">&gt; {project.tools}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyber-primary mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Outcomes & Metrics</h4>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cyber-secondary mt-1">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {project.liveUrl && (
              <Button asChild variant="default">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.codeUrl && (
              <Button asChild variant="outline">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
