class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade:2, etc:3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    
constructor({ tela }) {
    this.tela = tela
        
    this.heroisIniciais = [
        //o caminho é sempre relativo ao index.html
        { img: './arquivos/batman1.png', nome: 'batman1'},
        { img: './arquivos/spider man1.png', nome: 'spider man1'},
        { img: './arquivos/marvel1.png', nome: 'marvel1'},
        { img: './arquivos/man antenna1.png', nome: 'man antenna1'},
    ]
    this.iconePadrao = './arquivos/padrao1.png'
    this.heroisEscondidos = []
    
}
//para usar o this, não podemos usar static
inicializar() {
    //vai pegar todas as funçoes da classe tela
    this.tela.atualizarImagens(this.heroisIniciais)
    // quando essa função executar, vai ignorar o this de window 
    // ela vai usar o this dessa tela
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    esconderHerois (herois) {
//vamos trocar a imagem de todos os herois existentes
//pelo icone padrao
//como fizeomos no constructor, vamos extrair somente o necessario
//usando a sintaxe ({chave: 1}) estamos falando que vamos retornar
//o que estiver dentro de parenteses
//quando nao usamos : (exemplo do id), o JS entende que o nome é o mesmo do valor.
//EX. id: id,vira id,
const heroisOcultos = herois.map(({ nome, id}) => ({
    id, 
    nome,
    img: this.iconePadrao
    //atualizamos a tela com os herois ocultos 
}))

    this.tela.atualizarImagens(heroisOcultos)
    this.heroisEscondidos = heroisOcultos
}
embaralhar() {
    const copias = this.heroisIniciais
    // duplicar os itens
    .concat(this.heroisIniciais)
    // entrar em cada um dos itens e gerar um id para cada
    .map((item) => {
        return Object.assign({}, item, { id: (Math.random() / 0.5 )})
    })
    //ordenar aleatorio
    .sort(() => Math.random() - 0.5 )
     this.tela.atualizarImagens(copias)
     //vamos esperar 1 segundo para atualizar a tela
    setTimeout(() => {
        this.esconderHerois(copias)
    }, 1000);
}


jogar() {
    //console.log('clicou')
    this.embaralhar()
}

}