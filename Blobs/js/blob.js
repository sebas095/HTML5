window.addEventListener('load', init);

function init() {
  const inputFile = document.getElementById('file');
  inputFile.addEventListener('change', createBlob, false);
}

function createBlob(ev) {
  const {files} = ev.target;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fr = new FileReader();
    fr.addEventListener('load', () => console.log(event, file), false);
    const blob = file.slice(0, 1000);
    fr.readAsBinaryString(blob);
  }
}
