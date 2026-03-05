const Usuario = {
    idade: 17,
    pagamentoEmDia: false,
    temAtestadoMedico: true
}
if (Usuario.idade < 16) {
    console.log("Faxetaria de idade não qualificada, que tal daqui alguns anos")
}
else if (Usuario.pagamentoEmDia === false) {
    console.log("Pagamento atrasado")
}
else {
    if (Usuario.temAtestadoMedico === false) {
        console.log("Entrada permitina, entretanto atualize seu atestado medico")
    }
    else {
        console.log("Sua entrada esta permitida")
    }
}