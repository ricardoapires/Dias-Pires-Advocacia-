import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Calendar, 
  TrendingUp,
  CheckCircle
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Sobre o Dias Pires Advocacia
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O Dias Pires Advocacia oferece soluções jurídicas especializadas,
                sempre priorizando a excelência no atendimento e a defesa dos 
                interesses dos nossos clientes.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe é especializada nas mais diversas áreas do direito, 
                oferecendo atendimento personalizado e estratégias jurídicas eficazes
                para cada caso específico.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com foco na transparência e ética profissional, construímos 
                relacionamentos sólidos baseados na confiança e resultados efetivos.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Nossos Princípios:
              </h3>
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{principle}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button variant="professional" size="lg">
                Conheça Nossa Equipe
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/30 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
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
            
            {/* Mission Card */}
            <Card className="col-span-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Nossa Missão
                </h3>
                <p className="text-sm text-muted-foreground">
                  Garantir que cada cliente tenha acesso à justiça com qualidade, 
                  ética e dedicação integral em todos os momentos do processo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;