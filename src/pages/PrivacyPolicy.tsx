import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 19 de agosto de 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              Esta Política de Privacidade descreve como o Dias Pires Advocacia (Dias Pires Sociedade Individual de Advocacia, CNPJ 53.602.398/0001-00), com sede na Avenida Independência, n.º 1.315, Centro, Bela Vista do Paraíso-PR, trata os dados pessoais coletados por meio deste site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).
            </p>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                1. Dados coletados
              </h2>
              <p>
                Coletamos os seguintes dados pessoais quando você preenche o formulário de contato disponível neste site:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Área de interesse</li>
                <li>Informação sobre ser pessoa física ou jurídica</li>
                <li>Mensagem/descrição do caso</li>
              </ul>
              <p className="mt-3">
                Este site não utiliza cookies de rastreamento, analytics ou publicidade. Nenhum dado de navegação é coletado automaticamente além do necessário ao funcionamento técnico do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                2. Finalidade do tratamento
              </h2>
              <p>
                Os dados coletados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Responder ao contato realizado por meio do formulário</li>
                <li>Avaliar a viabilidade de atendimento jurídico solicitado</li>
                <li>Comunicação relacionada à eventual prestação de serviços advocatícios</li>
              </ul>
              <p className="mt-3">
                Não utilizamos os dados coletados para finalidades diversas das aqui descritas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                3. Base legal
              </h2>
              <p>
                O tratamento dos dados pessoais fornecidos por meio do formulário de contato tem como base legal o consentimento do titular (art. 7º, I, da LGPD), manifestado no momento do envio do formulário mediante aceite expresso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                4. Compartilhamento de dados
              </h2>
              <p>
                Os dados pessoais coletados não são compartilhados, vendidos ou cedidos a terceiros, exceto:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Quando exigido por obrigação legal ou ordem judicial</li>
                <li>Quando necessário para a prestação de serviços contratados, mediante autorização específica do titular</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                5. Armazenamento e segurança
              </h2>
              <p>
                Os dados são armazenados pelo tempo necessário ao cumprimento das finalidades descritas nesta Política, ou pelo prazo exigido por obrigações legais aplicáveis à atividade advocatícia (observado o dever de sigilo profissional e as normas do Estatuto da Advocacia). Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                6. Direitos do titular
              </h2>
              <p>
                Nos termos do art. 18 da LGPD, você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Confirmação da existência de tratamento</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
                <li>Portabilidade dos dados</li>
                <li>Informação sobre compartilhamento com terceiros</li>
                <li>Revogação do consentimento</li>
                <li>Eliminação dos dados tratados com base no consentimento</li>
              </ul>
              <p className="mt-3">
                Para exercer esses direitos, entre em contato pelo e-mail juridico@diaspiresadvocacia.com.br.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                7. Encarregado de Proteção de Dados (DPO)
              </h2>
              <p>
                Para questões relacionadas ao tratamento de dados pessoais, incluindo o exercício dos direitos previstos no art. 18 da LGPD, o canal de contato é o e-mail juridico@diaspiresadvocacia.com.br.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mt-8 mb-3">
                8. Alterações desta Política
              </h2>
              <p>
                Esta Política pode ser atualizada periodicamente. A versão vigente será sempre a publicada nesta página, com indicação da data de última atualização.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
