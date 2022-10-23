/*
const alunos = ['joao', 'maria', 'pedro'];

console.log(alunos);

console.log(alunos[0]);

//Adiciona Renan a lista alunos.
alunos.push('Renan');
console.log(alunos[3]);
console.log(alunos);

//Adiciona Vinicios a lista na quarta posicao.
alunos[4] = 'vinicios';
console.log(alunos);

const nAlunos = ['1', '2', '3'];
console.log(nAlunos);

//Remover o ultimo item da lista Alunos.
console.log(nAlunos.pop());
console.log(nAlunos);

//Remover o primeiro item da lista Alunos.
console.log(nAlunos.shift());
console.log(nAlunos);



// Notas dosalunos n semestre

const notasSemestre = [];

notasSemestre.push(5);
notasSemestre.push(7);
notasSemestre.push(8);
notasSemestre.push(2);
notasSemestre.push(5);

console.log(notasSemestre);

// Mostra a quantidade de itens na lista. 
console.log(notasSemestre.length);

// EX1: Percorra todosos itens da lista e mpstre no terminal.

//for (let index = 0; index < array.length; index++) {
 //   const element = array[index]; 
//}


const nome = 'Joao barbosa da silva'; 
for (let i = 0; i < nome.length; i++){
    const letra = nome[i];
    console.log(letra);
}
*/

// Ex1. Monstrar a media das Notas dos alunos no semestre.

const notasSemestre = [];

notasSemestre.push(5);
notasSemestre.push(7);
notasSemestre.push(8);
notasSemestre.push(2);
notasSemestre.push(5);
notasSemestre.push(8);

let soma = 0;

for (let i = 0; i < notasSemestre.length; i++) {
    const notas = notasSemestre[i];
    soma = soma + notas;
}
const media = soma / notasSemestre.length;
console.log(media);

