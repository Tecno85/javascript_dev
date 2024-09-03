/* 
if/else/else if/ternaria
*/

// 1. Imprime por consola tu nombre si una variable toma su valor

// Solución 1:

let myNombre = "ivan";

if (myNombre == "ivan") {
  console.log(`Tu nombre es ${myName}.`);
}

// Solución 2:

let myName = "Ivan";
let varMyName = myName;

if (varMyName == myName) {
  console.log(varMyName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Ismael";
let password = 855;

let correcto =
  user == "Ismael" && password == 855
    ? "Usuario y contraseña correctos"
    : "usuario y contraseña incorrectos";
console.log(correcto);

if (user == "Ismael" && password == 855) {
  console.log("Usuario y contraseña correcta");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// Solución 1:

let number = 0;

if (number == 0) {
  console.log(`El número ingresado es cero`);
} else if (number > 0) {
  console.log("El número ingresado es positivo");
} else {
  console.log("El número ingresado es negativo");
}

// Solución 2:

let numero = -1;

let verifiedNumero =
  numero == 0
    ? "EL número es Cero"
    : numero < 0
    ? "El número es negativo"
    : "El número es positivo";
console.log(verifiedNumero);

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 18;

if (edad >= 18) {
  console.log("Esta habilitado para votar");
} else {
  let calculoEdad = 18 - edad;
  console.log(`Le faltan ${calculoEdad} años para poder votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

const adult = "Adulto";
const minor = "Menor";

let age = 13;

let edadFinal = age >= 18 ? "Adulto" : "Menor";
console.log(edadFinal);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 3;

switch (mes) {
  case 12:
    console.log("Invierno");
    break;
  case 1:
    console.log("Invierno");
    break;
  case 2:
    console.log("Invierno");
    break;
  case 3:
    console.log("Primavera");
    break;
  case 4:
    console.log("Primavera");
    break;
  case 5:
    console.log("Primavera");
    break;
  case 6:
    console.log("Verano");
    break;
  case 7:
    console.log("Verano");
    break;
  case 8:
    console.log("Verano");
    break;
  case 9:
    console.log("Otoño");
    break;
  case 10:
    console.log("Otoño");
    break;
  case 11:
    console.log("Otoño");
    break;

  default:
    console.log("Ingrese un número del 1 al 12.");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let month = "marzo";
let dias;

switch (month.toLowerCase()) {
  case "febrero":
    dias = 29;
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    dias = 30;
    break;
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    dias = 31;
    break;

  default:
    console.log("El dato ingresado no corresponde a un mes del año");
    dias = 0;
}

if (dias > 1) {
  console.log(`El mes es ${month} y tiene ${dias} días.`);
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "español";
let saludo;

switch (language.toLowerCase()) {
  case "español":
    saludo = "Hola, ¿como estás?";
    break;
  case "ingles":
    saludo = "Hello, how are you?";
    break;
  case "frances":
    saludo = "Salut, comment vas-tu?";
    break;

  default:
    saludo = "Ingresa uno de estos idiomas: español, ingles o frances";
}

console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6 (Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes").

// Solución 1:

let monat = "MARZO";
let zeit;

switch (monat.toLowerCase()) {
  case "marzo":
  case "abril":
  case "mayo":
    zeit = "Primavera";
    break;
  case "junio":
  case "julio":
  case "agosto":
    zeit = "Verano";
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    zeit = "Otoño";
    break;
  case "diciembre":
  case "enero":
  case "febrero":
    zeit = "Invierno";
    break;

  default:
    zeit = "Dato invalido, ingrese un mes del año";
}

console.log(`${zeit}.`);

// Solución 2:

let mesDelAño = 3;
let season;

switch (mesDelAño) {
  case 3:
  case 4:
  case 5:
    season = "Nos encontramos en 'Primavera'";
    break;
  case 6:
  case 7:
  case 8:
    season = "Nos encontramos en 'Verano'";
    break;
  case 9:
  case 10:
  case 11:
    season = "Nos encontramos en 'Otoño'";
    break;
  case 12:
  case 1:
  case 2:
    season = "Nos encontramos en 'Invierno'";
    break;

  default:
    season =
      "Ingresa un número del 1 al 12, para ver a que estación corresponde.";
}

console.log(season);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mesAño = "marzo";
let diasAños;

const diasPorMes = {
  enero: 31,
  febrero: 29,
  marzo: 31,
  abril: 30,
  mayo: 31,
  junio: 30,
  julio: 31,
  agosto: 31,
  septiembre: 30,
  octubre: 31,
  noviembre: 30,
  diciembre: 31,
};

diasAños = diasPorMes[month.toLowerCase()] || 0;

if (diasAños === 0) {
  console.log("El dato ingresado no corresponde a un mes del año");
} else {
  console.log(`El mes de ${mesAño} tiene ${diasAños} días.`);
}

/*
Explicación:

Usamos un objeto diasPorMes donde las claves son los nombres de los meses y los valores son la cantidad de días.
Luego, obtenemos el número de días con diasPorMes[month.toLowerCase()].
Si el mes ingresado no es válido, dias será 0, y mostramos un mensaje de error.
Este enfoque es más conciso y facilita la adición de nuevos meses o cambios futuros.
*/
