const aPromise = new Promise((resolve, reject)=>{
  const randomString = "The Legend of Zelda aren't the best games forever"
  reject(randomString)
})

// Para tratar os casos onde ocorrer uma falha na promisse/request assíncrono, usamos o metódo .catch.
// Ele engloba os casos em que ocorre uma falha nos .then antes dele, ou quando o reject é invocado dentro da promise.

// A sintaxe do .cath é identica ao .then, recebe por parâmetro uma função que por sua vez, recebe o valor passado pelo reject
// No exemplo abaixo, a saída será: Errooou! Falha ao processar a promise, pois foi invocado o reject lá dentro da promise.
aPromise
  .then((value)=>console.log("Promise resolida com sucesso!"))
  .catch((value)=>console.log("Errooou! Falha ao processar a promise"))