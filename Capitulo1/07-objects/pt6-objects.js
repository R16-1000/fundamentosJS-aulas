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
//remover uma chave de um objeto
delete novoObj.nome //nome será removido do objeto

console.log(novoObj)

//saída = { idade: 100, sexo: 'masculino', tamanho: '10 metros' }