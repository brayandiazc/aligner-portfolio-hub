import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import beforeAfter from "@/assets/before-after.jpg";

const Cases = () => {
  const cases = [
    {
      title: "Caso 1: Apiñamiento Severo",
      duration: "18 meses",
      treatment: "Brackets metálicos",
      description: "Paciente adulto con apiñamiento severo en ambas arcadas. Resultado excelente sin extracciones."
    },
    {
      title: "Caso 2: Sobremordida",
      duration: "22 meses", 
      treatment: "Brackets estéticos",
      description: "Adolescente con sobremordida profunda. Corrección completa con brackets de cerámica."
    },
    {
      title: "Caso 3: Diastemas",
      duration: "12 meses",
      treatment: "Ortodoncia invisible",
      description: "Paciente ejecutivo con espacios entre dientes. Tratamiento discreto con alineadores."
    }
  ];

  return (
    <section id="casos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estos son algunos ejemplos de las transformaciones que hemos logrado. 
            Cada caso es único y requiere un enfoque personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={beforeAfter} 
              alt="Antes y después del tratamiento ortodóntico" 
              className="rounded-2xl shadow-strong w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Transformaciones Reales</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada sonrisa cuenta una historia de transformación. Utilizando técnicas 
              avanzadas y un enfoque personalizado, ayudamos a nuestros pacientes a 
              conseguir no solo una sonrisa más bella, sino también una mejor salud oral 
              y mayor confianza en sí mismos.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Éxito</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">18</div>
                <div className="text-sm text-muted-foreground">Meses promedio</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Valoración</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((case_, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{case_.title}</CardTitle>
                <CardDescription>
                  <span className="text-primary font-semibold">{case_.treatment}</span> • {case_.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{case_.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;