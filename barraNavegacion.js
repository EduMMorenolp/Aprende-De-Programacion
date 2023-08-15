const barraNavengacionCod = `
<div class="container-fluid">
      <img src="../imag/code-square.svg" alt="LogoProgramacion"><a class="navbar-brand">Aprende Programacion</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../html/htmlycss.html"> HTML y CSS </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../java/java.html"> Java </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../javascript/javascript.html">
              JavaScript
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../python/python.html"> Python </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../github/github.html"> Git / GitHub </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="../sobreNosotros.html">
              Sobre Nosotros
            </a>
          </li>
          <li class="nav-item dropdown">
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
`

const nav = document.getElementById(`barraNavegacion`);
nav.innerHTML = barraNavengacionCod;

function cargarLeccion(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace (no abrirá en una nueva pestaña)

  const enlace = event.target.getAttribute("href"); // Obtiene la ruta del enlace
  const contenidoLeccion = document.getElementById("contenido-leccion"); // Obtén el div donde se cargará el contenido

  fetch(enlace) // Obtiene el contenido de "Leccion1.html"
    .then((response) => response.text())
    .then((html) => {
      contenidoLeccion.innerHTML = html; // Coloca el contenido en el div
    })
    .catch((error) => {
      console.error("Error al cargar la lección:", error);
    });
}