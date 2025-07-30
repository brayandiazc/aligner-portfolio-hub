import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      age: "32 años",
      treatment: "Brackets estéticos",
      text: "Siempre tuve complejos con mi sonrisa, pero el Dr. Pérez me ayudó a ganar confianza. El tratamiento fue muy cómodo y los resultados superaron mis expectativas.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      age: "45 años", 
      treatment: "Ortodoncia invisible",
      text: "Como ejecutivo necesitaba algo discreto. Los alineadores fueron perfectos, nadie notó que estaba en tratamiento. Muy profesional y puntual en todas las citas.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      age: "16 años",
      treatment: "Brackets tradicionales",
      text: "Al principio tenía miedo, pero el doctor me explicó todo muy bien. Ahora tengo la sonrisa que siempre quise. ¡Totalmente recomendado!",
      rating: 5
    },
    {
      name: "Roberto Silva",
      age: "38 años",
      treatment: "Brackets metálicos",
      text: "Excelente atención y seguimiento. El tratamiento duró exactamente lo que me dijeron. Mi esposa dice que parezco 10 años más joven con mi nueva sonrisa.",
      rating: 5
    },
    {
      name: "Lucía Fernández",
      age: "28 años",
      treatment: "Ortodoncia invisible",
      text: "La tecnología 3D me permitió ver cómo quedaría mi sonrisa antes de empezar. El proceso fue exactamente como me lo mostraron. Increíble precisión.",
      rating: 5
    },
    {
      name: "Diego Morales",
      age: "14 años",
      treatment: "Brackets de colores",
      text: "¡Me encantaron mis brackets de colores! El doctor es muy cool y hace que las citas sean divertidas. Mis dientes quedaron perfectos.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Pacientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mejor carta de presentación. 
            Estas son algunas de sus experiencias reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.age} • {testimonial.treatment}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Listo para tu transformación?</h3>
            <p className="mb-6 opacity-90">
              Únete a cientos de pacientes satisfechos que ya han conseguido su sonrisa perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Consulta Gratuita
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Más Casos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;