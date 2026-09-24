import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Repeat, Shield, FileText, Wheat, Briefcase, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const cards = [
  { icon: <Building className="w-8 h-8" />, title: "Planejamento Tributário", text: "Análise da estrutura tributária da empresa ou da atividade rural, com avaliação de alternativas lícitas de organização fiscal (elisão fiscal)." },
  { icon: <Repeat className="w-8 h-8" />, title: "Transição de Regime Tributário", text: "Avaliação técnica para migração entre Simples Nacional, Lucro Presumido e Lucro Real, conforme o perfil de faturamento e atividade." },
  { icon: <Shield className="w-8 h-8" />, title: "Defesas em Autuações Fiscais", text: "Atuação administrativa e judicial em processos de autuação municipal, estadual e federal." },
  { icon: <FileText className="w-8 h-8" />, title: "Parcelamentos Fiscais", text: "Análise e condução de pedidos de parcelamento de débitos tributários (Refis municipal, estadual e federal, conforme disponibilidade vigente)." },
  { icon: <Wheat className="w-8 h-8" />, title: "Tributação do Agronegócio", text: "Acompanhamento tributário de atividades rurais, incluindo ITR e regime de apuração aplicável à pessoa física e à pessoa jurídica rural." },
  { icon: <Briefcase className="w-8 h-8" />, title: "Consultoria Empresarial", text: "Suporte jurídico para abertura, reorganização societária e compliance tributário de empresas." },
];

const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

const DireitoTributario = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Direito Tributário e Empresarial</h1>
          <p className="text-xl text-foreground/80 font-light leading-relaxed mb-10">
            Atuação técnica em planejamento tributário, defesa em autuações e consultoria empresarial para empresas e produtores rurais.
          </p>
          <Button size="lg" onClick={scrollToContact} className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-7 tracking-wide">
            Agendar Consulta
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          <p className="mt-8 text-sm text-muted-foreground tracking-wide">Dr. Ricardo Alvin Pires — OAB/PR nº 58.332</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Empresas e produtores rurais</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Atuação voltada a empresas de pequeno e médio porte e a produtores rurais que precisam de acompanhamento tributário contínuo — desde a definição do regime de tributação até a defesa em processos administrativos e judiciais.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <Card key={c.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/30">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="text-accent">{c.icon}</div>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">{c.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{c.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Reforma Tributária — o que está em vigor e o que ainda está em transição</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A Emenda Constitucional nº 132/2023 iniciou a substituição gradual de PIS, COFINS, ICMS e ISS pelo IBS e pela CBS, com período de transição definido em lei complementar. Empresas e produtores rurais que já se organizam para essa mudança tendem a enfrentar menor impacto operacional quando as novas regras entrarem em vigor de forma plena.
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Falar sobre a transição da Reforma Tributária
          </Button>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
);

export default DireitoTributario;
