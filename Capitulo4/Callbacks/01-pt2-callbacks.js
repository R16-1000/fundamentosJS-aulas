const fs = require('fs')
fs.readFile('./arq1.txt',(errorArq1, respostaArq1)=>{
    if(errorArq1){
        console.error('deu ruim no arq1', errorArq1)
        return;
    }
    fs.readFile('arq2.txt',(errorArq2,respostaArq2)=>{
      if(errorArq2){
          console.error('deu ruim no arq2',errorArq2)
          return;
      }
      fs.readFile('./arq3.txt',(errorArq3, repostaArq3)=>{
          if(errorArq3){
              console.error('deu ruim no arq3', errorArq3)
              return;
          }
          const conteudo = `${respostaArq1}\n${respostaArq2}\n${repostaArq3}`
          //console.log(conteudo)
          fs.writeFile('./final.txt', conteudo, (errorWrite, repostaWrite)=>{
             if(errorWrite){
                 console.error('deu ruim na gravaçao', errorWrite)
                 return;
             } 
             console.log('arquivo salvo com sucesso!')
          })
      }) 
    })
})