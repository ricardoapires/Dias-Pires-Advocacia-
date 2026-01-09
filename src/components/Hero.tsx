import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Scale, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";
import logoImage from "@/assets/logo-dias-pires.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Escritório de advocacia"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Logo */}
            <div className="mb-8 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-foreground/5 to-transparent blur-xl"></div>
              <img 
                src={logoImage} 
                alt="Dias Pires Advocacia" 
                className="h-32 md:h-40 w-auto relative"
              />
            </div>

            {/* Elegant divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-foreground/50"></div>
              <Scale className="w-5 h-5 text-foreground/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-foreground/50"></div>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-6">
              Excelência Jurídica desde 2014
            </p>

            {/* Description */}
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 max-w-2xl font-light">
              Soluções jurídicas especializadas com foco na excelência e dedicação. 
              Expertise em Direito Tributário, Empresarial, Família, Civil, Trabalho e Previdenciário.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="https://wa.me/5543996273131" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-7 tracking-wide">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Agende sua Consulta
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+5543996273131">
                <Button variant="outline" size="lg" className="group w-full sm:w-auto text-lg px-10 py-7 border-foreground/20 bg-background/30 backdrop-blur-md hover:bg-background/50 tracking-wide">
                  <Phone className="w-5 h-5 mr-3" />
                  (43) 99627-3131
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-foreground/10 bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-foreground/70" />
                </div>
                <span className="text-foreground/80 font-medium">Consulta Gratuita</span>
                <span className="text-sm text-muted-foreground">Primeira avaliação sem custo</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-foreground/10 bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-foreground/70" />
                </div>
                <span className="text-foreground/80 font-medium">Atendimento 24/7</span>
                <span className="text-sm text-muted-foreground">Suporte quando você precisar</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-foreground/10 bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Users className="w-5 h-5 text-foreground/70" />
                </div>
                <span className="text-foreground/80 font-medium">Atendimento Humanizado</span>
                <span className="text-sm text-muted-foreground">Foco no cliente</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-foreground/10 bg-background/40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-around py-8 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Anos de Experiência</div>
            </div>
            <div className="hidden md:block w-px bg-foreground/20"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">100+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Clientes Atendidos</div>
            </div>
            <div className="hidden md:block w-px bg-foreground/20"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">6</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Áreas de Atuação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;