window.addEventListener('load', init, false);

function init() {
  const form = document.getElementById('form');
  form.addEventListener('submit', sendForm, false);
}

function sendForm(ev) {
  ev.preventDefault();
  const fD = new FormData(this);

  const ajax = new XMLHttpRequest();
  ajax.open('POST', 'php/target.php', true);
  ajax.responseType = 'text';
  ajax.send(fD);
  ajax.addEventListener('load', (ev) => {
    if (ajax.status === 200) {
      console.log(ajax.response);
    }
  }, false);
  return false;
}
