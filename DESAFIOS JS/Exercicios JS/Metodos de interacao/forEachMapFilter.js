console.log("|-----------------------------ForEach-------------------------------|")

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




console.log("|--------------------------------MAP--------------------------------|")


//01
const precos = [100, 200, 300];

const precoComDesconto = precos.map(item=>item * 0.9)
console.log(precoComDesconto)


//02

const al= [
  { nome: "Bianca", nota: 8 },
  { nome: "Diego", nota: 6 },
  { nome: "Elisa", nota: 9 }
];

const nomesAlunos = al.map((aluno)=> 
   aluno.nome
)
console.log (nomesAlunos)




//03
const pro = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 800 }
];


const produtosComImposto = pro.map((item)=>{
    return {...item, precoComImposto: (item.preco*10)/100 + item.preco}
});
console.log(produtosComImposto)




//04
const funcionario = [
  { nome: "Rita", salario: 3000 },
  { nome: "Tiago", salario: 5500 },
  { nome: "Nina", salario: 2000 }
];

const funcionariosCategorizados = funcionario.map((item)=>{
    return {...item, categoria: item.salario>4000? "Alto": "Padrão"}
})

console.log(funcionariosCategorizados)

//05
const times = [
  { nome: "Grêmio", pontos: 45 },
  { nome: "Inter", pontos: 38 },
  { nome: "Palmeiras", pontos: 60 }
];

//05-1
const nomesTimes = times.map ((item)=> {
    return item.nome
})

console.log(nomesTimes)
//05-2
const timesComBonus = times.map ((item) => {
    return {...item, pontosComBonus: item.pontos +5 }
})
console.log(timesComBonus)

//05-3
const timesClassificados = times.map(time => ({
  ...time,
  situacao: time.pontos > 40 ? "Classificado" : "Eliminado"
}));

//|--------------------------------Filter--------------------------------|//
console.log("//|----------------------------Filter----------------------------|//")
//01
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter((item) => {
    return item % 2 === 0 
})

//02
const n = ["Ana", "Carlos", "João", "Amanda", "Pedro"];
const nomesGrandes = n.filter((item)=>{
    return item.length > 4
})

//03
const idades = [12, 18, 25, 14, 30, 16, 21];
const maioresDeIdade = idades.filter((item) =>{
    return item >= 18
})

//04
const pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Amanda", idade: 30 },
    { nome: "Pedro", idade: 19 }
];

const adultos = pessoas.filter((item) => {
    return item.idade >= 18
})
console.log(adultos)

//05
const produt2 = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 },
    { nome: "Webcam", preco: 120 }
];
const produtosCaros = produt2.filter((item)=>{
    return item.preco > 200;
})

//06
const produt = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 0 },
    { nome: "Webcam", preco: 120, estoque: 8 }
];

const disponiveis = produt.filter((item) => {
    return item.estoque > 0 
})

//07
const prod = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 0 },
    { nome: "Webcam", preco: 120, estoque: 8 }
];
 const produtosDisponiveisCaros = prod.filter ((item) => {
    return item.preco >100 &&  
    item.estoque > 0
 })
 console.log(produtosDisponiveisCaros)

 //08
 const alunos = [
    { nome: "Ana", nota: 8, faltas: 2 },
    { nome: "Carlos", nota: 5, faltas: 1 },
    { nome: "João", nota: 9, faltas: 6 },
    { nome: "Amanda", nota: 7, faltas: 3 },
    { nome: "Pedro", nota: 4, faltas: 0 }
]; 
const aprovados = alunos.filter ((item) => {
    return item.nota >= 7 
    &&
    item.faltas < 5
})

//09
const nomes = [
    "Ana",
    "Carlos",
    "Amanda",
    "João",
    "Arthur",
    "Pedro"
];
const nomesComA = nomes.filter ((item) =>{
    return item.toLocaleLowerCase().includes("a")
})
console.log(nomesComA)

