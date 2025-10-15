import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-bold">Dias Pires<br/>Advocacia</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Soluções jurídicas especializadas com foco na excelência e dedicação. 
              Seu direito é a nossa prioridade.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-accent font-semibold">Registro OAB/PR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-2 group-hover:bg-accent transition-colors"></div>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start">
                <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2"></div>
                Direito Tributário
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2"></div>
                Direito Empresarial
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2"></div>
                Direito de Família
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2"></div>
                Direito Civil
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2"></div>
                Direito do Trabalho
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2"></div>
                Direito Previdenciário
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-primary-foreground/70">
                  <div>Av. Independência, 1.315</div>
                  <div>Centro - Bela Vista do Paraíso - PR</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-primary-foreground/70">(43) 99902-2629</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-4 h-4 mt-1 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-primary-foreground/70 break-all">juridico@diaspiresadvocacia.com.br</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <Clock className="w-4 h-4 mt-1 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-primary-foreground/70">
                  <div>Seg - Sex: 8h às 18h</div>
                  <div className="text-accent font-semibold">Emergências: 24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Dias Pires Advocacia. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <div className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full">
                <span className="text-accent font-semibold text-xs">
                  Consulta inicial gratuita
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;