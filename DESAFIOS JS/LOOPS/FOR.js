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

//Tive que usar nomes diferentes nas variaveis por ter feito inicialmente tudo em um arquivo, so organizei melhor depois de ja ter feito


// Conte quantas vogais existem
const frase = "JavaScript é muito poderoso";
const vogais = "aeiouAEIOUéÉ"
let quantidadeVogais = 0

for (let letra = 0; letra < frase.length; letra++) {
    if (vogais.includes(frase[letra])) {
        quantidadeVogais++
    }
}
console.log(quantidadeVogais)



// Descubra:
// - maior número
// - menor númerod
console.log("Desafio do maior numero")
const numeros = [12, 5, 88, 1, 43, 99, 23];
let maiorValor = -Infinity;
let menorValor = Infinity;

for (let i = 0; i < numeros.length; i++) {
    if (maiorValor < numeros[i]) {
        maiorValor = numeros[i]
    }
    else if (numeros[i] < menorValor) {
        menorValor = numeros[i]
    }
}
console.log(`O maior numero é ${maiorValor}`)
console.log(`O menor numero é ${menorValor}`)




// Crie um novo array sem números repetidos
// NÃO use Set
console.log('Crie um novo array sem números repetidos')
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let numeroUnico = []

for (let i = 0; i < numerosRepetidos.length; i++) {
    if (!numeroUnico.includes(numerosRepetidos[i])) {
        numeroUnico.push(numerosRepetidos[i])
    }
}
console.log(numeroUnico)

// Descubra quantas vezes cada letra aparece
// Resultado esperado:
// {
//   a: 3,
//   b: 2,
//   c: 1
// }
console.log("Descubra quantas vezes cada letra aparece")
const texto = ["a", "b", "a", "c", "b", "a"];
let frequenciaLetra = {}

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];

    if (frequenciaLetra[letra]) {
        frequenciaLetra[letra] += 1;
    } else
        frequenciaLetra[letra] = 1
}
console.log(frequenciaLetra)



// Descubra o segundo maior número
console.log("Descubra o segundo maior numero")

const tabela = [10, 5, 80, 25, 70];
let primeiroMaior = -Infinity
let segundoMaior = -Infinity
for (let i = 0; i < tabela.length; i++) {
    let numeroAtual = tabela[i];
    if (numeroAtual > primeiroMaior) {
        segundoMaior = primeiroMaior
        primeiroMaior = numeroAtual
    } else if (numeroAtual > segundoMaior) {
        segundoMaior = numeroAtual
    }
}
console.log(primeiroMaior)
console.log(segundoMaior)




// Descubra se a palavra é igual de trás pra frente
// Resultado esperado: true
console.log("Descubra se a palavra é igual de trás pra frente")

const palavraNormal = "arara";

let palavraInvertida = "";

for (let i = palavraNormal.length - 1; i >= 0; i--) {
    palavraInvertida += palavraNormal[i];
}

const resultado = palavraNormal === palavraInvertida;

console.log(resultado);




// Crie:
// um array com pares
// outro com ímpares
console.log("Criar um array com pares e outro com impares")
const numerosSemSeparacao = [1, 2, 3, 4, 5, 6, 7, 8];
let Pares = []
let Impares = []

for (let i = 0; i < numerosSemSeparacao.length; i++) {
    let numeroAtual = numerosSemSeparacao[i]
    if (numeroAtual % 2 === 0) {
        Pares.push(numeroAtual)
    } else {
        Impares.push(numeroAtual)
    }
}
console.log(Impares)
console.log(Pares)




// Crie um novo array onde cada número é multiplicado por 2
// NÃO use map
console.log("Crie um novo array onde cada número é multiplicado por 2")
const numerosQueSeraoMultiplicados = [2, 4, 6, 8];
let numeroMultiplicado = []

for (let i = 0; i < numerosQueSeraoMultiplicados.length; i++) {
    let numeroAtual = numerosQueSeraoMultiplicados[i]

    numeroMultiplicado.push(numeroAtual * 2)
}
console.log(numeroMultiplicado)

