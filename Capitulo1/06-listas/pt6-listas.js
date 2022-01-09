const minhaLista = [] //informa que é uma variavel com uma lista vazia
//ou pode ser criado uma lista de tarefas
const minhalistaDeTarefas = [
    'mandar e-mail',
    'colocar comida para o dog',
    'limpar o quarto'
]
//remover o primeiro da lista
const primeiro = minhalistaDeTarefas.shift()
console.log(primeiro, minhalistaDeTarefas)

// saída = mandar e-mail [ 'colocar comida para o dog', 'limpar o quarto' ]