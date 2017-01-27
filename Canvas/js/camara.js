window.addEventListener('load', init);
let canvas, ctx, filter, flag = false;

function init() {
  const video = document.getElementById('video');
  const btn = document.getElementById('tf');
  filter = document.getElementById('filter');
  btn.addEventListener('click', takephoto);

  navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  );

  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, stream => {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, err => console.log(err));
  } else {
    alert('Tu navegador no soporta este sitio');
  }

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  video.addEventListener('loadedmetadata', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    flag = true;
    draw();
  }, false);
}

function draw() {
  ctx.drawImage(video, 0, 0);
  if (filter.value === 'black') {
    whiteBlank();
  } else if (filter.value === 'invertir') {
    invertColors();
  } else if (filter.value === 'sepia') {
    sepia();
  }
  requestAnimationFrame(draw);
}

function takephoto() {
  if (!flag) {
    alert('No puedes tomar fotos por ahora');
    return;
  }
  const imgData = canvas.toDataURL('image/png');
  document.getElementById('foto').src = imgData;
}

function invertColors() {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const {data} = imgData;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
  ctx.putImageData(imgData, 0, 0);
}

function whiteBlank() {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const {data} = imgData;

  for (let i = 0; i < data.length; i += 4) {
    const aux = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = aux;
    data[i + 1] = aux;
    data[i + 2] = aux;
  }
  ctx.putImageData(imgData, 0, 0);
}

function sepia() {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const {data} = imgData;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i] * 0.393 + data[i + 1] * 0.769 + data[i + 2] * 0.189;
    data[i + 1] = data[i] * 0.393 + data[i + 1] * 0.686 + data[i + 2] * 0.168;
    data[i + 2] = data[i] * 0.272 + data[i + 1] * 0.534 + data[i + 2] * 0.131;
  }
  ctx.putImageData(imgData, 0, 0);
}
