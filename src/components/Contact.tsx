import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send
} from "lucide-react";

// Unified contact phone constant
const CONTACT_PHONE = "(43) 99627-3131";

const Contact = () => {
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [sending, setSending] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      details: [
        "Avenida Independência, n.º 1.315",
        "Centro - Bela Vista do Paraíso-PR",
        "Atendimento mediante agendamento"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      details: [
        CONTACT_PHONE,
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
        "Atendimento personalizado"
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      alert('Por favor, concorde com a Política de Privacidade antes de enviar.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form as HTMLFormElement);
    const data: Record<string, any> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // attach consent explicitly
    data.consent = agreedToPrivacy;
    data.source = window.location.pathname; // salva a origem/slug da página

    try {
      setSending(true);
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || 'Erro ao enviar a mensagem');
      }

      alert('Mensagem enviada com sucesso. Entraremos em contato em breve.');
      form.reset();
      setAgreedToPrivacy(false);
    } catch (err: any) {
      console.error('Contact form error:', err);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato para agendar uma consulta e discutir seu caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <MessageSquare className="w-6 h-6 mr-3 text-accent" />
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Nome Completo</label>
                    <Input name="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">E-mail</label>
                    <Input name="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Telefone</label>
                    <Input name="phone" placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Área de Interesse</label>
                    <select name="areaOfInterest" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option value="">Selecione uma área</option>
                      <option>Planejamento Tributário</option>
                      <option>Defesa em Autuação</option>
                      <option>Regularização Fiscal / Parcelamento</option>
                      <option>Tributação Rural / Agronegócio</option>
                      <option>Consultoria Empresarial</option>
                      <option>Direito Tributário</option>
                      <option>Direito Empresarial</option>
                      <option>Direito de Família e Sucessões</option>
                      <option>Direito Civil</option>
                      <option>Direito do Trabalho</option>
                      <option>Direito Previdenciário</option>
                    </select>
                  </div>
                </div>

                {/* New qualification fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Pessoa</label>
                    <select name="personType" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option value="">Selecione</option>
                      <option>Pessoa Física</option>
                      <option>Pessoa Jurídica</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Já possui CNPJ ativo?</label>
                    <select name="hasCNPJ" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option value="">Selecione</option>
                      <option>Sim</option>
                      <option>Não</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 md:mt-0">
                  <label className="text-sm font-medium text-primary">Atividade rural?</label>
                  <select name="isRural" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option value="">Selecione</option>
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Mensagem</label>
                  <Textarea name="message" 
                    placeholder="Descreva brevemente seu caso ou dúvida..." 
                    className="min-h-[120px]"
                  />
                </div>

                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    Entraremos em contato em até 2 horas durante o horário comercial.
                  </p>
                </div>

                {/* LGPD Checkbox */}
                <div className="flex items-start space-x-3 mb-4">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    name="consent"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="w-4 h-4 mt-1 rounded border-gray-300 cursor-pointer"
                  />
                  <label htmlFor="privacy-consent" className="text-sm text-muted-foreground cursor-pointer">
                    Concordo com o tratamento dos meus dados conforme a{" "}
                    <Link to="/politica-de-privacidade" className="text-accent hover:underline">
                      Política de Privacidade
                    </Link>
                  </label>
                </div>

                <Button 
                  type="submit"
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!agreedToPrivacy || sending}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {sending ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/30 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <div className="text-accent">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
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
            <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold text-primary">
                    Atendimento de Emergência
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Para casos urgentes que necessitam atenção imediata, 
                  estamos disponíveis 24 horas por dia.
                </p>
                <Button variant="contact" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar: {CONTACT_PHONE}
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
