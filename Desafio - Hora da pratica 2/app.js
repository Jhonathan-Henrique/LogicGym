//Desafio 1: Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

//Desafio 2: Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarChute(){
  console.log('O botão foi clicado')
}

//Desafio 3: Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function alerta(){
  alert('Eu amo JS')
}

//Desafio 4: Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificaCidade() {
  let nomeCidade = prompt('De que cidade você é?')
  alert (`Estive em ${nomeCidade} e lembrei de você.`)
}

//Desafio 5: Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function soma(){
  let valor1 = prompt('Digite o primeiro valor');
  let valor2 = prompt ('Digite o segundo valor');
  valor1 = parseInt(valor1);
  valor2 = parseInt(valor2);
  let resultado = valor1 + valor2;
  alert(`A soma de ${valor1} + ${valor2} é: ${resultado}`)
}