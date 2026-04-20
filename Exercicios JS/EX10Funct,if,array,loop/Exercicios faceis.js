//                              DESAFIO NIVEL: FACIL
//OBJETIVO: Função com template literal
const usuario = {
    name: "tmotty",
    age: 17
};
const munimumAge = 18
const {age: idade} = usuario //Desnecessario, podia ter colocar o age como idade, mas queria praticar

idade < munimumAge 
? console.log(`olá ${usuario.name} infelizmente vc nao tem acessoa o site por ser menor de idade`) 
: console.log(`olá ${usuario.name} vc tem acessoa o site por ser maior de idade de idade`);


//OBJETIVO: if/else com operador módulo
let number = 5

const par = 2 //Desnecessario, so q queria pratica
number % par === 0 
? console.log("é par")
: console.log ("é impar")



//OBJETIVO: Loop somando um array
const estoque = [
    {precoDeCusto: 19, quantidade: 9},
    {precoDeCusto: 56, quantidade: 1},
    {precoDeCusto: 99, quantidade: 1},
    {precoDeCusto: 9, quantidade: 39},
]

const custoTotalDeEstoque = estoque.reduce((acumulador, valorAtual) => {
    return acumulador + (valorAtual.precoDeCusto * valorAtual.quantidade)
},0);
console.log(custoTotalDeEstoque)