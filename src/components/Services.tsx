import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Brackets Tradicionales",
      description: "Tratamiento clásico y efectivo con brackets metálicos de alta calidad para corregir todo tipo de maloclusiones.",
      icon: "🦷",
      features: ["Resultados comprobados", "Costo accesible", "Duración 18-24 meses"]
    },
    {
      title: "Brackets Estéticos",
      description: "Brackets de cerámica o zafiro que se mimetizan con el color natural de tus dientes.",
      icon: "✨",
      features: ["Discretos y elegantes", "Misma efectividad", "Ideal para adultos"]
    },
    {
      title: "Ortodoncia Invisible",
      description: "Alineadores transparentes removibles para corregir tu sonrisa de forma casi imperceptible.",
      icon: "👁️",
      features: ["100% transparente", "Removible", "Sin restricciones alimentarias"]
    },
    {
      title: "Ortodoncia Infantil",
      description: "Tratamientos especializados para niños y adolescentes en etapa de crecimiento.",
      icon: "👶",
      features: ["Preventivo y correctivo", "Técnicas amigables", "Seguimiento personalizado"]
    },
    {
      title: "Retenedores",
      description: "Mantenimiento post-tratamiento para preservar los resultados obtenidos de forma permanente.",
      icon: "🔒",
      features: ["Fijos y removibles", "Garantía de resultados", "Control periódico"]
    },
    {
      title: "Consulta Digital",
      description: "Análisis 3D y planificación digital para predecir con precisión los resultados del tratamiento.",
      icon: "💻",
      features: ["Tecnología 3D", "Visualización de resultados", "Planificación precisa"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Especializados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos ortodónticos personalizados 
            para satisfacer las necesidades específicas de cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;