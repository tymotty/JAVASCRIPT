//////////////////////////////////Botao Mudar de Cor/////////////////////////////////
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
////////////////////////////////////Texto Escrito////////////////////////////////////

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

///////////////////////////lista Com botao de remover////////////////////////////////

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

/////////////////////////////Contador com limite/////////////////////////////////////

const botoes = document.querySelectorAll (".button")
const contador = document.querySelector ("#contador")

//Limites:
const LIMITE_MAX = 10
const LIMITE_MIN = -10

let numero = 0

//event
botoes.forEach(function(button) {
    button.addEventListener("click", controle)
})


//Controle dos botoes
function controle (event) {
    if (event.target.id === "buttonAdiciona"){
        if (numero >= LIMITE_MAX) {
            alert ("Voce chegou no numero limite")
        }
        else {
            numero ++
        }
    }


    else if (event.target.id === "buttonDiminui"){
        if(numero <= LIMITE_MIN){
            alert ("Voce chegou no numero limite")
        }
        else {
            numero--
        }
    }


    else if (event.target.id === "buttonReset"){
        numero = 0
    }

atulizadorTela() 
}


//Atulizador de Tela
function atulizadorTela() {
        contador.textContent = numero

}

//////////////////////////////Lista com Filtro/////////////////////////////////////
const inputFiltro = document.querySelector("#inputFiltro")
const ulFiltro = document.querySelector("#ulFiltro")

inputFiltro.addEventListener ("keydown", confimacao)

function confimacao(event) {
    if (event.key === "Enter") {
        liFiltro()
    }
}

function liFiltro() {

    if(inputFiltro.value === "") return
    
    const liFilterElment = document.createElement("li")

    const valor = inputFiltro.value

    liFilterElment.textContent = valor

    ulFiltro.appendChild(liFilterElment)
          
    inputFiltro.value = ""
    
    buttonRemoveFilter(liFilterElment)

    Filtragem(liFilterElment, valor)
}


function buttonRemoveFilter(liFilterElment) {
    const buttomRemove = document.createElement ("button")

    buttomRemove.textContent = "Remover"

    liFilterElment.appendChild (buttomRemove)

    buttomRemove.addEventListener ("click", function(){
        liFilterElment.remove()
    })
    buttomRemove.style.backgroundColor = "red"

    Filtragem(liFilterElment, inputFiltro.value)
}

function Filtragem (liFilterElment, valor) {

    const numero = Number(valor)

    if (numero % 3 === 0){
        liFilterElment.style.color = "green"
    } 
    else if (numero % 2 === 0) {
        liFilterElment.style.color= "red"
    }
}