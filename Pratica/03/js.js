//Botao mudar de cor
const buttonColor = document.querySelector("#buttonColor")

let corAtiva = false

buttonColor.addEventListener("click", mudarCor)

function mudarCor(){
    if (corAtiva === false){
        document.body.style.backgroundColor ="gainsboro";
        corAtiva = true
    }
    else {
        document.body.style.backgroundColor ="white";
        corAtiva = false
    }
}
//usuaio digitado

const textoEscrito = document.querySelector ("#textoEscrito")
const textUsers = document.querySelector ("#textUsers")


textoEscrito.addEventListener("keydown", verificarEnter)

function verificarEnter(event) {
    if (event.key === "Enter"){
    retorneText()
}}


function retorneText() {
    textUsers.textContent = textoEscrito.value

}

