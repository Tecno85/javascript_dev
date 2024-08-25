// 1. Escribe un comentario en una línea

// RTA: Escribiendo un comentario en una línea.

// 2. Escribe un comentario en varias líneas

/*
RTA: 
Al comiendo pensaba, 
que aprender desarrollo 
era sencillo,
hoy me doy cuenta 
que no lo es:
Pero vaya que si puedo
ser un excelente Desarrollador :)
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myName = "Ivan"; // string

let age = 38; // number (entero)
let height = 1.65; // number (decimal)

let isAdult = true; // boolean
let isYoung = false; // boolean

let porcentaje = null; // null

let cost; // undefined

let mySymbol = Symbol("mysymbol"); // Symbol

let myBigInt = BigInt(8854759347569034875093475039485039485039485039450n); // bigint
let myBigIntOne = 348092570323854202857023940923840293n;

// 4. Imprime por consola el valor de todas las variables

console.log("********Valor de Variables*********");

console.log(myName);

console.log(age);
console.log(height);

console.log(cost);

console.log(porcentaje);

console.log(isAdult);
console.log(isYoung);

console.log(mySymbol);

console.log(myBigInt);
console.log(myBigIntOne);

// 5. Imprime por consola el tipo de todas las variables

console.log("*******Tipo de Variables********");

console.log(typeof myName);

console.log(typeof age);
console.log(typeof height);

console.log(typeof porcentaje);

console.log(typeof cost);

console.log(typeof isAdult);
console.log(typeof isYoung);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigIntOne);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = "Ismael";

age = 39; // number (entero)
height = 1.64; // number (decimal)

isAdult = false; // boolean
isYoung = true; // boolean

porcentaje = null; // null

cost; // undefined

mySymbol = Symbol("mysymbolone"); // Symbol

myBigInt =
  BigInt(333333333333333344444444444444444444444555555555555555555555222222n); // bigint
myBigIntOne =
  111111111111111222222222222222222222223333333333333333333344444444444n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 39;

age = "Ivan";
height = "Madrid";

isAdult = null;
isYoung;

porcentaje = true;

cost = false;

mySymbol =
  BigInt(333333333333333344444444444444444444444555555555555555555555222222n);

myBigInt = Symbol("mysymbolone");
myBigIntOne = 12.5;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const yourname = "Esteban";

const yourAge = 2;
const yourHeight = 60.5;

const yourYoung = true;
const yourOld = false;

const yourUnderfined;

const yourNull = null;

const yourSymbol = Symbol("yoursymbol");

const yourBigInt = BigInt(234232333333333333333333333333333333333333333333333333333n);
const yourBigIntTwo = (453249580923458093485092850298340298304820394802938409238n);

// 9. A continuación, modifica los valores de las constantes

const yourname = "Ismael";

const yourAge = 3;
const yourHeight = 63.5;

const yourYoung = false;
const yourOld = true;

const yourUnderfined = Null;

const yourNull;;

const yourSymbol = BigInt("yoursymbol");

const yourBigInt = (234232333333333333333333333333333333333333333333333333333n);
const yourBigIntTwo = BigInt(453249580923458093485092850298340298304820394802938409238n);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Todas las constantes a las cuales se les cambiaron los valores arrojaron el error asociado a que no se puede a volver a declarar las variables con ámbito de bloque y falta del inicializador en la declaración const. 
