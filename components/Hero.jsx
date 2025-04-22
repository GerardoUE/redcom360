<>
  {/* Hero Section */}
  <section className="gradient-bg text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Conecta, crea y haz crecer tu arte
          </h1>
          <p className="text-xl mb-8 opacity-90">
            La plataforma todo en uno para artistas, creadores y profesionales
            culturales. Descubre oportunidades, automatiza tu trabajo y haz
            crecer tu red profesional.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium text-center hover:bg-opacity-90 transition"
            >
              Explorar artistas
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white hover:bg-opacity-10 transition"
            >
              Regístrate gratis
            </a>
          </div>
        </div>

        {/* Imagen con burbujas */}
        <div className="relative">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Artista en escena"
              className="rounded-xl w-full h-auto"
            />
          </div>

          {/* Burbuja inferior izquierda */}
          <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <i className="fas fa-bolt" />
              <span className="font-medium">+5,000 artistas</span>
            </div>
          </div>

          {/* Burbuja superior derecha */}
          <div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <i className="fas fa-calendar-alt" />
              <span className="font-medium">Eventos diarios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
