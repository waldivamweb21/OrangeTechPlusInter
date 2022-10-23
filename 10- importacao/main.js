//--------------------------------------------------------|
// TEORIA IMPORTACAO E EXPORTACAO
//--------------------------------------------------------|

// EX2 - Forma mais adiantada com  Destructuring . Utilizar menos códigos.
// Criou 2 variaveis o Gets e Print.
//const { gets, print } = require('./funcoes-auxiliares');

//print(gets());

/*
// EX1.
// require no JavaScripts: Serve para IMPORTAR.
// Trazendo 1 objeto.
const funcoes = require('./funcoes-auxiliares');

//console.log(funcoes);
console.log(funcoes.gets());

// modernas
// utilizando destructions.

const pessoa = {
    nome: 'Maria'
};

// codigos equivalentes => parecidos.
//const nome = pessoa.nome;

//Aqui pode pegar varios atributos.
const { nome } = pessoa;

*/
//--------------------------------------------------------|
// EXERCICIOS DE IMPORTACAO E EXPORTACAO
//--------------------------------------------------------|
/*

1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20

2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90

3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
*/

// 1) Resolucao forma mais ampla.
const { gets, print } = require('./funcoes-auxiliares');
/*
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}
// Mostrando o maior numero do array
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado > maiorValor ){
        maiorValor = numerosSorteado;
    }
}

print(numerosSorteados);
print(maiorValor);
*/
// 1) Resolucao forma mais simplificada não dinâmica.

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado ) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);

//1) Resolucao forma mais simplificada e dinâmica.
const quantidadeDeAlunos = gets();
let maiorValorEncontradoDinamico = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
        if (numeroSorteado > maiorValorEncontradoDinamico) {
            maiorValorEncontradoDinamico = numeroSorteado;
        }
}

print(maiorValorEncontradoDinamico);
