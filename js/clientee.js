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

  function LlenarAlumnos() {
    var select = document.getElementById("1stAlumnos");
    var options = ["Juan Lopez", "Jorge García", "Maria Reyes", "Antonio Ruiz", "Miguel Rios", "Juan Perez"];

    for(var i = 0; i < options.lenght; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
  
  function Promedios()
  {
  let Mat=parseInt(document.getElementById("calMatematicas").value);
  let Fis=parseInt(document.getElementById("calFisica").value);
  let Esp=parseInt(document.getElementById("calEspañol").value);
  let Qui=parseInt(document.getElementById("calQuimica").value);
  let Mat2=parseInt(document.getElementById("calMatematicas2").value);
  let nombre= document.getElementById("1stAlumnos").value;
  let cal=Mat+Fis+Esp+Qui+Mat2;
  let calf=cal/5;
  console.log("La calificacion de "+ nombre +" es "+ calf);
  alert("La calificacion de "+ nombre +" es " + calf +"\n"+ "y la puntuacion de Matematicas 2 es de " +Mat2);
  }

  function Tablas()
  {
    var x = parseInt(document.getElementById("tablas").value);
     alert("El resultado se encuentra en la consola de la pagina");
     for(let i=1; i<=10; i++){
      res=x*i;
      console.log(x+" x "+i+" = "+res+"\n");
     }
  }

  function Temas() 
  {
    var select = document.getElementById("temas");
    var options = ["El universo"];

    for(var i = 0; i < options.lenght; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
  
  function Datos()
  {
  let nombres= document.getElementById("temas").value;
  let El_universo=prompt("La Luna tarda 27,3 días en orbitar una vez la Tierra, pero 29,5 días en ir de Luna Nueva a Luna Nueva.");
  console.log("Gracias por usar la pagina");
  alert("Gracias por usar la pagina");
  }

function Area() {
   var a1 = document.getElementById("a11").value;
   var a2 = document.getElementById("a22").value;
   var area = (parseInt(a1) * parseInt(a2))/2;

   console.log("Resultado del area es: " + area);
   alert("Resultado del area es: " + area);
 }