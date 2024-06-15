const LIMITE = 10;
var contador = 0;

function gerarNum(){
    if(contador < LIMITE){
        let num = Math.ceil(Math.random()*60);

        let elemento = document.createElement("li");
        let elemento2 = document.createElement("img");
        elemento2.src = `https://picsum.photos/200/300?random=1=${num}`;
        elemento.append(elemento2);

        document.getElementById("num").append(elemento);
        contador++;
    }
}
   