import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "5531996371223";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Entre em contato para discutir seu próximo projeto.
          </p>

          <div className="glass-card rounded-2xl p-8 inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium font-heading">
                +55 (31) 99637-1223
              </span>
            </div>

            <Button asChild size="lg" className="gap-2">
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
