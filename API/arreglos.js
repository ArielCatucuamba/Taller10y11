    /*Arreglos  */

    /*Es una estructura de datos que permite almacenar múltiples valores en una sola variable
    Sintaxis 
    const nombreDelArreglo = [elemento1, elemento2, elemento3, ...];

    */


const categoriasAmazon=["Juegos","Hogar","Electrodomesticos","Juguetes",{juego:"Fortnite"},["Belleza","Relojes"]]

/* lenght : se utiliza para obtener la cantidad de elementos que contiene un arreglo.*/

console.log("Numero de elementos: ",categoriasAmazon.length);

/*Formas de iterar sobre los elementos de un arreglo*/

/*Primera forma : es un bucle for que recorre un arreglo llamado categoriasAmazon y muestra en la consola cada uno de sus 
elementos
*/


for (let i = 0; i < categoriasAmazon.length; i++) {
    console.log(categoriasAmazon[i]);
    
}

/*Segunda forma:utiliza el método forEach para recorrer un arreglo llamado categoriasAmazon y mostrar en la consola cada elemento
junto con su índice.  */


categoriasAmazon.forEach((h,j)=>console.log(`${j} - ${h}`))

/*Tercera forma:  utiliza el método map para crear un nuevo arreglo basado en el arreglo original categoriasAmazon, añadiendo la palabra
"Categoria -" antes de cada elemento. Luego, imprime ambos arreglos en la consola.*/


const newcategoriasAmazon= categoriasAmazon.map((e)=> `Categoria - ${e}`)
console.log(categoriasAmazon);
console.log(newcategoriasAmazon);


/*Desestructuracion a nivel de arreglos: Es asignar los valores de un arreglo en variables por separado*/


const Videojuegos = ["Teclado","Mouse","Alfombrilla","Ventilador"]

const [,,,seccion4] =Videojuegos 
console.log(seccion4);


/*Validaciones : Sirve para mostrar un bloque de codigo si la condicion se cumple o mostrar otro bloque de codigo si no*/

Videojuegos.length <= 5 ? console.log("Registrar categoria") : console.log("No se puede registrar");


/*Metodos importantes*/

/*push() – Inserta un elemento al final del arreglo.*/

Videojuegos.push("Zapatos")
console.log(Videojuegos);

/*unshift() – Inserta un elemento al inicio del arreglo.*/

Videojuegos.unshift("Halloween")
console.log(Videojuegos);

/*pop() – Remueve un elemento del final del arreglo. */

Videojuegos.pop()
console.log(Videojuegos);

/*shift() – Remueve un elemento del principio del arreglo y no necesita de argumentos.*/

Videojuegos.shift()
console.log(Videojuegos);

/*slice() – Crea una copia sombra del arreglo.*/


Videojuegos.slice()
console.log(Videojuegos);

/*Array.isArray() – Determina si el valor es un arreglo.*/
// verificar si la variable Videojuegos es un arreglo y, en función de eso, realiza diferentes acciones


if (Array.isArray(Videojuegos)) {
    console.log("Si es un arreglo");
    console.log(Videojuegos);
} else {
    console.log("Videojuegos no es un arreglo");
}

/*length – Determina el tamaño del arreglo. */

console.log(Videojuegos.length);

/*find . busca un elemento específico en el arreglo Videojuegos y verifica si existe, luego imprime un mensaje dependiendo de si se 
encontró el elemento */

let resultCategorie = Videojuegos.find((c)=>{return c=== "Mouse"}) 
console.log(resultCategorie);
resultCategorie ? console.log("Mostrar categoria de Amazon") : console.log("No existe la categoria");


/*FILTER filtra los elementos que tengan una concidencia que yo pongo, en este caso que la primera letra del elemento del array comience con
T */


let filtro = Videojuegos.filter((c)=>(c.startsWith("T")))
console.log(filtro); 



const ropa=["Camiseta","Pantalon","Short","Camisa"]
const accesorios=["Reloj","Pulsera","Collar","Arete"]

/*El operador rest, que también se representa con tres puntos (...), se utiliza para agrupar los valores restantes en una función, 
permitiendo que puedas manejar un número indefinido de argumentos*/


const [ropa1,ropa2,...ropas] = ropa
console.log(ropas);


/*spread , operador de expansión, representado por tres puntos (...), se utiliza para expandir o 
descomponer elementos de un iterable, como un array o un objet*/

let combinaciones = []; //creo un arreglo vacio
combinaciones = [...accesorios,...ropa] //expando a los servicios 
console.log(combinaciones);

/* Impresion de elementos de un arreglo por medio de la consola*/


const Computadoras = ["Omen","Asus",34,true,{monitor:"LG"},["Impresoras","Scaners"]]

const [name,lastname,age,active,address,skills] = Computadoras

console.log(name)
console.log(lastname)
console.log(age)
console.log(active)
console.log(address)
console.log(skills)

// Saltar el valor en un arreglo
const [teclado, , mouse] = ['⌨️', '📱', '🖱️']
console.log(teclado)
console.log(mouse)

