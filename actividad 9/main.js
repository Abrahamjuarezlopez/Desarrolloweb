/*Ejercicio uno*/ 
const amod= document.getElementById('modificar');
amod.innerHTML = 'hola <strong>MEXICO</strong>'
//*****************************
/*Ejercicio dos*/
const listaCompra = document.getElementById('lista');
const comida=['huevo', 'Carne','Manzana', 'Leche'];

comida.forEach((elemento)=>{
const li=document.createElement("li");
li.textContent=elemento;
listaCompra.appendChild(li);
});
//***************************************************** */

/*ejercicio 3*/
const objeto=document.getElementById('objetos');
const objeto2=document.getElementById('objetos2');
console.log(objeto);

let zapatos = [
    { marca: "NIKE", stock: 9, precios: 3500.70 },
    { marca: "PUMA", stock: 7, precios: 2500.10 },
    { marca: "ADIDAS", stock: 6, precios: 3250.30 },
    { marca: "CONVERSE", stock: 8, precios: 900.90 },
  ];

  zapatos.push({
    marca: "CARIOCA", stock: 5, precios: 300.90
  });

  zapatos.forEach(item=>{
    objeto.innerHTML += `<br>
                        <p>Marca: <span class="rojo"> ${item.marca} </span> Stock:<span class="rojo"> ${item.stock}</span> Precio: <span class="rojo"> ${item.precios} $ </span></p>
                        `;
  })
 
   


  zapatos.forEach(item=>{
    objeto2.innerHTML += `<br>
                        <p>Marca: <span class="rojo"> ${item.marca} </span> Stock:<span class="rojo"> ${item.stock}</span> Precio: <span class="rojo"> ${item.precios} $ </span></p>
                        `;
  })
 
  
  
    
   
/*Ejercicio 4*/


function ocult(){
    document.getElementById('ocultar').style.display='none';
    document.getElementById('objetos2').style.display='none';
    document.getElementById('mostrar').style.display='block';
    
}

function mos(){
  document.getElementById('ocultar').style.display='block';
  document.getElementById('mostrar').style.display='none';
  document.getElementById('objetos2').style.display='block';
}

/*Ejercicio 5* */




function re(){
  const registrar=document.getElementById("reg").style.display='none';
  const barratext=document.getElementById("nombre").style.display='none';
  const parrafo=document.getElementById("saludo");
  var nom = document.getElementById('nombre').value;
  localStorage.setItem("nombre",nom); 
  var nombre2=localStorage.getItem("nombre");

  parrafo.innerHTML += `<br>
              <p id="saludo">bienvenido nuevamente ${nombre2}</p>
              <button id="res" onclick="reset()">resetaer</button>
  `           ;
}

function reset(){
  const registrar=document.getElementById("reg").style.display='block';
  const barratext=document.getElementById("nombre").style.display='block';
  nom='';
   localStorage.setItem("nombre",nom);
}