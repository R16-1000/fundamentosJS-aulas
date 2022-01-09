//enquanto não mudar,não para
let termoDeParada = true
let contador = 0
while(termoDeParada){
    termoDeParada = contador < 10
    if(contador%2 === 0){
        console.log('número par', contador)
    }
    //contador = contador + 1
    contador += 1
}
//roda a primeira vez e testa a variavel depois
do{ 
    console.log('só uma vez! pois termoDeParada é',termoDeParada)   
}while(termoDeParada)

while(true){ //gera um loop infinito, tem que parar com (ctrl + c)
    //não vai executar
    console.log('nem vai executar!')
}
