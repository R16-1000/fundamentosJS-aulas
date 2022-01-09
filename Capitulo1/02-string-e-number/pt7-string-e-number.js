//converter do tipo string para o tipo númerico

let salarioDoAmigo = 1000 
let meuSalario = "2999aaa"
//criar uma nova variavel com Number() = converter string para o tipo number
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalarioCorrigido)//mudar essa parte (meuSalario + salarioDoAmigo)

//palavra chave typeof() = para saber o tipo de valor atribuido para variavel
console.log(
    typeof(salarioDoAmigo),
    salarioDoAmigo
)
console.log(
    typeof(meuSalario),
    meuSalario
)
console.log(
isNaN(meuSalario)

)
/*saída =
NaN
number 1000
string 2999aaa
true         = esse valor não é um número
*/