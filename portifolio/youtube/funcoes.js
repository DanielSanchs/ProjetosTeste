function carregarVideos (){
    document.getElementById("carregar").innerHTML = "Aguarde! estamos carregando...";
}

function gerarListaInteresse(){
    let interesses = ["Tudo", "CS GO", "Fornite", "LOL", "Clash Royale", "Futebol" ,"LOfi", "One Piece", "One Punch Man", "Boku no Hero", "Street Workout"];
     for(let i=0; i< interesses.length; i++){
        let btn = document.createElement("button");
        btn.innerHTML = interesses[i];
        btn.setAttribute("class","btn btn-outline-light rounded-pill bg-secondary");
        document.getElementById("lista-i").appendChild(btn);
     }
}