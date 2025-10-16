import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              <span className="block text-accent">Dias Pires Advocacia</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Soluções jurídicas especializadas com foco na excelência e dedicação. 
              Expertise em Direito Tributário, Empresarial, Família, Civil, Trabalho e Previdenciário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" size="lg" className="group bg-primary hover:bg-primary/90">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="w-5 h-5" />
                (43) 99627-3131
              </Button>
            </div>
            <div className="pt-8 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Consulta inicial gratuita
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Atendimento 24/7 para emergências
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Atendimento humanizado e personalizado
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl transform scale-105"></div>
            <img
              src={heroImage}
              alt="Escritório de advocacia profissional"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="absolute top-6 right-6 bg-accent/10 backdrop-blur-sm rounded-lg p-4 border border-accent/20">
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-accent-foreground">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;