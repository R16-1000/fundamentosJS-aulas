const hoje = new Date()
const dia = hoje.getDate()
const ano = hoje.getFullYear()
hoje.setDate(dia + 5) //= 5 dias depois de hoje
hoje.setMonth(10)
hoje.setFullYear(ano + 1)

hoje.setHours(13, 30, 0)

console.log(`
dia:${hoje.getDate()}
mes:${hoje.getMonth()}
ano:${hoje.getFullYear()}
hora:${hoje.getHours()}
minuto:${hoje.getMinutes()}
segundos:${hoje.getSeconds()}
`)
/*
saída = 
dia:18 = atual + 5
mes:10
ano:2022
hora:13
minuto:30
segundos:0
*/
//podemos comparar duas datas usando operadores
console.log(new Date(2020, 1, 20) > new Date(2000,1, 1))
/*
saída =
dia:11
mes:10
ano:2021
hora:13
minuto:30
segundos:0

true
*/