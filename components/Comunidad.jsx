// Comunidad.jsx
import React from 'react';

const Comunidad = () => {
  return (
    <section id="comunidad" className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display mb-4">Únete a Nuestra Comunidad</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conecta con otros creativos, comparte conocimiento y haz crecer tu red profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Foro */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="gradient-text text-4xl mb-4">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Foros Temáticos</h3>
            <p className="text-gray-600 mb-4">
              Participa en discusiones sobre música, arte visual, producción de eventos y más.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Usuario"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">¿Cómo mejorar mi presencia en redes?</h4>
                  <p className="text-sm text-gray-500">25 respuestas • 120 vistas</p>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Usuario"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">Recomendaciones de equipo para sonido en vivo</h4>
                  <p className="text-sm text-gray-500">42 respuestas • 210 vistas</p>
                </div>
              </div>
            </div>
            <a href="#" className="text-primary font-medium flex items-center mt-6">
              <span>Ver todos los temas</span>
              <i className="fas fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* Convocatorias */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="gradient-text text-4xl mb-4">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Convocatorias Abiertas</h3>
            <p className="text-gray-600 mb-4">
              Oportunidades para artistas: festivales, residencias, becas y colaboraciones.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Festival busca artistas emergentes</h4>
                <p className="text-sm text-gray-500">Fecha límite: 30 Jun 2023</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="font-medium">Residencia artística en Barcelona</h4>
                <p className="text-sm text-gray-500">Fecha límite: 15 Jul 2023</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-medium">Colaboración música + arte visual</h4>
                <p className="text-sm text-gray-500">Fecha límite: 10 Jul 2023</p>
              </div>
            </div>
            <a href="#" className="text-primary font-medium flex items-center mt-6">
              <span>Ver todas las convocatorias</span>
              <i className="fas fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* Destacados */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="gradient-text text-4xl mb-4">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Artistas Destacados</h3>
            <p className="text-gray-600 mb-4">
              Perfiles recomendados por la comunidad y nuestro algoritmo de IA.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
                  alt="Artista"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">Laura G.</h4>
                  <p className="text-sm text-gray-500">Fotógrafa • 4.9 ★</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Artista"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">DJ Kala</h4>
                  <p className="text-sm text-gray-500">DJ/Productor • 4.8 ★</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1491&q=80"
                  alt="Artista"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">Andrés R.</h4>
                  <p className="text-sm text-gray-500">Ilustrador • 5.0 ★</p>
                </div>
              </div>
            </div>
            <a href="#" className="text-primary font-medium flex items-center mt-6">
              <span>Ver todos los artistas</span>
              <i className="fas fa-chevron-right ml-2 text-sm"></i>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold font-display mb-4">
            ¿Listo para unirte a la comunidad creativa más innovadora?
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Regístrate gratis y comienza a conectar con miles de artistas y profesionales culturales alrededor del mundo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition"
            >
              Regístrate ahora
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
