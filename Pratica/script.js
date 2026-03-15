const user = {
    name: null,
    age: "19",
}


console.log ( "é igual?", 1 == "1" ? "Igual" : "Diferente")

if (user.name = null) {
    console.log (`Usuario ${user.name} identificado`)
} else {
    console.log( "usuario nao cadastraco")
}
let paymentStatus = "FAILED";

switch (paymentStatus) {
    case "PENDING": 
        console.log ("Pagamento Pendente");
        break

    case "PAID": 
        console.log ("pagamento concluido");
        break

    case "FAILED":
        console.log ("Pagamento falho");
        break

    default:
        console.log ( "Status de pagamento naop especificado")
}