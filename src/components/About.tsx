import { Card, CardContent } from "@/components/ui/card";
import dentalOffice from "@/assets/dental-office.jpg";

const About = () => {
  const qualifications = [
    "Doctor en Odontología - Universidad Nacional",
    "Especialista en Ortodoncia - Universidad de Barcelona",
    "Certificación en Invisalign - Align Technology",
    "Miembro de la Sociedad Española de Ortodoncia",
    "Más de 500 casos tratados exitosamente"
  ];

  const philosophy = [
    {
      title: "Excelencia Técnica",
      description: "Utilizo las técnicas más avanzadas y materiales de la más alta calidad."
    },
    {
      title: "Atención Personalizada",
      description: "Cada paciente recibe un plan de tratamiento único y adaptado a sus necesidades."
    },
    {
      title: "Compromiso Total",
      description: "Me comprometo a acompañarte durante todo el proceso hasta lograr tu sonrisa ideal."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy el Dr. Juan Pérez, especialista en ortodoncia con una pasión genuina 
              por transformar sonrisas y cambiar vidas. Durante más de 15 años, he 
              dedicado mi carrera a ayudar a pacientes de todas las edades a conseguir 
              la sonrisa que siempre han soñado.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Formación y Certificaciones</h3>
              <ul className="space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></div>
                    <span className="text-muted-foreground">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 pt-6">
              {philosophy.map((item, index) => (
                <Card key={index} className="bg-medical-blue-light/20 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={dentalOffice} 
              alt="Consulta odontológica moderna" 
              className="rounded-2xl shadow-strong w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-accent p-6 rounded-xl shadow-medium">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;