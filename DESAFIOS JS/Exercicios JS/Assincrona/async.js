


const promessa = new Promise((resolve, reject) => {
    resolve("Sucesso!");
});

promessa.then((resultado) => {
    console.log(resultado);
});




const promess = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Dados carregados!");
    }, 2000);

});

promess.then((resultado) => {
    console.log(resultado);
});

console.log("Fim");