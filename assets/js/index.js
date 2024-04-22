// importamos las clases que vamos a utilizar
import { Leon } from './Leon.js';
import { Lobo } from './Lobo.js';
import { Oso } from './Oso.js';
import { Serpiente } from './Serpiente.js';
import { Aguila } from './Aguila.js';
import { playSound } from './audiomanager.js';

// Mapeamos en un objeto las clases anteriores
const animalConstructors = {
    Leon: Leon,
    Lobo: Lobo,
    Oso: Oso,
    Serpiente: Serpiente,
    Aguila: Aguila
  };

  // creamos un arreglo vacio llamado animalesData que usaremos para almacenar los datos provenientes del json
let animalesData = [];

// Función asíncrona para cargar los datos desde un archivo JSON
async function loadAnimalData() {
  // Usamos Try y Catch para prevenir errores
  try {
    const response = await fetch('animales.json'); // Asegúrate que la ruta al archivo JSON es correcta
    const data = await response.json();
    // Almacenamos los datos del json en el arreglo
    animalesData = data.animales;
  } catch (error) {
    console.error("Error al cargar los datos de los animales:", error);
  }
}

// IIFE para cargar los datos al iniciar
(async function() {
  await loadAnimalData();
})();


// Agregamos un evento cuando se hace clic en 'agregar' usando el getElementById
document.getElementById('btnRegistrar').addEventListener('click', async () => {

  // Obtenemos los datos ingresados en el formulario y los almacenamos en variables
  const tipoAnimal = document.getElementById('animal').value;
  const edadAnimal = document.getElementById('edad').value;
  const comentariosAnimal = document.getElementById('comentarios').value;

  // creamos una variable y luego un condicional para trabajar el caso en de asincronico (async)
  // para cargar datos de los animales de un archivo JSON.
  const animalInfo = animalesData.find(a => a.name === tipoAnimal);
  if (animalInfo && tipoAnimal && edadAnimal && comentariosAnimal) {
    const AnimalClass = animalConstructors[tipoAnimal];
    if (AnimalClass) {
      const animal = new AnimalClass(tipoAnimal, edadAnimal, `assets/imgs/${animalInfo.imagen}`, comentariosAnimal, `assets/sounds/${animalInfo.sonido}`);
      addAnimalToDOM(animal);
    } else {
      console.error('Animal constructor not found for:', tipoAnimal);
    }
  } else {
    alert('Por favor, completa todos los campos y asegúrate de que los datos son correctos.');
  }
});

// función para agregar el animal al DOM
function addAnimalToDOM(animal) {
  const animalElement = document.createElement('div');
  animalElement.classList.add('animal-element');
  animalElement.innerHTML = `
    <div class="animal-img-container">
      <img src="${animal.Img}" alt="${animal.Nombre}" class="img-fluid">
    </div>
  `;
  // creamos el boton para el sonido
  const soundButton = document.createElement('button');
  soundButton.innerText = 'Reproducir Sonido';
  soundButton.addEventListener('click', () => {
    if (animal instanceof Leon) {
      animal.Rugir();
    } else if (animal instanceof Lobo) {
      animal.Aullar();
    } else if (animal instanceof Oso) {
      animal.Grunido();
    } else if (animal instanceof Serpiente) {
      animal.Sisear();
    } else if (animal instanceof Aguila) {
      animal.Chillar();
    }
  });
  
  animalElement.appendChild(soundButton);
  
  // creamos el evento para cuando le hace clic a la imagen y abrir un modal
  const animalImage = animalElement.querySelector('img');
  animalImage.addEventListener('click', () => {
    // ejecuta la función MostrarDetallesAnimal
    MostrarDetallesAnimal(animal);
  });

  document.getElementById('Animales').appendChild(animalElement);
}

function MostrarDetallesAnimal(animal) {
  // esta función crea el modal y muestra la imagen junto con nombre, edad, comentarios

  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = `
    <div class="text-center" style="color: white;">
      <img src="${animal.Img}" alt="${animal.Nombre}" class="img-fluid mb-2">
      <h4>${animal.Nombre}</h4>
      <p>Edad: ${animal.Edad}</p>
      <p>${animal.Comentarios}</p>
    </div>
  `;
  
  $('#exampleModal').modal('show');
}
