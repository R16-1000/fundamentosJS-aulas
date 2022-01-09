//funçoes podem retornar valores
function soma(valor1,valor2){
    return valor1 + valor2
}
const idade = 20
const tamanho = 10
//vc pode passar os valores direto de variaveis
//não é bo passar o valor direto para função
const resultado = soma(idade, tamanho) //const resultado
console.log('resultado',resultado)
//saída = resultado 30

function multiplicar(valor1,valor2){
    const resultado = valor1 * valor2
 //aqui tbm (const) resultado e elas só podem ser criadas uma unica vez
 //ai que entra o contexto de escopo. 
 //td o que for criado dentro de uma chave ela nasce e morre nessa chave
 //e que esta fora não afeta dentro

    return resultado
}
console.log('O resoltado da multiplição é:',multiplicar(10,30))
//saída = O resoltado da multiplição é: 300