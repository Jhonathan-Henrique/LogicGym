//Essa forma abaixo de escrever o codigo esta correta mas tivemos que criar varias variaveis, isso não é bom.
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10';*/
let numeroSecreto = gerarNumeroAleatorio();

//Agora vou criar o mesmo que esta acima porém com funçòes já que o codigo se repete.
function exibirTextoNaTela(tag, texto){
  let textoNaTela = document.querySelector(tag);
  textoNaTela.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute () {
  let chute = document.querySelector('input').value
  console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio () {
  return parseInt(Math.random() * 10 + 1);
}