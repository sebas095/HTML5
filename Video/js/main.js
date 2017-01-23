window.addEventListener('load', init , false);
let video, volumen, progress;

function init() {
  video = document.getElementById('video');
  progress = document.getElementById('progress');
  volumen = document.getElementById('volumen');

  // Listeners
  document.getElementById('play').addEventListener('click', onPlay);
  document.getElementById('pause').addEventListener('click', onPause);
  document.getElementById('stop').addEventListener('click', onStop);

  volumen.addEventListener('change', handleVolumen);
  video.addEventListener('timeupdate', updateTime);
  // video.addEventListener('loadedmetadata', assignDuration);
  progress.max = video.duration;
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
  video.volume = ev.target.value / 100;
}

function updateTime() {
  document.getElementById('time').innerHTML = video.currentTime;
  progress.value = video.currentTime;
}

function assignDuration() {
  progress.max = video.duration;
}
