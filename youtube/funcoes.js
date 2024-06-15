function carregarVideos() {
    document.getElementById("carregar").innerHTML = "Aguarde! estamos carregando...";
}

function gerarListaInteresse() {
    let interesses = ["Tudo", "CS GO", "Fornite", "LOL", "Clash Royale", "Futebol", "LOfi", "One Piece", "One Punch Man", "Boku no Hero", "Street Workout"];
    for (let i = 0; i < interesses.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = interesses[i];
        btn.setAttribute("class", "btn btn-outline-light rounded-pill bg-secondary");
        document.getElementById("lista-i").appendChild(btn);
    }
}

let listaVideos = [
    {
        id: 1,
        titulo: "Speed run de Mario",
        numViews: "1 Mi. 4 likes",
        thumb: "https://picsum.photos/600/360?random=1",
        perfil: "https://picsum.photos/40/40?random=1",
        nomeCanal: "lofi girl",
        textoBtn: "Abrir video",
        linkPag: "video.html?id=1"
    },
    {
        id: 2,
        titulo: "Leo dias entrevista Maiara & Maraisa",
        numViews: "604 mil. 20 mil likes",
        thumb: "https://picsum.photos/600/360?random=2",
        perfil: "https://picsum.photos/40/40?random=2",
        nomeCanal: "lofi girl",
        textoBtn: "Abrir video",
        linkPag: "video.html?id=2"
    }
];

function gerarCardsVideos() {
    for (let it = 0; i < listaVideos.length; it++) {
        //<div class="col-lg-3 col-md-6 col-sm-12">
        let divCol = document.createElement("div");
        divCol.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
        //    <div class="card bg-dark ml-2 mt-2 text-white" style="min-width: 18rem;">
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "card bg-dark ml-2 mt-2 text-white");
        //      <img src="https://picsum.photos/600/360></img>
        let imgThumb = document.createElement("img");
        imgThumb = setAttribute("src", listaVideos[it].thumb);
        //      <div class="card-body">
        let divBody = document.createElement("div");
        divbody.setAttribute("class", "card-body");
        //        <h5 class="card-title">
        let h5titulo = document.createElement("h5");
        h5titulo.setAttribute("class", "card-title");
        //          <img src="https://picsum.photos/40/40" alt="">
        let imgPerfil = document.createElement("img");
        imgPerfil = setAttribute("src", listaVideos[it].perfil);
        //          <span>Titulo do vídeo</span>
        let spanTitulo = document.createElement("span");
        spanTitulo.innerHTML = listaVideos[it].titulo;
        //       </h5>
        //        <p class="card-text">
        let pCardText = document.createElement("p");
        pCardText.setAttribute("class", "card-text");
        //          <p>Nome do Canal</p>
        let pNomeCanal = document.createElement("p");
        pNomeCanal.innerHTML = listaVideos[it].nomeCanal;
        //          <p>11mi Visualizações . há 3 meses</p>
        let pVisualizacoes = document.createElement("p");
        pVisualizacoes.innerHTML = listaVideos[it].numViews;
        //        </p>
        //        <a href="#" class="btn btn-outline-danger btn-sm disabled">Ao vivo agora</a>
        let aLinkVideo = document.createElement("a");
        aLinkVideo.setAttribute("class", "btn btn-outline-danger btn-sm disabled");
        aLinkVideo.innerHTML = listaVideos[it].textoBtn;
        //      </div>
        //    </div>
        //  </div>

        // colocar elementos dentro de outros 
        pCardText.appendChild(pNomeCanal);
        pCardText.appendChild(pVisualizacoes);

        h5titulo.appendChild(imgPerfil);
        h5titulo.appendChild(spanTitulo);

        divBody.appendChild(h5titulo);
        divBody.appendChild(pCardText);
        divBody.appendChild(aLinkVideo);

        divCard.appendChild(imgThumb);
        divCard.appendChild(divBody);

        divCol.appendChild(divCard);
    }
}