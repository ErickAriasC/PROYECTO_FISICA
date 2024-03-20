
const atraer = document.querySelector(".atraer");
const repeler = document.querySelector(".repeler");

const caja1 = document.querySelector(".box");
const caja2 = document.querySelector(".box2");

let atraccionActivada = false;
let repelerActivado = false;

function activarAtraccion() {
  atraccionActivada = !atraccionActivada; 
  if (atraccionActivada) {
    caja1.style.position = 'absolute';
    document.addEventListener('mousemove', moverCaja1);
  } else {
    document.removeEventListener('mousemove', moverCaja1);
  }
}

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

function activarRepeler() {
  repelerActivado = !repelerActivado; 
  if (repelerActivado) {
    caja2.style.position = 'relative';
    document.addEventListener('mousemove', moverCaja2);
  } else {
    document.removeEventListener('mousemove', moverCaja2);
  }
}

function moverCaja2(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  caja2.style.left = mouseX - caja2.clientWidth / 0.3 + 'px';
  caja2.style.top = mouseY - caja2.clientHeight / 0.5 + 'px';
}

atraer.addEventListener("click", activarAtraccion);
repeler.addEventListener("click", activarRepeler);