//10
const usuario = [
    { nome: "Ana", ativo: true, idade: 17 },
    { nome: "Carlos", ativo: false, idade: 25 },
    { nome: "Amanda", ativo: true, idade: 22 },
    { nome: "João", ativo: true, idade: 15 },
    { nome: "Pedro", ativo: false, idade: 30 }
];

const usuariosPermitidos = usuario.filter((item)=> {
    return item.idade >= 18 &&
    item.ativo 
})
console.log(usuariosPermitidos)

//11
const produ = [
    { nome: "Teclado", categoria: "periferico", preco: 150 },
    { nome: "Monitor", categoria: "monitor", preco: 900 },
    { nome: "Mouse", categoria: "periferico", preco: 80 },
    { nome: "Notebook", categoria: "computador", preco: 3500 },
    { nome: "Webcam", categoria: "periferico", preco: 120 }
];
const produtosSelecionados = produ.filter((item) =>{
    return item.categoria === "periferico" || item.categoria === "monitor"
})

//12
const p = [
    { nome: "Teclado", categoria: "periferico", preco: 150, estoque: 10 },
    { nome: "Mouse", categoria: "periferico", preco: 80, estoque: 0 },
    { nome: "Monitor", categoria: "monitor", preco: 900, estoque: 5 },
    { nome: "Notebook", categoria: "computador", preco: 3500, estoque: 2 },
    { nome: "Webcam", categoria: "periferico", preco: 120, estoque: 8 },
    { nome: "Cadeira", categoria: "moveis", preco: 700, estoque: 3 }
];


const produtosParaPromocao = p.filter(({categoria,preco,estoque})=> {
    return(
        //Condicao A
        (categoria === "periferico" && preco>100 && estoque> 0) 
        ||
        //Condicao B
        (categoria === "monitor" && estoque> 0)
    );
})
console.log(produtosParaPromocao)
//13
const usuari = [
    { nome: "Ana", idade: 22, cidade: "Curitiba", ativo: true },
    { nome: "Carlos", idade: 17, cidade: "Curitiba", ativo: true },
    { nome: "João", idade: 30, cidade: "São Paulo", ativo: false },
    { nome: "Amanda", idade: 25, cidade: "Curitiba", ativo: false },
    { nome: "Pedro", idade: 19, cidade: "São Paulo", ativo: true },
    { nome: "Lucas", idade: 28, cidade: "Curitiba", ativo: true }
];

const usuariosSelecionados = usuari.filter (({idade,cidade,ativo}) =>{
    return(
        //Condicao A
        (idade >=18 && ativo && cidade ==="Curitiba") 
        ||
        //Condicao B
        (idade >=25 && ativo && cidade ==="São Paulo")
    );
});
console.log(usuariosSelecionados)


//14
const usuar = [
    { nome: "Ana Silva", email: "ana@gmail.com", ativo: true },
    { nome: "Carlos Souza", email: "carlos@yahoo.com", ativo: true },
    { nome: "Amanda Lima", email: "amanda@gmail.com", ativo: false },
    { nome: "João Santos", email: "joao@gmail.com", ativo: true },
    { nome: "Pedro Alves", email: "pedro@hotmail.com", ativo: false },
    { nome: "Lucas Rocha", email: "lucas@yahoo.com", ativo: true }
];
const usuariosGmailAtivos = usuar.filter((item) => {
    return item.email.endsWith("@gmail.com")  && item.ativo
})
console.log(usuariosGmailAtivos)

//15
const filmes = [
    { titulo: "Interestelar", genero: "ficcao", nota: 9 },
    { titulo: "O Poderoso Chefão", genero: "drama", nota: 9 },
    { titulo: "Matrix", genero: "ficcao", nota: 8 },
    { titulo: "O Exorcista", genero: "terror", nota: 8 },
    { titulo: "A Origem", genero: "ficcao", nota: 9 }
];
const filmesFiccao = filmes.filter ((item) => {
    return item.genero ==="ficcao"
})

const filmesComNome = filmesFiccao.filter((item) => {
    return item.titulo.toLocaleLowerCase().includes("a")
})
console.log(filmesComNome)

