function minhaFuncao(paremetro1){
    return `aeeee`
}
const minhaFuncao2 = function(paremetro1){
    return `aeee${paremetro1}`
}
const minhaFuncao3 = (paremetro1) => {
    return `aeee${paremetro1}`
}
const minhaFuncao4 = paremetro1 => `aeeee${paremetro1}`

const obj1 = {
    minhaFuncao: paremetro1 => `aeeee${paremetro1}`
}
obj1.minhaFuncao('teste')

const obj2 ={
    minhaFuncao (paremetro1){
        return `aeeee${paremetro1}`
    }
}
obj2.minhaFuncao()