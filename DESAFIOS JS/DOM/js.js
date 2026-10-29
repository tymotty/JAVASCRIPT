const mensagem1 = document.querySelector(".mensagem")



const acao = document.querySelector(".acao")
const descricoes = document.querySelectorAll(".descricao")




const precos = document.querySelectorall(".preco")
const comprar = document.querySelector("#comprar")
const botoes2 = document.querySelectorAll( "button")



const section = document.querySelector("section")
const produto1 = document.querySelectorAll("#produto")
const produtoSection = section.querySelectorAll(".produto")
const botao1 = document.querySelector(".botao") 



const titulo1 = document.querySelector("#titulo")
titulo1.textContent = "Minha loja"

const descricao = document.querySelector("#descricao")
descricao.textContent = "Confira nossos produtos"

const produto2 = document.querySelector("#produto")
console.log(produto2.textContent)




const nomeProduto = document.getElementById("nome").value

const mensagem2 = document.getElementById("mensagem")
mensagem2.textContent = "Produto pronto para cadastro"

const resultado  = document.getElementById("resultado")
resultado.textContent = "Produto selecionado: " + nomeProduto


const tituloTexto = document.getElementById("titulo").textContent
console.log(tituloTexto)

const titulo1 = document.querySelector("#titulo")
titulo1.textContent = "Loja de tecnologia"

const mensagem4 = document.querySelector("#mensagem")
mensagem4.textContent = "Produto disponível!"

const produto3 = document.querySelector("#produto")
console.log(produto3.value)


const produto = document.querySelector("#produto")

const preco = document.querySelector("#preco")

const resultado = document.querySelector("#resultado")
resultado.textContent= `O ${produto.textContent} custa R$ ${preco.value}`


const card = document.querySelector("#card")
card.innerHTML = "<h2>Teclado Gamer</h2> <p>Preço: R$ 250</p>"



const titulo = document.querySelector("#titulo")
titulo.textContent = "Meu perfil"

const infoUsuario = document.querySelector("#nome")
const nomeUsuario = infoUsuario.value
const mensagem = document.querySelector("#mensagem")
mensagem.textContent = `Bem-vindo, ${nomeUsuario}!`
const perfil = document.querySelector ("#perfil")
perfil.innerHTML = `<h2>Perfil do usuário</h2> <p>${nomeUsuario}</p>`

const status1 = document.querySelector("#status")

status1.classList.remove("inativo")
status1.classList.add("ativo")


const mensagem = document.querySelector("#mensagem")
let temSucesso = mensagem.classList.contains("sucesso")
console.log(temSucesso)


const status2 = document.querySelector("#status")

if (status.classList.contains("inativo")) {
  status.classList.remove("inativo")
  status.classList.add("ativo")
}

console.log(email.getAttribute("placeholder"))

email.setAttribute("placeholder", "Informe seu e-mail profissional")

const email1 = document.querySelector("#email");
email1.removeAttribute("disabled");


const senha = document.querySelector("#senha");
console.log(senha.getAttribute("type"));

const senha1 = document.querySelector("#senha");
senha1.setAttribute("type", "text");

const botao2 = document.querySelector("#enviar");
botao2.removeAttribute("disabled");

const mensagem = document.querySelector("#mensagem");
mensagem.style.color = "green";

const mensagem = document.querySelector("#mensagem");
mensagem.classList.remove("erro")
mensagem.classList.add("sucesso")
mensagem.textContent = "E-mail válido!"
const email = document.querySelector("#email")
email.removeAttribute("disabled")


const botao3 =  document.querySelector("#botao")
botao3.classList.remove("desativado")
botao3.classList.add("ativo")
botao3.textContent = "Desativado"
const status = document.querySelector("#status")
status.textContent= "Sistema ativado"

const botao4 =  document.querySelector("#botao")

botao4.classList.toggle("ativo")
botao4.classList.toggle("desativado")

const status = document.querySelector("#status")
const botao5 =  document.querySelector("#botao")

status.classList.remove("inativo")
status.classList.add("ativo")
status.textContent = "Sistema ligado"//Da pra fazer assim?

botao5.removeAttribute("disabled")
botao5.textContent = "Desativar sistema"

const resultado1 = document.querySelector("#resultado")
const botao =  document.querySelector("#botao")
botao.addEventListener("click", function(){
    resultado1.textContent= "Olá! Evento executado com sucesso."
})


let clicou = 0
const botao5 = document.querySelector("#botao")
const contador =  document.querySelector("#contador")
botao5.addEventListener("click", function(){
    clicou ++
    contador.textContent=`Você clicou ${clicou} vezes`
})


const botaoAdd = document.querySelector("#adicionar")
const botaoZerar = document.querySelector("#zerar")
const contador1 =  document.querySelector("#contador")
let contagem = 0
botaoAdd.addEventListener("click",function(){
    contagem ++
    contador1.textContent = `Contagem: ${contagem}`

})
botaoZerar.addEventListener("click", function(){
    contagem = 0
    contador1.textContent = `Contagem: ${contagem}`

})

const curso = document.querySelector("#curso")
const resultado2 = document.querySelector("#resultado")
curso.addEventListener("change", function(){
    resultado2.textContent = `Curso Selecionado: ${curso.value}`
})

const nome1 = document.querySelector("#nome")
const botao6 = document.querySelector("#botao")
const resultado3 = document.querySelector("#resultado")
botao6.addEventListener("click", function(){
     resultado3.textContent = `Nome confirmado: ${nome1.value}`
})

