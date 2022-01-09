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
