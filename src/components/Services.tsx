import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Gavel, 
  Building, 
  FileText, 
  Shield,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Direito Tributário",
      description: "Consultoria e defesa em questões tributárias complexas.",
      features: ["Planejamento tributário", "Elisão fiscal", "Defesas em autuações", "Parcelamentos fiscais"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas, contratos e sociedades.",
      features: ["Abertura de empresas", "Contratos comerciais", "Recuperação judicial", "Compliance"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Direito de Família e Sucessões",
      description: "Divórcio, guarda, sucessões e planejamento sucessório.",
      features: ["Divórcio consensual", "Inventário", "Testamentos", "Planejamento sucessório"]
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos reais e obrigações.",
      features: ["Contratos em geral", "Indenizações", "Direito imobiliário", "Responsabilidade civil"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direito do Trabalho",
      description: "Direitos trabalhistas, rescisões e relações de trabalho.",
      features: ["Ações trabalhistas", "FGTS e PIS", "Rescisões contratuais", "Assédio moral"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Direito Previdenciário",
      description: "Benefícios previdenciários e aposentadorias.",
      features: ["Aposentadorias", "Auxílios", "Pensões", "Revisão de benefícios"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados com foco na excelência 
            e na defesa integral dos interesses dos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/30"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="text-accent">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group/btn justify-between">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="professional" size="lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;