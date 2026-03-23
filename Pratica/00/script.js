const soma = document.querySelector('#aumentar')
const contador = document.querySelector('#contador')
const diminuir = document.querySelector('#diminuir')
const reset = document.querySelector('#reset')




let number = 0

soma.addEventListener("click", contar)
diminuir.addEventListener ("click", dimi)
reset.addEventListener("click", reseter)




function atualizacaoDeTela() {
    
    contador.textContent = number

    if(number > 0) {
        contador.style.color = "green"
    } else if (number < 0){
        contador.style.color = "red"
    } else{
        contador.style.color = "black"

    } 
}


function contar() {
    number ++
    atualizacaoDeTela()

}

function dimi() {

    number --
    atualizacaoDeTela()


}

function reseter() {
    number = 0 
    atualizacaoDeTela()
}




