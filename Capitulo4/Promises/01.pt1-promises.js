const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Qual é seu nome?\n', nome => {
    terminal.question('Qual é seu telefone?\n', telefone => {
        console.log(
            `
            nome: ${nome},
            telefone:${telefone}

            `
        )
        terminal.close()
    })
})