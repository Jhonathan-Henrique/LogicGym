//Desafio 1: Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja muito bem-vindos!');

//Desafio 2: Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Jhonathan';
console.log(`Olá, ${nome}!`)

//Desafio 3: Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome1 = 'Jhonathan';
alert (`Olá, ${nome1}!`)

//Desafio 4: Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e 
//mostre no console do navegador.
let linguagemPredileta = prompt('Qual a linguagem de programação você mais gosta?')
console.log(`A linguagem preferida escolhida foi: ${linguagemPredileta}`)

//Desafio 5: Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para 
//mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 1;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`A soma do ${valor1} e ${valor2} é igual a ${resultado}.`)

//Desafio 6: Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 10;
let valor4 = 1;
let resultado1 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado1}`);

//Desafio 7: Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, 
//exibindo uma mensagem apropriada no console.
let idade = prompt ('Qual é sua idade?')
if (idade >= 18) {
  console.log('Você é maior de idade')
} else {
  console.log('Você é menor de idade')
}

//Desafio 8: Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt ('Digite um numero')
if (numero > 0) {
  console.log('O numero é positivo')
} else {
  if (numero == 0) {
    console.log ('O numero é neutro')
  } else {

    console.log('O numero é negativo')
  }
}

//Desafio 9: Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while (contador != 10 + 1) {
  console.log(contador)
  contador++
}

//Desafio 10: Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 5;
if (nota >= 7) {
  console.log('aprovado')
} else {
  console.log('reprovado')
}

//Desafio 11: Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = parseInt (Math.random () * 10 + 1)
console.log(numeroAleatorio)

//Desafio 12: Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio1 = parseInt (Math.random () * 10 + 1)
console.log(numeroAleatorio)

//Desafio 13: Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAte1000 = parseInt (Math.random() * 1000 + 1)
console.log (numeroAte1000)
