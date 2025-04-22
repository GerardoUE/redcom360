import React from "react";
import { FaMusic, FaPaintBrush, FaVideo, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    icon: <FaMusic className="text-4xl gradient-text mb-4" />,
    title: "Producción Musical",
    description: "Desde mezcla y masterización hasta producción completa de tu proyecto musical.",
    price: "Desde €150",
  },
  {
    icon: <FaPaintBrush className="text-4xl gradient-text mb-4" />,
    title: "Diseño Gráfico",
    description: "Flyers, carteles, identidad visual y diseño para redes sociales de tus eventos.",
    price: "Desde €80",
  },
  {
    icon: <FaVideo className="text-4xl gradient-text mb-4" />,
    title: "Videografía",
    description: "Grabación y edición de videoclips, documentales y cobertura de eventos.",
    price: "Desde €250",
  },
];

const benefits = [
  "Perfil verificable con portafolio multimedia",
  "Sistema de valoraciones y reputación",
  "Pagos seguros y contratos digitales",
  "Recomendaciones automáticas por IA",
  "Herramientas de gestión de proyectos",
];

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display mb-4">Marketplace de Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contrata o ofrece servicios creativos y técnicos con total seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light rounded-xl p-6 transition duration-300 hover:shadow-lg"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{service.price}</span>
                <a href="#" className="text-sm text-gray-500 hover:text-primary">
                  Ver servicios
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary bg-opacity-10 rounded-xl p-8 border border-primary border-opacity-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">¿Eres un profesional creativo?</h3>
              <p className="text-gray-700 mb-6">
                Únete a nuestro marketplace y ofrece tus servicios a una comunidad global de
                artistas y organizadores. Gestiona tus proyectos, recibe pagos seguros y
                construye tu reputación.
              </p>
              <a
                href="#"
                className="gradient-bg text-white px-6 py-3 rounded-lg font-medium inline-block hover:shadow-md transition"
              >
                Regístrate como profesional
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-4">Beneficios para profesionales</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
