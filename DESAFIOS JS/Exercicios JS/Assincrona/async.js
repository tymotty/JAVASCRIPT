


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

        console.log("-------------------------------------------------")
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
      console.log("-------------------------------------------------")
       }
  catch (erro){
    console.log("Erro:", erro)
  }
  
  
}  buscarUsuarios()

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
    console.log("-------------------------------------------------")
  }
  
  catch (erro){
    console.log("Erro:", erro)
  }
}
 buscarUsuarios2()




async function buscarUsuarioPorNome(nome) {
  try {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/users")
    
    if(!resultado.ok){
      throw new Error ("Erro na requisicao")}
    
    const dados = await resultado.json()
    
   
    const usuario = dados.find((item)=>{
            return item.name === nome
    })
    if (usuario) {
    console.log(`Usuário encontrado: ${usuario.name}`)
    console.log(`Email: ${usuario.email}`)
    } else {
        console.log("Usuário não encontrado")
    }
    console.log("-------------------------------------------------")
}
  catch(erro){
console.log("Erro:",erro)}
}
await buscarUsuarioPorNome("Glenna Reichert")




async function buscarUsuarioPorId(id) {
    try{
        const resultado = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!resultado.ok){
            throw new Error("Erro na requisicao")
        }

        const dados = await resultado.json()


        const usuario = dados.find((item)=>{
            return item.id === id
        })


        if (usuario) {
        console.log(`Usuário encontrado: ${usuario.name}`)
        console.log(`Email: ${usuario.email}`)
        } 
        else {
        console.log("Usuário não encontrado")
        }
        console.log("-------------------------------------------------")
    }
    catch(erro){
        console.log("Erro:",erro)
    }

}
buscarUsuarioPorId(1)








async function buscarUsuarioEPosts() {
    try{
        //requisicao de usuario
        const resultadoUsuario = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if(!resultadoUsuario.ok){
            throw new Error("Erro na requisicao")
        }
        const dadosUsuario =  await resultadoUsuario.json()
        
        console.log(`Usuário encontrado: ${dadosUsuario.name}`)
        console.log(`Email: ${dadosUsuario.email}`)
        

        //requisicao de post usuario
        const resultadoPost = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        if(!resultadoPost.ok){
            throw new Error ("Erro na requisicao")
        }
        const dadosPost = await resultadoPost.json()

        dadosPost.forEach((item)=>{
            console.log(`Titulo: ${item.title}`)
        })
        console.log("-------------------------------------------------")
    }
    catch(erro){
        console.log("Erro:",erro)
    }

}


async function buscarPostsDoUsuario(id) {
    try{
        const resultadoUsuario = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!resultadoUsuario.ok){
            throw new Error("Erro na requisicao")
        }
        const dadosUsuario = await resultadoUsuario.json()
        const usuario = dadosUsuario.find((item)=>{
            return item.id === id
        })
        if(usuario){

            console.log(`Usuário encontrado: ${usuario.name}`)
            console.log(`Email: ${usuario.email}`)

            const resultadoPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

            if(!resultadoPost.ok){
                throw new Error("Erro na requisicao")
            }

            const dadosPost = await resultadoPost.json()
            console.log("Posts:")

            dadosPost.forEach((item)=>{
                console.log(`- ${item.title}`)
            })
            console.log(`Quantidade de posts: ${dadosPost.length}`)
        }

        else { console.log("Usuario nao encontrado")}

        console.log("-------------------------------------------------")
    }
    catch(erro){
        console.log("Erro:",erro)
    }
}
buscarPostsDoUsuario(3)




async function criarPost1() {
    try{
        const resultado  = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Meu primeiro post",
                body: "Estou aprendendo JavaScript assincrono",
                userId: 3
            })
        })
        if (!resultado.ok) {
            throw new Error("Erro na requisição")
        }
        else{console.log("Post enviado com sucesso!")
            console.log("-------------------------------------------------")
        }
    }
    catch(erro){
        console.log("Erro:",erro)
    }
}criarPost1()





async function criarPost() {
    try{
        const enviado = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Meu Primeiro post",
                body: "Estou aprendendo JavaScript assíncrono",
                userId: 3
            })
        })
        if(!enviado.ok){
            throw new Error("Erro no envio do post")
        }
        else{ console.log("Post criado com sucesso!")}

        const dados = await enviado.json()
        
        console.log(dados.userId)
        console.log(dados.title)
        
    }
    catch(erro){
        console.log("Erro:", erro)
    }

}criarPost()