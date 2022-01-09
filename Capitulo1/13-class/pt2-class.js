class Heroi2{
    constructor(nome,idade){ //será invocado quando chamar a palavra chave new
        this.nome = nome //foi criada um apropriedade na classe que será this.nome. this é o contexto do escopo da classe
        this.idade = idade
    }
    atacar(){
        console.log(
            `O ${this.nome} atacou!!`
        )
    }
}
const heroi2 = new Heroi2(
    `flash`,80
)
heroi2.atacar()