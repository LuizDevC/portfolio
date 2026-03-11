import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectCarousel />
      <ContactSection />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border space-y-2">
        <p>© {new Date().getFullYear()} Luiz Ricardo</p>
        <p>Desenvolvedor Web • React • Node.js • TypeScript</p>

        <div className="flex justify-center gap-4 text-muted-foreground">

          <a
            href="https://github.com/LuizDevC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/luiz-ricardo-ti/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>

        </div>
      </footer>
    </div>
  );
};

export default Index;
