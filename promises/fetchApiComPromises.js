const fetch = require("cross-fetch");
const url = 'https://api.spotify.com/v1/albums'

// O metódo fetch por exemplo, é o que nos permite realizar uma requisição.
// Requisições são assíncronas em JS. Logo, podemos usar o objeto promise para tratar seu sucesso ou sua falha.
// Ao fazer fetch em uma url, nos é retornado uma Promise (ainda pendende, sem ser nem rejeitada, nem resolvida)

// O código abaixo retorna: Promise { <pending> }
// console.log(fetch(url))

// Aqui temos o uso e .then e .catch para tratar o sucesso e falha da resolução de uma promise
fetch(url)
  .then(data => {
    // Aqui estamos lançando um erro de propósito, para garantir que o catch também trate esta situação (precisa ter authorization para fazer request na API do spotify viu)
    if ( data.status!= 200 ) {
      throw new Error(data.statusText)
    } 
  })
  .catch( error => console.log(`Erro na requisição: ${error.message}`))


// Roda antes kkkk
console.log("Operação logo depois um metódo assíncrono, será que roda antes ou depois dele tchê?")

// Uma boa refatoração para o código acima seria extrair as funções de cada metódo. Ficaria mais ou menos assim: 

const validateRequestHttp = data => {
  // Aqui estamos lançando um erro de propósito, para garantir que o catch também trate esta situação (precisa ter authorization para fazer request na API do spotify viu)
  if ( data.status!= 200 ) {
    throw new Error(data.statusText)
  } 
}

const handleErrorRequest = error => console.log(`Erro na requisição: ${error.message}`)

fetch(url)
  .then(validateRequestHttp)
  .catch(handleErrorRequest)


// Bem melhor né