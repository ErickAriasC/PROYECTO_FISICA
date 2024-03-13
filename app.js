


const atraer = document.querySelector(".box");
const repeler = document.querySelector(".box2");
const nada = document.querySelector(".box3");


//atraccion
atraer.addEventListener("click", () => {
  console.log(atraer.textContent);

    atraer.style.position='absolute';

    document.addEventListener('mousemove', function(e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
       
        atraer.style.left = mouseX - atraer.clientWidth / 10 + 'px';
        atraer.style.top = mouseY - atraer.clientHeight / 10 + 'px';
    });

});

//repele
repeler.addEventListener("click", () => {
  console.log(repeler.textContent);

  repeler.style.position='relative';

  document.addEventListener('mousemove', function(e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      repeler.style.left = mouseX - repeler.clientWidth / 1 + 'px';
      repeler.style.top = mouseY - repeler.clientHeight / 1 + 'px';
  });


});


//nada
nada.addEventListener("click", () => {
  console.log(nada.textContent);
});
