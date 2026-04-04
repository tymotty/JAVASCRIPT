function qualquerNome (nome) {
    console.log(nome)
}

/*funcao Return */
qualquerNome ("Timoteo")

function soma(numero1,numero2,numero3){
    const resultado =  numero1 + numero2 + numero3
    return resultado
}
const resultadoDaSoma = soma(326,137,992)
console.log (resultadoDaSoma)

/*Pratica*/
function estaEndividada(receita,gastos) {
    if(receita > gastos){
        return "Esta tranquilo"
    } else{
        return "Esta Endividado"
    }
}
const usuario1 = estaEndividada(951,1000)
const usuario2 = estaEndividada(10000,1500)
const usuario3 = estaEndividada(951,594)


console.log (usuario1)
console.log (usuario2)
console.log (usuario3)

/*Arrow Function */
const arrow = (nome,idade,certificado,dataDeNascimento) => {
    console.log (nome,idade,certificado,dataDeNascimento)
}
arrow("Timoteo",19,false, 2006 )