let listName = ['joao', 'pedro', 'matheus', 'paulo'];

// o [] é a posicao no caso vai aparecer o joao

listName[20] = 'judas';

listName.push ('gae');

listName.pop('matheus')

let p = ('ped');

let trazido = listName.push(p)

listName.filter(nome => nome.startsWith("p"));

console.log(listName)



// FUNCTION NORMAL
const a = 4
const b = 9

function subtracao(a, b) {
    return a - b;
}
// (parametro)
subtracao
console.log (subtracao(a, b))

//ARROW FUNCTION    

const soma = (a, b) => {
    return a + b;
}

console.log (soma(a,b))
soma