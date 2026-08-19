import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

// Unified contact phone constant
const CONTACT_PHONE = "(43) 99627-3131";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <a href="#home">
              <img 
                src={logoLight} 
                alt="Dias Pires Advocacia" 
                className="h-16 w-auto"
              />
            </a>
            <p className="text-primary-foreground/80 text-sm">
              Escritório de advocacia atuante em Direito Tributário, Empresarial, Família e Sucessões, Civil, Trabalho e Previdenciário.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-accent font-medium">OAB/PR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Direito Tributário</li>
              <li className="text-primary-foreground/80">Direito Empresarial</li>
              <li className="text-primary-foreground/80">Direito de Família e Sucessões</li>
              <li className="text-primary-foreground/80">Direito Civil</li>
              <li className="text-primary-foreground/80">Direito do Trabalho</li>
              <li className="text-primary-foreground/80">Direito Previdenciário</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Avenida Independência, n.º 1.315 - Centro</div>
                  <div>Bela Vista do Paraíso - PR</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">juridico@diaspiresadvocacia.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 text-accent" />
                <div className="text-primary-foreground/80">
                  <div>Seg - Sex: 8h às 18h</div>
                  <div>Emergências: 24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Dias Pires Advocacia. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/politica-de-privacidade" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