//16
const usua = [
    {
        nome: "Ana",
        idade: 22,
        tecnologias: ["JavaScript", "HTML", "CSS"]
    },
    {
        nome: "Carlos",
        idade: 25,
        tecnologias: ["Python", "SQL"]
    },
    {
        nome: "Amanda",
        idade: 20,
        tecnologias: ["JavaScript", "React", "Node.js"]
    },
    {
        nome: "João",
        idade: 30,
        tecnologias: ["Java", "Spring", "SQL"]
    },
    {
        nome: "Pedro",
        idade: 19,
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Lucas",
        idade: 27,
        tecnologias: ["JavaScript", "TypeScript", "React"]
    }
];

const usuariosJavaScript = usua.filter(({tecnologias})=> {
    return tecnologias.includes("JavaScript")
})
console.log(usuariosJavaScript)

//17
const desenvolvedoresJS = usua.filter(({tecnologias,idade}) =>{
    return tecnologias.includes("JavaScript") && idade >= 20
})
console.log(desenvolvedoresJS)

//18
const pr = [
    { nome: "Teclado", preco: 150, categoria: "periferico", estoque: 10 },
    { nome: "Mouse", preco: 80, categoria: "periferico", estoque: 0 },
    { nome: "Monitor", preco: 900, categoria: "monitor", estoque: 5 },
    { nome: "Webcam", preco: 120, categoria: "periferico", estoque: 8 },
    { nome: "Notebook", preco: 3500, categoria: "computador", estoque: 2 },
    { nome: "Headset", preco: 250, categoria: "periferico", estoque: 0 }
];
const produtosDisponiveis = pr.filter ((item)=>{
    return item.estoque >0
})
const perifericos = produtosDisponiveis.filter((item)=>{
    return item.categoria === "periferico"
})

//19
const funcionarios = [
    {
        nome: "Ana",
        departamento: "TI",
        salario: 5000,
        ativo: true
    },
    {
        nome: "Carlos",
        departamento: "RH",
        salario: 4000,
        ativo: true
    },
    {
        nome: "Amanda",
        departamento: "TI",
        salario: 7000,
        ativo: false
    },
    {
        nome: "João",
        departamento: "TI",
        salario: 6000,
        ativo: true
    },
    {
        nome: "Pedro",
        departamento: "RH",
        salario: 5500,
        ativo: false
    },
    {
        nome: "Lucas",
        departamento: "TI",
        salario: 4500,
        ativo: true
    }
];

const funcionariosAtivos = funcionarios.filter((item) => {
    return item.ativo
})
const funcionariosTI = funcionariosAtivos.filter((item) => {
    return item.departamento ==="TI" 
})
console.log(funcionariosTI)

//20
const produtosEstoqueDisponivel = pr.filter((item) => {
    return item.estoque > 0
})
const produtosDisponivelNome = produtosEstoqueDisponivel.map((item) =>{
 return item.nome
})
console.log(produtosDisponivelNome)

//21
const usuarios1 = [
    { nome: "Ana", idade: 22, ativo: true },
    { nome: "Carlos", idade: 17, ativo: true },
    { nome: "Amanda", idade: 25, ativo: false },
    { nome: "João", idade: 30, ativo: true },
    { nome: "Pedro", idade: 19, ativo: false },
    { nome: "Lucas", idade: 28, ativo: true }
];
const usuariosAdultosAtivos = usuarios1.filter((item) =>{
    return  item.idade >=18 && item.ativo
})
const nomeIdadeAdultosAtivos = usuariosAdultosAtivos.map(({nome,idade})=>{
    return {nome, idade}
})
console.log(nomeIdadeAdultosAtivos) 


//22
const produtos1 = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 3 },
    { nome: "Webcam", preco: 300, estoque: 0 }
];

const produtosCarosComEstoque = produtos1.filter((item)=>{
    return item.preco > 200 && item.estoque > 0
})
const produtosComDesconto = produtosCarosComEstoque.map(({nome,preco,valorComDesconto})=>{
    valorComDesconto = preco * 0.90 
    return {nome,valorComDesconto} 
})
console.log(produtosComDesconto)

