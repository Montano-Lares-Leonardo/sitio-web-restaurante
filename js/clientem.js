console.log("Hola");
function mensaje(){
	var mensaje = document.getElementById("txtMensaje").value;
	alert("Mensaje de 22_Jesús Miranda \nUsted envión el mensaje: " + mensaje);
}
function operadores(){
	var op1 = document.getElementById("opuno").value;
	var op2 = document.getElementById("opdos").value;
	var resSuma = parseInt(op1) + parseInt(op2);
	var resResta = op1 - op2;
	var resMul = op1 * op2;
	var resDiv = op1 / op2;
	console.log("Resultado de la suma: " + resSuma);
	console.log("Resultado de la resta: " + resResta);
	console.log("Resultado de la multiplicacion: " + resMul);
	console.log("Resultado de la división: " + resDiv);
	alert("Mensaje de 22_Jesús Miranda \nResultado de la suma:"+resSuma+"\n"+"Resultado de la resta: "+resResta+"\n"+"Resultado de la multiplicacion: "+resMul+"\n"+"Resultado de la división: "+resDiv);
}
function edad(argument){
	edadMS = Date.parse(Date()) - Date.parse(argument.target.value);
	edads = new Date();
	edads.setTime(edadMS);
	resultado = edads.getFullYear() - 1970;
	res= (resultado <-0)?0: resultado; //para evitar que sea negativo/*Document.gerelementByld("eda").innerHTML = res;*/
	console.log("su edad es:"+res+" años.");
	alert("Mensaje de 22_Jesús Miranda \nSu edad es:" +res+ " años.");
}
function contarVocales(frase, vocales){
	let count = 0;
	let fraseLower = frase.toLowerCase();
	for(let i = 0; i < fraseLower.length; i++){
		if(vocales.includes(fraseLower[i])){
			count++;
		}
	}
	return count;
}
function vocales(){
	let frase = document.getElementById("fraseVocales").value;
	let arregloVocales = ["a","e","i","o","u"];
	let numeroVocales = contarVocales(frase, arregloVocales);
	alert("Mensaje de 22_Jesús Miranda \nMensaje de 22_Jesús Miranda \nLa frase que ingreso tiene: " +numeroVocales+" vocales.");
}
function bucles(){
	var rep = parseInt(document.getElementById("byc").value);
		for(let i = 1; i <= rep; i++){
			console.log("Repeticion #:"+i);
		}
}
const agregarFila = () =>{
	var rep = parseInt(document.getElementById("byc").value);
	if(rep < 15){
		for(let i = 1; i <= rep; i++){
			document.getElementById('TablaContenido').insertRow(-1).innerHTML = '<td></td><td></td><td></td>';
			console.log("Repeticion #:"+i);
		}
	}
	else{
		alert("Mensaje de 22_Jesús Miranda \nPor favor inserte un valor menor a 15");
		console.log("por favor inserte un valor menor a 15");
	}
}
function prom(){
	var nom = document.getElementById("nom").value;
	var c1 = parseInt(document.getElementById("cal1").value);
	var c2 = parseInt(document.getElementById("cal2").value);
	var c3 = parseInt(document.getElementById("cal3").value);
	var prom= (c1+c2+c3)/3;
	alert("Mensaje de 22_Jesús Miranda \nEl alumno: " + nom+ "\n"+ "Tiene un promedio de: "+ prom);
}
function terrenos(){
	var a = parseInt(document.getElementById("an").value);
	var l = parseInt(document.getElementById("la").value);
	var p = parseInt(document.getElementById("mc").value);
	var pf = (a * l) * p;
	alert ("Mensaje de 22_Jesús Miranda \nEl precio del terreno es: "+pf);
}
function tamul(){
	var n = parseInt(document.getElementById("num").value);
	var t=("");
	for(let i = 1; i<=10; i++){
		t = t + (n+"*"+i+"="+(n*i)+"\n");
	}
	alert (t);
}
function poi(){
	var n = parseInt(document.getElementById("npoi").value);
	if (n%2==0){
		alert("Mensaje de 22_Jesús Miranda \nEl número "+ n +" es par.");
	}
	else if (n==0){
		alert("Mensaje de 22_Jesús Miranda \nEl número es 0.");
	}
	else{
		alert("Mensaje de 22_Jesús Miranda \nEl número "+ n +" es impar")
	}
}
function cam(){
	op = document.getElementById("img").value;
	if(op == 'Imagen 1'){
		document.getElementById("IMG").innerHTML = '<img src="imagenes/im1.jpg" width="250" height="120">'
	}
	if(op == 'Imagen 2'){
		document.getElementById("IMG").innerHTML = '<img src="imagenes/im2.jpg" width="250" height="120">'
	}
	if(op == 'Imagen 3'){
		document.getElementById("IMG").innerHTML = '<img src="imagenes/im3.jpg" width="250" height="120">'
	}
}