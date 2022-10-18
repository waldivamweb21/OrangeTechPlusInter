/*
Faça um Programa para calcular o valor de uma viagem.

Você Terá 3 variaveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por km;
3 - Distancia em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaViagemKm = 1580;


const litrosConsumidos = distanciaViagemKm / kmPorLitros; 

const valorGasto = litrosConsumidos * precoCombustivel; 

console.log(valorGasto.toFixed(2));