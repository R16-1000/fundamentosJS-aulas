/*
get/set = interceptar quando alguem acessa seu objetos
ou quando alguem tenta inserir um novo valor para o seu objeto objeto.

podemos usar modificadores de acesso ou metodos acessores no JS usando get/set
eles são usados para qundo obter um valor fazer alguma coisa
quando tentar setar um novo valor ou sobscrever um valor ele colocar outro.

*/

const pessoa =
{
    _nome: "",/*_nome:"" = 
    variavel com anotação _nome foi definido que é uma varivel privada niguem 
    vai querer acessar ela por fora, 
    é um acordo entre desenvolvedores pra niguem acessar td oq tem ._ ou _ no texto.*/
    get nome (){ //obter nome (){
        return this._nome //retorno é._nome
    },
    set nome(n) { //modificar nome (valor n)
        this._nome = n.toUpperCase() //é._nome = valor n.toUpperCase = letra maiuscula
    },
}
pessoa.nome = "joselita do céu"/*nome está definido dentro de set = n.toUpperCase
estou usando a chave nome que em set está definida
que joselita será igua a n.toUpperCase*/
console.log(pessoa.nome)