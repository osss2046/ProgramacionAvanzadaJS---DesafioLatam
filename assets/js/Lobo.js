import { Animal } from './Animal.js';
import { playSound } from './audiomanager.js';

// exporto la clase Lobo que se exiende (es hija) de la Clase Animal
export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {      
    // El constructor hereda toda los atributos y usamos super() para inicializar estos atributos en la clase
    super(nombre, edad, img, comentarios, sonido);
  }
// metodo Aullar() de la clase Lobo
  Aullar() {
    playSound(this._sonido);
  }
}
