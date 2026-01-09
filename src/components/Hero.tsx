import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Escritório de advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Advocacia especializada há mais de 10 anos</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            <span className="block">Dias Pires</span>
            <span className="block text-accent">Advocacia</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Soluções jurídicas especializadas com foco na excelência e dedicação. 
            Expertise em Direito Tributário, Empresarial, Família, Civil, Trabalho e Previdenciário.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://wa.me/5543996273131" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:+5543996273131">
              <Button variant="outline" size="lg" className="group w-full sm:w-auto text-lg px-8 py-6 border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50">
                <Phone className="w-5 h-5 mr-2" />
                (43) 99627-3131
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Consulta inicial gratuita</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">Atendimento humanizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats floating card */}
      <div className="absolute bottom-10 right-10 hidden lg:flex gap-8 p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-md">
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground">10+</div>
          <div className="text-sm text-muted-foreground">Anos de Experiência</div>
        </div>
        <div className="w-px bg-border/50"></div>
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground">100+</div>
          <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;