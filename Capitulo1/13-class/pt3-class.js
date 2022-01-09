class Heroi3{
    static obterAnoNascimento(idade){
        return 2021 - idade
    }
}
const anoNascimento = Heroi3.obterAnoNascimento(34)
console.log(`o ano de nascimento é: ${anoNascimento}`)

class Test { 
    constructor(nome) { 
        this.nome = nome, 
        this.idade = 18 } }