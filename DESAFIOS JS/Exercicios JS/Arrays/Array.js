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

//acido salicyic 
//vitamina c
//niacinamida
//solar


const playlistOrdenadaString = playlistOrdenada.join(" / ");

let ultimos3 = playlistCompleta.slice(-3) /*coloquei let pensando que caso fosse colocar mais musica entao o resultado ia mudar*/

console.log(playlist)
console.log(playlistCompleta)
console.log(playlistOrdenada)
console.log(playlistOrdenadaString)
console.log(ultimos3)

