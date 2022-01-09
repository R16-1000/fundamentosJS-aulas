/*
sabemos como criar funçoes para não repetir objetos, usando class vc pode agrupar tudo oq for referente a uma entidade
especifica, pessoa especifica ou algo que vc quera representar 
*/
class Heroi{
    atacar(){
        console.log(`atacou!!`)
    }
    defender(){
        console.log(`defendeu`)
    }
    f1(){
        const s = 1
        const n = 2
        console.log(s+n)
    }
}
const heroi = new Heroi() // vai instanciado a palavra new
heroi.atacar()
heroi.defender()
heroi.f1()