// Strings

// Concatenación

// Concatenar: Es el proceso de unir dos o más "Strings"(cadenas de texto) o valores en una sola. Se hace usando el operador (+). Las varibles que contiene tipos númericos, son convertidas a tipo strings para ser concatenadas.

let myName = "Ivan";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud (Método Length)

console.log(greeting.length); // Da la longitud de la palabra "Hola"

// Acceso a caracteres ([])
console.log(greeting[0]); // De esta manera se accede a la primera letra ("H")
console.log(greeting[9]); // De esta manera se accede a la octaba letra ("n")

// Métodos comunes

console.log(greeting.toUpperCase()); // Cambia las letras a MAYÚSCULAS
console.log(greeting.toLowerCase()); // Cambia las letras a minúsculas
console.log(greeting.indexOf("Hola")); // indice 0
console.log(greeting.includes("Hola")); // true
console.log(greeting.includes("Madrid")); // false
console.log(greeting.slice(0, 10)); // slice, imprime los elementos del 0 al 9 // Hola, Ivan
console.log(greeting.replace("Ivan", "Esteban")); // Reemplaza la palabra que le asignemos por una nueva.

// Template Literals (Plantillas Literales)

// Son una forma poderosa y flexible de trabajar con candenas de texto. Se utilizan comillas ivertidas (```) en lugar de comillas simples o dobles, lo que permite incluir variables y expresiones directamente en la cadena, sin necesidad de usar el operador de concatenación.

let message = `Hola, este 
es mi 
curso de 
JavaScript`;

console.log(message);

// Interpolación de Variables

let saludo = "Hola Mundo";
console.log(saludo);
