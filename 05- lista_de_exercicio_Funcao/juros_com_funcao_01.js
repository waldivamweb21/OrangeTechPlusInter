/* FUNÇOES REFATURANDO CODIGO.
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto (valor, desconto){
    return ('A vista Débito: ' + (valor - (valor * (desconto / 100))));
}

function aplicarJuros (valor, juros){
    return ('Com juros: ' + (valor + (valor * (juros / 100))));
}

const precoEtiqueta = 100;
const condicao_pagamento = 3;

if (condicao_pagamento == 1) {
    console.log (aplicarDesconto(precoEtiqueta, 10));

} else if (condicao_pagamento == 2) {
    console.log('A vista No Dinheiro ou PIX: ' + (aplicarDesconto(precoEtiqueta , 15)));

} else if (condicao_pagamento == 3) {
    console.log('Em duas vezes no cartão: ' + (precoEtiqueta));

} else {
    console.log('Acima duas vezes no cartão: ' + (aplicarJuros(precoEtiqueta, 10)));
}
