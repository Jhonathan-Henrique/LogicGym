//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas,
//que serão recebidos como parâmetro. calculo IMC: Altura x Altura / peso.

function calculoImc(altura, peso){
  altura = altura / 100;
  return peso / (altura * altura);
}

console.log(parseInt(calculoImc(190, 75)))