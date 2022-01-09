/*let fruaExisteNoMercado = false
let temCPUSuficiente = true

const args = process.argv
const saldo = args[args.length -1]
console.log('args', args)
console.log('saldo', saldo)

if(isNaN(saldo)){
    console.log('valor invalido')
    return;
}
let tipoCliente = "premium"
if(saldo < 9){
    tipoCliente = "basic"
}
else if(saldo >=10 && saldo < 20){
    tipoCliente = "gold"
}
else{
    tipoCliente = null//null, undefined, vazio 0 === false!
}
if(!tipoCliente){
    tipoCliente = "undefined"
}

console.log('tipoCliente', tipoCliente)*/

/*const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

const idade = 18
const resultado = idade >= 18 ?
'pode dirigir':
'não pode dirigir!!'

console.log('resultado', resultado)*/

const item = "abc"; 
console.log(isNaN(item) ? "Hey jude" : "Hey Julia");

