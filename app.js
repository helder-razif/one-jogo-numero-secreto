alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute;// = prompt('Escolha um número entre 1 e 10');
let tentativas = 1;

// Enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} na ${tentativas}ª tentativa!`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que o ${chute}!`);
        } else {
            alert(`O número secreto é menor que o ${chute}!`);
        }
        // A cada erro aumenta o número de tentativas em 1.
        tentativas++;
    }
}

