window.addEventListener('load', init);
let container = null;
let elementoArrastrandose = null;

function init() {
  const circles = document.getElementsByClassName('circle');
  container = document.querySelector('.container');

  container.addEventListener('dragover', dragSobreContainer, false);
  container.addEventListener('dragleave', dragSalioContainer, false);
  container.addEventListener('drop', manejarDrop, false);

  for(let i in circles) {
    const circle = circles[i];
    const x = random(0, 90);
    const y = random(0, 90);
    if (circle.style !== undefined) {
      circle.style.top = y + '%';
      circle.style.left = x + '%';
      circle.addEventListener('dragstart', dragIniciado, false);
      circle.addEventListener('dragend', dragFinalizado, false);
    }
  }
}

function manejarDrop(ev) {
  ev.preventDefault();
  const datos = ev.dataTransfer.getData('text');
  this.innerHTML += datos;
  elementoArrastrandose.parentNode.removeChild(elementoArrastrandose);
  this.classList.remove('over');
}

function dragSobreContainer(ev) {
  ev.preventDefault();
  this.classList.add('over');
  return false;
}

function dragSalioContainer(ev) {
  this.classList.remove('over');
}

function dragIniciado(ev) {
  this.style.backgroundColor = 'blue';
  elementoArrastrandose = this;
  const padre = document.createElement('p');
  const clon = this.cloneNode(true);
  padre.appendChild(clon);
  ev.dataTransfer.setData('text', padre.innerHTML);
}

function dragFinalizado(ev) {
  this.style.backgroundColor = 'red';
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
