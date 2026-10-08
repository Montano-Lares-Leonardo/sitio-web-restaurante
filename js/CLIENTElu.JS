console.log ("hola mundo desde js, con archivo");

function mensaje() {
var mensaje = document.getElementById("txtMensaje").value;

alert("usted envio el mensaje: " + mensaje); 
} 

function operadores(){
var op1 = document.getElementById("opuno").value;
var op2 = document.getElementById("opdos").value;
var resSuma = parseInt(op1) + parseInt(op2);
var resResta = op1 - op2;
var resMultiplicacion = op1 * op2;
var resDivision = op1 / op2;

console.log("Resultado de la Suma: " + resSuma);
console.log("Resultado de la Resta: " + resResta);
console.log("Resultado de la Multipicacion: " + resMultiplicacion);
console.log("Resultado de la Division: " + resDivision);

alert("Resultado de la Suma: " + resSuma + "\n" + "Resultado de la Resta: " + resResta + "\n" + "Resultado de la Multipicacion: " + resMultiplicacion + "\n" + "Resultado de la Division: " + resDivision);
}

function edad(argument){
	edadMS = Date.parse(Date()) - Date.parse(argument.target.value);
	edads = new Date();
	edads.setTime(edadMS);
	resultado = edads.getFullYear() - 1970;
	res= (resultado <- 0) ? 0 : resultado; // Para evitar que sea negativo 
	/document.gerelementById('eda').innerHTML = res;/
	console.log("Su edad es : " + res + " años.");
	alert("Su edad es : " + res + " años.");
}

function bucles(){
	var rep = parseInt(document.getElementById("iteraciones").value);
	if (rep <= 15){

	for (let i = 1; i <= rep; i++) {
		console.log("Repeticion #: " + i);
	}
}
else{
		alert("por favor inserte un valor menor a 15");
}
}

function vocales (){
	let frase = document.getElementById("fraseVocales").value;/Hola, como estas ?:/
	let arregloVocales = ["a", "e", "i", "o", "u"]; 
	let numeroVocales = contarVocales(frase, arregloVocales);

	console.log("El numero de vocales en la frase es: " + numeroVocales);
	alert("La frase que ingreso tiene: " + numeroVocales + " vocales.");
}

function contarVocales(frase, vocales) {
	let count = 0;
	let fraseLower = frase.toLowerCase();

	for (let i = 0; i < fraseLower.length; i++) {
		if (vocales.includes(fraseLower[i])) {
			count++;
		}
	}
	return count;
}

function Consonantes (){
	let frase = document.getElementById("fraseConsonantes").value;/Hola, como estas ?:/
	let arregloConsonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "ñ"]; 
	let numeroConsonantes = contarConsonantes(frase, arregloConsonantes);
	console.log("El numero de vocales en la frase es: " + numeroConsonantes);
	alert("La frase que ingreso tiene: " + numeroConsonantes + " Consonantes.");
}

function contarConsonantes(frase, Consonantes) {
	let count = 0;
	let fraseLower = frase.toLowerCase();

	for (let i = 0; i < fraseLower.length; i++) {
		if (Consonantes.includes(fraseLower[i])) {
			count++;
		}
	}
	return count;
}

const agregarFila = () => {
	var rep = parseInt(document.getElementById("iteraciones").value);
	if (rep < 15) 
	{
		for (let i =  1; i <= rep; i++) {
			document.getElementById('TablaContenido').insertRow(-1).innerHTML = '<td></td><td></td><td></td>';
		}
	}
	else{
		alert("por favor inserte un valor menor a 15");
	} 
}

