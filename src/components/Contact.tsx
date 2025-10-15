import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      details: [
        "Londrina - PR",
        "Atendimento presencial",
        "mediante agendamento"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      details: [
        "(43) 99902-2629",
        "WhatsApp disponível",
        "Atendimento personalizado"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      details: [
        "juridico@diaspiresadvocacia.com.br",
        "Resposta em até 24h",
        "Consulta inicial gratuita"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Funcionamento",
      details: [
        "Segunda à Sexta: 8h às 18h",
        "Sábado: 9h às 13h",
        "Emergências: 24h"
      ]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para ajudá-lo. Entre em contato conosco e agende 
            sua consulta gratuita para discutir seu caso
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-primary text-2xl">
                  <MessageSquare className="w-7 h-7 mr-3 text-accent" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Nome Completo</label>
                    <Input placeholder="Seu nome completo" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-background" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Telefone</label>
                    <Input placeholder="(11) 99999-9999" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Área de Interesse</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option>Selecione uma área</option>
                      <option>Direito Tributário</option>
                      <option>Direito Empresarial</option>
                      <option>Direito de Família e Sucessões</option>
                      <option>Direito Civil</option>
                      <option>Direito do Trabalho</option>
                      <option>Direito Previdenciário</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva brevemente seu caso ou dúvida..." 
                    className="min-h-[140px] bg-background"
                  />
                </div>

                <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-5 border border-accent/20">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-accent">Consulta Gratuita:</strong> A primeira consulta é sempre gratuita. 
                      Entraremos em contato em até 2 horas durante o horário comercial.
                    </p>
                  </div>
                </div>

                <Button variant="premium" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/50 transition-all group bg-card/50 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="text-accent">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="border-accent/40 bg-gradient-to-br from-accent/15 to-accent/5 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">
                    Atendimento de Emergência
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Para casos urgentes que necessitam atenção imediata, 
                  estamos disponíveis 24 horas por dia.
                </p>
                <Button variant="contact" className="w-full group">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora: (43) 99902-2629
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;