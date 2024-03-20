
const atraer = document.querySelector(".atraer");
const repeler = document.querySelector(".repeler");

const caja1 = document.querySelector(".box");
const caja2 = document.querySelector(".box2");

// Variable para controlar el estado de los botones
let atraccionActivada = false;
let repelerActivado = false;

// Función para activar o desactivar la atracción
function activarAtraccion() {
  atraccionActivada = !atraccionActivada; // Cambia el estado de activado a desactivado o viceversa
  if (atraccionActivada) {
    // Código de atracción
    caja1.style.position = 'absolute';
    document.addEventListener('mousemove', moverCaja1);
  } else {
    // Código para volver al estado original
    document.removeEventListener('mousemove', moverCaja1);
  }
}

// Función para mover la caja1
function moverCaja1(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let rect = caja1.parentNode.getBoundingClientRect();
  let leftLimit = rect.left;
  let topLimit = rect.top;
  let rightLimit = rect.right - caja1.clientWidth;
  let bottomLimit = rect.bottom - caja1.clientHeight;

  let leftPosition = mouseX - caja1.clientWidth / 10;
  let topPosition = mouseY - caja1.clientHeight / 10;

  leftPosition = Math.max(leftLimit, Math.min(leftPosition, rightLimit));
  topPosition = Math.max(topLimit, Math.min(topPosition, bottomLimit));

  caja1.style.left = leftPosition + 'px';
  caja1.style.top = topPosition + 'px';
}

// Función para activar o desactivar el repeler
function activarRepeler() {
  repelerActivado = !repelerActivado; // Cambia el estado de activado a desactivado o viceversa
  if (repelerActivado) {
    // Código de repeler
    caja2.style.position = 'relative';
    document.addEventListener('mousemove', moverCaja2);
  } else {
    // Código para volver al estado original
    document.removeEventListener('mousemove', moverCaja2);
  }
}

// Función para mover la caja2
function moverCaja2(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  caja2.style.left = mouseX - caja2.clientWidth / 0.3 + 'px';
  caja2.style.top = mouseY - caja2.clientHeight / 0.5 + 'px';
}

// Asignar eventos a los botones para activar o desactivar la atracción y repeler
atraer.addEventListener("click", activarAtraccion);
repeler.addEventListener("click", activarRepeler);
