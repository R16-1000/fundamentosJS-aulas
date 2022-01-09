const hoje = new Date()
const dia = hoje.getDate()
hoje.setDate(dia + 5) //= 5 dias depois de hoje
hoje.setHours(10, 00, 0)

console.log(hoje)
/*
saída =
2021-10-16T13:00:00.488Z
foram adicionados 5 dias a mais que e dia de hoje
*/ 
//hoje é dia 11/10