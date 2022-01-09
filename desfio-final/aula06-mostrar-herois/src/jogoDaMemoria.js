class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade:2, etc:3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    
constructor({ tela }) {
    this.tela = tela
        
    this.heroisIniciais = [
        //o caminho é sempre relativo ao index.html
        { img: './arquivos/mago-negro.png', nome: 'mago-negro'},
        { img: './arquivos/ceifador-de-cartas.png', nome: 'ceifador-de-cartas'},
        { img: './arquivos/dragao-branco.png', nome: 'dragao-branco'},
        { img: './arquivos/o-juiz.png', nome: 'o-juiz'},
    ]
    this.iconePadrao = './arquivos/yu-gi-oh.png'
    this.heroisEscondidos = []
    this.heroisSelecionados = []
}
//para usar o this, não podemos usar static
inicializar() {
    //vai pegar todas as funçoes da classe tela
    this.tela.atualizarImagens(this.heroisIniciais)
    // quando essa função executar, vai ignorar o this de window 
    // ela vai usar o this dessa tela
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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
exibirHerois(nomeDoHeroi){
  //vamos procurar esse heroi em nossos heroisIniciais  
  //vamos obter somente a imagem dele
  const {img} = this.heroisIniciais.find(({nome}) => nomeDoHeroi===nome)
  //vamos criar a funçao na tela,para exibir somente o heroi selecionado
  this.tela.exibirHerois(nomeDoHeroi,img)
}
verificarSelecao(id, nome){
    const item = {id, nome}
    //alert(`Olá: ${item.id}, ${item.nome}`)
    //vamos vericar a quantidade de herois selecionados
    //para tomar uma ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length
    switch(heroisSelecionados){
        case 0:
            //adiciona a escolha na lista esperando pela proxima clicada
            this.heroisSelecionados.push(item)
            break;
        case 1:
            //se a quantidade de escolhidos for 1, significa que o usuario só pode escolher mais 1
            //vamos obter o primeiro item da lista
            const [ opcao1 ] = this.heroisSelecionados   
            //zerar itens para nao selecionar mais de dois
            this.heroisSelecionados = []
            //conferimos se os nomes e ids batem conforme o esperado
            if(opcao1.nome === item.nome && 
                //aqui verificamos se são ids diferentes para o usuario nao clicar duas vezes
                //no mesmo
                opcao1.id !== item.id
                ){
                    this.exibirHerois(item.nome)
                   // alert('combinação correta!'+ item.nome)
                    //para a execuçao
                    return;
                }
                alert('combinação errada!')
                //fim do case!
                break;
    }
}
jogar() {
    //console.log('clicou')
    this.embaralhar()
}

}