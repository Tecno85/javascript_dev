// 1. Crea una variable para cada operación aritmética

let a = 10 + 5;
console.log(a); // Suma

let b = 10 - 5;
console.log(b); // Resta

let c = 10 * 5;
console.log(c); // Multiplicación

let d = 10 / 5;
console.log(d); // División

let e = 10 % 5;
console.log(e); // Módulo o Resto de la división

let f = 10 ** 5;
console.log(f); // Exponenciación

a++; // Incremento
console.log(a);

a--; // Decremento
console.log(a);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let g = 5;
console.log(g);
g += 2;
console.log(g); // Asignación de adición

let h = 4;
console.log(h);
h -= 2;
console.log(h); // Asignación de resta

let i = 10;
console.log(i);
i *= 2;
console.log(i); // Asignación de multiplicación

let j = 15;
console.log(j);
j /= 3;
console.log(j); // Asignación de división

let k = 17;
console.log(k);
k %= 3;
console.log(k); // Asignación de Módulo o Resto de la división

let l = 5;
console.log(l);
l **= 2;
console.log(l); // Asignación de exponenciación

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 == "5"); // true
console.log(5 === 5); // true
console.log(5 != 6); // true
console.log(5 !== "5"); // true
console.log(5 <= 6); // true
console.log(5 >= 3); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 == 6); // false
console.log(4 === "4"); // false
console.log(6 != "6"); // false
console.log(7 !== 7); // false
console.log(9 >= 10); // false
console.log(6 <= 4); // false

// 5. Utiliza el operador lógico and

console.log(5 === 5 && 4 <= 5); // true

// 6. Utiliza el operador lógico or

console.log(i == "i" || e == "e"); // false

// 7. Combina ambos operadores lógicos

console.log((5 === 5 && 4 >= 5) || 4 >= 5);

// 8. Añade alguna negación

console.log(!((5 == 5 && 4 >= 5) || 4 >= 5));

// 9. Utiliza el operador ternario

// Dado un número que representa la edad de una persona, usa un operador ternario para determinar si es mayor de edad (18 años o más).

let edad = 18;

let esMayorEdad = edad >= 18 ? "Mayor de Edad" : "Menor de Edad";
console.log(esMayorEdad);

// Dado un número, usa un operador ternario para determinar si el número es par o impar.

let number = 11;

let modulo = number % 2 === 0 ? "Par" : "Impar";
console.log(modulo);

// Dada una variable que contiene un nombre, usa un operador ternario para crear un saludo. Si la variable está vacía, debe saludar a "Invitado".

let myName = "";
let saludo = myName ? `Hola, ${myName}` : "Hola, invitado";
console.log(saludo);

let myNames = "Ivan";
let saludar = myNames ? `Hola, ${myNames}` : "Hola, invitado";
console.log(saludar);

// Dada una puntuación entre 0 y 100, usa un operador ternario para determinar si la calificación es aprobatoria (60 o más).

let nota = 40;
let resultado =
  nota >= 60 ? `Haz, Aprovado con: ${nota}` : "Lo sentimos, No Aprovaste";
console.log(resultado);

// Dado un precio original y un booleano que indica si hay descuento, usa un operador ternario para aplicar un descuento del 20% si corresponde.

let precio = 100;
let descuento = false;
let porcentejeDescuento = descuento
  ? precio * 0.8
  : `Precio igual: ${precio}, no aplica descuento`;
console.log(porcentejeDescuento);

let precioOriginal = 100; // Este valor puede cambiarse
let hayDescuento = true; // Este valor puede cambiarse
let precioFinal = hayDescuento ? precioOriginal * 0.8 : precioOriginal;
console.log(`El precio final es: ${precioFinal}`);

// 10. Combina operadores aritméticos, de comparáción y lógicas
