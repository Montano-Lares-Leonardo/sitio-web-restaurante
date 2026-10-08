console.log("hola mundo");

function mensaje(){
	var mensaje = document.getElementById("mensaje").value;
	alert("Usted envió el mensaje: " + mensaje);
}

function operadores(){
	var op1 = document.getElementById("opu").value;
	var op2 = document.getElementById("opd").value;
	var resSuma = parseInt(op1) + parseInt(op2);
	var resRest = parseInt(op1) - parseInt(op2);
	var resMult = parseInt(op1) * parseInt(op2);
	var resDivi = parseInt(op1) / parseInt(op2);
	console.log("Resultado de  la suma: " + resSuma);
	console.log("Resultado de  la resta: " + resRest);
	console.log("Resultado de  la multiplicacion: " + resMult);
	console.log("Resultado de  la division: " + resDivi);

	alert("Resultado dela suma: " + resSuma + "\n" +"Resultado de la resta:" + resRest + "\n" +"Resultado de la multiplicacion: " + resMult + "\n" + "Resultado de la division: " + resDivi);
}

function edad(argument) {
	edadMs = Date.parse(Date()) - Date.parse(argument.target.value);
	edads = new Date();
	edads.setTime(edadMs);
	resultado = edads.getFullYear() - 1970;
	res = (resultado <= 0) ? 0 : resultado; // Para evitar que  sea negativo
	/*document.getElementById('eda').innertHTML = res;*/
	console.log("Su edad es: " + res + " años.");
	alert("Su edad es: " + res + "años.");
}

function bucles (){
	var rep = parseInt(document.getElementById("interaciones").value);
	for (let i = 1; i <= rep; i++) {
		console.log("Repetición #: " + i);
	}
}

function vocales(){
	let frase = document.getElementById("frasevocales").value; /*"Hola, como estas?";*/
	let arreglosVocales = ["a", "e", "i", "o", "u"];
	let numerosVocales = contarVocales(frase, arreglosVocales);
	console.log("El número de vocales en la frase es " + numerosVocales);
	alert("La frase que ingresó tiene: " + numerosVocales + " vocales.");
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

const agregarFila = () => {
	var rep = parseInt(document.getElementById("interaciones").value);
	if(rep < 15)
{
	for (let i = 1; i <= rep; i++) {
		document.getElementById('TablaContenido').insertRow(-1).innerHTML * '<td></td><td></td><td></td>'
	}
}
else {
	alert("Por favor inserte un valormenor a 15");
 }
}

function calcularPromedio() {
	var Alum = document.getElementById("alum").value;
  var Cal1 = parseInt(document.getElementById("prog").value);
  var Cal2 = parseInt(document.getElementById("calc").value);
  var Cal3 = parseInt(document.getElementById("ecol").value);
  var Cal4 = parseInt(document.getElementById("ingl").value);
  var Cal5 = parseInt(document.getElementById("fisi").value);

  var Prom = (Cal1 + Cal2 + Cal3 + Cal4 + Cal5) / 5;
  alert("El promedio del alumno: " + Alum + " es de: " + Prom);
}

function calcularHipotenusa() {
	var Ca = parseInt(document.getElementById("Cat1").value);
	var Cb = parseInt(document.getElementById("Cat2").value);

	var Hip = Math.sqrt(Math.pow(Ca, 2) + Math.pow(Cb, 2));

	alert("El resultado de la hipotenusa es de: " + Hip);
}

function calcularTriangulo() {
	var La1 = parseInt(document.getElementById("L1").value);
	var La2 = parseInt(document.getElementById("L2").value);
	var La3 = parseInt(document.getElementById("L3").value);

	if (La1==La2 && La2==La3){
		alert("El triangulo es un Equilatero");
	}
	else if (La1==La2 && La2!=La3){
		alert("El triangulo es un Isoceles");
	}
	else{
		alert("El triangulo es un Escaleno")
	}
}

function Pizzas(){
	let pizza = document.getElementById("pizzas").value;
	alert("Tu pizza de " + pizza + " se esta preparando")
}

function calcularTemperatura() {
	var Temp = parseInt(document.getElementById("temp").value);

	if (Temp < 20){
		alert("La temperatura esta Templada");
	}
	else if (Temp > 20 && Temp < 28){
		alert("La temperatura esta Fresca");
	}
	else{
		alert("La temperatura esta Calurosa");
	}
}

function numerosRomanos() {
    var numero = document.getElementById("num").value;

switch (numero) {

	case "1":
		alert("El numero romano de 1 es I");
		break;
	case "2":
		alert("El numero romano de 2 es II");
		break;
	case "3":
		alert("El numero romano de 3 es III");
		break;
	case "4":
		alert("El numero romano de 4 es IV");
		break;
	case "5":
		alert("El numero romano de 5 es V");
		break;
	case "6":
		alert("El numero romano de 6 es VI");
		break;
	case "7":
		alert("El numero romano de 7 es VII");
		break;
	case "8":
		alert("El numero romano de 8 es VIII");
		break;
	case "9":
		alert("El numero romano de 9 es IX");
		break;
	case "10":
		alert("El numero romano de 10 es X");
		break;
	default:
		aler("El nuemero no es valido o es mayor a 10");
	}
}