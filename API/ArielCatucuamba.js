/*TEMA 1: 
BOOLEANOS
Operador terneario
*/

/*Los booleanos son un tipo de dato que nos pueden arrojar dos resultados , true o false , se usan comunmente en comparaciones
o condiciones 

El operador terneario es una forma consiza de escribir una condicion simple if - else 
 que sigue esta sintaxis : condición ? expresión_si_verdadero : expresión_si_falso;

*/

/* A continuacion vamos a mostrar un ejemplo haciendo uso del operador terneario donde su funcion es decirnos si se encuentra
ese producto disponible o agotado*/

let ComboPokemon= false;
let producto = ComboPokemon ? "Disponible" : "Agotado";
console.log(producto);



/* Explicacion:  Primero definimos una variable con un valor booleano y usamos el operador terneario para tomar una desicion 
banadonos en el valor ComboPokemon , si el el valor de ComboPokemon en True entonces el resultado es Disponible
pero si el valor es False nos mostrara Agotado al ejecutar el programa*/

//-------------------------------------------------------------------------------------------------------------------------------
/*TEMA 2: 
CONDICIONALES
*/

/*CONDICIONAL SIMPLE: Es una estructura que ejecuta un bloque especifico si una condicion especifica es verdadera
    Sintaxis: if (condición) {
  // Bloque de código que se ejecuta si la condición es verdadera
}

*/

/* A continuacioon vamos a utilizar un condicional simple que envie un mensaje al proveedor cuando el stock de los soporte 
de audifonos Onikuma sea menor a 15*/

let stockAudifonos=10;
if (stockAudifonos<15) {
    console.log("Proveedor Techvision - se estan agitando los soportes de audifonos");
    console.log("Se requieren 30 unidades nuevas de los soporte de audifonos Onikuma ");
}

/*Explicacion: Se compara si el valor de la variable stockAudifonos es menor a 15 atraves de un condicional simple 
si la condicion es verdadera enviara un mensaje informando al proveedor de que se necesitan mas unidades */

/* CONDICIONAL COMPUESTO: Es una estructura que permite evaluar multiples condiciones y ejecutar bloques de codigo dependiendo 
de la respuesta (true o false) al realizar la condicion

Sintaxis: 
if (condición1) {
  // Bloque de código que se ejecuta si condición1 es verdadera
} else if (condición2) {
  // Bloque de código que se ejecuta si condición2 es verdadera
} else {
  // Bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera
}

*/

/* A continuacion vamos a utilizar un condicional compuesto para que los usuarios 
elijan un producto*/

const prompt = require('prompt-sync')();

let ProductoDeseado = prompt("Ingrese el producto que desea ");

if (ProductoDeseado=="Case") {
    console.log("Contamos con 15 unidades de Case para Nintendo Switch Pikachu 025");

} else if (ProductoDeseado=="Barra espaciadora") {
    console.log("Contamos con 21 unidades de Barra Espaciadora Demon Slayer Tanjiro – Nezuko Abrazo");
}else {
    console.log("No se a encontrado el producto solicitado");
}

/*Explicacion: Se compara si el valor de la variable ProductoDeseado es igual a alguna de las condiciones , si se 
cumple esta condicion nos mostrara el bloque de codigo correspondiente */


/* CONDICIONAL MULTIPLE: Se encarga de evaluar las condiciones de manera mas clara y precisa para ello lo que se usa 
comunmente es el switch , el cual compara un valor contra diferentes casos y ejecuta el bloque de codigo deseado

Sintaxis: 

switch (expresión) {
  case valor1:
    // Bloque de código si expresión === valor1
    break;
  case valor2:
    // Bloque de código si expresión === valor2
    break;
  // Puedes añadir más casos
  default:
    // Bloque de código si ningún caso coincide
}

*/

let mercancía = "Case";

/* A continuacion vamos a utilizar un condicional multiples para que los trabajadores miren el stock de los
productos */
switch (mercancía) {
  case "Case":
    console.log("Hay 15 unidades de Case para Nintendo Switch Pikachu 025");
    break;
  case "Barra espaciadora":
    console.log("Hay 2 unidades de Barra Espaciadora Demon Slayer Tanjiro – Nezuko Abrazo");
    break;
  default:
    console.log("No se ha encontrado el producto solicitado");
}