console.log("--------------------------------FIND--------------------------------")
//01
const produtos2 = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 }
];

const maior200 = produtos2.find((item)=>{
    return item.preco >200
})
console.log(maior200)

//02
const usuarios2 = [
    { nome: "Ana", idade: 17, ativo: false },
    { nome: "Carlos", idade: 22, ativo: true },
    { nome: "João", idade: 30, ativo: true },
    { nome: "Pedro", idade: 19, ativo: false }
];

const usuarioAtivo = usuarios2.find((item)=>{
    return item.ativo
})
console.log(usuarioAtivo )

//03
const produto4 = [
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 5 },
    { nome: "Headset", preco: 250, estoque: 3 },
    { nome: "Webcam", preco: 300, estoque: 0 }
];


const produtoEncontrado = produto4.find((item)=>{
    return item.preco >200 && item.estoque > 0
})


//04
const produtos3 = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Headset", preco: 250 }
];
const produto = produtos3.find((item) =>{
    return item.preco >1000
})
console.log(produto)

//05
const usuarios = [
    { nome: "Ana", idade: 22, cidade: "São Paulo", ativo: true },
    { nome: "Carlos", idade: 17, cidade: "Curitiba", ativo: true },
    { nome: "Amanda", idade: 25, cidade: "São Paulo", ativo: false },
    { nome: "João", idade: 30, cidade: "Curitiba", ativo: true },
    { nome: "Pedro", idade: 28, cidade: "Curitiba", ativo: true }
];
const usuarioEncontrado = usuarios.find(({idade,cidade,ativo})=>{
    return idade >18 && ativo && cidade==="Curitiba"
})



const temperaturas = [22, 28, 19, 31, 25];

// 1. Use forEach para imprimir cada temperatura no console
temperaturas.forEach((item)=>{
    console.log(item)
})
// 2. Use map para criar um array convertendo cada temperatura para Fahrenheit (°F = °C * 9/5 + 32)
const temperaturasFahrenheit = temperaturas.map((item)=>{
    return item * 9/5 + 32
},[])
console.log(temperaturasFahrenheit)
// 3. Use filter para pegar só as temperaturas acima de 25°C

const temperatura25 = temperaturas.filter((item)=>{
    return item>25
})
console.log(temperatura25)


const aluno = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 4.2 },
  { nome: "Carla", nota: 9.1 },
  { nome: "Diego", nota: 5.8 },
];

// 1. Use find para pegar o primeiro aluno com nota abaixo de 6
const nota6 = aluno.find((item)=>{
    return item.nota < 6
})
console.log(nota6)
// 2. Use filter + map (encadeados) para pegar só os nomes dos alunos aprovados (nota >= 6)
const alunosMaior6 = aluno.filter((item)=>{
    return item.nota>=6
}) 
.map((item)=>{
    return item.nome
})
console.log(alunosMaior6)

// 3. Use reduce para calcular a média geral das notas da turma

const mediaNota = aluno.reduce((acc,item)=>{
    return acc +item.nota
},0)/aluno.length
console.log(mediaNota)



const vendas = [
  { vendedor: "Ana", produto: "Notebook", valor: 3500 },
  { vendedor: "Bruno", produto: "Mouse", valor: 80 },
  { vendedor: "Ana", produto: "Monitor", valor: 900 },
  { vendedor: "Carla", produto: "Teclado", valor: 150 },
  { vendedor: "Bruno", produto: "Notebook", valor: 3200 },
  { vendedor: "Ana", produto: "Mouse", valor: 75 },
];

// Use reduce para criar um objeto onde cada chave é o nome do vendedor
// e o valor é o total vendido por ele.
// Resultado esperado:
// { Ana: 4475, Bruno: 3280, Carla: 150 }
const vendaTotalVendedor = vendas.reduce((acc, item) => {
  acc[item.vendedor] = (acc[item.vendedor] || 0) + item.valor;
  
  return acc;
}, {});
console.log(vendaTotalVendedor)
