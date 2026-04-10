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
    { id: 13, url: "../assets/imagenes/Pajato_Azul.jpg", categorias: ["Aérea"] },
    { id: 14, url: "../assets/imagenes/Pantera.jpg", categorias: ["Terrestre"] },
    { id: 15, url: "../assets/imagenes/Periquito.jpg", categorias: ["Aérea"] },            
    { id: 16, url: "../assets/imagenes/Pez espada.webp", categorias: ["Acuática"] },
    { id: 17, url: "../assets/imagenes/Pez payaso.jpg", categorias: ["Acuática"] },
    { id: 18, url: "../assets/imagenes/Pez-luna.jpg", categorias: ["Acuática"] },
    { id: 19, url: "../assets/imagenes/Pulpo.jpg", categorias: ["Acuática"] },
    { id: 20, url: "../assets/imagenes/rana verde.jpg", categorias: ["Terrestre"] },
    { id: 21, url: "../assets/imagenes/Salamandra.jpg", categorias: ["Terrestre"] },
    { id: 22, url: "../assets/imagenes/Sapo.jpg", categorias: ["Terrestre"] },
    { id: 23, url: "../assets/imagenes/Tigre.jpg", categorias: ["Terrestre"] },
] 

render();

function render() {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = "";

    fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto.url;
        img.alt = "foto";

        img.style.width = "200px";

        galeria.appendChild(img);
    });
}



// 1. seleccionar el botón que se ha pulsado (por ejemplo, con un id o con el texto del botón)
// 2. hacer un addEventListener para detectar el click en el botón y llamar a la función filtrar con la categoría correspondiente (Acuática, Terrestre o Aérea)
{/* <button id="boton-acuatica">Acuática</button> */}

// el filtrar lo llamamos con un evento onclick en el HTML, por ejemplo:
// <button onclick="filtrar('Acuática')">Acuática</button>
// <button onclick="filtrar('Terrestre')">Terrestre</button>
// <button onclick="filtrar('Aérea')">Aérea</button>










