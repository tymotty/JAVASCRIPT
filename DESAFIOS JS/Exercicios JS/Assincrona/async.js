


const promessa = new Promise((resolve, reject) => {
    resolve("Sucesso!");
});

promessa.then((resultado) => {
    console.log(resultado);
});