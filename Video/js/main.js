window.addEventListener('load', init , false);
let video, volumen;

function init() {
  video = document.getElementById('video');
  volumen = document.getElementById('volumen');

  // Listeners
  document.getElementById('play').addEventListener('click', onPlay);
  document.getElementById('pause').addEventListener('click', onPause);
  document.getElementById('stop').addEventListener('click', onStop);

  volumen.addEventListener('change', handleVolumen);
  video.addEventListener('timeupdate', updateTime);
}

function onPlay() {
  video.play();
}

function onPause() {
  video.pause();
}

function onStop() {
  video.pause();
  video.currentTime = 0;
}

function handleVolumen(ev) {
  video.volume = volumen.value;
}

function updateTime() {
  document.getElementById('time').innerHTML = video.currentTime;
  const value = (video.currentTime * 100) / video.duration;
  document.querySelector('#porcentaje').style.width = value + '%';
}
