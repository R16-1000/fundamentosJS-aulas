const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}
const funcionario2 = {
    nome: 'Zezinho',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}
function calcularDesconto(salarioBruto, desconto){
    return salarioBruto - (salarioBruto*desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)
funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(`
Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
`)