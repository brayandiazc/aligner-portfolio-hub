import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Ubicación",
      details: ["Calle Principal 123", "Madrid, España 28001"]
    },
    {
      icon: "📞",
      title: "Teléfono",
      details: ["+34 912 345 678", "+34 687 654 321"]
    },
    {
      icon: "📧",
      title: "Email",
      details: ["consulta@ortodonciaperez.com", "citas@ortodonciaperez.com"]
    },
    {
      icon: "🕒",
      title: "Horarios",
      details: ["Lun-Vie: 9:00-19:00", "Sáb: 9:00-14:00"]
    }
  ];

  const socialLinks = [
    { name: "Instagram", handle: "@dr.ortodonciaperez" },
    { name: "Facebook", handle: "Dr. Ortodoncia Pérez" },
    { name: "LinkedIn", handle: "Dr. Juan Pérez" }
  ];

  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres agendar una consulta? Estamos aquí para ayudarte. 
            La primera consulta es completamente gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Solicitar Consulta Gratuita</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de tratamiento de interés</label>
                  <select className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Selecciona una opción</option>
                    <option>Brackets tradicionales</option>
                    <option>Brackets estéticos</option>
                    <option>Ortodoncia invisible</option>
                    <option>Ortodoncia infantil</option>
                    <option>Consulta general</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje (opcional)</label>
                  <textarea 
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-24"
                    placeholder="Cuéntanos sobre tu caso o cualquier pregunta que tengas..."
                  ></textarea>
                </div>

                <Button variant="medical" size="lg" className="w-full">
                  Enviar Solicitud
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Te contactaremos en menos de 24 horas para agendar tu consulta gratuita.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-accent text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Síguenos en Redes Sociales</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm opacity-90">{social.name}</span>
                      <span className="text-sm font-medium">{social.handle}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;