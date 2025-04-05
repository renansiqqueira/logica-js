let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let tentativas = 0;
let numeroEscolhido;


while(numeroEscolhido != numeroSecreto){
    tentativas++;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    numeroEscolhido = prompt('Chute um número entre 1 e 100: ');

    // if(numeroEscolhido == numeroSecreto && tentativas == 1){
    if(numeroEscolhido == numeroSecreto){
        alert(`Parabéns! Você acertou o número com ${tentativas} ${palavraTentativa}!`);
        break;
    // }else if(numeroEscolhido == numeroSecreto && tentativas > 1){
    //     alert(`Parabéns! Você acertou o número com ${tentativas} tentativas!`);
    //     break;
    }else if (numeroEscolhido > numeroSecreto){
        alert(`O número secreto é menor do que ${numeroEscolhido}.`);
    }else{
        alert(`O número secreto é maior do que ${numeroEscolhido}.`);
    }
}

