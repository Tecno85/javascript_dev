/* 
if/else/else if/ternaria
*/

// 1. Imprime por consola tu nombre si una variable toma su valor

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

let number = 0;

if (number == 0) {
  console.log(`El número ingresado es cero`);
} else if (number > 0) {
  console.log("El número ingresado es positivo");
} else {
  console.log("El número ingresado es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 18;

if (edad >= 18) {
  console.log("Esta habilitado para votar");
} else {
  let calculoEdad = 18 - edad;
  console.log(`Le faltan ${calculoEdad} años para poder votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let edadFinal = edad >= 18 ? "Adulto" : "Menor";
console.log(edadFinal);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2;
let estacion;

switch (mes) {
  case 0:
    estacion = "Invierno";
    break;
  case 1:
    estacion = "Verano";
    break;
  case 2:
    estacion = "Primavera";
    break;
  case 3:
    estacion = "otoño";
    break;

  default:
    console.log("Ingrese un valor entre 0 y 3");
}

console.log(estacion);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
