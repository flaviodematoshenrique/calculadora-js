const primeiroVeiculo = prompt('Informe o nome do primeiro veículo');
const velocidadePrimeiroVeiculo = prompt('Informe a velocidade do primeiro veículo');

const segundoVeiculo = prompt('Informe o nome do segundo veículo');
const velocidadeSegundoVeiculo = prompt('Informe a velocidade do segundo veículo');


if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
    alert("Primeiro Veículo é mais rápido")
  } else if (velocidadeSegundoVeiculo > velocidadePrimeiroVeiculo) {
    alert("Segundo Veículo é mais rápido")
  } else if (velocidadePrimeiroVeiculo === velocidadeSegundoVeiculo) {
    alert("Velocidade são iguais!")
}     
  
