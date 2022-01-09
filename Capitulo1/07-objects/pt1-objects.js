const heroi = {
    nome: 'flash',
    idade: 100,
    sexo: 'masculino'
}

console.log('nome',heroi.nome)
console.log('idade',heroi['idade'])
console.log('sexo',heroi.sexo)
console.log('naoExiste',heroi.naoExiste)

/*
saída =

nome flash
idade 100     
sexo masculino
naoExiste undefined

*/