import React from "react";

const DirectorioArtistas = () => {
  return (
    <section id="directorio" className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold font-display mb-2">Directorio de Artistas</h2>
            <p className="text-lg text-gray-600">Descubre y conecta con los mejores talentos creativos</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 flex items-center space-x-2 text-primary font-medium">
            <span>Ver todos los artistas</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Filtros */}
        <div className="mb-8 bg-white p-4 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Disciplina', 'Ubicación', 'Estilo', 'Ordenar por'].map((label, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                  {label === 'Disciplina' && [
                    'Todas', 'Música', 'Artes visuales', 'Artes escénicas', 'Técnicos'
                  ].map(option => <option key={option}>{option}</option>)}
                  {label === 'Ubicación' && [
                    'Cualquier lugar', 'España', 'México', 'Argentina', 'Colombia'
                  ].map(option => <option key={option}>{option}</option>)}
                  {label === 'Estilo' && [
                    'Todos', 'Electrónica', 'Rock', 'Arte digital', 'Teatro'
                  ].map(option => <option key={option}>{option}</option>)}
                  {label === 'Ordenar por' && [
                    'Recomendados', 'Mejor valorados', 'Nuevos', 'Popularidad'
                  ].map(option => <option key={option}>{option}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de Artistas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artistas.map((artista, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 artist-card">
              <div className="relative">
                <img src={artista.imagen} alt="Artista" className="w-full h-48 object-cover" />
                <div className="artist-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                  <div className="flex space-x-2">
                    {artista.redes.map((red, idx) => (
                      <a key={idx} href="#" className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition">
                        <i className={red}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{artista.nombre}</h3>
                    <p className="text-gray-600">{artista.descripcion}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <span className="text-gray-800">{artista.rating}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {artista.etiquetas.map((tag, idx) => (
                    <span key={idx} className="bg-purple-100 text-primary text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <a href="#" className="text-primary text-sm font-medium flex items-center">
                    <span>Ver perfil</span>
                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                  </a>
                  <button className="text-secondary hover:text-secondary-dark">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const artistas = [
  {
    nombre: "María López",
    descripcion: "Cantante | Madrid, España",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80",
    rating: "4.9",
    etiquetas: ["Pop", "Jazz", "Soul"],
    redes: ["fab fa-instagram", "fab fa-spotify", "fab fa-youtube"],
  },
  {
    nombre: "DJ Cósmico",
    descripcion: "DJ/Productor | CDMX, México",
    imagen: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1469&q=80",
    rating: "4.7",
    etiquetas: ["Electrónica", "House", "Techno"],
    redes: ["fab fa-instagram", "fab fa-spotify", "fab fa-youtube"],
  },
  {
    nombre: "Ana Torres",
    descripcion: "Diseñadora Visual | Buenos Aires, Argentina",
    imagen: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?auto=format&fit=crop&w=1471&q=80",
    rating: "5.0",
    etiquetas: ["Ilustración", "Arte digital", "Motion"],
    redes: ["fab fa-instagram", "fab fa-behance", "fab fa-dribbble"],
  },
  {
    nombre: "Carlos Méndez",
    descripcion: "Técnico de Sonido | Bogotá, Colombia",
    imagen: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=712&q=80",
    rating: "4.8",
    etiquetas: ["Sonido en vivo", "Grabación", "Mezcla"],
    redes: ["fab fa-instagram", "fas fa-globe", "fab fa-youtube"],
  },
];

export default DirectorioArtistas;