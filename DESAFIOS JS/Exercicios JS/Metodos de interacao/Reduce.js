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
const numeros = [10, 5, 20, 8, 15];

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
    { nome: "TV", categoria: "Tela", estoque: 3,preco: 1250 },
    { nome: "Webcam", categoria: "Periférico",estoque: 5, preco: 300 }
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
    { vendedor: "Ana", produto: "Monitor", valor: 300 },
    { vendedor: "Pedro", produto: "Teclado", valor: 150 },
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
        if (item.valor > acumulador[item.vendedor].maiorVenda ) {
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
    { nome: "Ana", turma: "A", nota: 8 }, //1 nota: 8, maior nota:8
    { nome: "João", turma: "B", nota: 7 },//1 nota 7, maior nota 7
    { nome: "Pedro", turma: "A", nota: 9 },//2 nota 9 , maior nota 9
    { nome: "Maria", turma: "B", nota: 6 },
    { nome: "Lucas", turma: "A", nota: 10 }
];


//Desafio sem "If e else"
const resumoTurmas = alunos.reduce((acumulador,item)=>{
    const restumra = acumulador[item.turma] ||{ //a variavel vai ser dividida pela turma, se a turma tiver cadastrada ele atualiza se nao ele cria
        quantidade: 0,
        somaNota: 0,
        maiorNota: 0
    }
    restumra.quantidade +=1;
    restumra.somaNota += item.nota;
    if (item.nota > restumra.maiorNota) {  
    restumra.maiorNota = item.nota};

    acumulador[item.turma] = restumra
    return acumulador

},{})
console.log(resumoTurmas)




//14
const produtosPorCategoria = produtos.reduce((acumulador, item) => {
    if (acumulador[item.categoria]) {
        acumulador[item.categoria].push(item.nome)
    } else {
        acumulador[item.categoria] = [item.nome]
    }
    return acumulador
}, {})


//15
const numero = [10, 5, 20, 8, 15]

const numerosPares= numero.reduce((acumulador,item)=>{
   if(item % 2 === 0) {
        acumulador.push(item)
    }
    return acumulador
}, [])
console.log(numerosPares)

//16
const numerosParesMultiplos = numero.reduce((acumulador,item)=>{
   if(item % 2 === 0) {
        acumulador.push(item*2)
    }
    return acumulador
}, [])
console.log(numerosParesMultiplos)

//17
const numeros2 = [1, 2, 2, 3, 4, 4, 5, 1, 3];
const numerosUnicos = numeros2.reduce((acumulador,item)=>{
    if(!acumulador.includes(item)){
        acumulador.push(item)
    } 
    return acumulador
},[])
console.log(numerosUnicos )

//18
const numeros20 = [10, 20, 15, 30, 20, 10, 40];
const maioresQue20 = numeros20.reduce((acumulador,item)=>{
    if(item>20){
        acumulador.push(item)
    }
    return acumulador
},[])
console.log(maioresQue20)

//19
const resumo = numeros.reduce((acumulador,item)=>{
    const number = acumulador[item] || {
        soma: 0,
        quantidade: 0,
        maior: 0
    }
    number.soma += item
    number.quantidade + 1
    if (item > number.maior) {
        number.maior = item
    }
    acumulador[item] = number
    return acumulador
},{})
console.log(resumo)



//20
const resumoNotas= alunos.reduce((acumulador,item)=>{
  acumulador.soma += item.nota
  acumulador.quantidade += 1
  if (item.nota > acumulador.maiorValor){
    acumulador.maiorValor = item.nota
  }
  return acumulador
},{
  soma: 0,
  quantidade: 0,
  maiorValor: 0
})
console.log(resumoNotas)


///21
const resumoProdutos = produtos.reduce((acumulador,item)=>{
  acumulador.total += item.preco
  acumulador.quantidade += 1
  if (item.preco > 200) {
    acumulador.acimaDe200 += 1
  }
  return acumulador
},{
    total: 0,
    quantidade:0,
    acimaDe200: 0
})
console.log(resumoProdutos)

//22
const resumoVendedor = vendas.reduce((acumulador,item)=>{
  if (! acumulador[item.vendedor]) {
    acumulador[item.vendedor] = {
    total: item.valor,
    maiorVenda: item.valor}
  } else {
    acumulador[item.vendedor].total += item.valor
  if(item.valor > acumulador[item.vendedor].maiorVenda) {
    acumulador[item.vendedor].maiorVenda = item.valor
  }}
  return acumulador
},{})
console.log(resumoVendedor)

//23

const resumoVendedo = vendas.reduce((acumulador,item)=>{
  if (!acumulador[item.vendedor]) {
      acumulador[item.vendedor] = {
      quantidade: 0,
      total: 0,
      acimaDe200: 0}
  }
    acumulador[item.vendedor].quantidade += 1
    acumulador[item.vendedor].total += item.valor
    if(item.valor > 200) {
      acumulador[item.vendedor].acimaDe200 +=1
    }
    return acumulador
  
},{});
console.log(resumoVendedo)


//24
const resumoTurma = alunos.reduce((acumulador,item)=>{
  if(!acumulador[item.turma]) {
    acumulador[item.turma] ={
      quantidade: 0,
      somaNotas: 0,
      acimaDe7: 0
    }
  };
  
  acumulador[item.turma].quantidade +=1
  acumulador[item.turma].somaNotas += item.nota
  if(item.nota > 7){
    acumulador[item.turma].acimaDe7 +=1
  }
  return acumulador
},{})
console.log(resumoTurma)

//25
const produtosPorCategori = produtos.reduce((acumulador,item)=>{
 const resumo = acumulador[item.categoria] || []
  resumo.push(item.nome)
  acumulador[item.categoria] = resumo
  return acumulador
},{})
console.log(produtosPorCategori)


//26
const produtosPorVendedor = vendas.reduce((acumulador,item)=>{
    const atual = acumulador[item.vendedor] || []
    atual.push(item.produto)

    acumulador[item.vendedor] = atual
    return acumulador
}, {})
console.log(produtosPorVendedor)



//27
const produtosCarosCategoria = produtos.reduce((acumulador,item)=>{
    const atual = acumulador[item.categoria] ||[]

    if(item.preco > 200){
        atual.push(item.nome)
    }
    acumulador[item.categoria]= atual
    return acumulador
},{})

console.log(produtosCarosCategoria)


//28
const produtosCarosPorCategoria = produtos.reduce((acumulador,item)=>{
    const atual = acumulador[item.categoria] || []
    if(item.preco>200){
        atual.push(item)
    }
    acumulador[item.categoria] = atual
    return acumulador
},{})
console.log(produtosCarosPorCategoria)

//29
const resVendedores = vendas.reduce((acumulador,item)=>{
    const atual = acumulador[item.vendedor] || {
        quantidade:0,
        total: 0,
        maiorVenda: 0
    }
    atual.quantidade += 1
    atual.total += item.valor
    if (item.valor> atual.maiorVenda){
        atual.maiorVenda = item.valor 
    }
    acumulador[item.vendedor] = atual
    return acumulador
}, {})

console.log(resVendedores)


const numeros6 = [10, 20, 15, 30, 25];
const resultado = numeros6.reduce((acumulador,item)=>{
    acumulador.soma +=item
    if ( item > acumulador.maior){
        acumulador.maior = item
    }
    if (item< acumulador.menor){
        acumulador.menor = item
    }
    return acumulador
},{
    soma: 0,
    maior:0,
    menor:Infinity
})

console.log(resultado)