// Mostre apenas os números repetidos
// Resultado esperado: [1,2]
console.log(" Mostre apenas os números repetidos");

const NumerosRepetidos = [1, 2, 3, 2, 4, 5, 1, 6];
let NumerosSemRepeticao = []
let NumerosComRepeticao = []
for (let i = 0; i < NumerosRepetidos.length; i++) {
    let numeroAtual = NumerosRepetidos[i]

    if (NumerosSemRepeticao.includes(numeroAtual)) {
        NumerosComRepeticao.push(numeroAtual)
    } else {
        NumerosSemRepeticao.push(numeroAtual)

    }
}
console.log(NumerosComRepeticao)
console.log(NumerosSemRepeticao)




// Inverta sem usar reverse()
console.log("Inverta sem usar reverse()")
const numerosComuns = [1, 2, 3, 4, 5];
let numerosInvertidos = []

for (let i = numerosComuns.length; i >= 0; i--) {
    let numeroAtual = numerosComuns[i]
    numerosInvertidos.push(numeroAtual)
}
console.log(numerosInvertidos)


// Some todos os números da matriz
// Resultado esperado: 21
console.log("Some todos os números da matriz")
const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let somaMatrizes = 0

for (let i = 0; i < matriz.length; i++) {
    let linhaAtual = matriz[i]

    for (let numeroAtual = 0; numeroAtual < linhaAtual.length; numeroAtual++) {
        somaMatrizes += linhaAtual[numeroAtual]
    }
}
console.log(somaMatrizes)




// Resultado esperado:
// 1
// 12
// 123
// 1234
// 12345
console.log("Escada Numerica")

const numerosEscada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let escada = []

for (let i = 0; i < numerosEscada.length; i++) {
    let numeroAtual = numerosEscada[i]

    escada += numeroAtual
    console.log(escada)
}



// Descubra qual palavra tem mais letras
console.log("Descubra qual palavra tem mais letras")

const palavras = ["banana", "uva", "abacaxi", "melancia"];
let MaiorPalavra = "";
for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    if (palavraAtual.length > MaiorPalavra.length) {
        MaiorPalavra = palavraAtual;
    }
}

console.log(MaiorPalavra);


// Conte quantas vezes cada letra aparece 
console.log("Conte quantas vezes cada letra aparece ")
const fraseC = "programacao";
let contador = {}
for (let i = 0; i < fraseC.length; i++) {
    let letraAtual = fraseC[i]
    if (contador[letraAtual]) {
        contador[letraAtual]++
    } else {
        contador[letraAtual] = 1
    }
}
console.log(contador)


// Descubra se existe alguém com idade maior que 25

console.log("Descubra se existe alguém com idade maior que 25")
const usuarios = [
    { nome: "Carlos", idade: 22 },
    { nome: "Ana", idade: 30 },
    { nome: "Pedro", idade: 18 }];
for (let linha = 0; linha < usuarios.length; linha++) {
    let linhaAtual = usuarios[linha]
    if (linhaAtual.idade > 25) {
        console.log(`O Usuario ${linhaAtual.nome} tem ${linhaAtual.idade} sendo maior de 25`)
    }
}
// Ordene em ordem crescente
// NÃO use sort()
console.log("Ordene em ordem crescente")
const numerosDesordenados = [5, 2, 8, 1];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log(numerosDesordenados);




// Mostre apenas os que NÃO repetem
// Resultado esperado: [1,3,5]
console.log("Mostre apenas os que NÃO repetem");

const numerosConfusos = [1,2,2,3,4,4,5];

let numerosNaoRepitidos = [];

for (let i = 0; i < numerosConfusos.length; i++) {

    let numeroAtual = numerosConfusos[i];

    let contagem = 0;

    for (let j = 0; j < numerosConfusos.length; j++) {
        if (numerosConfusos[j] === numeroAtual) {
            contagem++;
        }
    }

    if (contagem === 1) {
        numerosNaoRepitidos.push(numeroAtual);
    }
}

console.log(numerosNaoRepitidos);


//-----------------------------------------------------------------------------------
//-----------------------------Dificuldade: Dificiel---------------------------------
//-----------------------------------------------------------------------------------