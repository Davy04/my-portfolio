
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, ExternalLink, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="container-section bg-secondary/30 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-primary w-6 h-6" />
        <h2 className="section-title">{t.projects.title}</h2>
      </div>
      
      <p className="max-w-2xl mb-10 text-lg">{t.projects.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((project, i) => (
          <div key={i} className="card h-full flex flex-col justify-between overflow-hidden">
            <div>
              <div className="mb-4 overflow-hidden rounded-t-lg -mx-6 -mt-6">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Button asChild variant="outline" size="sm" className="w-fit">
              <a href={project.link} className="flex items-center gap-2">
                {t.projects.viewProject}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
