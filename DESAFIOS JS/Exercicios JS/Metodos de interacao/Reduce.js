console.log("-------------------------------REDUCE-------------------------------")
//1
const numeros1 = [5, 10, 15, 20, 25];
const soma = numeros1.reduce((atual,acumulador)=>{
    return atual+acumulador
},0)

console.log(soma)


//2
const produtos = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 3 }
]
const total = produtos.reduce((acumulador,item)=>{
    return item.preco + acumulador
},0)


//03
const numeros = [10, 25, 8, 30, 15, 42];

const quantidade = numeros.reduce((contador,item) =>{ 
    return item>20 ? contador +1 : contador;
},0)
console.log(quantidade)


//04

const quantidadeEmEstoque = produtos.reduce((acumulador,item)=>{
    return item.estoque + acumulador
},0)
console.log(quantidadeEmEstoque)

//05

const totalEstoque = produtos.reduce((acumulador,item)=>{
    return item.preco * item.estoque +acumulador
},0)
console.log(totalEstoque)

//06
const maiorVenda = produtos.reduce((acumulador,item)=>{
        return item.preco>acumulador ? item.preco : acumulador
},0)
console.log(maiorVenda)

//07
const vendas = [
    { produto: "Teclado", categoria: "Periférico", valor: 150 },
    { produto: "Mouse", categoria: "Periférico", valor: 80 },
    { produto: "Monitor", categoria: "Tela", valor: 900 },
    { produto: "Headset", categoria: "Periférico", valor: 250 }
];
const totalPorCategoria = vendas.reduce((acumulador, item) => {
    if (acumulador[item.categoria]) {
        acumulador[item.categoria] += item.valor
    } else {
        acumulador[item.categoria]= item.valor
    }
    return acumulador;
}, {});
console.log(totalPorCategoria)

//08
const nomes = ["Ana", "João", "Ana", "Pedro", "João", "Ana"];

const quantidadeNomes = nomes.reduce((acumulador,atual) =>{
    if (acumulador[atual]){
        acumulador[atual] =+1
    } else{
        acumulador[atual] =1
    }
    return acumulador
},{})
console.log(quantidadeNomes)