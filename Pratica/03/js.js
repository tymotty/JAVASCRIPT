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

//lista Com botao de remover

const inputList = document.querySelector  ("#inputList")
const ulList = document.querySelector  ("#ulList")

inputList.addEventListener("keydown", validacao)

function validacao(event) {
    if(event.key === "Enter"){
        listReturn()
    }
} 

function listReturn() {
    const liElement = document.createElement("li")

    liElement.textContent = inputList.value

    ulList.appendChild (liElement)

    inputList.value = ""

    buttonRemove(liElement) 
}

function buttonRemove(liElement) {
    const buttonRemoveList = document.createElement ("button")

    buttonRemoveList.textContent = "Remover"

    liElement.appendChild(buttonRemoveList)

    buttonRemoveList.addEventListener ("click", function(){
        liElement.remove()
    })


}