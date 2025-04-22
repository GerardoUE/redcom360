import React from "react";

const Eventos = () => {
  const eventos = [
    {
      id: 1,
      categoria: "Música",
      fecha: "15 Jun 2023 • 20:00",
      titulo: "Festival de Verano Electrónico",
      ubicacion: "Madrid, España",
      descripcion:
        "El festival más grande de música electrónica con los mejores DJs internacionales en un escenario al aire libre.",
      asistentes: "1,200 asistentes",
      imagen:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-primary",
    },
    {
      id: 2,
      categoria: "Arte",
      fecha: "22 Jun - 30 Jul 2023",
      titulo: "Exposición de Arte Digital",
      ubicacion: "CDMX, México",
      descripcion:
        "Muestra internacional de arte digital con realidad aumentada e instalaciones interactivas de artistas emergentes.",
      asistentes: "500 asistentes",
      imagen:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-secondary",
    },
    {
      id: 3,
      categoria: "Taller",
      fecha: "5 Jul 2023 • 18:00",
      titulo: "Masterclass: Producción Musical",
      ubicacion: "Online",
      descripcion:
        "Aprende técnicas avanzadas de producción musical con el reconocido productor Juan Pérez. Incluye sesión de preguntas.",
      asistentes: "85 inscritos",
      imagen:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-accent",
    },
  ];

  return (
    <section id="eventos" className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold font-display mb-2">Próximos Eventos</h2>
            <p className="text-lg text-gray-600">
              Descubre y participa en eventos culturales alrededor del mundo
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 flex items-center space-x-2 text-primary font-medium"
          >
            <span>Ver todos los eventos</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={evento.imagen}
                  alt="Evento"
                  className="w-full h-48 object-cover"
                />
                <div
                  className={`absolute top-4 left-4 ${evento.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {evento.categoria}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <i className="far fa-calendar mr-2"></i>
                  <span>{evento.fecha}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{evento.titulo}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>{evento.ubicacion}</span>
                </div>
                <p className="text-gray-600 mb-4">{evento.descripcion}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1 text-sm">
                    <i className="fas fa-users"></i>
                    <span>{evento.asistentes}</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary font-medium flex items-center"
                  >
                    <span>Ver más</span>
                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventos;