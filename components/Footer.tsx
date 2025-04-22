// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">RedCom360</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Equipo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Trabaja con nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Tutoriales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">API para desarrolladores</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Estado del servicio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Licencias</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Conéctate</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white transition text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="text-gray-300">Suscríbete a nuestro newsletter</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Tu email"
                className="bg-gray-700 text-white px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="gradient-bg text-white p-2 rounded-lg">
              <i className="fas fa-palette"></i>
            </div>
            <span className="text-xl font-bold font-display gradient-text">RedCom360</span>
          </div>
          <p className="text-gray-400">© 2023 RedCom360. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
