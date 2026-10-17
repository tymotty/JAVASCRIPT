const mensagem1 = document.querySelector(".mensagem")



const acao = document.querySelector(".acao")
const descricoes = document.querySelectorAll(".descricao")




const precos = document.querySelectorall(".preco")
const comprar = document.querySelector("#comprar")
const botoes = document.querySelectorAll( "button")



const section = document.querySelector("section")
const produto1 = document.querySelectorAll("#produto")
const produtoSection = section.querySelectorAll(".produto")
const botao = document.querySelector(".botao") 



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

