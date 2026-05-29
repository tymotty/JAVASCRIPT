// Título: Dobro de um número

// O que fazer no desafio:
// Crie uma Arrow Function que receba um número
// e retorne o dobro dele.

// Resultado:
const numero = 28
const dobrar = (numero) => {return numero * 2}
console.log(dobrar(numero))




// Título: Saudação simples

// O que fazer no desafio:
// Crie uma Arrow Function que receba um nome
// e retorne a frase:
// "Olá, NOME"

// Resultado:
const usuario = [{
    id: 1, 
    name: "Timóteo", 
    age: 19
}]

const saudacao = ({id,name,age}) => {console.log(`olá ${name}, seu id é o ${id}, voce tem ${age}`)}
saudacao(usuario[0])







// Título: Soma de dois números

// O que fazer no desafio:
// Crie uma Arrow Function que receba dois números
// e retorne a soma deles.

// Resultado:
const number1 = 65
const number2 = 97
const somar = (number1, number2) => {return number1 + number2}
console.log(somar(number1, number2))




// Título: Verificar maioridade

// O que fazer no desafio:
// Crie uma Arrow Function que receba uma idade.
// Retorne true se for maior ou igual a 18.
// Caso contrário retorne false.

// Resultado:
const ehMaiorDeIdade = ({age}) => 
    {age>18 ? console.log("true") : console.log("false")}
ehMaiorDeIdade(usuario[0])





// Título: Converter para maiúsculo

// O que fazer no desafio:
// Crie uma Arrow Function que receba uma palavra
// e retorne ela em letras maiúsculas.

// Resultado:
const maiuscula = (letra) => {return letra.toUpperCase()}
console.log (maiuscula("timnaidsa f"))