import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass-card rounded-full px-6 py-3">
        <span className="font-heading text-xl font-bold text-gradient">
          Luiz Ricardo | Portfólio
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#projetos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Contato
          </a>
          <a
            href="#contato"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Fale comigo
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
