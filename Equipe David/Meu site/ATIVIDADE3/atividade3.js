/*lampada*/
function Liga() { 
    document.getElementById("img").src = "pic_bulbon.gif"
}

function Desliga() {
    document.getElementById("img").src = "pic_bulboff.gif"
}

const input = document.querySelector("input");
const button = document.querySelector("#show");
button.addEventListener('click', togglePass);
/*lampada*/


/*mostrar senha*/
function togglePass() { 
  if (input.type == "password") {
    input.type = "text";
    button.textContent = "Ocultar senha";
  } else {
    input.type = "password";
    button.textContent = "Mostrar senha";
  }
}
/*mostrar senha*/


/*form com js*/
function matchpass(){ 
  var firstpassword=document.f1.password.value;
  var secondpassword=document.f1.password2.value;
  
  if(firstpassword==secondpassword){
  return true;
  }
  else{
  alert("a senha precisa ser a mesma!");
  return false;
  }
  } 
  /*form com js*/


  /*calculadora*/
  function insert(num)
 {
 var numero = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = numero + num;
 }
 function clean()
 {
 document.getElementById('resultado').innerHTML = "";
 }
 function back()
 {
 var resultado = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
 }
 function calcular()
 {
 var resultado = document.getElementById('resultado').innerHTML;
 if(resultado)
 {
 document.getElementById('resultado').innerHTML = eval(resultado);
 }
 else
 {
 document.getElementById('resultado').innerHTML = "Nada..."
 }
 }
 /*calculadora*/