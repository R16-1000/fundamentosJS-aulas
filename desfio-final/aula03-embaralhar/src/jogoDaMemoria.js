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
    //força tela a usar this de Jogo da memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
}
embaralhar(){
    const copias = this.heroisIniciais
    //duplicar itens
    .concat(this.heroisIniciais)
    //entrar em cada id e criar um id aleatorio
    .map(item =>{
        return Object.assign({}, item, {id: Math.random()/0.5})
    })
    //ordenar aleatorio
    .sort(() => Math.random()-0.5)
    this.tela.atualizarImagens(copias)
}

jogar(){
    //console.log('clicou')
    this.embaralhar()
}
} 