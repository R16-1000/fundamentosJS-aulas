class JogoDaMemoria{
    //se mandar um obj = {tela: 1, idade:2, etc:3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
constructor({tela}){
    this.tela = tela

    this.heroisIniciais = [
        //o caminho é sempre relativo ao index.html
        {img:'./arquivos/batman.png', name: 'batman'},
        {img:'./arquivos/spider man.png', name: 'spider man'},
        {img:'./arquivos/man antenna.png', name: 'man antenna'},
        {img:'./arquivos/marvel.png', name: 'marvel'}
    ]
}
//para usar o this, não podemos usar static
inicializar(){
    //vai pegar todas as funçoes da classe tela
    this.tela.atualizarImagens(this.heroisIniciais)
    //coloca todos os herois na tela

}
} 