/*
1 - Event Loop

Este exercício testa seu entendimento sobre o funcionamento do *Event Loop* no JavaScript.
Qual será a ordem de execução dos logs e porque?
*/

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");

/*
A ordem de execução dos logs será:
1. "start"
2. "end"
3. "promise"
4. "timeout"

Isso ocorre porque o código é executado da seguinte forma:
1. Esse log é executado imediatamente, pois está no contexto de execução sincrono.
2. Esse log também é executado imediatamente após o primeiro, pois está no mesmo contexto de execução, porém depois .
3. As promises são adicionadas à fila de microtarefas que são executadas após o contexto de execução principal.
4. O setTimeout é adicionado à fila de macrotarefas, como o tempo de espera é 0ms, ele é executado imediatamente após as microtarefas.
*/