/* Explicacion: Se compara si la condicion (mercancía) cumple con alguno de los casos , si es asi 
se procede a ejecutar el bloque de codigo correspondiente */
//-------------------------------------------------------------------------------------------------------------------------------
/*TEMA 2: 
BUCLES
*/

/*For: Es una estructura de control que permite repetir un bloque de codigo un numero especifico de veces
sintaxis: for (inicialización; condición; actualización) {
  // Bloque de código que se ejecuta repetidamente
}

*/

/* Acontinuacion haremos un ejemplo donde el usuario podra visualizar las categorias que puede encontrar en la pagina web
*/

let productosStock = ["VENTILADOR","MOUSE","TECLADO","AUDIFONOS"]

for (let i = 0; i < productosStock.length; i++) {
    console.log(productosStock[i]+".\n");
    
}


/*Explicacion: El bucle for recorrera una array que contendra las categorias que se pueden encontrar en la pagina web 
y mostrara cada categoria en la consola */

/*WHILE : Ejecuta un bloque de codigo MIENTRAS una condicion en especifico sea verdadera , si llega a ser falsa el bucle se 
detendra

Sintaxis 
while (condición) {
    // Bloque de código que se ejecuta mientras la condición sea verdadera
  }
  
*/ 

/* Acontinaucion se usara el bucle While para que disminuya el stock de un producto cada vez que se 
realiza una compra  */

StockTeclados = 10;
while (StockTeclados>=1) {
    console.log("Quedan "+StockTeclados+" teclados en stock");
    StockTeclados--;
}

/*Explicacion: Se inicializa una variable StockTeclados en 10 , el bucle while ejecutara el mensaje de los articulos en stock 
hasta que la variable StockTeclados llegue a 1 , esto se logra gracias a que decrementamos el valor de la variable  */

/*Do - while : Similar al while , lo que lo diferencia es que se ejecuta al menos una vez el bocle de codigo y 
la sigue repitiendo mientras se cumpla la condicion 
Sintaxis : 
do {
  // Bloque de código que se ejecuta al menos una vez
} while (condición);

*/
let i=3;

do {
    console.log("Lista de videojuegos ");
    console.log("Fortnite  ");
    console.log("Resident Evil ");
    console.log("Dragon Ball ");
    console.log("Mario Broos ");
    console.log("\n");
    
    i--;

} while (i>=2);

/*Explicacion: Se inicializa una variable i en 3 , el bucle do- while me mostrara una lista de videojuegos 2 veces ya que 
la variable i se decrementa hasta llegar a 1 , y el bucle se detiene al llegar a dicho valor */

/*For - each: es una forma conveniente y fácil de iterar sobre los elementos de un array en JavaScript, ejecutando una función 
sobre cada elemento sin necesidad de manejar un índice manualmente o escribir un bucle tradicional.*/

/*A continuacion vamos a utilizar el for each para mostrar los productos que ofrece a la tienda al publico en general  */

let productosGaming = ["Teclado", "Mouse", "Monitor", "Audífonos"];

productosGaming.forEach(function(producto, indice) {
  console.log(indice + ": " + producto);
});

/*Explicacion: Este código utiliza el método forEach para recorrer el array 
productosGaming, y en cada iteración imprime el índice y el nombre del producto correspondiente. 
Es una forma sencilla de recorrer arrays y realizar acciones con cada elemento, sin necesidad de escribir 
un bucle for tradicional.*/


/* For map es un método utilizado para crear un nuevo array a partir de un array existente, 
aplicando una función a cada uno de sus elementos. A diferencia de forEach, que no devuelve nada, 
map devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original.*/

let preciosGaming = [100, 200, 300, 400];

let preciosConDescuento = preciosGaming.map(function(precio) {
  return precio * 0.9; // Aplica un descuento del 10%
});

console.log(preciosConDescuento);

/*Explicacion: 
El código utiliza el método map en un array preciosGaming, que contiene precios de productos de gaming (100, 200, 300, 400),
 para aplicar un descuento del 10% a cada precio. La función dentro de map multiplica cada precio por 0.9, generando un nuevo
  array preciosConDescuento que contiene los precios después del descuento (90, 180, 270, 360). El método map devuelve un nuevo
   array sin modificar el original, lo que permite realizar transformaciones de manera eficiente. Finalmente, se imprime el 
   nuevo array en la consola.*/

