console.log ("Hola mundo");

function mensajes(){
	var mensaje= document.getElementById("msj").value;
	alert("Usted envio el mensaje: " + mensaje);
}
 
 function operadores(){
 	var op1 = document.getElementById("op1").value;
 	var op2 = document.getElementById("op2").value;
 	var resSuma = parseInt(op1) + parseInt(op2);
 	var resResta = parseInt(op1) - parseInt(op2);
 	var resMult = parseInt(op1) * parseInt(op2);
 	var resDiv = parseInt(op1) / parseInt(op2);
 	console.log("El resultado de la suma es: " + resSuma);
 	console.log("El resultado de la resta es: " + resResta);
 	console.log("El resultado de la multiplicacion es: " + resMult);
 	console.log("El resultado de la division es: " + resDiv);
 	alert("Resultado de la suma: " + resSuma + "\nResultado de la resta: " + resResta + "\nResultado de la multiplicacion: " + resMult + "\nResultado de la division: " + resDiv);
 }

 function edad(){
 	var fecha = document.querySelector('#Fecha').value;
 	edadMS = Date.now() - Date.parse(fecha);
 	edads = new Date(edadMS);
 	resultado = edads.getFullYear() - 1970;
 	res = (resultado <= 0) ? 0 : resultado; //Para evitar que sea negativo
 	console.log("Su edad es: " + res + " años.");
 	alert("Su edad es: " + res + " años.");
 }

 function bucles(){
 	var rep = parseInt(document.getElementById("iteraciones").value);
 	for(let i = 1;i <= rep; i++){
 		console.log("Repeticion #: " + i);
 	}
 }

 function vocales(){
 	let frase = document.getElementById("frasevocales").value; /*Hola, como estas?;*/
 	let arreglosVocales = ["a" , "e", "i", "o", "u"];
 	let numeroVocales = contarVocales(frase, arreglosVocales);
 	console.log("El numero de vocales en la frase es: " + numeroVocales);
 	alert("La frase que ingreso tiene: " + numeroVocales + " vocales.");
 }

 function contarVocales(frase, vocales){
 	let count = 0;
 	let fraseLower = frase.toLowerCase();

 	for(let i = 0; i < fraseLower.length; i++){
 		if (vocales.includes(fraseLower[i])) {
 			count++;
 		}
 	}
 	return count;
 }
  

 const agregarFila = () => {
 	var rep = parseInt(document.getElementById("iteraciones").value);
 	if(rep <= 15){
 			for(let i = 1; i <= rep; i++){
 				document.getElementById('Tabla').insertRow(-1).innerHTML = '</td> </td> </td>';
 			}
 		}
 		else{
 			alert("Por favor inserte un valor menor a 15");
 		}
 }

 function promedio(){
 	var nom1 = document.getElementById("alumns");
    var nom2 = nom1.options[nom1.selectedIndex].text;
 	var ca1 = parseFloat(document.getElementById("cal1").value);
 	var ca2 = parseFloat(document.getElementById("cal2").value);
 	var ca3 = parseInt(document.getElementById("cal3").value);
 	var ca4 = parseFloat(document.getElementById("cal4").value);
 	var prom = (ca1 + ca2 + ca3 + ca4) / 4; 
 	alert("El promedio final del alumno " + nom2 + " es: " + prom);
 }

 function tablas(){
    var num = parseInt(document.getElementById("mult").value);
    var res = "";
    for(i = 1; i <= 10; i++)       
        res += ("\n" + num + " x " + i + " = " + num * i);       
    
    alert(res);
}

 function area(){
    var alt = parseFloat(document.getElementById("alt").value);
    var anc = parseFloat(document.getElementById("anc").value);
    var a_tot = (alt * anc);
    alert("El area del terreno es de: " + a_tot + " metros cuadrados.");
 }

 function convertir(){
    var cel = parseFloat(document.getElementById("grados").value);
    if(cel == 1){
        alert(cel + " grado Celsius equivale a: " + cel * 33.8 + " grados Fahrenheit.");
    }else{
        alert(cel + " grados Celsius equivalen a: " + cel * 33.8 + " grados Fahrenheit.");
    }
}

function par(){
    var num1 = parseInt(document.getElementById("num1").value);
    if(num1 % 2 == 0 && num1 != 0)
        alert("El numero: " + num1 + " es par.");
    else if(num1 == 0) 
        alert("El numero 0 es neutro.");
    else
        alert("El numero: " + num1 + " es impar.");
}   