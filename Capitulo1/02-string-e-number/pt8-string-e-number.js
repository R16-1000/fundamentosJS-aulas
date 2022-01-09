//converter do tipo string para o tipo númerico

let salarioDoAmigo = 1000 
let meuSalario = "2999.14" 
//criar uma nova variavel com Number() = converter string para o tipo number
let meuSalarioCorrigido = Number(meuSalario) // mesmo com número decimais ele converte ex:10.10

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
3999.14
number 1000
string 2999.14
false              = por estar o número dentro de uma string corretamente e não há texto
*/