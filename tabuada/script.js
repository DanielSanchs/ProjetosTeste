function gerarTabuada(){
    let num = document.getElementById("num1").value;
    
    document.getElementById("tabuada").innerHTML = "";
    for (let i = 0; i < 11; i++) {
        let elem = document.createElement("li");
        let res = num * i;
        elem.innerHTML = num+" x "+ i +" = "+ res;
        document.getElementById("tabuada").append(elem)
    }
}