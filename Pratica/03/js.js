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
