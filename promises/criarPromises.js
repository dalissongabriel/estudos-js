// Usamos a classe Promise para tal.
// Ela recebe por parametro uma função com dois valores, que por convenção, são chamados de resolve e reject.

// O resolve deve ser invocado quando a operação assíncrona for bem sucedidade, e reject quando falhar.
const aPromise = new Promise((resolve, reject)=>{
  const aNumber = 37
  resolve(aNumber)
})

// O .then é responsável por receber o dado/mensagem processado com sucesso ( Enviado pelo que estiver como parâmetro do resolve dentro da promise ...  "aNumber" neste caso). 
// Ele também recebe uma função, e esta por sua vez, é quem recebe o que vem do resolve da promise.
aPromise.then((value)=>{
  console.log(value)
})


// É legal perceber que o metódo "then" retorna também uma promise.
// Logo, é possível encadear vários metódos .then.

aPromise
  .then(value=>value)
  .then(value => console.log(`Promise Encadeada: ${value}`))
