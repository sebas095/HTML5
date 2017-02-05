// Un worker no tiene acceso al DOM
// Solo se comunica a traves de mensajes

self.addEventListener('message', (ev) => {
  self.postMessage(searchPrimes(parseInt(ev.data)));
}, false)

function searchPrimes(n) {
  if (n < 2) return [];
  console.log(n);
  const primes = [2];
  for (let i = 3; i <= n; i++) {
    let flag = false;
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) {
        flag = true;
        break;
      }
    }
    if (!flag) primes.push(i);
  }
  return primes;
}
