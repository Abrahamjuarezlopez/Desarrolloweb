// funcion suma con fuction
const realizarsum = function(x,y,z){
    return x+y+z;
}
//funcion encuentra al mayor con function
const comparacion = function(x,y,z){
    if((x>y && y>z)||(x>y && z>y)||(x>y && y==z)){
        return x;
    }else if((y>x && x>z)||(y>x && z>x)||(y>x && x==z)){
        return y;
    }else if((z>x && x>y) || (z>x && y>x) || (z>x && x==y)){
        return z;

    }else if(x==y && y==z){
        return 'ninguno todos son iguales';
    }
}
// funcion encuentfra al menor con function
const comparacion1 = function(x,y,z){
    if ((x<y && x<z) || (x<y && y==z)){
        return x;
    }else if ((y<x && y<z) || (y<x && x==z)){
        return y;
    }else if((z<x && z<y)||(z<x && x==y) ){
        return z;
    }else if(x== y && y==z){
        return 'ninguno todos son iguales';
    }  
}
// funciones con flecha
// funcion suma
const flecharota =(x,y,z) => x+y+z; 
//funcion encuentra al mayor
const compaflecha=(x,y,z) =>{
    if((x>y && y>z)||(x>y && z>y)||(x>y && y==z)){
        return x;
    }else if((y>x && x>z)||(y>x && z>x)||(y>x && x==z)){
        return y;
    }else if((z>x && x>y) || (z>x && y>x) || (z>x && x==y)){
        return z;

    }else if(x==y && y==z){
        return 'ninguno todos son iguales';
    }
}
// funcion encuntra al menor
const compa2flecha =(x,y,z)=>{
    if ((x<y && x<z) || (x<y && y==z)){
        return x;
    }else if ((y<x && y<z) || (y<x && x==z)){
        return y;
    }else if((z<x && z<y)||(z<x && x==y) ){
        return z;
    }else if(x== y && y==z){
        return 'ninguno todos son iguales';
    }  
}
//objeto alumno con 5 keys
const alumnos={
    id:0,
    nombre:'enzo',
    apellido_P:'martinez',
    apellido_M:'palazzo',
    grado: 'primero'

}
// deconstruyendo ando
const {id,nombre,grado}=alumnos;

// array 
const porquesi=["hola k ase",34, 90, otroarrai=["puebla", 300]];
//deconstruyendo ando x2 arrais
const [saludo,,numero2] = porquesi;

let a = 10; //
let b = 9; // para obtrener un resultado distinto manipular la variables a,b,c
let c = 1; //

console.log('el resultado de la suma es '+realizarsum(a,b,c));
console.log('el numero mayor es '+comparacion(a,b,c));
console.log('el numero menor es ' +comparacion1(a,b,c));
console.log('el resultado del suma usando codigo flecha rota '+ flecharota(a,b,c) );
console.log('el numero mayor es usando flecha '+ compaflecha(a,b,c) );
console.log('el numero menor es usando flecha '+ compa2flecha(a,b,c) );
console.log('el id del alumno es '+ id,'su nombre es '+nombre,'su grado es ' +grado);
console.log('accedindo al array elemento saludo= '+saludo,',accediendo al array elemnto numero 2 ='+numero2,',accedindo al array dentro del array='+porquesi[3][0] );

