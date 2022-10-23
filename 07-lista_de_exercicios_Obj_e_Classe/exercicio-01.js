//PRATICANDO COM OBJETOS E CLASSES.

/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível 
por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível 
nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    
    //This só é usado para ATRIBUTOS.
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    // Usa This pra chamar o Atributo do objeto
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));





