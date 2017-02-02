window.addEventListener('load', init);

function init() {
  const inputData = document.getElementById('files');
  inputData.addEventListener('change', readFiles, false);
}

function readFiles(ev) {
  const files = ev.target.files;
  const reader = new FileReader();
  reader.addEventListener('load', displayFileInfo, false);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    document.getElementById('name').innerHTML = file.name;
    document.getElementById('size').innerHTML = file.size + ' bytes';

    if (file.type.match(/image.*/i)) {
      reader.readAsDataURL(file);
      continue;
    }

    reader.readAsText(file);
  }
}

function displayFileInfo(ev) {
  const {result} = ev.target;
  const target = document.getElementById('content');
  if (!result.includes(' ')) {
    const img = document.createElement('img');
    img.src = result;
    target.appendChild(img);
    return;
  }
  target.innerHTML = result;
}
