# JavaScript BraisMoure

**_Variable_**: Se puede representar como una caja en la que se guardar información para usarla más tarde. Por ejemplo, si se guardar un número o un texto, se puede poner dentro de una variable. Luego, cuando se necesite usar ese número o texto, simplemente se usa el nombre de la variable.

Ejemplo:

```js
let nombre = "Ivan";
let edad = 38;
```

Es posible cambiar lo que hay dentro de la variable en cualquier momento o usarlo en operaciones, como mostrarlo en pantalla.

## Tipos de Variables

**_var_** : fue la forma inicial de declarar variables, mediante el uso de la palabra reservada (_**var**_). El valor asignado a la variable puede ser re-declarado, lo que puede producir errores difíciles de depurar. 

Ejemplo:

```js
//Declaración e inicialización de variable "helloWord"
var helloWorld = "Hola, Ivan"; 
console.log(helloWorld);

//re-declaración de variable, se declara nuevamente la variable y se inicializa con un nuevo valor
var helloWord = "Hola, Ismael"; 

//re-inicialización o re-asignación de variable, solo cambia el valor asignado a la variable. 
helloWorld = "Hola, nuevamente Ivan"; 
console.log(helloWorld);
```

_Nota_: En la actualidad no se debe usar este tipo de forma de declarar variables, debido a varios problemas entre esos el _hoisting_.

Ejemplo:

```js
console.log(miVar); // undefined

var miVar = 5;
console.log(miVar); // 5
```

El hoisting solo mueve la declaración, no la asignación. Es por eso que se obtiene undefined en el primer (console.log). El _hoisting_ permite que puedas usar una variable declarada con **_var_** antes de su declaración en el código, pero su valor será undefined hasta que se le asigne un valor más adelante.

---

**_let_** : Las formas principales de asignar valores a memoria es mediante let y const. Este tipo específico de variable fue incluido en ECMASCRIPT 6 (2015). En estas no se presenta el problema del Hositing. En este caso puedo relizar la re-asignación, la cual me permite asignarle un nuevo valor a la variable let.

```js
let helloIsmael = "Hola, Ismael Madrid";
console.log(helloIsmael); // Hola, Ismael Madrid

helloIsmael = "Hola, nuevamente Ismael";
console.log(helloIsmael); // Hola, nuevamente Ismael
```


**_const_** : En este caso con la palabra reservada const, no puede ser rea-signada. 

```js
const helloEsteban = "Hola, Esteban";
console.log(helloEsteban); // Hola, Esteban

helloEsteban = "Hola, nuevamente Esteban";
console.log(helloEsteban); // TypeError: Assignment to constant variable.
```

---

### _Reglas para nombrar Variables_

En JavaScript, las variables deben seguir ciertas reglas y buenas prácticas para ser nombradas correctamente. Aquí te explico las principales:

### _Reglas para nombrar variables:_

1. Debe comenzar con una letra, un signo de dólar ($), o un guion bajo (\_):

   - Ejemplos válidos: `nombre`, `_edad`, `$salario`
   - Ejemplos inválidos: `1nombre`, `-edad`

1. Después del primer carácter, puedes usar letras, números, el signo de dólar ($), o el guion bajo (\_):

   - Ejemplos válidos: `nombre1`, `$_edad`, `usuario_nombre`
   - Ejemplos inválidos: `nombre-edad` (El guion medio no se permite.)

1. No puede ser una palabra reservada de JavaScript:
   - Palabras como `let`, `var`, `function`, `if`, `else`, etc., no pueden ser usadas como nombres de variables.
   - Ejemplo inválido: `let let = 5;` (Aquí `let` es una palabra reservada).

### Buenas prácticas al nombrar variables:

1. Usa nombres descriptivos:

   - Es mejor usar nombres que describan lo que contiene la variable.
   - Ejemplo: `let edadUsuario = 25;` es mejor que `let x = 25;`.

2. Usa el formato `camelCase`:

   - Comienza con una letra minúscula y luego cada nueva palabra empieza con mayúscula.
   - Ejemplo: `let nombreCompleto = "Juan Pérez";`.

3. Evita usar nombres de una sola letra, a menos que sea algo temporal:

   - Ejemplo: `let i = 0;` se usa comúnmente en bucles, pero para variables más importantes, usa nombres completos como `indice` o `contador`.

4. Sé consistente:

   - Mantén el mismo estilo de nombres en todo tu código para que sea fácil de leer y mantener.

### Ejemplos de nombres de variables correctos:

```javascript
let nombreUsuario = "Carlos";
let totalVentas = 1500;
let _contador = 0;
let $precio = 99.99;
```

Quede minuto: 46:00



