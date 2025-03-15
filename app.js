/**let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';**/

exibirMensagemInicial();

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    ExibirTextoNaTela('h1','Jogo do Número Secreto');
    ExibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == NumeroSecreto) {
        ExibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        ExibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        ExibirTextoNaTela('h1','Errou!');
        if (chute > NumeroSecreto) {
            ExibirTextoNaTela('p','O número secreto é menor!');
        } else {
            ExibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return GerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido; 
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    NumeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}