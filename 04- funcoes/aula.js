//Ex:1
function teste(){
    console.log('teste');
}
teste();

//Ex:2
function sayMayName(name){
    console.log('Your name is: ' + name);   
}

sayMayName('wal');
sayMayName('Vitoria');

//Ex3: Quando se trabalha com numeros e quer retornar valor utiliza o: Return.
function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);

console.log('Quadrado é: ' + (quadradoDeDez));
console.log('A Soma do Quadrado é: ' + (quadrado(10) + quadrado(10)));

//Ex:4 calcular juros.

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

//Ex:5
function calcularJuros() {

}

function main(){
    console.log('Programa Principal')
}

main();

//EX:6 Refatorando codigo: calcularImc em FUNçÕES.

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    
    if (imc < 18.5){
        return('pesoBaixo');
    }else if (imc >= 18.5 && imc < 25){
        return('pesoNormal');
    }else if (imc >= 25 && imc < 30){
        return('pesoAcima');
    }else if (imc >= 30 && imc < 40 ){
        return('Obeso');
    }else{
        return('obesoGrave');
    }
}
/*
function main(){
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main = function(){
    console.log(1);
}

main();
*/

// Outra forma de executar e chamar ( invocar ) a FUNÇÂO ANONIMA de maneira ISOLADA.
// Obs:. Não consegue CHAMAR a FUNÇÂO, porque não tem um Nome. Ela Só Executa Uma Unica Vez.
(function (){
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();




