//Desafio: Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(a, b){
  let numero1 = a;
  let numero2 = b;
  if (numero1 > numero2) {
    return a;
  } else {
    return b;
  }
}

console.log(maiorNumero(12,10))