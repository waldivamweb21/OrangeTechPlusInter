const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

// Assincrono: uma hora vai ter a resposta(response) do servidor.
// Interface de uma Proxy.

fetch(url)
    .then(function (response){
        response.json().then(function(responseBody){
            console.log(responseBody)
        })
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })

    //pausa: 08:46.


