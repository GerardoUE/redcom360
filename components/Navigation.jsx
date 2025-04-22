<nav className="bg-white shadow-sm sticky top-0 z-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      {/* Logo y nombre */}
      <div className="flex items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="gradient-bg text-white p-2 rounded-lg">
            <i className="fas fa-palette text-xl"></i>
          </div>
          <span className="text-xl font-bold font-display gradient-text">RedCom360</span>
        </a>
      </div>

      {/* Links navegación */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#directorio" className="nav-link text-gray-700 hover:text-primary transition">Directorio</a>
        <a href="#ia" className="nav-link text-gray-700 hover:text-primary transition">IA Creativa</a>
        <a href="#eventos" className="nav-link text-gray-700 hover:text-primary transition">Eventos</a>
        <a href="#marketplace" className="nav-link text-gray-700 hover:text-primary transition">Marketplace</a>
        <a href="#comunidad" className="nav-link text-gray-700 hover:text-primary transition">Comunidad</a>
      </div>

      {/* Botón hamburguesa y acciones */}
      <div className="flex items-center space-x-4">
        <button className="md:hidden text-gray-500 hover:text-primary focus:outline-none">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-primary transition">Iniciar sesión</a>
          <a href="#" className="gradient-bg text-white px-4 py-2 rounded-lg hover:shadow-md transition">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
