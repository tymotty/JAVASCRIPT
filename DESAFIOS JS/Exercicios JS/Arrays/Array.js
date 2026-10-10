const frutasCesta = ["Maçã", "Banana"];
frutasCesta.push("uva");

const itemRemovido = frutasCesta.pop()

console.log(itemRemovido)



const numeros = [10, 20, 30, 40, 50];

const parte = numeros.slice(1,3)
console.log(parte)

numeros.splice(3,4)
console.log(numeros)

const cores = ["vermelho", "azul", "verde", "amarelo", "roxo"];

const posicaoVerde = cores.indexOf("verde")
const temRoxo= cores.includes("Roxo")
console.log(posicaoVerde)
console.log(temRoxo)


const listaA = [1, 2, 3];
const listaB = [4, 5, 6];

const combinada = [...listaA,...listaB];
const copiaA= [...listaA,99 ]

console.log(copiaA)
console.log(combinada)




const tarefas = ["Estudar", "Malhar", "Ler", "Cozinhar"];

tarefas.push("Descansar");
const posicaoLer = tarefas.indexOf("Ler");

function RemoverMalhar (tarefas){
    const posicaoMalhar = tarefas.indexOf("Malhar");
    const RemoverMalhar = tarefas.splice(posicaoMalhar,1);
};
RemoverMalhar(tarefas);
const estaCorrer = tarefas.includes("Correr");

const doisPrimeiros = tarefas.slice(0,2);

console.log(tarefas)
console.log(posicaoLer)
console.log(tarefas)
console.log(estaCorrer)
console.log(doisPrimeiros)


const filaAtendimento = ["Carlos", "Beatriz"];

filaAtendimento.unshift("Ana")

const proximoAtendido = filaAtendimento.shift()

console.log(proximoAtendido)
console.log(filaAtendimento)




const ingredientes = ["farinha", "ovo", "leite"];
const extras = ["açúcar", "fermento"];

const receitaCompleta = ingredientes.concat(extras)


const receitaCompletaString = receitaCompleta.join(" - ")
 

console.log(receitaCompleta)
console.log(receitaCompletaString)

const number = [40, 5, 100, 25, 1];

number.sort((a,b) => b-a)
console.log(number)



const biblioteca = {
  nome: "Biblioteca Central",
  livros: [
    { titulo: "JS Avançado", ano: 2020, disponivel: true },
    { titulo: "Clean Code", ano: 2018, disponivel: false },
    { titulo: "SQL na Prática", ano: 2022, disponivel: true }
  ]
};










const times = ["Grêmio", "Inter", "Palmeiras", "Flamengo"];

times.unshift("Corinthians")

times.push("Santos")

console.log(times.indexOf("Palmeiras"))


const posicaoInter = times.indexOf("Inter")
const removerInter = times.splice(posicaoInter,1)

console.log(times)

console.log(`Vasco Esta na lista:${times.includes("Vasco")}`)

const timesSerieA = ["Botafogo", "Fluminense"]

const todososTimes = times.concat(timesSerieA)


console.log(todososTimes)
console.log(times)
console.log(timesSerieA)






const playlist = ["Rock", "Pop", "Jazz", "Eletrônica"];


playlist.unshift("Sertanejo")

playlist.push("Clássica")

console.log(playlist.indexOf("Jazz"))

const posicaoPop = playlist.indexOf("Pop")
const removePop = playlist.splice(posicaoPop,1)

console.log(playlist.includes("Funk"))

const playlist2 = ["Blues", "Reggae"]
const playlistCompleta = playlist.concat(playlist2)
console.log(playlistCompleta);




let ultimos3 = playlistCompleta.slice(-3) /*coloquei let pensando que caso fosse colocar mais musica entao o resultado ia mudar*/

console.log(playlist)
console.log(playlistCompleta)

const alunos = [
  { nome: "Ana", turma: "A", media: 8.2, ativo: true },
  { nome: "Bruno", turma: "B", media: 5.5, ativo: true },
  { nome: "Carla", turma: "A", media: 9.1, ativo: false },
  { nome: "Diego", turma: "B", media: 7.0, ativo: true },
  { nome: "Elisa", turma: "A", media: 6.8, ativo: true }
];


const nomesTurmaA = alunos
  .filter(item => item.ativo && item.turma === "A" && item.media >= 7)
  .map(item => item.nome);

const alunoAbaixo = alunos.find(item => item.ativo && item.media < 6);





const temperaturas = [18, 25, 31, 12, 28, 35, 22];

const diasQuentes = temperaturas.filter((item)=>{
  return item>25
})
diasQuentes.forEach((item)=>{
  console.log(`Dia Quente: ${item}c`)
})

const filmes = [
  { titulo: "Alfa", generos: ["acao", "drama"], nota: 8.1, assistido: true },
  { titulo: "Beta", generos: ["comedia"], nota: 6.4, assistido: false },
  { titulo: "Gama", generos: ["acao", "ficcao"], nota: 9.0, assistido: false },
  { titulo: "Delta", generos: ["drama"], nota: 7.5, assistido: true },
  { titulo: "Epsilon", generos: ["ficcao", "drama"], nota: 8.8, assistido: false }
];
const titulosFilmes = filmes
  .filter(filme => !filme.assistido && filme.nota > 8 && (filme.generos.includes("drama") || filme.generos.includes("ficcao")))
  .map(filme => filme.titulo);

console.log(titulosFilmes); 


const filmeEspecial = filmes.find(filme => filme.assistido && filme.nota > 9);
const resultadoMensagem = filmeEspecial ? filmeEspecial.titulo : "Nenhum filme encontrado";
console.log(resultadoMensagem); 




const produtosVeraoComDesconto = produtos
  .filter(produto => produto.estoque > 0 && produto.tags.includes("verao"))
  .map(produto => ({
    nome: produto.nome,
    precoFinal: produto.preco * 0.9 
  }));
const produtoSemEstoque = produtos.find((item)=>{
  item.estoque === 0 && item.preco>250 
})

const produtoSemEstoqueCaro = produtos.find(produto => produto.estoque === 0 && produto.preco > 250);