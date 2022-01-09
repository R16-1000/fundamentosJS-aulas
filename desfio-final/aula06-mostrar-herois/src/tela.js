const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR ="Jogar"
const ID_MENSAGEM = "MENSAGEM"
const MENSAGEM ={
    sucesso:{
        texto: 'Cobinação correta!',
        classe: 'alert-success'
    },
    erro:{
        texto: 'Combinaçao errada!',
        classe: 'alert-danger'
    }
}
class Tela{
    static obterCodigoHtml(item){
        return`
    <div class="col-md-3">
        <div class="card" style="width: 50%;"onclick="window.verificarSelecao('${item.id}','${item.nome}')">
            <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br />
    </div>
        `
    }
    static configurarBotaoVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }
    static alterarConteudoHtml(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHtmlPelaImagem(itens){
        //para cada item da lista vai executar a funçao obterCodigo
        //ao final vai concatenar tudo em uma unica string
        //muda de array para string
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }
    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
    static exibirHerois(nomeDoHeroi, img){
        const elementosHtml = document.getElementById(nomeDoHeroi)
        //para cada elemento encontrado na tela, vamos alterar a imagem
        //para imagem inicial dele
        //com o forEach, para cada item, dentro dos () setamos o valor de imagem
        elementosHtml.forEach(item => (item.src = img))
    }
  
}