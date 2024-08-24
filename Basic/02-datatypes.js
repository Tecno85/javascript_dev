// Tipos de Datos

// Datos Primitivos: Datos básicos, inmutables que representan un solo valor. No son objetos y no tienen funciones o métodos.

// String (Cadena de Carácteres)
let myName = "Ivan Madrid";
let alias = "Madrid";
let email = `tecno85@gmail.com`;

// Number (Números)
let age = 38; // Entero
let height = 1.64; // Decimal

// Boolean (Booleanos)
let isTeacher = true;
let isStudent = false;

// Undefined
let undefineValue;
console.log(undefineValue); // Variable declarada, pero no inicializada, no se le ha asignado un valor. 

// Null
let nullValue = null; // Variable creada con un valor asociado el cual es nulo. Es puesto directamente por el desarrollador. 

// Symbol: representan valores únicos que se utilizan como identificadores de propiedades para los objetos
let mySymbol = Symbol("mysymbol");

// BigInt: Son número enteros extremadamente grandes

let myBigInt = BigInt(895739485730987659834756938475934563453453453453849);
let myBigInt2 = 895739485730987659834756938475934563453453453453849n;

// Como saber a que tipo de datos pertenece una variable

console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isStudent);
console.log(typeof isTeacher);

console.log(typeof undefineValue);
console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);

