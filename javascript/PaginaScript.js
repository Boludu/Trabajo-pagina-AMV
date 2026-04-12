let fotos = [
    { id: 1, url: "../assets/imagenes/ajolote.jpg", categorias: ["Acuática"] },
    { id: 2, url: "../assets/imagenes/ballena.jpg", categorias: ["Acuática"] },
    { id: 3, url: "../assets/imagenes/cerdo.jpg", categorias: ["Terrestre"] },
    { id: 4, url: "../assets/imagenes/Ciervo.jpg", categorias: ["Terrestre"] }, 
    { id: 5, url: "../assets/imagenes/Cuervo.jpg", categorias: ["Aérea"] },
    { id: 6, url: "../assets/imagenes/Delfin.jpg", categorias: [ "Acuática"] },
    { id: 7, url: "../assets/imagenes/gaviota.jpg", categorias: ["Aérea"] },
    { id: 8, url: "../assets/imagenes/Husky.avif", categorias: ["Terrestre"] },
    { id: 9, url: "../assets/imagenes/Leon.jpg", categorias: ["Terrestre"] },
    { id: 10, url: "../assets/imagenes/Leopardo.webp", categorias: ["Terrestre"] },
    { id: 11, url: "../assets/imagenes/Lobo.webp", categorias: ["Terrestre"] },
    { id: 12, url: "../assets/imagenes/Mantarraya.webp", categorias: ["Acuática"] },
    { id: 13, url: "../assets/imagenes/Pantera.jpg", categorias: ["Terrestre"] },
    { id: 14, url: "../assets/imagenes/Periquito.jpg", categorias: ["Aérea"] },            
    { id: 15, url: "../assets/imagenes/Pez espada.webp", categorias: ["Acuática"] },
    { id: 16, url: "../assets/imagenes/Pez payaso.jpg", categorias: ["Acuática"] },
    { id: 17, url: "../assets/imagenes/Pez-luna.jpg", categorias: ["Acuática"] },
    { id: 18, url: "../assets/imagenes/Pulpo.jpg", categorias: ["Acuática"] },
    { id: 19, url: "../assets/imagenes/rana verde.jpg", categorias: ["Terrestre"] },
    { id: 20, url: "../assets/imagenes/Salamandra.jpg", categorias: ["Terrestre"] },
    { id: 21, url: "../assets/imagenes/Sapo.jpg", categorias: ["Terrestre"] },
    { id: 22, url: "../assets/imagenes/Tigre.jpg", categorias: ["Terrestre"] },
];

let categoriaActiva = "Todas";

function crearFiltros() {
    const contenedor = document.getElementById("filtros");
    contenedor.innerHTML = "";

    const categorias = ["Todas", ...new Set(fotos.flatMap(f => f.categorias))];

    categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.dataset.categoria = cat;

        if (cat === categoriaActiva) btn.classList.add("activo");

        btn.addEventListener("click", () => {
            categoriaActiva = cat;

            document.querySelectorAll("#filtros button").forEach(b => b.classList.remove("activo"));
            btn.classList.add("activo");

            render();
        });

        contenedor.appendChild(btn);
    });
}

function render() {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = "";

    const fotosFiltradas = categoriaActiva === "Todas"
        ? fotos
        : fotos.filter(f => f.categorias.includes(categoriaActiva));

    fotosFiltradas.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto.url;
        img.alt = "foto";
        img.style.width = "200px";
        galeria.appendChild(img);
    });
}

crearFiltros();
render();



// 1. seleccionar el botón que se ha pulsado (por ejemplo, con un id o con el texto del botón)
// 2. hacer un addEventListener para detectar el click en el botón y llamar a la función filtrar con la categoría correspondiente (Acuática, Terrestre o Aérea)
{/* <button id="boton-acuatica">Acuática</button> */}

// el filtrar lo llamamos con un evento onclick en el HTML, por ejemplo:
// <button onclick="filtrar('Acuática')">Acuática</button>
// <button onclick="filtrar('Terrestre')">Terrestre</button>
// <button onclick="filtrar('Aérea')">Aérea</button>










