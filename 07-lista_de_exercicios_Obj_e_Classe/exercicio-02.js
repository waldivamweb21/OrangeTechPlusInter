//PRATICANDO COM OBJETOS E CLASSES.

/*
2) Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso  e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
class Pessoa {
    nome;
    peso;
    altura;

constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}

calcularImc(){
   return this.peso / (this.altura * this.altura)
 }
classificarImc(){
   const imc = this.calcularImc();
    
if (imc < 18.5){
   return ('pesoBaixo');
}else if (imc >= 18.5 && imc < 25){
   return ('pesoNormal');
}else if (imc >= 25 && imc < 30){
   return ('pesoAcima');
}else if (imc >= 30 && imc < 40 ){
   return ('Obeso');
}else{
   return ('obesoGrave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());

const maria = new Pessoa('Maria', 100, 1.65);
console.log(maria.classificarImc());

const joao = new Pessoa('joao', 60, 1.69);
console.log(joao.classificarImc());

