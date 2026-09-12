//--------------------------------ForEach


//01
const compras = ["Leite", "Pão", "Ovo"];
compras.forEach((item,index,array) =>{
    console.log(`Item: ${item}`)
    console.log(array)
})


//02
const corredores = ["Ana", "Beto", "Carla"];
corredores.forEach((item,index) => {
    console.log(`${index + 1}º lugar: ${item}`)
})


//03
const notas = [7, 8.5, 6, 9, 10];
let somaTotal = 0;
notas.forEach((nota)=> {
    somaTotal = somaTotal + nota
})
const media = somaTotal / notas.length

console.log(media)
console.log(somaTotal)


//04
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Caneta", preco: 3 },
  { nome: "Mochila", preco: 120 },
  { nome: "Lápis", preco: 2 }
];
produtos.forEach (({nome, preco}) => {
    if (preco > 10) {
        console.log(`${nome}: R$${preco}`)
    }
})


//05
const estoque = [
  { produto: "Camiseta", quantidade: 10 },
  { produto: "Calça", quantidade: 5 },
  { produto: "Boné", quantidade: 20 }
];

estoque.forEach((item) =>{
    item.quantidade = item.quantidade +3
})
console.log(estoque)

//06
const respostas = ["sim", "não", "sim", "sim", "não", "sim"];
let totalSim = 0
respostas.forEach((item) =>{
    if (item === "sim") {
        totalSim = totalSim + 1
    }
})
console.log(totalSim)


//07
const pedidos = [
  { cliente: "Marcos", valor: 80 },
  { cliente: "Julia", valor: 45 },
  { cliente: "Pedro", valor: 200 }
];
//07-1
pedidos.forEach(({cliente,valor}) => {
    if (valor > 50){
        console.log(`${cliente}: R$${valor}`)}
})

//07-2
let totalVendas = 0
pedidos.forEach(({valor}) => {
    totalVendas = totalVendas + valor
})
console.log (totalVendas)

//07-3
pedidos.forEach((item) => {
    item.valor = item.valor + 5
})

console.log(pedidos)