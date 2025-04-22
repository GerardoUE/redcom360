import React from "react";

const IACreativa = () => {
  return (
    <section id="ia" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display mb-4">IA Creativa</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Automatiza y potencia tu creatividad con nuestras herramientas de inteligencia artificial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {[
              {
                icon: "fas fa-magic",
                title: "Generación de contenido",
                description:
                  "Crea biografías, descripciones de eventos y textos promocionales en múltiples idiomas con solo unos clics."
              },
              {
                icon: "fas fa-chart-pie",
                title: "Análisis predictivo",
                description:
                  "Nuestra IA analiza tendencias y te sugiere oportunidades de colaboración, eventos y conexiones relevantes."
              },
              {
                icon: "fas fa-tasks",
                title: "Automatización",
                description:
                  "Genera propuestas, presupuestos y contratos automáticamente. Programa publicaciones en redes sociales."
              }
            ].map((feature, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="gradient-bg text-white p-2 rounded-lg mr-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 ml-16">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Generador de biografías</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de artista
                  </label>
                  <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option>Músico</option>
                    <option>Artista visual</option>
                    <option>Performero</option>
                    <option>Técnico</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estilo principal
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Ej: Pop, Arte digital, Teatro..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experiencia (años)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Logros destacados
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    rows="2"
                    placeholder="Premios, colaboraciones importantes..."
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="gradient-bg text-white w-full py-3 rounded-lg font-medium hover:shadow-md transition">
              Generar biografía con IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IACreativa;
