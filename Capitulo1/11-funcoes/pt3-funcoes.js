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
const descontoFuncionario1 = 
funcionario1.salarioBruto - (funcionario1.desconto*funcionario1.salarioBruto)

const descontoFuncionario2 = 
funcionario2.salarioBruto - (funcionario2.desconto*funcionario2.salarioBruto)

console.log(`
Funcionario1: ${descontoFuncionario1}
Funcionario2: ${descontoFuncionario2}
`)


