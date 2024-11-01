var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 100;
    var posicaoY = Math.floor(Math.random() * altura) - 100;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // criar o elemento HTML
    var mosquito = document.createElement("img");
    mosquito.src = "img/mosquito.png";
    mosquito.className = tamanhoAleatorio();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 4);
    
    switch(classe) {
        case 0:
            return "mosquito1"
        ;
        case 1:
            return "mosquito2"
        ;
        case 2:
            return "mosquito3"
        ;
        case 3:
            return "mosquito4"
        ;
    }
}