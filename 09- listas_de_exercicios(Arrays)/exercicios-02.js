/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/


//Ex2A
const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
 
    if (numero % 2 === 0){
        console.log(numero + ' par ');
}
}

//Ex2B

/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par e impar encontrado e diga ser é PAR ou IMPAR.
*/

const numeross = [2,4,6,8,10,12,15,17,20,21,22];

for (let i = 0; i < numeross.length; i++) {
    const numeros = numeross[i];

    if(numeros % 2 === 0){
        console.log (numeros + ' Par ');
    }else{
        console.log (numeros + ' Impar ');
    }
    
   
    
}