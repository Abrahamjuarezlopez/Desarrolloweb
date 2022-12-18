// est se debe de ejecutar sin compilarlo encon node solo en la pagina apareceran los resultados
var saludo="Bienvenido a compumundohypermegared";
alert(saludo);

var copas=prompt('¿cuantas copas tenes');
var numero=parseInt(copas);
if(numero===0){
    alert('Que miras bobo andate palla')
}else{
    alert('sos el mas capo... el mascaporon........')
}

var numero1=parseInt(prompt("introduce un numero "));
var numero2=parseInt(prompt("introduce otro numero"));
var resultado=numero1+numero2;
alert (`la suma de ${numero1} + ${numero2}=`+resultado);
resultado=numero1-numero2;
alert (`la resta de ${numero1} - ${numero2}=`+resultado);
resultado=numero1*numero2;
alert (`la multiplicacion de ${numero1} x ${numero2}=`+resultado);
resultado=numero1/numero2;
alert (`la division de ${numero1} / ${numero2}=`+resultado);