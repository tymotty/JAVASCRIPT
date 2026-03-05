const Usuario = {
    nome: "timbo",
    ContaAtiva: true,
    Idade: 18,
    Saldo: 2000
}
const RX6600 = {
    Estoque: 0,
    valor: 1750
}
if(Usuario.ContaAtiva === false) {
    console.log(`olá ${Usuario.nome}, sua conta foi barrada por nao estar ativa`)
}
else if(Usuario.Idade < 16) {
    console.log(`Conta Barrada: Menor de idade`)
}
else{
    if(RX6600.Estoque === 0) {
        console.log("Produto fora de estoque")
    }
    else if (RX6600.valor > Usuario.Saldo) {
        console.log("Valor inferior ao produto selecionado")
    }
    else {
        console.log(`Compra realizada com sucesso, seu saldo restante é de ${Usuario.Saldo - RX6600.valor}`)
    }
}