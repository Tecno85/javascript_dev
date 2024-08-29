/* 
Condicionales (Estructuras de Control)
*/

// Tipos de Condiconales: if, else if, else

// if (si)

let age = 18;

if (age == 37) {
  console.log("La edad es 37");
}

// else (si no)

if (age == 37) {
  console.log("La edad es 37");
} else {
  console.log("La edad no es 37");
}

// else (si no, si)

if (age == 37) {
  console.log("La edad es 37");
} else if (age < 18) {
  console.log("Es menor de edad");
} else {
  console.log("La edad no es 37 y no es menor de edad");
}

// Operador ternario

let edades = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(edades);

// switch: Se emplea cuandos se necesita comparar muchas condiciones contra una única variable.

let day = 6;
let dayName;

switch (day) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sabado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default:
    dayName = "Número de dia incorrecto";
}

console.log(dayName);
