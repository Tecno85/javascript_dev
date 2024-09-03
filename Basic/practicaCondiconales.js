// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "ivan";

if (myName == "ivan") {
  console.log(`Tu nombre es ${myName}.`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// Solución 1:

let claveUser = "Ismael";
let clavePasword = 10052016;
let user = claveUser;
let password = clavePasword;

if (user == claveUser && password == clavePasword) {
  console.log(`EL usuario y contraseña son correctos.`);
}

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
    ? "El número es negativo"
    : "El número es positivo";
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

let age = 18;

if (age >= 18) {
  console.log(`Estas habilitado para votar`);
} else {
  let añosFaltantes = 18 - age;
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

let alter = 13;

let edadFinal = alter >= 18 ? "Adulto" : "Menor";
console.log(edadFinal);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

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

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
