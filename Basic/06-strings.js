// Strings

// Índice: Es la posición que identifica dónde está un elemento o carácter dentro de un arreglo o cadena.

// Caracteres: Son los elementos individuales de una cadena de texto.

// Concatenación

// Concatenar: Es el proceso de unir dos o más "Strings"(cadenas de texto) o valores en una sola. Se hace usando el operador (+). Las varibles que contiene tipos númericos, son convertidas a tipo strings para ser concatenadas.

let myName = "Ivan";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud (Método Length): Se utiliza para obtener la cantidad de caracteres en una cadena.

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

// Template Literals (Plantillas Literales) / templates strings (Término informal)

// Son una forma poderosa y flexible de trabajar con candenas de texto. Se utilizan comillas ivertidas (```) en lugar de comillas simples o dobles, lo que permite incluir variables y expresiones directamente en la cadena, sin necesidad de usar el operador de concatenación.

// Características Principales

// 1. Multilínea: Permiten crear cadenas de texto en varias líneas sin necesidad de usar caracteres de escape (\n)

let message = `Hola, este 
es mi 
curso de 
JavaScript`;

console.log(message);

// 2. Interpolación de Variables e inclusión de Expresiones: Permite insertar dinámicamente el valor de variables y evaluar expresiones dentro de una cadena de texto usando la sintaxis `${}`( placeholders o marcadores de posición), haciendo el código más legible y flexible. 

let myNombre = "Ismael"
console.log(`Hola, ${myNombre}!`);

// Interpolación de variables y expresiones

// La Interpolación es el proceso de insertar variables y expresiones directamente dentro de una cadena de texto. En los templates literals, esto se hace usando `${}`.

let nombre = "Alice";
let saludo = `Hola, ${nombre}!`;

// Aquí, nombre es una variable, y la estamos interpolando dentro de la cadena.

// Inclusión de expresiones

// Se refiere a la capacidad de evaluar expresiones dentro de `${}` y luego incluir el resultado dentro de la cadena. 

let a = 5;
let b = 10;
let suma = `La suma de 5 y 10 es ${a + b}.`;
