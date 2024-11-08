// Gera um número aleatório entre -10 e 10
let numero = Math.floor(Math.random() * 21) - 10;

function verificarNumero() {
  if (numero > 0) {
    console.log('O número é positivo');
  } else if (numero < 0) {
    console.log('O número é negativo');
  } else {
    console.log('O número é igual a 0');
  }
}

console.log(numero);  // Mostra o número aleatório gerado
verificarNumero();    // Chama a função para verificar o número

//Explicação:
/*Geração do número aleatório:
Math.random() * 21 gera um número aleatório entre 0 (inclusive) e 21 (exclusive). Ou seja, de 0 a 20.999...

Ajuste do intervalo:
Como queremos números entre -10 e 10, você usa o Math.floor() para arredondar para baixo, e depois subtrai 10.
Isso faz com que o número gerado seja entre -10 e 10 (inclusive). Por exemplo:

Math.random() * 21 gera um valor entre 0 e 20.
Math.floor() arredonda para o inteiro mais próximo abaixo (de 0 a 20).
Subtrair 10 transforma o intervalo para -10 até 10.
Exemplo de saída:
Se o número gerado for, por exemplo, 7, a função verificarNumero exibirá "O número é positivo".
Se for -3, exibirá "O número é negativo".
Se for 0, exibirá "O número é igual a 0".
Isso deve resolver o seu problema de gerar números entre -10 e 10 de forma aleatória!*/