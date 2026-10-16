const mensagem = document.querySelector(".mensagem")



const acao = document.querySelector(".acao")
const descricoes = document.querySelectorAll(".descricao")




const precos = document.querySelectorall(".preco")
const comprar = document.querySelector("#comprar")
const botoes = document.querySelectorAll( "button")



const section = document.querySelector("section")
const produto1 = document.querySelectorAll("#produto")
const produtoSection = section.querySelectorAll(".produto")
const botao = document.querySelector(".botao") 



const titulo = document.querySelector("#titulo")
titulo.textContent = "Minha loja"

const descricao = document.querySelector("#descricao")
descricao.textContent = "Confira nossos produtos"

const produto = document.querySelector("#produto")
console.log(produto.textContent)




const nomeProduto = document.getElementById("nome").value

const mensagem= document.getElementById("mensagem")
mensagem.textContent = "Produto pronto para cadastro"

const resultado  = document.getElementById("resultado")
resultado.textContent = "Produto selecionado: " + nomeProduto


const tituloTexto = document.getElementById("titulo").textContent
console.log(tituloTexto)