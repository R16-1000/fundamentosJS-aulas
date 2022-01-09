//converter do tipo string para o tipo númerico

let salarioDoAmigo = "2999aaa"
let meuSalario = 1000
//criar uma nova variavel com Number() = converter string para o tipo number
let meuSalarioCorrigido = Number(salarioDoAmigo)

console.log(meuSalario + meuSalarioCorrigido)//mudar essa parte (meuSalario + salarioDoAmigo)

//palavra chave typeof() = para saber o tipo de valor atribuido para variavel
console.log(
    typeof(salarioDoAmigo),
    salarioDoAmigo
)
console.log(
    typeof(meuSalario),
    meuSalario
)
/*saída =
NaN             
string 2999aaa
number 1000
*/

//A propriedade global NaN é um valor especial que significa Not-A-Number (não é um número).
//correto com conversão