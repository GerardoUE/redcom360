import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-users",
    title: "Directorio Global",
    description:
      "Conecta con artistas, técnicos y organizadores de todo el mundo. Filtra por disciplina, ubicación y estilo.",
    link: "#",
    linkText: "Explorar perfiles",
  },
  {
    icon: "fas fa-robot",
    title: "IA Creativa",
    description:
      "Genera biografías, descripciones y contenido multimedia automáticamente con nuestra inteligencia artificial.",
    link: "#",
    linkText: "Probar herramientas",
  },
  {
    icon: "fas fa-calendar-star",
    title: "Gestión de Eventos",
    description:
      "Organiza eventos físicos, virtuales o híbridos con herramientas integradas de ticketing y promoción.",
    link: "#",
    linkText: "Crear evento",
  },
  {
    icon: "fas fa-store",
    title: "Marketplace",
    description:
      "Contrata servicios creativos o ofrece los tuyos con nuestro sistema seguro de pagos y valoraciones.",
    link: "#",
    linkText: "Ver servicios",
  },
  {
    icon: "fas fa-comments",
    title: "Comunidad",
    description:
      "Únete a foros temáticos, participa en convocatorias y haz networking con profesionales afines.",
    link: "#",
    linkText: "Unirse a la comunidad",
  },
  {
    icon: "fas fa-chart-line",
    title: "Monetización",
    description:
      "Vende entradas, servicios o productos digitales directamente desde tu perfil con comisiones bajas.",
    link: "#",
    linkText: "Ver planes",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display mb-4">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RedCom360 integra las herramientas más avanzadas para potenciar tu carrera creativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md"
            >
              <div className="text-primary text-4xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="text-primary font-medium flex items-center space-x-1"
              >
                <span>{feature.linkText}</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
