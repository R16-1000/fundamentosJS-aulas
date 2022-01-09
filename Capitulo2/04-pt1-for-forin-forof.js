const textoPar = "par"
const textoImpar = "impar"
for(let index = 0; index <= 10; index++){ //indice começa do 0/indice rodar até menor ou = a 10/indice +1
    const decisao = index % 2 === 0 ? textoPar : textoImpar//indice / por 2 for 0 significa que é par|passando da primeira condiçao sera par se nao ele sera impar
    console.log(`O número ${index} é ${decisao}`)//numero par ou impar
}