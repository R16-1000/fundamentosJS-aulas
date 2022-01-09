//null = valor vazio, não tem um valor naquele momento mais pode ter um valor no futuro
let variavelSemInicializacão
console.log(
    variavelSemInicializacão,
    typeof(variavelSemInicializacão)
)

variavelSemInicializacão = "Hello world!!"
console.log(
    variavelSemInicializacão,
    typeof(variavelSemInicializacão)
)

    variavelSemInicializacão = null
 console.log(
     variavelSemInicializacão,
     typeof(variavelSemInicializacão)
)
/*
saída =
undefined undefined
Hello world!! string
null object
*/