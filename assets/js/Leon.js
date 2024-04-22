import { Animal } from './Animal.js';
import { playSound } from './audiomanager.js';

// exporto la clase Leon que se exiende (es hija) de la Clase Animal
export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
      // El constructor hereda toda los atributos y usamos super() para inicializar estos atributos en la clase
    super(nombre, edad, img, comentarios, sonido);
  }
  // metodo Rugir() de la clase Leon
  Rugir() {
    playSound(this._sonido);
  }
}