function LLenarAlumnos ()
{
	var select = document.getElementById("lstAlumnos");
	var options = ["Luis Hidalgo","Leonardo Montaño","Noemi Valenzuela","Alan Pompa","Jesus Miranda","Cesar Martinez"];

	for (var i = 0; i < options.length; i++) {
		var opt = options[1];
		var el = document.createElement("options");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}

function Promedio (calMATEMATICAS,calFISICA,calESPAÑOL,calQUIMICA,AP){
	var calM = parseInt(document.getElementById("calMATEMATICAS").value);
	var calF = parseInt(document.getElementById("calFISICA").value);
	var calE = parseInt(document.getElementById("calESPAÑOL").value);
	var calQ = parseInt(document.getElementById("calQUIMICA").value);
	var variable = document.querySelector(".AP");

	let prom= (calM+calF+calE+calQ)/4;
	if (prom >= 8.5){
			console.log("El Promedio en base a la Calificaciones es: " + prom);
      alert("Si Acredita a Beca");
      variable.style.display = 'block';

    	}
    else{
    	console.log("El Promedio en base a la Calificaciones es: " + prom);
    	alert("NO Acredita a Beca");
   }
}

function TablasMulti (){
	var num0 = document.getElementById("Multiplo").value;
	var num1 = document.getElementById("desde").value;
	var num2 = document.getElementById("hasta").value;
	var m = 1; 
	if (parseInt(num2) > parseInt(num1)){
	for (let i = parseInt(num1) ; i <= parseInt(num2); i++) {
		let res = parseInt(num0)* m;

		console.log(num0 + "*" + m + "=" + res);
        m++;
    	}
    }
    else{
    	alert("por favor inserte un valor inicial menor al valor final");
      }
	} 


function LLenarDatos ()
{
	var select = document.getElementById("lstBecario");
	var options = ["Luis Hidalgo","Leonardo Montaño","Noemi Valenzuela","Alan Pompa","Jesus Miranda","Cesar Martinez"];

	for (var i = 0; i < options.length; i++) {
		var opt = options[1];
		var el = document.createElement("options");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}

function Acreditacion (NOMBREs, INGRESOs, CURPs, EDADs, INSTITUCIONs){
	var name = document.getElementById("NOMBREs").value;
	var ing = parseInt(document.getElementById("INGRESOs").value);
  var edad = parseInt(document.getElementById("EDADs").value);
	var ins = document.getElementById("INSTITUCIONs").value;

	if (ing <= 10000){
      alert ("El Alumno : "+ name + " de " + edad + " años de edad y de la escuela " + ins + " Acredita adecuadamente la Beca" );

    	}
    
    else {
    	alert ("El Alumno : "+ name + " de " + edad + " años de edad y de la escuela " + ins + " NO Acredita a Beca por Ingresos" );
    }
  }

function LLenarFiguras ()
{
	var select = document.getElementById("lstFiguras");
	var optiones = ["TRIANGULO","RECTANGULO","CUADRADO","ROMBO","ROMBOIDE","TRAPECIO", "CIRCULO"];

	for (var i = 0; i < options.length; i++) {
    var opti = optiones[1];
		var ele = document.createElement("optiones");
		ele.textContent = opti;
		ele.value = opti;
		select.appendChild(ele);

	}
}
function estacosa(){
  var A = document.getElementById("Altura");
  var B = document.getElementById("Base");
  var fig = document.getElementById("lstfiguras").value;

  switch (fig) {

  case 'CIRCULO':
	A.style.display = "table-row";
	B.style.display = "none";

    break;

  case 'ROMBO':
  case 'TRIANGULO':
  case 'CUADRADO':
  case 'RECTANGULO':
  case 'ROMBOIDE':
  A.style.display = "table-row";
	B.style.display = "table-row";
  	break;

  	  case 'Figuras Geometricas':
  A.style.display = "none";
	B.style.display = "none";

    break;
}
	document.getElementById("TITLE").innerHTML = ''+document.getElementById("lstfiguras").value;
}

  function Calcular(){
	var a = parseInt(document.getElementById("altura").value);
  var b = parseInt(document.getElementById("base").value);
  var fig = document.getElementById("lstfiguras").value;

switch (fig) {
  case 'CIRCULO':
     var res = (a * a) * 3.1416;
     console.log('El el area es = ' + res);
    break;
  case 'ROMBO':
  case 'TRIANGULO':
  	var res = (a * b) / 2;
    console.log('El el area es = ' + res);
    break;
  case 'CUADRADO':
  case 'RECTANGULO':
  case 'ROMBOIDE':
  	var res = (a * b);

    console.log('El el area es = ' + res);
    break;;
}
  }