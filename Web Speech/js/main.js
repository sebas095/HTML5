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

  const sr = new webkitSpeechRecognition();
  // Definir si el reconocimiento de voz es constante
  sr.continous = true;
  // Definir si quiere acceder a la informacion mientras este hablando o cuando termine
  sr.interimResults = true;
  sr.lang = 'es';
  sr.start();
  // sr.addEventListener('result', () => ...);
  sr.onresult = (ev) => {
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      if (ev.results[i].isFinal) {
        const value = ev.results[i][0].transcript.replace(/\s/g, '');
        console.log(value);
        if (value === 'reproducir') {
          onPlay();
        } else if (value === 'pausar') {
          onPause();
        } else if (value === 'silenciar') {
          volumen.value = 0;
          handleVolumen();
        } else if (value === 'escuchar') {
          volumen.value = 1;
          handleVolumen();
        } else if (value === 'detener') {
          onStop();
        }
      }
    }
  };
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
