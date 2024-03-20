
const atraer = document.querySelector(".atraer");
const repeler = document.querySelector(".repeler");

const caja1 = document.querySelector(".box");
const caja2 = document.querySelector(".box2");
const descripcionRepeler=document.querySelector(".repulsion");
const descripcionAtraer=document.querySelector(".atraccion");

let atraccionActivada = false;
let repelerActivado = false;

function activarAtraccion() {
  atraccionActivada = !atraccionActivada; 
  if (atraccionActivada) {
    caja1.style.position = 'absolute';
    descripcionAtraer.style.display="flex";
    document.addEventListener('mousemove', moverCaja1);
  } else {
    document.removeEventListener('mousemove', moverCaja1);
    descripcionAtraer.style.display="none";

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
    descripcionRepeler.style.display="flex";
    document.addEventListener('mousemove', moverCaja2);
  } else {
    document.removeEventListener('mousemove', moverCaja2);
    descripcionRepeler.style.display="none";

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


const customCursor = document.createElement("img");
customCursor.src = "img/iman.png";
customCursor.style.position = "absolute";
customCursor.style.pointerEvents = "none"; 
document.body.appendChild(customCursor);

document.body.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
});
