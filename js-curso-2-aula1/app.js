//Essa forma abaixo de escrever o codigo esta correta mas tivemos que criar varias variaveis, isso não é bom.
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10';*/
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Agora vou criar o mesmo que esta acima porém com funçòes já que o codigo se repete.
function exibirTextoNaTela(tag, texto) {
  let textoNaTela = document.querySelector(tag);
  textoNaTela.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabéns, você acertou! com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O Numero secreto é menor!');
    } else {
      exibirTextoNaTela('p', 'O numero secreto é maior!');
    }
    tentativas++
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}