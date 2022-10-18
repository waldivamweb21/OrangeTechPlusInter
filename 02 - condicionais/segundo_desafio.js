//Atalhos para formatar codigo ~> ALT + SHIFT + F;
//Atalho para descolcar codigo ~> SELECIONA E ALT + CIMA/BAIXO;

/*
Faça um Programa para calcular o valor de uma viagem.

Você Terá 5 variaveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por km;
5 - Distancia em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaViagemKm = 100;
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distanciaViagemKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

