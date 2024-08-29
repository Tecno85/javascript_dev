// 1. Concatena dos cadenas de texto

let firstName = "Ivan";
let lastName = "Madrid";

console.log("Su nombre es " + firstName + " " + lastName);

// 2. Muestra la longitud de una cadena de texto

console.log(firstName.length);

// 3. Muestra el primer y último carácter de un string

console.log(lastName[0]);

let ultimeLetra = lastName[lastName.length - 1];
console.log(ultimeLetra);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

console.log(`Esta es una 
    cadena de texto
    de varias 
    líneas`);

// 6. Interpola el valor de una variable en un string

let a = 10 * 5;

console.log(`El valor de a es: ${a}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let space = "Probando la función replace";
let spaceGuiones = space.replace(/ /g, "_");
console.log(spaceGuiones); 

// La expresión regular "/ /g", busca todosmlos espacios en blanco en la cadena. La opción "g"(global) asegura que todos los espacios sean reemplazados, no solo el primero. 

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud
