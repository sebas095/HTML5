window.addEventListener('load', init, false);

function init() {
  const box = document.getElementById('box');
  box.addEventListener('dragover', (ev) => {
    ev.preventDefault();
    return false;
  }, false);
  box.addEventListener('drop', uploadFile, false);
}

function uploadFile(ev) {
  ev.preventDefault();
  const files = ev.dataTransfer.files;
  const box = document.getElementById('box');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fD = new FormData();
    fD.append('user_file', file);

    const ajax = new XMLHttpRequest();
    ajax.open('POST', 'php/upload.php', true);
    ajax.addEventListener('load', (ev) => {
      if (ajax.status === 200) {
        box.innerHTML = 'Se subió el archivo correctamente :)';
      } else {
        box.innerHTML = 'No se pudo subir el archivo :(';
      }
    });

    box.innerHTML = 'Subiendo el archivo...';
    ajax.upload.addEventListener('progress', (ev) => {
      if (ev.lengthComputable) {
        const progress = document.getElementById('progreso');
        progress.style.width = ((ev.loaded / ev.total) * 100) + '%';
      }
    });
    ajax.send(file);
  }
  return false;
}
