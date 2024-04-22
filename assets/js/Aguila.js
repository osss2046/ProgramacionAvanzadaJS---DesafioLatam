import { Animal } from './Animal.js';
import { playSound } from './audiomanager.js';

// exporto la clase Aguila que se exiende (es hija) de la Clase Animal
export class Aguila extends Animal {
  // El constructor hereda toda los atributos y usamos super() para inicializar estos atributos en la clase
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // metodo Chillar que permite reproducir el sonido
  Chillar() {
    playSound(this._sonido);
  }
}
