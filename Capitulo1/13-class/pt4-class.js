class Piloto{
    constructor(
        nome,
        dataNascimento,
        tempoDeVoo,
        temPermissaoParaVoar
    )
}
this.nome = nome;
this.dataNascimento = dataNascimento;
this.tempoDeVoo = tempoDeVoo;
this.temPermissaoParaVoar = temPermissaoParaVoar;

const piloto = new Piloto(
    "geraldo",
    new Date(1990, 2, 3),
    '10 anos',
    true
)
class Piloto{
    constructor(
        pilotar(){
            console.log(`${this.nome} vai pilotar`);
        }
        dormir(){
            console.log(`${this.nome} vai dormir`)
        }
    )
}

console.log(Piloto.pilotar())
console.log(Piloto.dormir())