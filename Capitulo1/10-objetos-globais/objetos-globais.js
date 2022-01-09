//temos contextos globais e contexto de escopo

console.log( 'keys', Object.keys({ nome: 'Reginaldo'}))
//trara a chave do objeto
//saída = keys [ 'nome' ]
console.log( 'values', Object.values({ nome: 'Reginaldo'}))
//trara o valor do objeto
//saída = values [ 'Reginaldo' ]
console.log('now', Date.now())
//ele vai calcular, quantos milisegundos de hoje até 1970 nicio do linux
//saída = now 1634131912577
console.log('radom', Math.random())
//ele trás números aleatorios e tbm pode ser usado em calculos matematicos
//saída = radom 0.952412900406244
//variavel chamada global no JS, no navegador tem o nome de deis ou global deis
console.log('global',global)
//saída = 
/*
global <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
  */