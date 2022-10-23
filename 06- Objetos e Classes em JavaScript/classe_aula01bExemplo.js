// OOP - JavaScript CHAMADOS DE CONTRATOS.
// Ex1: Com construtor + parametros. //vai sempre chamar o construtor.

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
/*
Comparar pessoas e ver qual é a idosa de idosa.
*/

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais idoso(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais idoso(a) que ${p1.nome}`);
    } else{ 
        console.log(`${p1.nome} ${p2.nome} tem a mesma idade`);
    }
}

const marilia = new Pessoa('Marilia Arraes', 40);
const raquel = new Pessoa('Raquel Lira', 45);

compararPessoa(marilia, raquel);