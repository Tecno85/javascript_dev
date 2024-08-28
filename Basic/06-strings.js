// Strings

// Concatenación

let myName = "Ivan";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud (Método Length)

console.log(greeting.length);

// Acceso a caracteres ([])
console.log(greeting[0]);
console.log(greeting[9]);

// Métodos comunes

console.log(greeting.toUpperCase()); // Cambia las letras a MAYÚSCULAS
console.log(greeting.toLowerCase()); // Cambia las letras a minúsculas
console.log(greeting.indexOf("Hola"));// indice 0
console.log(greeting.includes("Hola")); // true
console.log(greeting.includes("Madrid")); // false
console.log(greeting.slice(0, 10)); // slice, imprime los elementos del 0 al 9 // Hola, Ivan
console.log(greeting.replace("Ivan", "Esteban")); // Reemplaza la palabra que le asignemos por una nueva.

// Template Literals (Plantillas Literales)

let message = `Hola, este 
es mi 
curso de 
JavaScript`

console.log(message);

// Interpolación de Variables




