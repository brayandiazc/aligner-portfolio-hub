import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Tu sonrisa
              <span className="text-primary block">perfecta</span>
              te está esperando
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista en ortodoncia con más de 15 años de experiencia. 
              Transformamos sonrisas utilizando las técnicas más avanzadas y 
              un enfoque personalizado para cada paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-base px-8">
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Ver Casos
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={doctorPortrait} 
                alt="Dr. Ortodoncia" 
                className="rounded-2xl shadow-strong w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;