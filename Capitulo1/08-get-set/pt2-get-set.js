/*
animal = {_idade: '123', 
set idade(valor) {
    this._idade = valor } }, //e em seguida o código: 
animal.idade = 10
console.log(animal.idade)
*/
/*
animal = 
{_id: '123',
 get id() {
     return this._id }
}
console.log(animal.id) 
*/
/*
 Dado o objeto animal = {_id: '123', get id() {return this._id } },
  qual será o resultado quando executar console.log(animal.id)?
  R:123     string
*/
/*
Dado o objeto animal = {_idade: '123', set idade(valor) {this._idade = valor } }, 
e em seguida o código: animal.idade = 10. 
Qual será o resultado quando executar console.log(animal.idade)? 
R:undefined
*/

const z = // objeto ou variavel = z
{
    _x: "",/*_x:"" = 
    variavel com anotação _nome foi definido que é uma varivel privada niguem 
    vai querer acessar ela por fora, 
    é um acordo entre desenvolvedores pra niguem acessar td oq tem ._ ou _ no texto.*/
    get x (){ //obter x (){
        return this._x //retorno é._x
    },
    set x(y) { //modificar x (valor y)
        this._x = y.toUpperCase() //é._x = valor y.toUpperCase = letra maiuscula
    },
}
z.x = "joselita do céu"/*x está definido dentro de set = n.toUpperCase
estou usando a chave nome que em set está definida
que joselita será igua a n.toUpperCase*/
console.log(z.x)