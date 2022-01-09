const fs = require('fs')
fs.readFile('./arq1.txt',(error,resposta) =>{
    if(error){
        console.error('deu ruim***',error.stack)
        return;
    }
    console.log('resposta',resposta.toString())
})