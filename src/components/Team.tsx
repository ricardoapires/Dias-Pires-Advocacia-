import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Mail, 
  Phone,
  GraduationCap,
  Scale
} from "lucide-react";
import fotoRenata from "@/assets/foto-renata.png";
import fotoRicardo from "@/assets/foto-ricardo.png";

const Team = () => {
  const team = [
    {
      name: "Dra. Renata Lígia Moreira Dias Pires",
      oab: "OAB/PR nº 121.511",
      role: "Sócia Fundadora",
      specialization: "Direito de Família e Previdenciário",
      experience: "Atuação em Direito de Família e Sucessões",
      education: "Atuação em Direito de Família e Sucessões",
      description: "Atuação em Direito de Família e Sucessões, incluindo divórcio, inventário, testamentos e planejamento sucessório.",
      achievements: ["Divórcio consensual", "Inventário", "Testamentos", "Planejamento sucessório"]
    },
    {
      name: "Dr. Ricardo Alvin Pires",
      oab: "OAB/PR nº 58.332",
      role: "Consultor e Advogado",
      specialization: "Direito Tributário e Empresarial",
      experience: "Atuação em Direito Tributário e Empresarial",
      education: "Atuação em Direito Tributário",
      description: "Atuação em planejamento tributário e consultoria empresarial para empresas.",
      achievements: ["Planejamento tributário", "Consultoria empresarial", "Defesa em autuações"]
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-accent/30">
              <CardHeader className="text-center pb-4">
                <img
                  src={index === 0 ? fotoRenata : fotoRicardo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-border"
                />
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">{member.oab}</p>
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
                  <h4 className="text-sm font-semibold text-primary">Áreas de Atuação:</h4>
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
                Entre em contato conosco para agendar uma consulta e apresentar seu caso.
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
