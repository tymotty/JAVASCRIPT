


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



async function buscarUsuarios() {
  try {const resultado = await fetch('https://jsonplaceholder.typicode.com/users');
       
      if(!resultado.ok){
        throw new Error("Erro na requisicao")}
       
      const dados = await resultado.json()
      
      const dadoUsuario = dados.forEach((item)=>{
        console.log(item.name,item.email)
      })
      
       }
  catch (erro){
    console.log("Erro:", erro)
  }
  
  
} await buscarUsuarios()

async function buscarUsuarios2(){
  try {
    const resultado = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!resultado.ok){
      throw new Error("Erro na requisicao")}
    
    
    const dados = await resultado.json()
    
    const usuarioFiltrado = dados.filter((item)=>{
      return item.id > 5
    })
    usuarioFiltrado.forEach = ((item)=>{
      console.log(`${item.name} - ${item.email}`)
    }) 
  }
  
  catch (erro){
    console.log("Erro:", erro)
  }
}
await buscarUsuarios2()




async function buscarUsuarioPorNome(nome) {
  try {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/users")
    
    if(!resultado.ok){
      throw new Error ("Erro na requisicao")}
    
    const dados = await resultado.json()
    
   
      if(dados.name = nome){
        console.log(
          `Usuário encontrado: ${dados.name} 
 Email: ${dados.email}`)}
    else{
    console.log("Usuário não encontrado")}
  }
  
  catch(erro){
console.log("Erro:",erro)}
}
await buscarUsuarioPorNome("Glenna Reichert")





async function buscarUsuarioPorNome(nome) {
  try {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/users")
    
    if(!resultado.ok){
      throw new Error ("Erro na requisicao")}
    
    const dados = await resultado.json()
    
   
      if(name === nome){
        console.log(
          `Usuário encontrado: ${name} 
 Email: ${email}`)}
    else{
    console.log("Usuário não encontrado")}
  }
  
  catch(erro){
console.log("Erro:",erro)}
}
await buscarUsuarioPorNome("Glenna Reichert")