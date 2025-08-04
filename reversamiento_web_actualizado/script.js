
function invertirProblema() {
    document.getElementById("reversado").classList.remove("hidden");
    document.getElementById("problema-invertido").textContent = 
        "¿Cómo hacer que los estudiantes se distraigan más?";

    const ideas = [
        "Poner música a todo volumen",
        "Darles acceso a redes sociales",
        "Permitir usar videojuegos",
        "No explicar nada"
    ];

    const list = document.getElementById("ideas-reversadas");
    list.innerHTML = "";
    ideas.forEach((idea) => {
        const li = document.createElement("li");
        li.textContent = idea;
        list.appendChild(li);
    });
}

function revertirIdeas() {
    document.getElementById("soluciones").classList.remove("hidden");

    const soluciones = [
        "Silenciar los celulares",
        "Bloquear redes durante clase",
        "Usar juegos educativos como refuerzo",
        "Explicar con claridad y apoyo visual"
    ];

    const list = document.getElementById("ideas-revertidas");
    list.innerHTML = "";
    soluciones.forEach((sol) => {
        const li = document.createElement("li");
        li.textContent = sol;
        list.appendChild(li);
    });
}

let car = null;
let position = 10;

window.onload = () => {
    car = document.getElementById("car");
};

function moverAdelante() {
    if (position < 600) position += 100;
    car.style.left = position + "px";
    document.getElementById("explicacion").textContent =
        "Conduces hacia adelante, siguiendo tu camino normalmente.";
}

function moverAtras() {
    if (position > 0) position -= 100;
    car.style.left = position + "px";
    document.getElementById("explicacion").textContent =
        "Estás haciendo reversa. Cambias la dirección para encontrar una nueva forma de avanzar. Eso es reversamiento.";
}
