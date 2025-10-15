import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Mail, 
  Phone,
  GraduationCap,
  Scale,
  ArrowRight
} from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dra. Renata Lígia Moreira Dias Pires",
      role: "Sócia Fundadora",
      specialization: "Direito Tributário e Empresarial",
      experience: "Ampla experiência em direito tributário",
      education: "Especialista em Direito Tributário",
      description: "Especialista em planejamento tributário e consultoria empresarial, com foco em soluções personalizadas para empresas.",
      achievements: ["Especialista em Direito Tributário", "Consultoria empresarial", "Planejamento fiscal"]
    },
    {
      name: "Dr. Ricardo Alvin Pires",
      role: "Sócio",
      specialization: "Direito de Família e Previdenciário",
      experience: "Vasta experiência em direito de família",
      education: "Especialista em Direito de Família e Sucessões",
      description: "Dedicado ao direito de família e sucessões, oferecendo soluções eficazes e humanizadas para questões familiares.",
      achievements: ["Especialista em sucessões", "Mediação familiar", "Direito previdenciário"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Especialistas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground">
            Profissionais altamente qualificados e especializados, prontos para 
            defender seus direitos com dedicação e expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Accent bar on top */}
              <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
              
              <CardHeader className="text-center pb-4 pt-8">
                {/* Photo placeholder with gradient border */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-xl"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-muted to-secondary border-4 border-accent/20 rounded-full flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    <Scale className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-2">
                  <p className="text-accent font-semibold text-sm">{member.role}</p>
                </div>
                <p className="text-muted-foreground">{member.specialization}</p>
              </CardHeader>
              
              <CardContent className="space-y-6 px-6 pb-8">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start text-sm bg-secondary/50 rounded-lg p-3">
                    <Scale className="w-4 h-4 mr-2 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{member.experience}</span>
                  </div>
                  <div className="flex items-start text-sm bg-secondary/50 rounded-lg p-3">
                    <GraduationCap className="w-4 h-4 mr-2 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{member.education}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-2 bg-accent/5 rounded-lg p-4 border border-accent/10">
                  <h4 className="text-sm font-bold text-primary mb-3">Principais Conquistas</h4>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-accent hover:bg-accent/10">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-accent/30 bg-gradient-to-br from-accent/10 via-accent/5 to-primary/5 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scale className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Fale com Nossa Equipe
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para uma consulta personalizada. 
                Nossos especialistas estão prontos para analisar seu caso.
              </p>
              <Button variant="premium" size="lg" className="group">
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;