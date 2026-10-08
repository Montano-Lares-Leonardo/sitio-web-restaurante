console.log ("Hola mundo, saludos desde js, con archivo");

function mensaje() {
   var mensaje = document.getElementById("txtMensaje").value;
   alert("Usted ha enviado el mensaje " + mensaje);
}

 function operadores() {
   var op1 = document.getElementById("opuno").value;
   var op2 = document.getElementById("opdos").value;
   var resSuma = parseInt(op1) + parseInt(op2);
   var resResta = op1 - op2;
   var resMultiplicacion = op1 * op2;
   var resDivision = op1 / op2;
   console.log("Resultado de la suma: " + resSuma);
   console.log("Resultado de la resta: " + resResta);
   console.log("Resultado de la multiplicacion: " + resMultiplicacion);
   console.log("Resultado de la division: " + resDivision);

   alert("Resultado de la suma: " + resSuma + "\n"
    + "Resultado de la resta: " + resResta + "\n"
    + "Resultado de la multiplicacion: " + resMultiplicacion + "\n"
    + "Resultado de la division: " + resDivision + "\n" )
 }

 function edad(argument) {
  edadMS = Date.parse(Date()) - Date.parse(argument.target.value);
  edads = new Date();
  edads.setTime(edadMS);
  resultado = edads.getFullYear() - 1970;
  res = (resultado <= 0) ? 0 : resultado;
  console.log ("Su edad es: " + res + " anos.");
  alert ("Su edad es: " + res + " anos.");
 }

 function vocales(){
   let frase = document.getElementById("frasevocales()").value;
      let arregloVocales = ["a","e","i","o","u"];
      let numeroVocales = contarVocales(frase, arregloVocales);
   console.log ("El numero de vocales en la frase es: " + numeroVocales);
   alert("La frase que ingreso tiene: " + numeroVocales + " vocales.");
 }

 function contarVocales(frase, vocales){
  let count = 0;
  let fraseLower = frase.toLowerCase();

  for (let i = 0; i < fraseLower.length; i++){
  if (vocales.includes(fraseLower[i])){
  count++;
  }
  }
  return count;
 }

 function bucles() {
  var rep = parseInt(document.getElementById("interacciones").value);
  if(rep<=15){
    alert("El resultado esta en la consola. ")
  for (let i = 1; i <= rep; i++){
  console.log("Repeticion #: " + i);
  }
  }
  else{
    alert("Por favor inserte un valor menor a 15");
  }
 }

 const agregarFila = () => {
   var rep = parseInt(document.getElementById("interacciones").value);
   if(rep < 15)
   {
       for (let i = 1; i <= rep; i++) {
        document.getElementById('TablaContenido').insertRow(-1).innerHTML = '<td></td> <td></td> <td></td>';
       }
    }
   else {
        alert("Por favor inserte un valor menor a 15");
   }
  }

  function llenaralumnos() {
    var select = document.getElementById("1stAlumnos");
    var option = ["Juan Lopez", "Jorge García", "Maria Reyes", "Antonio Ruiz", "Miguel Rios"];

    for(var i = 0; i < option.lenght; i++) {
      var opt = option[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }

  function promedios()
  {
    let Mat=parseInt(document.getElementById("calMatematicas").value);
    let Fis=parseInt(document.getElementById("calFisica").value);
    let Esp=parseInt(document.getElementById("calEspanol").value);
    let Qui=parseInt(document.getElementById("calQuimica").value);
    let Qui2=parseInt(document.getElementById("calQuimica2").value);
    let nombre= document.getElementById("1stAlumnos").value;
    let cal=Mat+Fis+Esp+Qui+Qui2;
    let calf=cal/5;
    console.log("La calificacion de "+ nombre +" es: "+ calf);
    alert("La calificacion de "+ nombre +" es: "+ calf +" y en Quimica 2 es: "+Qui2);
  }
  function tabla()
  {
    var num = parseInt(document.getElementById("tablas").value);
    alert("El resultado esta en la consola. ")
  for (let i = 1; i <= 10; i++){
    res=num*i;
  console.log(num +" x "+ i +" = "+ res + "\n");
  }
  }
  function area()
  {
    var l1 = parseInt(document.getElementById("lado1").value);
    a=l1*l1;
    console.log("El area del cuadrado es "+a);
    alert("El area del cuadrado es "+a);
  }
  function areaC()
  {
    var r = parseInt(document.getElementById("rad").value);
    ar= (r*r)*3.1416;
    alert("el area del circulo es "+ar);
    console.log("el area del circulo es "+ar);
  }
