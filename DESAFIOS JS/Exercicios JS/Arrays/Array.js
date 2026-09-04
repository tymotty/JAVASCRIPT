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

const combinada = []