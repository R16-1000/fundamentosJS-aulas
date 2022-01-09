function onLoad(){
   const dependencias ={
       tela: Tela // a classe tela é global
   }
   //inicializamos o jogo da memoria
   const jogoDaMemoria = new JogoDaMemoria(dependencias)
   jogoDaMemoria.inicializar()
    }
 
window.onload = onLoad


 //console.log(`Carregou a tela!!`,tela,jogoDaMemoria)
    //const heroi ={
        //sempre relativo ao index.html
       // img: './arquivos/batman.png',
       // nome: 'batman'

          /*Tela.atualizarImagens([
        heroi,
        heroi,
        heroi,
        heroi
    ])*/
    //const codigoHtml = Tela.obterCodigoHtml(heroi)
    //console.log(codigoHtml)
    //Tela.alterarConteudoHtml(codigoHtml.concat(codigoHtml).concat(codigoHtml))
//}