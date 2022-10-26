const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

// Assincrono: uma hora vai ter a resposta(response) do servidor.
// Interface de uma Proxy.

/* MODO TRADICIONAL FUNCTION EM JAVASCRIPT.
fetch(url)
    .then(function (response){
       return response.json()
        })
    .then(function (jsonBody){
        console.log(jsonBody)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })
*/
    // MODO ARROW FUNCTION EM JAVASCRIPT MAIS ENXUTO "REDUZIDA" O CODIGO.
    //OBS:TROCA O NOME FUNCTION POR => "ARROWFUNCTION" A SETA. USADA EM CALLBACK>
    fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => {
            debugger
            console.log(jsonBody)
        })
        .catch((error) => console.log(error))
    
