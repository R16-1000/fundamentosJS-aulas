
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function questionAsync(texto){
    return new Promise((resolve, reject)=>{
        terminal.question(`${texto}\n`, resolve)
    })
}
let nome = ""
let telefone = ""
Promise.resolve()
.then(()=> questionAsync('Qual é seu nome?'))
.then(respostaNome =>{
    if(!respostaNome) throw new error('campo vazio!')
    nome = respostaNome
})
.then(()=> questionAsync('Qual é seu telefone?'))
.then(respostaTelefone =>{
    if(!respostaTelefone) throw new error('campo vazio!')
    telefone = respostaTelefone
})
.then(()=>{
    console.log(`nome: ${nome}, telefone: ${telefone}`)
})
.catch(error =>{
    console.error('deu ruim***')
})
.finally(()=> terminal.close())