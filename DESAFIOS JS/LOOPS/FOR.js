//-----------------------------------------------------------------------------------
//--------------------------------Dificuldade: Facil---------------------------------
//-----------------------------------------------------------------------------------
//Desafios faceis 
// Mostre os números de 1 até 10 no console

console.log(`Mostre os números de 1 até 10 no console`)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Mostre os números pares de 0 até 20
console.log(`Mostre os números pares de 0 até 20`)

for (let numeros = 2; numeros <= 20; numeros += 2) {
    console.log(numeros);
}


// Mostre os números ímpares de 1 até 19
console.log(`Mostre os números ímpares de 1 até 19`)

for (let i = 1; i <= 19; i += 2) {
    console.log(i)
}


// Some os números de 1 até 5
// Resultado esperado: 15
console.log("Some os números de 1 até 5")
let soma = 0
for (let i = 1; i <= 5; i++) {
    soma += i;
}

console.log(soma)


// Mostre a tabuada do 7
// Exemplo:
// 7 x 1 = 7
// 7 x 2 = 14
console.log("Mostrar a taboada do 7")
let mult = 7
for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${mult} = ${mult * i}`)
};


// Mostre cada letra separadamente usando for
console.log("Mostre cada letra separadamente usando for")
const nome = "Timoteo";
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}


// Mostre cada fruta no console
const frutas = ["maçã", "banana", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}


// Some todos os números do array
console.log("Some todos os números do array")

const SomaTodos = [10, 20, 30, 40];
let Soma = 0

for (let i = 0; i < SomaTodos.length; i++) {
    Soma += SomaTodos[i]
}
console.log(Soma)




// Descubra qual é o maior número
console.log('Descubra qual é o maior número')


const number = [40, 9, 2, 15, 7];
let maior = number[0]

for (let i = 0; i < number.length; i++) {
    if (number[i] > maior) {
        maior = number[i]
    }
}
console.log(maior)




// Conte quantos números pares existem

const quantosExistem = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = [0]

for (let i = 0; i < quantosExistem.length; i++) {
    if (quantosExistem[i] % 2 === 0) {
        pares++
    }
}
console.log(pares)


// Inverta usando for
// Resultado esperado: "tpircsavaj"
const palavra = "javascript";
let invertida = "";
// -1: ele faze comecar pelo final, as posisoes sao 1,2,3,4,5,6,7,8,9, colocando o um ele subtrai uma posicao e comeca na nona posicao
for (let letra = palavra.length - 1; letra >= 0; letra--) {
    invertida += palavra[letra];
}

console.log(invertida);

//-----------------------------------------------------------------------------------
//--------------------------------Dificuldade: Media---------------------------------
//-----------------------------------------------------------------------------------
// Conte quantas vogais existem
const frase = "JavaScript é muito poderoso";

for (let letra = 0; letra < frase.length; letra++){
    console.log(letra)
}
// Descubra:
// - maior número
// - menor númerod

const numeros = [12, 5, 88, 1, 43, 99, 23];









//-----------------------------------------------------------------------------------
//--------------------------------Dificuldade: Media---------------------------------
//-----------------------------------------------------------------------------------