const minhaLista = [] //informa que é uma variavel com uma lista vazia
//ou pode ser criado uma lista de tarefas
const minhalistaDeTarefas = [
    'mandar e-mail',
    'colocar comida para o dog',
    'limpar o quarto'
]
//remover um item especifico a partir de um índice
//console.log(minhalistaDeTarefas[2])
//qual o item de inicio
//quantos remover
minhalistaDeTarefas.splice(2,1)
console.log(minhalistaDeTarefas);
//saída = [ 'mandar e-mail', 'colocar comida para o dog' ]