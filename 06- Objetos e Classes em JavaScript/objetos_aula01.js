// Objeto agrupa valores: CHAVE E VALOR. 

// Uma função dentro de um Objeto: é chamado de MÉTODO.

const pessoa = {
    nome: 'Waldivam alves',
    idade: 37,
    // Função nesse Objeto => MÉTODO.
    // This é como um CONTEXTO. O tHIS assume o OBJETO.
    descrever: function () {
        console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

// Caso Tenha outra pessoa, Faz os ATRIBUTOS e em Seguida pode 
// INVOCAR a função é ela ser chamada.

//pessoa.nome = 'Renan';
//pessoa.idade = 40;


// Pode sobrescrever valores. 
// Obs: Ficar atento ao sinal tipo "aspas".

pessoa.descrever = function() {
    console.log(`Meu nome é: ${this.nome}`);
}

pessoa.descrever();

/*
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

// incremetar: adicionar.
pessoa.altura = 1.85;
console.log(pessoa);

*/

//Ex. Outra forma de invocar objeto, de foram dinâmica.

const atributo = 'idade';

console.log(pessoa['nome']);
console.log(pessoa['idade']);

// forma dinamica.. 
pessoa['nome'] = 'teste';
// forma acesso direto.
pessoa.nome= 'teste';

