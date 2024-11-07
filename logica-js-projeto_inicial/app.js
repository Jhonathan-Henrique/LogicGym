alert('Boas vindas ao jogo do número secreto.');

let numeroSecreto = 5;
console.log(numeroSecreto);

let chute 
let tentativas = 1;
console.log(chute)

//Repetir enquanto chute for diferente do n. s
while (chute != numeroSecreto) {
  chute = prompt('Escolha um numero de 1 a 10')

  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert (`O numero secreto é menor que ${chute}`)
    } else {
      alert (`O numero secreto é maior que ${chute}`)
    }
  }
  tentativas++
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai, você acertou o número secreto! ${numeroSecreto} em tum total de ${tentativas} ${palavraTentativas}`);

/* if (tentativas > 1) {
  alert(`Isso ai, você acertou o número secreto! ${numeroSecreto} em tum total de ${tentativas} tentativas`);
} else {
  alert(`Isso ai, você acertou o número secreto! ${numeroSecreto} em tum total de ${tentativas} tentativa`);
}
*/ 

