# PROMISES

## O que são?

Promise é um objeto que representa o sucesso ou falha de uma operação assíncrona.

### O que é uma operação assíncrona?

O código javascript é executado em uma única thread, logo, só faz uma coisa de cada vez.
O código "síncrono" espera uma ação ser finalizada para começar outra. Todavia, o JS também pode executar códigos assíncronos e esses, não bloqueiam a fila de execução das demais operações até que seu processamento seja concluódo.

Exemplos: <a href="./codigoSincronoEAssincrono.js">Código Sícrono e Assícrono</a>

## Porque usar promises?

- Ao usar promises, ganhamos mais controle e legibiilidade sobre o fluxo assíncrono;
- Também se reduz o acoplamente de funções de callback no código;
- Você tem mais previsibilidade e detalhamento no tratamento de erro;

## Como criar uma promise

Geralmente, consumimos promises já prontas.
Todavia, para fins de estudo,  <a href="criarPromises.js">clique aqui</a> para ver exemplo de como tu podes criar uma. 