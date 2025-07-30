import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DO</span>
          </div>
          <span className="font-semibold text-lg">Dr. Ortodoncia</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
          <a href="#sobre-mi" className="text-foreground hover:text-primary transition-colors">Sobre Mí</a>
          <a href="#casos" className="text-foreground hover:text-primary transition-colors">Casos</a>
          <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">Testimonios</a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
        </nav>

        <Button variant="medical" className="hidden md:flex">
          Solicitar Cita
        </Button>
      </div>
    </header>
  );
};

export default Header;