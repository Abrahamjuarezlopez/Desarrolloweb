//variable global
var saludo="Bienvenido a compumundohypermegared";
console.log(saludo);


 //variable limitada 
 let nombre = 'ricardo';
 console.log(nombre);
 if (nombre === "ricardo"){
    let nombre = "raul";
    console.log(nombre);
 }
console.log(nombre);

const Fecha="hoy es 17/12/2022 si se usa esta variable otr vez habra un error en javascript";
console.log(Fecha);
/* Si quieres ver el mundo arder descomenta
Fecha= "otra fecha";
console.log(Fecha);
*/
// string
let nombre2= "Abraham";
let Apellido="juarez";
// entero y decimal o integer or float
let Numero=21;
let Numero2=12.2;

//Boolean
let Verdadero=true;
let Falso=false;

//undefined
let sinDefinir=undefined;

//let null
let nulo = null;

console.log(nombre2);
console.log(Numero);
console.log(Numero2);
console.log(Verdadero);
console.log(Falso);
console.log(sinDefinir);
console.log(nulo);
console.log("Mi Nombre es:"+nombre2+" "+"mi apellido es:"+Apellido);
console.log(`Mi Nombre es:${nombre2} mi Apellido es:${Apellido}`);

let num=30;
let num2=32;
console.log(num+num2);
if(num===30){
    num=70;
}
console.log(num+num2);