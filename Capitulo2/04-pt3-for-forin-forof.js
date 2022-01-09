const textoPar = "par"
const textoImpar = "impar"

const minhaListaDeTarefas = [{
    id:parseInt( Math.random() * 10),//parceInt ignora a casa decimal criara um numero aleatorio de 0 a 1 e sera multiplicado por 10
    nome: "Zezinho",
    superPoder: 'Veloz',

},
{
    id:Math.random(),
    nome:'Mariazinha',
    superPoder: 'Super força'
}
]
for(let index = 0; index < minhaListaDeTarefas.length; index ++){
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )
}