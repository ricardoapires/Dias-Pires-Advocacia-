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
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Nossas Especialidades</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos serviços jurídicos especializados com foco na excelência 
            e na defesa integral dos interesses dos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-accent">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group/btn justify-between text-accent hover:bg-accent/10">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="premium" size="lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;