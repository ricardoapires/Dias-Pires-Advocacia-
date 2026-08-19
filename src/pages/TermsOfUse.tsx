import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o início
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 19 de agosto de 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                1. Aceitação
              </h2>
              <p>
                Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos não utilizar o site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                2. Natureza do conteúdo
              </h2>
              <p>
                O conteúdo disponibilizado neste site tem caráter exclusivamente informativo e não constitui consultoria jurídica individualizada. As informações aqui publicadas não substituem a análise técnica de um caso concreto por advogado habilitado.
              </p>
              <p className="mt-3">
                O envio de mensagem por meio do formulário de contato não estabelece, por si só, relação advogado-cliente. A relação advogado-cliente somente se forma mediante aceite expresso de ambas as partes, após análise prévia do caso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                3. Propriedade intelectual
              </h2>
              <p>
                Os textos, marca, logotipo e demais conteúdos deste site são de titularidade do Dias Pires Advocacia, sendo vedada sua reprodução total ou parcial sem autorização prévia, exceto para uso pessoal e não comercial, com citação da fonte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                4. Uso adequado do site
              </h2>
              <p>
                É vedado utilizar este site para fins ilícitos, para envio de conteúdo ofensivo, ou para tentativas de acesso não autorizado a sistemas ou dados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                5. Limitação de responsabilidade
              </h2>
              <p>
                O Dias Pires Advocacia não se responsabiliza por decisões tomadas exclusivamente com base em conteúdo informativo publicado neste site, sem orientação jurídica individualizada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                6. Foro
              </h2>
              <p>
                Fica eleito o foro da Comarca de Bela Vista do Paraíso-PR para dirimir eventuais controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                7. Contato
              </h2>
              <p>
                Dúvidas sobre estes Termos podem ser encaminhadas para juridico@diaspiresadvocacia.com.br.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
