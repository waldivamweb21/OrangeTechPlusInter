/*
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

const preco_etiqueta = 100.0;
const condicao_pagamento = 4;

if (condicao_pagamento == 1) {
    console.log('A vista Débito: ' + (preco_etiqueta - (preco_etiqueta * 0.1)));

} else if (condicao_pagamento == 2) {
    console.log('A vista No Dinheiro ou PIX: ' + (preco_etiqueta - (preco_etiqueta * 0.15)));

} else if (condicao_pagamento == 3) {
    console.log('Em duas vezes no cartão: ' + (preco_etiqueta));

} else {
    console.log('Acima duas vezes no cartão: ' + (preco_etiqueta + (preco_etiqueta * 0.1)));
}
