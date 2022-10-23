//--------------------------------------------------------|
// EXERCICIOS IMPORTACAO E EXPORTACAO
//--------------------------------------------------------|

//1) 
//tipo For

const entradas = [5, 50, 10, 98, 23, 33, 44, 99, 1, 7];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

//--------------------------------------------------------|
// TEORIA IMPORTACAO E EXPORTACAO
//--------------------------------------------------------|

/*
//Giaria Mocado = simulacao.
function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}


// EXPORTANDO objeto LITERAL.
/*
    // Modo antigo.

    module.exports = { 
    gets: gets,
    print: print

    // outra forma:

    module.exports.gets = gets;
}
*/

// Modo Atual.

//module.exports = { gets, print };


