//const primeiraDataDoJS = new Date(0)
//console.log(primeiraDataDoJS.getTime())
//saída = 0
//por que a data começa do 0

//saída = data com texto
const hoje = new Date()
console.log(hoje.toString())

//saída data e horario atual 
console.log(hoje.toLocaleDateString())
//formato padrão ou global recomendado!
console.log(hoje.toISOString())

/*
saída =
Mon Oct 11 2021 12:48:55 GMT-0300 (Horário Padrão de Brasília)
11/10/2021
2021-10-11T15:48:55.079Z
*/