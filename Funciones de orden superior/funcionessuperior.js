let zapatos = [
  { marca: "NIKE", stock: 9, precios: 3500.70 },
  { marca: "PUMA", stock: 7, precios: 2500.10 },
  { marca: "ADIDAS", stock: 6, precios: 3250.30 },
  { marca: "CONVERSE", stock: 8, precios: 900.90 },
];

//impresion de lista de zapatos con funcion de orden superio (Superior attack)
zapatos.forEach((item) => {
  console.log("marca : ", item.marca, "    stock : ", item.stock);
});
//***************************************************************************** */
//impresion de articulos que cuestas mas halla de 200 (en este caso imprimirá aquellos articulos mayores a 3000.0)
const mayores = zapatos.filter((elemento) => elemento.precios > 3000.0);

console.log("los zapatos cuyo valor excede los 3000$ son : ", mayores);
//***************************************************************************** */
//impresion de  articulos que cuesta menos de 3000$
const menores = zapatos.filter((elemento) => elemento.precios < 3000.0);
console.log("los zapatos cuyo valor es mnor a los 3000$ son : ", menores);
//****************************************************************************** */
// calculo del promedio
var sum = 0,
  promedio = 0;
zapatos.forEach((item) => {
  sum += item.precios;
});
promedio = sum / zapatos.length;
console.log("el promedio es de : ", promedio);
//******************************************************************************** */
// ordenar alfabeticamente de la (A-Z)
const Ordenalfa = zapatos.sort((item1, item2)=>{
    if (item1.marca == item2.marca){
        return 0;
    } else if (item1.marca < item2.marca) {
        return -1;
    }  else{
        return 1;
    }
})

console.log("ordenados alfabticamente \n",Ordenalfa);
//******************************************************************************** */
//odenar de mayor precio a menor precio y redondear el precio del producto
const Ordenamayor = zapatos.sort((item1, item2)=>{
    if (item1.precios == item2.precios){
        return 0;
    } else if (item1.precios > item2.precios) {
        return -1;
    }  else{
        return 1;
    }
})

//console.log("ordenas productos de mayor precio a menos precio \n",Ordenamayor);
console.log("el producto mas costoso es: ", zapatos[0].marca, "stock: ",zapatos[0].stock," precio: ",zapatos[0].precios, "precio redondeado: ",Math.round(zapatos[0].precios) )
//********************************************************************************** */