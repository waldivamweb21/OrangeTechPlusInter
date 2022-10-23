// OOP - JavaScript CHAMADOS DE CONTRATOS.

// Ex1: Sem construtor.
// classe: é uma definição.

/*
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// Instacia: é a ocorrencia da classe o exemplo aqui: Pessoa.

const marilia = new Pessoa();
marilia.nome = 'Marilia Arraes';       
marilia.idade = 40;

const raquel = new Pessoa();
raquel.nome = 'Raquel Lira';       
raquel.idade = 45;

console.log(marilia);
console.log(raquel);

marilia.descrever();
raquel.descrever();



// Ex2: Com construtor. //vai sempre chamar o construtor.

class Pessoa {
    nome;
    idade;

    constructor(){
        this.nome = 'teste';
        this.idade = 20;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// Instacia: é a ocorrencia da classe o exemplo aqui: Pessoa.

const marilia = new Pessoa();
const raquel = new Pessoa();


marilia.descrever();
raquel.descrever();

*/

// Ex3: Com construtor + parametros. //vai sempre chamar o construtor.

class Pessoa { //Atributos.
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){ // parametros.
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade; //soube ano de nascimento.
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// Instacia: é a ocorrencia da classe o exemplo aqui: Pessoa.

const marilia = new Pessoa('marilia', 40);
const raquel = new Pessoa('raquel', 45);


//marilia.descrever();
//raquel.descrever();

console.log(marilia);