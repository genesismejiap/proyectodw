function toggleMenu() {
    document.getElementById("menu").classList.toggle("mostrar");
}

document.addEventListener("DOMContentLoaded", () => {
    let carruselPrincial = new Carrusel(
        document.querySelector(".carrusel")
    );
    carruselPrincial.init();
});

const iconoMenu = document.getElementById("icono-menu");
const menu = document.getElementById("menu");

iconoMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
});



class Carrusel {
    constructor(contenedor) {
        this.container = contenedor;
        this.track = contenedor.querySelector(".carrusel-track");
        this.items = [...this.track.children];
        this.btnLeft = contenedor.querySelector(".carrusel_left");
        this.btnRight = contenedor.querySelector(".carrusel_right");
        this.indicadores = contenedor.querySelector(".carrusel-indicadores");
        this.actual = 0;
        this.timer = null;

        this.crearIndicadores();
        this.eventos();
        this.auto();
    }

    crearIndicadores() {
        this.items.forEach((_, i) => {
            const b = document.createElement("span");
            if (i === 0) b.classList.add("activo");
            b.addEventListener("click", () => this.irA(i));
            this.indicadores.appendChild(b);
        });
    }

    eventos() {
        this.btnRight.onclick = () => this.siguiente();
        this.btnLeft.onclick = () => this.anterior();
        this.container.onmouseenter = () => clearInterval(this.timer);
        this.container.onmouseleave = () => this.auto();
    }

    actualizarIndicadores() {
        [...this.indicadores.children].forEach((p, i) => {
            p.classList.toggle("activo", i === this.actual);
        });
    }

    siguiente() {
        this.actual = (this.actual + 1) % this.items.length;
        this.mover();
    }

    anterior() {
        this.actual = (this.actual - 1 + this.items.length) % this.items.length;
        this.mover();
    }

    irA(index) {
        this.actual = index;
        this.mover();
    }

    mover() {
        this.track.style.transform = `translateX(-${this.actual * 100}%)`;
        this.actualizarIndicadores();
    }

    auto() {
        this.timer = setInterval(() => this.siguiente(), 4000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Carrusel(document.querySelector(".carrusel"));
});
