


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

async function buscarUsuario() {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const dados = await resultado.json()
    console.log(dados.name,dados.email)
    
}
buscarUsuario()

async function buscarUsuario1() {
    try{
        const resultado = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if(!resultado.ok){
            throw new Error("Erro na requisicao")
        }
        const dados = await resultado.json();
        console.log(dados.name,dados.email)
    }
    catch(erro){
        console.log("Erro:",erro)
    }
}
buscarUsuario1()



async function buscarUsuarios2() {
    try{
        const resultado = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!resultado.ok){
            throw new Error ("Erro na requisicao")
        }
        const dados = resultado.json()
        console.log(dados.name)
    }
    catch(erro){
        console.log("Erro:",erro )
    }
}
buscarUsuarios2()