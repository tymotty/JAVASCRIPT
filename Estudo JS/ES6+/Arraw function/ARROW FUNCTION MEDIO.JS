// Título: Calcular desconto

// O que fazer no desafio:
// Crie uma Arrow Function que receba:
// valorProduto e desconto
//
// Exemplo:
// produto = 100
// desconto = 20
//
// Resultado esperado:
// 80

// Resultado:
let valorProduto = 100
let desconto = 20
const calcularDesconto = (valorProduto, desconto) => { let valorProdutoDesconto = valorProduto - desconto
return valorProdutoDesconto}
console.log(calcularDesconto(valorProduto, desconto))

// Título: Contar letras

// O que fazer no desafio:
// Crie uma Arrow Function que receba uma palavra
// e retorne quantas letras ela possui.

// Resultado:
let palavra = "Abacate"
let letrasTotais = 0
const contarLetras = (palavra) => {for(let i = 0; i < palavra.length; i++){
  letrasTotais++
}}
contarLetras(palavra)
console.log (letrasTotais)






// Título: Verificar número par

// O que fazer no desafio:
// Crie uma Arrow Function que receba um número
// e retorne:
//
// "Par"
// ou
// "Ímpar"

// Resultado:
//const verificarParidade =

const verificarParidade = (numero) => {
    if(numero % 2 === 0){
        return "Par"
    }

    return "Ímpar"
}







// Título: Encontrar o maior número

// O que fazer no desafio:
// Crie uma Arrow Function que receba
// dois números e retorne o maior deles.

// Resultado:


const maiorNumero = (numero1, numero2) => {
    if(numero1 > numero2){
        return numero1
    }

    return numero2
}







// Título: Calcular área do retângulo

// O que fazer no desafio:
// Crie uma Arrow Function que receba
// largura e altura.
//
// Retorne a área do retângulo.

// Resultado:



const calcularArea = (largura, altura) => {
    return largura * altura
}