const formulario = document.querySelector("#formulario")
const nome2 = document.querySelector("#nome")
const resultado4 = document.querySelector("#resultado")
formulario.addEventListener("submit", function(){
    event.preventDefault();

    resultado4.textContent = `Cadastro recebido: ${nome2.value}`
})

const formulario1 = document.querySelector("#formulario")
const nome3 = document.querySelector("#nome")
const resultado5 = document.querySelector("#resultado")
formulario1.addEventListener("submit", function(event){
    event.preventDefault()
    if(nome3.value === ""){
        resultado5.textContent= "Por favor, digite seu nome."
    }else {
        resultado5.textContent= `Cadastro recebido: ${nome3.value} `
    }
})


const produtos = document.querySelector("#produtos")
const resultado6 = document.querySelector("#resultado")
produtos.addEventListener("click", function(event){
    resultado6.target.textContent= `Produto Selecionado ${produtos.value}`
})


const resultado7 = document.querySelector("#resultado")
const botao7= document.querySelector("#botao")
const nome = document.querySelector("#nome")
botao7.addEventListener("click", function(){
    resultado7.textContent = `Olá, ${nome.value}! `
})

const resultado8= document.querySelector("#resultado")
const preco1 = document.querySelector("#preco")
preco1.addEventListener("input", function(){
    resultado8.textContent = `Preco digitado: R$ ${preco1.value}`
})

const resultado9= document.querySelector("#resultado")
const linguagem2 = document.querySelector("#linguagem")
linguagem2.addEventListener("change", function(){
    resultado9.textContent = `Linguagem escolhida: ${linguagem2.value}`
})

const resultado10 = document.querySelector("#resultado")
const idade = document.querySelector("#idade")
const botao8 = document.querySelector("#verificar")
botao8.addEventListener("click", function(){
    if(idade.value>=18){
        resultado10.textContent = 'Você é maior de idade'
    }
    else {
        resultado10.textContent = "Você é menor de idade"
    }
})

const resultado11 = document.querySelector("#resultado")
const formulario2 = document.querySelector("#formulario")
const nome4= document.querySelector("#nome")

formulario2.addEventListener("submit", function(event){
    event.preventDefault()
    resultado11.textContent = `Bem-vindo, ${nome4.value}!`
} )


const botoes = document.querySelectorAll("button")
const resultado12 = document.querySelector("#resultado")

botoes.forEach(function(botao) {
    botao.addEventListener("click", function(event) {
        resultado12.textContent = `Curso selecionado: ${event.target.textContent}`
    })
})




//Selecione #cursos e #resultado.
//Use apenas um addEventListener("click", ...), registrado na div.
//Use event.target.textContent para mostrar o curso selecionado.
//Não use querySelectorAll() nem forEach().

const cursos = document.querySelector("#cursos")
const resultado14 = document.querySelector("#resultado")

cursos.addEventListener("click", function(event){
  resultado14.textContent =   event.target.textContent
})



const lista = document.querySelector("#produtos")
const produto6 = document.createElement("li")
produto6.textContent="Teclado"
lista.append(produto6)


const lista1 = document.querySelector("#produtos")

const produtoTeclado = document.createElement("li")
produtoTeclado.textContent="Teclado"
const produtoMouse = document.createElement("li")
produtoMouse.textContent="Mouse"
const produtoMonitor = document.createElement("li")
produtoMonitor.textContent="Monitor"

lista1.append(produtoTeclado, produtoMouse, produtoMonitor)

const sql = document.querySelector("#tarefa2")
sql.remove()


const tarefa = document.querySelector("#tarefa")
const botaoADD = document.querySelector("#adicionar")
const lista2 = document.querySelector("#lista")

botaoADD.addEventListener("click", function() {
    const tarefaAdd = document.createElement("li")
    tarefaAdd.textContent = tarefa.value
    lista2.append(tarefaAdd)
})

const tarefa1 = document.querySelector("#tarefa")
const botaoADD2 = document.querySelector("#adicionar")
const lista3 = document.querySelector("#lista")

let tarefaEmEdicao = null

botaoADD2.addEventListener("click", function() {
    const textoTarefa = tarefa1.value.trim()

    if (textoTarefa !== "") {
        if (tarefaEmEdicao !== null) {
            tarefaEmEdicao.textContent = textoTarefa 
            tarefaEmEdicao = null                   
            tarefa1.value = ""                      
            return                                  
        }

        // Criando nova tarefa
        const tarefaAdd2 = document.createElement("li")

        const spanTexto = document.createElement("span")
        spanTexto.textContent = textoTarefa

        // btn editar
        const botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar"
        botaoEditar.addEventListener("click", function(){
            tarefa1.value = spanTexto.textContent
            tarefaEmEdicao = spanTexto 
            tarefa1.focus()            
        })

        // btn remover
        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Excluir"
        botaoRemover.addEventListener("click", function() {
            tarefaAdd2.remove()
            
            if (tarefaEmEdicao === spanTexto) {
                tarefaEmEdicao = null
                tarefa1.value = ""
            }
        })

        // btn concluido
        const botaoConcluido = document.createElement("button")
        botaoConcluido.textContent = "Concluido"
        botaoConcluido.addEventListener("click", function(){
            if(tarefaAdd2.style.textDecoration === "line-through"){
                tarefaAdd2.style.textDecoration = "none"
            } else {
                tarefaAdd2.style.textDecoration = "line-through"
            }
        })

        tarefaAdd2.append(spanTexto, botaoEditar, botaoRemover, botaoConcluido)
        lista3.append(tarefaAdd2)

        tarefa1.value = ""
    } else {
        console.log("É preciso escrever uma tarefa")
    }
})