const x = "y" 
    console.log('y', !x)// ! resulta em falso  ou negação. "y" é vdd a ! corverte ele para falso 

const z = 'w'
    console.log("w",!!z)// !! resulta em vdd. 'w' é vdd !! faz que continue sendo vdd

const a = 'b'
    console.log('a', !(!!a))
    //'b' é vdd como na matemética vem parenteses 1º então !! faz que continue vdd
    //em seguda a ! de fora converte para falso

/*saída = 
y false
w true
a false
*/

const c = "0"
console.log(
    !!"0" )

    const s = true
console.log(!(!!s))
