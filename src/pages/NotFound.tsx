import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scale, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não foi encontrada. 
            Ela pode ter sido movida ou não existe mais.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button variant="hero" size="lg" asChild className="w-full">
            <a href="/">
              <Home className="w-5 h-5 mr-2" />
              Voltar ao Início
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()} className="w-full">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Página Anterior
          </Button>
        </div>

        <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
          <p className="text-sm text-muted-foreground">
            Precisa de ajuda jurídica? Entre em contato conosco para uma 
            <strong className="text-accent"> consulta gratuita</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
