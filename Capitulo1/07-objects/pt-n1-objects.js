const pessoa =
{
    id: "0011aabbcc" //id podemos criar um objeto e então usamos as chaves
    nome:"Xuxa da Silva"//cada uma das linha será uma chave
    idade:40//o que está em vermelho depois dos dois pontos será o valor
    dataNascimento: new Date(2000, 6, 1),
    nomeDaMae:"Maria da Silva",// foi acresentada essa chave alterando as chaves 
    //e não reasinando o const
}
pessoa.id //se eu quero obter o id
pessoa['nome']//ou posso tbm usar a mesma anotação que usei na lista com [] com o nome da chave
pessoa['nomeDaMae'] = 'Maria da Silva'
/*eu quiser criar uma nova propriedade
digamos que eu quero colocar o nome da pessoa nesse lugar tbm, eu posso colocar entre conchetes
ou usando a anotação ponto e colocar o valor
*/
console.log()
//criei o const e alterei o valor dessa propriedade 
//porem ele foi assinado uma unica vez e está sendo manipulado 
//o que tem de chaves no conteudo da referência desse objeto