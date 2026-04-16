// Crie um if que verifica se "banana" existe no array e mostre:
const frutas = ["maçã", "banana", "uva", "laranja"];

 if (frutas.includes("banana")) {
    console.log ("tem banana")
 } else {
    console.log ("Nao tem banana")
 }

 //Crie uma variável nomeDigitado e verifique se ele está na lista.
 const nomes = ["Carlos", "Ana", "João", "Marina"];

 const nomeDigitado = "Carlos"

if (nomes.includes(nomeDigitado)) {
    console.log ("Usuario cadastrado")
} else {
    console.log ("Usuario Nao Cadastrado")
}

// Validação com includes
const permissoes = ["admin", "editor"];

const usuario = "admin"


if (permissoes.includes(usuario)) {
    console.log ("DEU CERTO")
} else {
    console.log ("Usuario Nao Cadastrado")
}

//Evitar duplicado

let lista = ["arroz", "feijão"];

if (lista.includes("macarrao")){
    console.log("Produto ja adicionado a lista")
}else{
    lista.push("afg")
    console.log (" novo produto adicionado a lista")
}