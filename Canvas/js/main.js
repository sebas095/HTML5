window.addEventListener('load', init);

function init() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Rectangulos
  // ctx.fillStyle = 'rgb(200, 50, 50)';
  // ctx.fillRect(100, 100, 400, 200);
  // ctx.strokeRect(100, 100, 400, 200);
  // ctx.clearRect(100, 100, 400, 200);

  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 10;

  // Circulos
  // ctx.beginPath();
  // ctx.arc(400, 400, 100, 0, Math.PI);
  // ctx.closePath();
  // ctx.fill();
  // ctx.stroke();

  // Triangulo
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 10);
  ctx.lineTo(300, 100);
  ctx.closePath();
  ctx.stroke();

  ctx.font = '30pt Arial';
  ctx.lineWidth = 2;
  ctx.strokeText('Triangulo', 135, 140);
  console.log(ctx);
}
