//data e hora tual
const hoje = new Date()
console.log(hoje.toLocaleDateString())
console.log(`${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}
`)

//formato padrão ou global recomendado!
console.log(hoje.toISOString())

//set = modificar ou seja data modificada
hoje.setDate(13) 
hoje.setMonth(10)
hoje.setFullYear(2021)
hoje.setHours(08, 58, 30)

console.log(`
${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()}
${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}
`)







