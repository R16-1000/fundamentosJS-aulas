const podeDirigir = true
if(podeDirigir){
    console.log('Ela pode dirigir')
}
const saldoEmConta = 1 // é igual a vdd, então preciso converter
if(!saldoEmConta) {// ! =antes da variavel é uma negação, convert de vdd para falso e vice e versa
    console.log('não tem saldo!')
}

const boolComString = "ae harckerzão!!"
//com 2 !! = verdadeiro por que converte 2x forçando a ser vdd ou falso
//de acordo com as linhas anteriores
    console.log('boolComString',!!boolComString)
    //negação 
    console.log('negação',!boolComString)

/*saída =
Ela pode dirigir
boolComString true
negação false
*/