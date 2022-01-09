const Matematica = require('./matematica')
//console.log(Matematica.somar(1,4))
//trabalhar com perguntas do cliente nosso usaario vai entrar com os valores 1 a 1 e tipo de operaçao
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
terminal.question('insira o primeiro valor\n',valor1 => {
    terminal.question('insira o segundo valor\n',valor2 => {
        //console.log('valor1',valor1,'valor2',valor2) 
        terminal.question('insira a operação\n',tipoOperacao => {
             //console.log(
                 //Matematica['somar'],
                 //Matematica['multiplicar'],)
            const resultado = Matematica[tipoOperacao](
                Number(valor1),Number(valor2)
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é: ${resultado}`
            )
            terminal.close()
        }) 
    }) 
})
