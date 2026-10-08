console.log("hola mundo");
function MNS(){
	var MNS = document.getElementById("TXT").value;
	alert("Usted envio el mensaje: " + MNS);
}
function OPR(){
	var OPa = document.getElementById("OPa").value;
	var OPb = document.getElementById("OPb").value;
	var SUM = parseInt(OPa) + parseInt(OPb);
	var RES = parseInt(OPa) - parseInt(OPb);
	var MUL = parseInt(OPa) * parseInt(OPb);
	var DIV = parseInt(OPa) / parseInt(OPb);
	console.log("El resultado de la suma de los numeros " + OPa + " y " + OPb + " es " + SUM);
	console.log("El resultado de la resta de los numeros " + OPa + " y " + OPb + " es " + RES);
	console.log("El resultado de la multiplicacion de los numeros " + OPa + " y " + OPb + " es " + MUL);
	console.log("El resultado de la division de los numeros " + OPa + " y " + OPb + " es " + DIV);
	alert("El resultado de la suma es " + SUM + "\n" + "El resultado de la resta es " + RES + "\n" + "El resultado de la multiplicacion es " + MUL + "\n" + "El resultado de la division es " + DIV);
}
function EDA(argument){
	EDADa = Date.parse(Date()) - Date.parse(argument.target.value);
	EDADb = new Date();
	EDADb.setTime(EDADa);
	EDADRES = EDADb.getFullYear() - 1970;
	RES = (EDADRES <= 0) ? 0 : EDADRES; //para evitar que sea negativo
	/*document.getElementById('eda').innerHTML = RES;*/
	console.log("Su edad es " + RES + " años.");
	alert("Su edad es " + RES + " años.");
}
function VOC(){
	let FR = document.getElementById("FRVOC").value;
	let AREVOC = ["a","e","i","o","u"];
	let NUMVOC = CONVOC(FR, AREVOC);
	console.log("El número de vocales en su frase es: " + NUMVOC);
	alert("La frase que ingreso tiene " + NUMVOC + " vocales.");
}
function CONVOC(FR, VOC) {
  let CNT = 0;
  let FRLWR = FR.toLowerCase();
  for (let i = 0; i < FRLWR.length; i++) {
    if (VOC.includes(FRLWR[i])) {
      CNT++;
    }
}
return CNT;
}
function CALC(){
	let MAT = parseInt(document.getElementById("MAT").value);
	let FIS = parseInt(document.getElementById("FIS").value);
	let ESP = parseInt(document.getElementById("ESP").value);
	let QUI = parseInt(document.getElementById("QUI").value);
	let PRM = (MAT + FIS + ESP + QUI) / 4;
	console.log("El promedio de todas las materias es " + PRM);
	alert("El promedio de todas las materias es " + PRM);
}
function TABDEMUL(){
	let TXT = "";
	let NUMMUL = parseInt(document.getElementById("TXTTABDEMUL").value);
	for (let i = 1; i < 11; i++){
		TXT = TXT + NUMMUL + " x " + i + " = " + (NUMMUL*i) + "\n";
	}
	console.log(TXT);
	alert(TXT);
}
function AGRIMG(){
	document.getElementById('NOIMG').innerHTML = '<img src="imagenes/GATO.png" width="100" height="100" align="middle">';
	console.log("¡GATO.png ha aparecido misteriosamente!");
}
function MONEDA(){
	var PESOS = document.getElementById("PESOS").value;
	DOLAR = Number((PESOS/19.67).toFixed(2));
	EURO = Number((PESOS/18.85).toFixed(2));
	LIBRA = Number((PESOS/21.95).toFixed(2));
	YEN = Number((PESOS/0.13).toFixed(2));
	console.log("Pesos Mexicanos: "+PESOS+"\nDolares Estadounidenses: "+DOLAR+"\nEuros: "+EURO+"\nLibras Esterlinas: "+LIBRA+"\nYen Japones: "+YEN);
	alert("Pesos Mexicanos: "+PESOS+"\nDolares Estadounidenses: "+DOLAR+"\nEuros: "+EURO+"\nLibras Esterlinas: "+LIBRA+"\nYen Japones: "+YEN);
}
function CAMCOL(){
	document.getElementById('HEAD').innerHTML = '<link rel="stylesheet" href="CSS/ALTESTI.css">';
	console.log("¡GATO.png ha aparecido misteriosamente!");
}
var LMT=10;
const AGRFLA = () => {
	var REP = parseInt(document.getElementById("ITRCNS").value);
	if (REP <= 15 && LMT <= 25){
		for (let i = 1; i <= REP; i++){
			console.log("Repeticion #" + i);
			LMT++;
		    if(LMT <= 25){
				document.getElementById('TBLCNT').insertRow(-1).innerHTML = '<td>'+LMT+': ¯|_(ツ)_/¯</td><td></td><td></td>';
		    }
		}
	}
else{
	alert("Solo se pueden añadir 15 filas");
	}
}
/*comprimir las carpetas en un rar, nombre es 4B_23*/