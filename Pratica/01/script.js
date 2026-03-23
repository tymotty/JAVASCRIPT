const adicionar = document.querySelector("#adicionarList")
const textAdd = document.querySelector("#texto")
const list = document.querySelector("#lista")

adicionar.addEventListener("click", adicionarLista)

function adicionarLista() {
    
    const liElement = document.createElement("li")
    
    liElement.textContent = textAdd.value
    
    list.appendChild(liElement)
}

