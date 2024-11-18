// node + v8 = JavaScript desde el lado de servidor

//Tema 1
//Variable = contenedor de informacion 

// Hay 2 tipos de variable : 
//Simples 
let data = 12; //entero
let data2="hola"; //string
let data3 = 11.2; //float
let data4= "@"  //char
let data5 = false // boleano
let data6= undefined //undefined
//compuestos
let data7 = ["Hola",54,false] //arreglos , array

let user ={            //objeto
    name:"Byron",
    activo:true
}

// no usar var para declarar variables por el hoisting
// Usar let y const es lo mas recomendable (cons - no ambia , let si cambia )

//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Tema 2
//String - cadena de caracteres
let password="12345Aa"

// propiedades - metodos

//propiedades
//la propiedad mas usa en string es length
console.log(password.length);  //console.log para imprimir en pantalla y se que length es una propiedad pq no va en parentesis

//metodos mas comunes
//trim
console.log(password.trim()); //trim elimina el espacio en blanco de principio a fin

//includes , retorna verdadero si incluye ( en este caso 5)
console.log(password.includes("5"));

// node --watch funadmentos.js este comando sirve para que se ejecuten los cambios de manera automatica control c para adetener

//Hacer en Mayusculas
console.log(password.toUpperCase());
//Hacer en minusculas
console.log(password.toLocaleLowerCase());


