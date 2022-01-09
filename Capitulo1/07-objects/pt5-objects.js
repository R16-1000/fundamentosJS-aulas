const heroi = {
    //chave:   valores  
       nome:  'flash',
       idade:  100,
       sexo:  'masculino'
   }

//juntar dois objetos

const pessoa = {
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)

console.log(novoObj)

//saída = { nome: 'flash', idade: 100, sexo: 'masculino', tamanho: '10 metros' }