// creamos esta función aparte para mantener el codigo modulado
// Esta función se encarga de encontrar el sonido correspondiente
export function playSound(soundFilePath) {
    const player = document.getElementById('player');
    player.src = soundFilePath;
    player.play();
  }
  