import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Mail, 
  Phone,
  GraduationCap,
  Scale
} from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. João Silva",
      role: "Sócio Fundador",
      specialization: "Direito Civil e Criminal",
      experience: "25 anos de experiência",
      education: "Doutor em Direito - USP",
      description: "Especialista em casos complexos de direito civil e criminal, com ampla experiência em júri popular.",
      achievements: ["OAB/SP desde 1998", "Mais de 500 casos vencidos", "Professor universitário"]
    },
    {
      name: "Dra. Maria Santos",
      role: "Sócia",
      specialization: "Direito Trabalhista e Previdenciário",
      experience: "18 anos de experiência",
      education: "Mestre em Direito do Trabalho - PUC",
      description: "Referência em direito trabalhista, com foco em grandes ações e questões previdenciárias.",
      achievements: ["Especialista em TST", "Palestrante nacional", "Consultora empresarial"]
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Advogado Senior",
      specialization: "Direito Empresarial",
      experience: "15 anos de experiência",
      education: "MBA em Direito Empresarial - FGV",
      description: "Especialista em direito societário e recuperação judicial, atendendo grandes empresas.",
      achievements: ["Consultor jurídico", "Especialista em M&A", "Compliance Officer"]
    },
    {
      name: "Dra. Ana Costa",
      role: "Advogada",
      specialization: "Direito de Família",
      experience: "12 anos de experiência",
      education: "Especialista em Direito de Família - Mackenzie",
      description: "Dedicada ao direito de família, com abordagem humanizada e foco na mediação.",
      achievements: ["Mediadora certificada", "Especialista em guarda", "Conselheira tutelar"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais altamente qualificados e especializados, prontos para 
            defender seus direitos com dedicação e expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-accent/30">
              <CardHeader className="text-center pb-4">
                {/* Avatar placeholder with initials */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialization}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Scale className="w-4 h-4 mr-2 text-accent" />
                    {member.experience}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 mr-2 text-accent" />
                    {member.education}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Principais Conquistas:</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="icon" className="hover:text-accent">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-accent">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-accent">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-8 text-center">
              <Scale className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Fale com Nossa Equipe
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para uma consulta personalizada. 
                Nossos especialistas estão prontos para analisar seu caso.
              </p>
              <Button variant="professional" size="lg">
                Agendar Consulta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;