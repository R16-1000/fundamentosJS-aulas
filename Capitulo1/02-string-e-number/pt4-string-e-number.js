//converter do tipo string para o tipo númerico

let salarioDoAmigo = "2999"
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
3999
string 2999
number 1000
*/

//correto com conversão