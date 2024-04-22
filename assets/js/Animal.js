// Creamos la clase Animal y la exportamos

export class Animal {

    // creamos el constructor con los atributos necesarios
    constructor(nombre, edad, img, comentarios, sonido) {
      this._nombre = nombre;
      this._edad = edad;
      this._img = img;
      this._comentarios = comentarios;
      this._sonido = sonido;
    }
  // creamos los metodos get para obtener los valores de los atributos
    get Nombre() {
      return this._nombre;
    }
  
    get Edad() {
      return this._edad;
    }
  
    get Img() {
      return this._img;
    }
  
    get Comentarios() {
      return this._comentarios
    }
  
    get Sonido() {
      return this._sonido;
    }
  }
  