//ES6 -> forma para escribir JS estadarizadamente y agrega nuevas caracteristricas 
//Nuevas caracteristicas 
//Template strings - me permite mezclar texyo con variables usando el backtick ( alt + 96 )
console.log(`El password de juen es]: ${password}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Tema 3 
// Proceso de conversion/  Casting 
let gamePrice1="500.35";
let gamePrice2= 500.35
//Cating - ES6
console.log(gamePrice1+gamePrice2);

//asi se hace el casting + (si ponemos el + antes de un string ya hacemos el casting)
console.log(+gamePrice1+gamePrice2);

// Revisar el orden de ejecucion de los operadores (* / + - ** ())  (orden de presedencia)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//Tema 4 
// Condicionales
let userCardBalance = 500

let cardBalance = 1000

//Valores verdaderos - truthy : valores o vacios
//Valores falsos - falsy :  valores vacios

// ES6  Operador ternario  - forma rapida de escribir un condicional 
let resultado = cardBalance <= userCardBalance ? "Pay" : "Consuming" //Pay se ejecuta si es verdadero y Consuming si es falso
                //condicional -----------------

let email 
!email ? console.log("Peovie an email") : console.log("Registre"); //si no existe un emal entonces - caso contrario

//Comparacion ==
let userID =123
userID == 123 ? console.log("User found") : console.log("User doesn´t exit");

//Comparacion estricta === evalua el tipo y el valor
let userID1 =123
userID1 === "123" ? console.log("User found") : console.log("User doesn´t exit");


//-------------------------------------------------------------------------------------------------------------------------------------------------

//Tema 5
//Loops / bucles
const goals = ["Learn JS","Play Soccer","watching Netflix","Enjoy the holiday"]

//array.foreach(colback , lo vamos a ver luego)
goals.forEach((goal)=>{console.log(goal);
})
//     iterable (i)     imprimo la inf de la arrat

//agregado

goals.map(()=>{});

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------
//                  CLASE 2

//TEMAS : funciones

//Funcion anonima y autoejecutable : No tiene nombre por eso es anonima
(function () {
    console.log("Ejecucion de una funcion");
    
})()


//Funcion declarada  - siempre comienza con la palara function 
function getAvatar() {
    console.log("/photo/user.png");
    
}
//llamar funcion
getAvatar()

//Funcion expresada = se almacena en una variable la funcion
const conecctionBDD = function () {
    console.log("Conexion exitosa");
    
}

conecctionBDD();

//Argumentos 
const validarEmailandToken = function name(email,token) {
    console.log(`El token es ${token} y su email es ${email}`);
    
}

//argumentos
validarEmailandToken("juan@gmail.com","123")

//T2: Argumentos opcionales 
//Ya pongo u parametro como default para usarlo como argumento
const validarEmailandTokenTwo = function name(email,token="555") {
    console.log(`El token es ${token} y su email es ${email}`);
    
}
validarEmailandTokenTwo("email.com");

//T3: Que puedo retornar en una funcion 
function tiposRetorno2() {
    //Logica
    return "Usuarios premium"//se puede retornar un texto, valores bolleano , float ...... , una array , un objeto return { clave : valor 
    
}

tiposRetorno2();

// T4 Arrow function 
// Reemplazo el function por flecha

const conecctionBDDMongo =  () => {
    console.log("Conexion exitosa");
    
}
conecctionBDDMongo();

// nfn me da ya una function flecha
const name = (params) => {
  
}

// clg me da un console log
console.log("No me valio el return")


/*const resgisterUser = (email) => {
  console.log("Usuario registrado")
}*/

const resgisterUser = (email) => console.log("User registred");

  



resgisterUser("pancho@gmail.com")

//-------------------------------------------------------------------------------------------------------------------------------------------------
//  Tema:            Objetos 
//Se hace a traves de clave valor , el vvalor puede ser cualquier datos inclusive un objeto
//Json utiliza sus claves con "" OBLIGATORIAMENTE
//oBJETO SUS CLAVES NO TIENEN ""

const datosBananeritoGood={
    name: "bananerito",
    edad : 1,
    address:{
        city:"Machala",
        telephone:123
    },
    friends:["Ccodrigo","Torero"],
    status : true 
}

//iMPRIMIR CADA UNO DE SUS VALORES 
//OBJETO . clave
console.log(datosBananeritoGood.name)
console.log(datosBananeritoGood.friends)
console.log(datosBananeritoGood.status)

// no recomendable 
const nameB= datosBananeritoGood.name
const friendsB= datosBananeritoGood.friends

console.log(nameB)

// con ES6
// DESESTRUCTURACION
//Debo amantener el mismo nombre 

const {age,address,friends,status} = datosBananeritoGood
console.log(address)

// renombrar 
// const {name......., asi se renombre age : edad (los : renombran)}

//Propuedad 
// agrear una nueva propiedad y valor por defecto al objeto 

datosBananeritoGood.photo ="bananerito.png"

console.log(datosBananeritoGood)

//Eliminar una propiedad 
delete datosBananeritoGood.edad

console.log(datosBananeritoGood)


//Tarea desafio 

//Asi trabajaremos cuando capturemos datos del usuario
Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("Ok");
// Object.values(datosBananeritoGood)Object.values(datosBananeritoGood) -----Saca todos los valores de un objeto en una array 

//-------------------

//Para unir no deben tener el mismo nombre en la propiedad 

const lunch ={
    nameL:"Pollo Broster",
    price: 5
}

const drink={
    name: "Jugo de coco",
    sweet: false 
}
//Como uno dos objetos
// Haciendo uso de ...

const orderUser = {...lunch,...drink} // ... SPREAD 
console.log(orderUser);

//Spreans no es lo mismo que rest 

//ES6 
//Nombres abreviados de propiedades 

const nameVideogame = "MARIOkART"
const priceVideogame = 89

//el objetivo es crear un objeto atraves de esas variables

const videoGame = {
    //Si tengo el mismo nombre en la clave y el valor ejm : nameVideogame:nameVideogame (se hace cuando es obligatoria que la clave valor tenga nombre diferente )
    nameVideogame,
    priceVideogame
}
console.log(videoGame)

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------
//                  CLASE 3

// T1: Arrays

const childs = ["Peter","Juan","Luisa","Anahi","Mateus"] //array
//array de objets customers - clientes
const customers =[{
    name:"Luis",
    orde:45,
    place:"Floresta"
},
{
    name:"Jameth",
    orde:4,
    place:"Villaflora"
}]

//Visualizar la info de una array
childs.forEach((b)=>{console.log(b);
})
//En el comback se puede poner otro parametro
childs.forEach((b,i)=>{console.log(`${i} - ${b}`);
})

//Sirve para iterar en cada uno de los arreglos 
customers.forEach((c,i)=>console.log(`${i+1} ${c.orde} ${c.name}`));

//----------------------------------------------------------------------------

const services = [
    {
        name:"Basic",
        mount:5,
        image:"photo/service1.png",
        details:["Atencion familiar","Grupo social"]
    },
    {
        name:"Plus",
        mount:25,
        image:"photo/service2.png",
        details:["Atencion diaria","Seguro medico "]
    }
]

//mostrar solo lo que quiero mostrar
// que es un coolback , se hace con una funcion flecha - la (s) es el colback

//Asi solo muestro la infornacion que yo requiero , para eso se usa el map  (sirve para nodificar informacion)

//For each quiero iterar y no quiero modificar , para modificar uso el map
const newSrvices=services.map((s)=>{
    return {
        name:s.name,
        image:s.image
    }
})


console.log(newSrvices);

//hacer lo mismo pero sin hacer uso del return 
const newSrvices2=services.map((s)=>( //se puede poner (s=>(
     {
        name:s.name,
        image:s.image
    }
 ))
console.log(newSrvices2);

// ------------------------------------------------------------------------------------
const equipments = ["Tubo de Oxigeno","Camilla","Termometros","Medidor de P"]

//EC6 
//Desestructuracion a nivel de arrelos
// Es adignar los valores de un arreglo en variables por separado 
const [equipment1,equipment2,equipment3,equipment4] =equipments 

// se puede evitar el equipment a cada rato asi const [,,,equipment4] =equipments 

console.log(equipment1) //Me imprime el nombre del arreglo original

//Sirve paa mostrar rapidamente el vvalor de un arreglo 

 //----------------------------------------------------------
const categories = ["Camas","Balanceados","Juguetes","Accesorios","Ropa"]

//Validar 
categories.length <= 5 ? console.log("Registrar categoria") : console.log("No se puede registrar");

//pROPIEDADES 
// .PUSH agrega el nuevo elemento al final del arreglo y retorna la nueva longitud del arreglo

categories.push("Medicamentos")
console.log(categories);

// . UNSHIFT inserta el elemento al inicio del arreglo

categories.unshift("Adopciones")
console.log(categories);

// .POP elimina el ultimo elemento de un arreglo y lo retorna , no necesita de argumento
categories.pop()
console.log(categories);

//. SHIFT elimina el primer elementos del arreglo , igual no necesita un argumento
categories.shift()
console.log(categories);

// find . itera por las categorias , devuelve un string o un undefiends , se nececita usar un return

let resultCategorie = categories.find((c)=>{return c=== "Camas"}) //((c)=>(c === "Camas"))
console.log(resultCategorie);

resultCategorie ? console.log("Mostrar categoria") : console.log("No existe la categoria");

//. FILTER filtra los elementos que tengan una concidencia que yo pongo 
let resultCategoriaFilter = categories.filter((c)=>(c.startsWith("B")))
console.log(resultCategoriaFilter);

//ES6 

const servicesCharge = ["Grúa","Material","Herramientas"]
const servicesMachines = ["Volqueta","trailer","Tractores","Colera"]

//Operador ...rest - agrupar, unir los valores restantes , este caso los almacena en machines
const [achine1,machine2,...machines] = servicesMachines

console.log(machines);



//Operador ...Sprear - expande
let allServices = []; //creo un arreglo vacio

allServices = [...servicesCharge,...servicesMachines] //expando a los servicios 

console.log(allServices);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//PROXIMO NIVEL 


//Manipulacion del DOM
//DOM : Es una API que me permnite manipular los elementos de un HTML
// HTML puede ser considerado un lenguaje de programacion si usa un motor de plantillas 

//Programacion declarativa 
//REACT 
    

