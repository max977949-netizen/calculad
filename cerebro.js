const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    let suma = Number(num1.value) + Number(num2.value);
    texto.textContent = "El resultado es " + suma;
    
});
