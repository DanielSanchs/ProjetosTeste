/*var idade = prompt("Digite sua idade:");
document.getElementById("resultado").innerHTML = "A sua idade é: "+ idade;*/

function somar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var result = Number(num1) + Number(num2);

    document.getElementById("resultado").innerHTML = "A sua soma é: "+result;
}
function subtrair(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var result = Number(num1) - Number(num2);

    document.getElementById("resultado").innerHTML = "A sua subtração é: "+result;
}
function multiplicar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var result = Number(num1) * Number(num2);

    document.getElementById("resultado").innerHTML = "A sua multiplicação é: "+result;
}
function dividir(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var result = Number(num1) / Number(num2);

    document.getElementById("resultado").innerHTML = "A sua divisão é: "+result;
}
