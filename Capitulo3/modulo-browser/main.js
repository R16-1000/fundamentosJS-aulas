window.onload = () => {
    console.log('tela carregou!!')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValorInput(id){
        const item = document.getElementById(id)
        return item.value

    }
    //() => { console.log('clicou!!') }
    function click(){
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        /*console.log(
            tipoOperacao,
            valor1,
            valor2
        )*/
        const resultado = Matematica[tipoOperacao](
            Number(valor1),Number(valor2)
        )
        //const tipoOperacao = document.getElementById('tipoOperacao')
        //console.log('tipoOperacao',tipoOperacao.value)
        console.log('resultado', resultado)
        document.getElementById('resultado')
        .innerText = `
        A operação de ${tipoOperacao}, ${valor1} por ${valor2} é: ${resultado}`
    }
}