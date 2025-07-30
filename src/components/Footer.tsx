const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DO</span>
              </div>
              <span className="font-semibold text-lg">Dr. Ortodoncia</span>
            </div>
            <p className="text-sm opacity-80">
              Transformando sonrisas con más de 15 años de experiencia en ortodoncia especializada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Brackets Tradicionales</li>
              <li>Brackets Estéticos</li>
              <li>Ortodoncia Invisible</li>
              <li>Ortodoncia Infantil</li>
              <li>Retenedores</li>
              <li>Consulta Digital</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#inicio" className="hover:opacity-100 transition-opacity">Inicio</a></li>
              <li><a href="#servicios" className="hover:opacity-100 transition-opacity">Servicios</a></li>
              <li><a href="#sobre-mi" className="hover:opacity-100 transition-opacity">Sobre Mí</a></li>
              <li><a href="#casos" className="hover:opacity-100 transition-opacity">Casos</a></li>
              <li><a href="#testimonios" className="hover:opacity-100 transition-opacity">Testimonios</a></li>
              <li><a href="#contacto" className="hover:opacity-100 transition-opacity">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📍 Calle Principal 123, Madrid</li>
              <li>📞 +34 912 345 678</li>
              <li>📧 consulta@ortodonciaperez.com</li>
              <li>🕒 Lun-Vie: 9:00-19:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2024 Dr. Ortodoncia Pérez. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidad</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Términos de Servicio</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;