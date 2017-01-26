window.addEventListener('load', init);
let flag = false;

function init() {
  const el = document.querySelector('#element');
  el.onclick = (ev) => {
    // if (!el.classList.contains('red'))
    //  add class multiples
    //   el.classList.add('red');
    // else
    //   el.classList.remove('red');
    // flag = !flag;
    el.classList.toggle('red');
  };
}
