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

// Solución 2:

if (user == "Ismael" && password == 10052016) {
  console.log("EL usuario y la contraseña son los correctos.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// Solución 1:

let numero = 0;

let verifiedNumero =
  numero == 0
    ? "EL número es Cero"
    : numero < 0
    ? "El número es Negativo"
    : "El número es Positivo";
console.log(verifiedNumero);

// Solución 2:

if (numero == 0) {
  console.log(`El numero es igual a Cero`);
} else if (numero < 0) {
  console.log(`El número es negativo`);
} else {
  console.log(`EL número es Positivo`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// Solución 1:

let ages = 18;

if (ages >= 18) {
  console.log(`Estas habilitado para votar`);
} else {
  let añosFaltantes = 18 - ages;
  console.log(
    `No está habilitado para votar, le faltan ${añosFaltantes} años.`
  );
}

// Solución 2:

let missingYears = 18 - age;
let verificarVotación =
  age >= 18
    ? "Estas habilitado para votar"
    : `No estas habilitado para votar, te falta ${missingYears} años.`;
console.log(verificarVotación);

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

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// Solucion 1:

let month = "febrero";
let days;

switch (month.toLowerCase()) {
  case "febrero":
    days = 29;
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    days = 30;
    break;
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    days = 31;
    break;

  default:
    console.log("Ingrese un mes del año");
    days = 0;
}

if (days > 0) {
  console.log(`El mes ${month} tiene ${days} días.`);
}

// Solución 2:

let meses = "abril";

switch (meses.toLowerCase()) {
  case "febrero":
    console.log(`EL mes de ${meses} tiene 29 días`);
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log(`EL mes de ${meses} tiene 30 días`);
    break;
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log(`EL mes de ${meses} tiene 31 días`);
    break;

  default:
    console.log("Ingresa un mes del año");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lenguage = "Aleman";
let saludo;

switch (lenguage.toLowerCase()) {
  case "español":
    saludo = "Hola, este es un saludo en Español";
    break;
  case "ingles":
    saludo = "Hello, this is a greeting in English";
    break;
  case "frances":
    saludo = "Bonjour, ceci est une salutation en francais";
    break;
  case "aleman":
    saludo = "Hallo, hier ist ein grub auf Deutsch";
    break;

  default:
    saludo = "Ingresa uno de estos idiomas: Español, Ingles, Frances o Aleman";
}

console.log(saludo);
