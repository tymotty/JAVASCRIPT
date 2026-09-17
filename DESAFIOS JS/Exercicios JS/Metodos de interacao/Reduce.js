console.log("-------------------------------REDUCE-------------------------------")
//1
const numeros1 = [5, 10, 15, 20, 25];
const soma = numeros1.reduce((atual,acumulador)=>{
    return atual+acumulador
},0)

console.log(soma)


//2
const produto = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 3 }
]
const total = produto.reduce((acumulador,item)=>{
    return item.preco + acumulador
},0)


//03
const numeros = [10, 25, 8, 30, 15, 42];

const quantidade = numeros.reduce((contador,item) =>{ 
    return item>20 ? contador +1 : contador;
},0)
console.log(quantidade)


//04

const quantidadeEmEstoque = produto.reduce((acumulador,item)=>{
    return item.estoque + acumulador
},0)
console.log(quantidadeEmEstoque)

//05

const totalEstoque = produto.reduce((acumulador,item)=>{
    return item.preco * item.estoque +acumulador
},0)
console.log(totalEstoque)

//06
const maiorVenda = produto.reduce((acumulador,item)=>{
        return item.preco>acumulador ? item.preco : acumulador
},0)
console.log(maiorVenda)

//07
const venda = [
    { produto: "Teclado", categoria: "Periférico", valor: 150 },
    { produto: "Mouse", categoria: "Periférico", valor: 80 },
    { produto: "Monitor", categoria: "Tela", valor: 900 },
    { produto: "Headset", categoria: "Periférico", valor: 250 }
];
const totalPorCategoria = venda.reduce((acumulador, item) => {
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
        acumulador[atual] +=1
    } else{
        acumulador[atual] =1
    }
    return acumulador
},{})
console.log(quantidadeNomes)


//09
  
const produtos = [
    { nome: "Teclado", categoria: "Periférico", estoque: 10, preco: 150 },
    { nome: "Mouse", categoria: "Periférico", estoque: 15, preco: 80 },
    { nome: "Monitor", categoria: "Tela", estoque: 5,preco: 900 },
    { nome: "Headset", categoria: "Periférico", estoque: 8,preco: 250  },
    { nome: "TV", categoria: "Tela", estoque: 3,preco: 1250 }
];


const quantidadePorCategoria = produtos.reduce((acumulador,item)=> {
    if (acumulador[item.categoria]) {
         acumulador[item.categoria] += 1
    } else {
        acumulador[item.categoria] =1
    }
    return acumulador
    
},{})
console.log(quantidadePorCategoria)
//09
const estoquePorCategoria = produtos.reduce((acumulador,item)=>{
    if (acumulador[item.categoria]){
        acumulador[item.categoria]+= item.estoque
    } else{
        acumulador[item.categoria] = item.estoque
    }
    return acumulador
},{})
console.log(estoquePorCategoria)

//10

const resumoCategorias = produtos.reduce((acumulador,item)=>{
    if( acumulador[item.categoria]){
        
        acumulador[item.categoria].quantidade += 1
        acumulador[item.categoria].total += item.preco
    }
    else{
        acumulador[item.categoria]= {
            quantidade: 1,
            total: item.preco
        }
    }
    return acumulador
},{})
console.log(resumoCategorias)



//11
const vendas = [
    { vendedor: "Ana", produto: "Teclado", valor: 100 },
    { vendedor: "João", produto: "Mouse", valor: 250 },
    { vendedor: "Ana", produto: "Monitor", valor: 150 },
    { vendedor: "Pedro", produto: "Teclado", valor: 300 },
    { vendedor: "João", produto: "Headset", valor: 100 },
    { vendedor: "Ana", produto: "Mouse", valor: 200 }
];

const resumoVendedore = vendas.reduce((acumulador,item)=>{
    if (acumulador[item.vendedor]){
        acumulador[item.vendedor].quantidade+=1
        acumulador[item.vendedor].total += item.valor
    } 
    else{
        acumulador[item.vendedor] ={
            quantidade: 1,
            total: item.valor
        }
    }

    return acumulador
},{})
console.log(resumoVendedore)

//12

const resumoVendedores = vendas.reduce((acumulador,item)=>{
    if (acumulador[item.vendedor]){
        acumulador[item.vendedor].quantidade +=1
        acumulador[item.vendedor].total += item.valor
        if (item.valor >acumulador[item.vendedor].maiorVenda ) {
        acumulador[item.vendedor].maiorVenda = item.valor
        }
    }
    else{
        acumulador[item.vendedor] ={
            quantidade: 1,
            total: item.valor,
            maiorVenda: item.valor
        }
    }
    return acumulador
},{})

console.log(resumoVendedores)

//13

const alunos = [
    { nome: "Ana", turma: "A", nota: 8 },
    { nome: "João", turma: "B", nota: 7 },
    { nome: "Pedro", turma: "A", nota: 9 },
    { nome: "Maria", turma: "B", nota: 6 },
    { nome: "Lucas", turma: "A", nota: 10 }
];

const resumoTurmas 