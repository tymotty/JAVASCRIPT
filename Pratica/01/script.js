const adicionar = document.querySelector("#adicionarList")
const textAdd = document.querySelector("#texto")
const list = document.querySelector("#lista")

adicionar.addEventListener("click", adicionarLista)

function adicionarLista() {
    
    const liElement = document.createElement("li")
    
    liElement.textContent = textAdd.value
    
    list.appendChild(liElement)
}


for (let number = 1; number <= 100; number ++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log ("FizzBuzz")
    }    
    else if (number % 3 === 0){
        console.log("Fizz")
    } else if (number % 5 === 0){
        console.log ("Buzz")

    } else {
        console.log (number)
    }
}