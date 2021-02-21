// Exemplo de código síncrono
let randomNumber = 9

// Código/Função assíncrona. O Código JS não irá aguardar esse trecho ser executado, e seguirá executando as pŕoximas linhas. Quando o tempo de timeout for atingido, a função interna será executada. Mesmo que o valor de milisegundos seja 0, a execução da função interna será feita somente no próximo loop do even loop.

// Aqui a saída será : 9 depois 109
setTimeout(()=>{
  randomNumber += 100
  console.log(randomNumber)
},0)

// Outro exemplo de código síncrono
console.log(randomNumber)