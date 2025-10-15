import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Calendar, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "100%",
      label: "Dedicação aos Clientes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "6",
      label: "Áreas de Atuação"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: "24h",
      label: "Resposta Inicial"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "Gratuita",
      label: "Primeira Consulta"
    }
  ];

  const principles = [
    "Transparência total em todos os processos",
    "Comunicação clara e constante com o cliente",
    "Estratégias jurídicas personalizadas",
    "Ética profissional como base de tudo",
    "Resultados efetivos e duradouros"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stats Cards - First on desktop */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <div className="text-accent">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Mission Card */}
              <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Nossa Missão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantir que cada cliente tenha acesso à justiça com qualidade, 
                    ética e dedicação integral em todos os momentos do processo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content - Second on desktop */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">Quem Somos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Sobre o Dias Pires Advocacia
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O Dias Pires Advocacia oferece soluções jurídicas especializadas,
                sempre priorizando a excelência no atendimento e a defesa dos 
                interesses dos nossos clientes.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nossa equipe é especializada nas mais diversas áreas do direito, 
                oferecendo atendimento personalizado e estratégias jurídicas eficazes
                para cada caso específico.
              </p>
              <p>
                Com foco na transparência e ética profissional, construímos 
                relacionamentos sólidos baseados na confiança e resultados efetivos.
              </p>
            </div>

            <div className="space-y-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-accent mr-3" />
                Nossos Princípios
              </h3>
              <div className="space-y-3">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button variant="premium" size="lg" className="group">
                Conheça Nossa Equipe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;