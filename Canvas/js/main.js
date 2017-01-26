window.addEventListener('load', init);
let canvas, ctx;
let x = 0, y = 0;
let vx = 5, vy = 5;

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  // Rectangulos
  // ctx.fillStyle = 'rgb(200, 50, 50)';
  // ctx.fillRect(100, 100, 400, 200);
  // ctx.strokeRect(100, 100, 400, 200);
  // ctx.clearRect(100, 100, 400, 200);

  // ctx.strokeStyle = 'blue';
  // ctx.lineWidth = 10;

  // Circulos
  // ctx.beginPath();
  // ctx.arc(400, 400, 100, 0, Math.PI);
  // ctx.closePath();
  // ctx.fill();
  // ctx.stroke();

  // Triangulo
  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200, 10);
  // ctx.lineTo(300, 100);
  // ctx.closePath();
  // ctx.stroke();
  //
  // ctx.font = '30pt Arial';
  // ctx.lineWidth = 2;
  // ctx.strokeText('Triangulo', 135, 140);
  // console.log(ctx);
  draw();
}

// window.requestAnimationFrame = (function() {
//   return window.requestAnimationFrame ||
//   window.webkitRequestAnimationFrame ||
//   window.mozRequestAnimationFrame ||
//   callback => {
//    window.setTimeout(callback, 1000 / 60);
//   }
// })();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();

  x += vx;
  y += vy;

  if (x <= 0 || x >= canvas.width) vx *= -1;
  if (y <= 0 || y >= canvas.height) vy *= -1;

  requestAnimationFrame(draw);
}
