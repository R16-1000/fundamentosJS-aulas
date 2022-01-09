/*
Num ambiemte real, um ambiente de produção, onde o cliente vai acessar ou fazer alguma compra
temos que pensar o mais simples possivel e uma forma mais facil de representar o cliente.
No JS ao em ves de criar varias variaveis, varios tipos de dados, 
nos podemos criar uma única estrutura de dados que vai ter todas as propriedades de um cliente
e que represente o seu cliente de uma única vez

trabalhando com Objects

então olhando para o JS nos podemos criar um objeto */

const pessoa =
{
    id: "0011aabbcc" //id podemos criar um objeto e então usamos as chaves
    nome:"Xuxa da Silva"//cada uma das linha será uma chave
    idade:40//o que está em vermelho depois dos dois pontos será o valor
    dataNascimento: new Date(2000, 6, 1),
}
pessoa.id //se eu quero obter o id
pessoa['nome']//ou posso tbm usar a mesma anotação que usei na lista com [] com o nome da chave
pessoa['nomeDaMae'] = 'Maria da Silva'
/*quando se trabalha com listas usamos a anotação número, para saber qual a opçao eu quero
dessa forma consigo obter as informações que eu quero
*/
console.log()
/*
conhecido como JASON ou JS notetion object
que vc pode usar ou obter o valor usando, usando a anotação ponto
então se eu quero obter o id
*/

