import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectModal from "./ProjectModal";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Landing Page Corporativa",
    image: project1,
    description:
      "Uma landing page moderna para uma empresa de personalizados, com animações suaves e design responsivo.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    url: "https://speedpersonalizadosbh.com.br/",
  },
  {
    id: 2,
    title: "Gerador de BOPM para RP",
    image: project2,
    description:
      "Ferramenta criada para servidores de Roleplay policial que automatiza a criação de boletins de ocorrência (BOPM), reduzindo o tempo de preenchimento e padronizando os relatórios da equipe.",
    technologies: ["TypeScript", "React", "TailwindCSS", "Supabase"],
    url: "https://bopmcaep.netlify.app/",
  },
  {
    id: 3,
    title: "Sistema de Relatório de Serviço",
    image: project3,
    description:
      "Sistema desenvolvido para otimizar o controle de patrulhamento em servidores RP policiais, permitindo registrar início e término de serviço e enviar automaticamente os dados para o Discord.",
    technologies: ["React", "TypeScript", "Supabase", "TypeScript", "Node.js", "Discord Webhook"],
    url: "https://relatorio-automatizado.vercel.app/",
  },
  {
    id: 4,
    title: "Gerador de BOPM | 35BPM",
    image: project4,
    description:
      "Ferramenta criada para servidores de Roleplay policial que automatiza a criação de boletins de ocorrência (BOPM), reduzindo o tempo de preenchimento e padronizando os relatórios da equipe.",
    technologies: ["TypeScript", "React", "TailwindCSS"],
    url: "https://bopm35bpm.netlify.app/",
  },
];

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Projetos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Uma seleção dos meus trabalhos mais recentes e relevantes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: project.id * 0.1 }}
                    className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                      <span className="font-heading text-lg font-semibold text-foreground">
                        {project.title}
                      </span>
                      <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        Ver projeto
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3 mt-8 justify-center">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectCarousel;
