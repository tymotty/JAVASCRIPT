const carrinho = document.querySelector("#carrinho")
const buttonProduto = document.querySelectorAll(".AdicionarProduto")

buttonProduto.forEach(botao => {
  botao.addEventListener("click", verificacaoProduto)
})

carrinho = []

function verificacaoProduto(event, carrinho){
  const id = event.target.dataset.id

  const produtoId = estoque.find(item => item.id === id)

  carrinho.push(produtoId)

  console.log(carrinho)
}



const estoque = [
  { id: "1", nome: "Mouse Gamer", preco: 89.90, quantidade: 2 },
  { id: "2", nome: "Teclado Mecânico", preco: 249.90 },
  { id: "3", nome: "Monitor 24 Polegadas", preco: 899.90 },
  { id: "4", nome: "Headset Gamer", preco: 179.90 },
  { id: "5", nome: "Mousepad Grande", preco: 39.90 }
]
