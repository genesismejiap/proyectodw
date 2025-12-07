const novedades = [
  {
    titulo: "Lanzamiento: Helado de Mango Cremoso",
    img: "assets/imagenesproyec/heladomangocremoso.jpg",
    descripcion: "Una mezcla suave y dulce de mango maduro con textura extra cremosa."
  },
  {
    titulo: "Noche de Helados Ilimitados",
    img: "assets/imagenesproyec/heladosilimitados.jpg",
    descripcion: "Este viernes disfruta helado ilimitado por solo una tarifa única."
  },
  {
    titulo: "Nuevo Sundae Caramelo y Nuez",
    img: "assets/imagenesproyec/nuevosundaecarameloyNuez.jpg",
    descripcion: "Caramelo artesanal con trozos de nuez tostada y helado vainilla premium."
  },
  {
    titulo: "Sabor del Mes: Piña Colada",
    img: "assets/imagenesproyec/piñacolado.jpg",
    descripcion: "Helado tropical con piña natural y crema de coco suave."
  },
  {
    titulo: "Decoración Especial para Cumpleaños",
    img: "assets/imagenesproyec/decoraciónespecialparacumpleaños.jpg",
    descripcion: "Personalizamos tu helado con velas, toppings y mensajes decorativos."
  },
  {
    titulo: "Nuevo Batido: Oreo Deluxe",
    img: "assets/imagenesproyec/oreodeluxe.jpg",
    descripcion: "Una mezcla espesa de helado vainilla premium con galleta Oreo extra."
  },
  {
    titulo: "Tarde Familiar: Helados al 30% de Descuento",
    img: "assets/imagenesproyec/heladomangocremoso.jpg",
    descripcion: "Descuento especial para familias todos los domingos por la tarde."
  },
  {
    titulo: "Barquillo Artesanal Crujiente",
    img: "assets/imagenesproyec/barquilloartesanalcrujiente.jpg",
    descripcion: "Nuevo barquillo horneado en casa con sabor vainilla aromática."
  },
  {
    titulo: "Copa Deluxe Tres Chocolates",
    img: "assets/imagenesproyec/copadeluxetreschocolates.jpg",
    descripcion: "Chocolate oscuro, leche y blanco combinados en una copa única."
  },
  {
    titulo: "Nuevos Toppings de Frutas Exóticas",
    img: "assets/imagenesproyec/NuevosToppingsdeFrutasExóticas.jpg",
    descripcion: "Maracuyá, kiwi y frambuesa natural para agregar a tu helado."
  },
  {
    titulo: "Helado Light sin Azúcar Añadida",
    img: "assets/imagenesproyec/HeladoLightsinAzúcarAñadida.jpg",
    descripcion: "Para quienes buscan opciones más ligeras sin perder el sabor."
  },
  {
    titulo: "Mini Conos para Niños",
    img: "assets/imagenesproyec/MiniConosparaNiños.jpg",
    descripcion: "Pequeños conos divertidos en diferentes colores y sabores."
  },
  {
    titulo: "Sándwich Helado de Vainilla",
    img: "assets/imagenesproyec/SándwichHeladodeVainilla.jpg",
    descripcion: "Galleta suave con helado premium de vainilla cremosa."
  },
  {
    titulo: "Prueba Gratis de Nuevos Sabores",
    img: "assets/imagenesproyec/PruebaGratisdeNuevosSabores.jpg",
    descripcion: "Ven y prueba nuestras muestras de sabores experimentales."
  },
  {
    titulo: "Milkshake de Fresa Natural",
    img: "assets/imagenesproyec/MilkshakedeFresaNatural.jpg",
    descripcion: "Preparado con fresas frescas y helado artesanal."
  },
  {
    titulo: "Copa Arcoíris de Gelatina y Helado",
    img: "assets/imagenesproyec/CopaArcoírisdeGelatinayHelado.jpg",
    descripcion: "Helado acompañado de gelatinas de colores y crema batida."
  },
  {
    titulo: "Nuevo Sabor: Chocolate Blanco con Almendras",
    img: "assets/imagenesproyec/NuevoSaborChocolateBlancoconAlmendras.jpg",
    descripcion: "Helado cremoso con trozos reales de almendra caramelizada."
  },
  {
    titulo: "Semana del Café Helado",
    img: "assets/imagenesproyec/cafehelado.jpg",
    descripcion: "Especial de bebidas frías basadas en café premium."
  },
  {
    titulo: "Variedad de Salsas Artesanales",
    img: "assets/imagenesproyec/VariedaddeSalsasArtesanales.jpg",
    descripcion: "Caramelo, chocolate, frutos rojos y más, hechas en la casa."
  },
  {
    titulo: "Helado de Yogurt Griego con Miel",
    img: "assets/imagenesproyec/HeladodeYogurtGriegoconMiel.jpg",
    descripcion: "Una combinación ligera y deliciosa con miel pura."
  }
];

const grid = document.getElementById("newsGrid");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

renderNovedades(novedades);

function renderNovedades(lista) {
    grid.innerHTML = "";
    lista.forEach(n => {
        grid.innerHTML += `
            <div class="card" onclick="mostrarModal('${n.titulo}', '${n.img}', '${n.descripcion}')">
                <img src="${n.img}">
                <h3>${n.titulo}</h3>
                <p>${n.descripcion.substring(0, 70)}...</p>
            </div>
        `;
    });
}

search.addEventListener("input", e => {
    const filtro = e.target.value.toLowerCase();
    const filtrados = novedades.filter(n =>
        n.titulo.toLowerCase().includes(filtro)
    );
    renderNovedades(filtrados);
});

function mostrarModal(titulo, img, descripcion) {
    modalBody.innerHTML = `
        <h2>${titulo}</h2>
        <img src="${img}">
        <p>${descripcion}</p>
    `;
    modal.classList.remove("hidden");
}

closeModal.onclick = () => modal.classList.add("hidden");

window.onclick = e => {
    if (e.target === modal) modal.classList.add("hidden");
};