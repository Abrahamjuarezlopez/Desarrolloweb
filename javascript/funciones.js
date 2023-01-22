//********************Numero 1 ***********************************************************************/
let Number=18;
let Edad = Number;
if (Edad==18){
    console.log('valido');
}else{
    console.log('invalido');
}
//********************************************************************************************** */

//Numero 2
const zapatillas=[
    {id: 1,img:"./imagenes/img.jpg",nombre: "casual", precio:2000 },
    {id: 2,img:"./imagenes/img.jpg",nombre: "deportivo", precio:1000 },
    {id: 3,img:"./imagenes/img.jpg",nombre: "deportivo dama", precio:2000 },
    {id: 4,img:"./imagenes/img.jpg",nombre: "formal", precio:2000 },
];
console.log(zapatillas);

const cart=[];
const agregarcart =(product, runrun)=>{
    runrun.push(product);
    console.log("producto agredado");

}

const eliminarcart =(product, runrun)=>{
    runrun.pop(product);
    console.log("producto eliminado");

}

/*agregarcart(zapatillas[0],cart);
agregarcart(zapatillas[1],cart);
agregarcart(zapatillas[2],cart);
agregarcart(zapatillas[3],cart);*/

for(i=0;i<4;i++){
    agregarcart(zapatillas[i],cart);
   console.log("posicion del arreglo "+i,cart[i]); 
}

eliminarcart(zapatillas,cart);

for(i=0;i<4;i++){
        console.log("posicion del arreglo "+i,cart[i]); 
}

//***************************************************************************************************************************** */
//Numero 3

const edad=[5,18,30,60];
var suma=0;

for(i=0;i<4;i++){
    
    switch(true){
        case (edad[i]>=1 && edad[i]<18):
            console.log("50$");
            suma+=50;
            break;
         case (edad[i]>=18 && edad[i]<30):
            console.log("45$");
            suma+=45;
            break;
            case (edad[i]>=30 && edad[i]<60):
            console.log("40$");
            suma+=40;
            break;
            case (edad[i]>=60):
                suma+=30;
                console.log("30$");   


    }
}
console.log('la cuenta a pagar por loe boletos es de :',suma);