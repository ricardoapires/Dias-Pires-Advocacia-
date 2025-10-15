import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Text Content - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">Escritório Especializado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-primary">Excelência</span>
              <br />
              <span className="text-accent">Jurídica</span>
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Dias Pires Advocacia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Soluções jurídicas especializadas com foco na excelência e dedicação. 
                Expertise em Direito Tributário, Empresarial, Família, Civil, Trabalho e Previdenciário.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="premium" size="lg" className="group">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero" size="lg" className="group">
                <Phone className="w-5 h-5" />
                (43) 99902-2629
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Anos Experiência</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Emergências</div>
              </div>
            </div>
          </div>

          {/* Image - Takes 2 columns */}
          <div className="lg:col-span-2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={heroImage}
                alt="Escritório de advocacia profissional"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;