/*-------------------------------------------------------------------------------- */
let carrinho = document.querySelector("#carrinho")
const buttonProduto = document.querySelectorAll(".AdicionarProduto")
const quantidadeDeProduto = document.querySelectorAll(".quantidade")



/*-----------------------------------Eventos-------------------------------------- */
/*forEach adiciona o mesmo evento a todos os botoes, no caso o click */

quantidadeDeProduto.forEach


buttonProduto.forEach(botao => {
  botao.addEventListener("click", verificacaoProduto)
})


/*------------------------------------Function-------------------------------------*/

function verificacaoQuantida(event){
  const quantity = event.target.dataset.quantidade

  const produtoQuantidade = estoque.find(item => item.quantidade === quantidade)
}


function verificacaoProduto(event, carrinho) {
  const id = event.target.dataset.id
  /*dataset.id: Ta pegando o valor q foi clicado, qual id no caso */
  
  const produto = estoque.find(item => item.id === id)
  /*Aqui o Find esta fazendo um papel de pesquisa, ele esta procurando o produto no estoque, com o nome de item, fazendo com q o primeiro produto igual ao id apareca */
  carrinho.push(produto)
  
  atualizarHTML()
  
  console.log(carrinho)
}



/*------------------------------------Estoque-------------------------------------*/
function atualizarHTML(id, quantidade){

  const elemento = document.querySelector(`[data-id="${id}"].quantidade`)

  if(elemento){
    elemento.textContent = quantidade
  }

}

carrinho = [ ]

const estoque = [
  { id: "1", nome: "Notebook Dell Inspiron", preco: 3499.99,quantidade: 2 },
  { id: "2", nome: "Mouse Gamer RGB",        preco: 149.90, quantidade: 7 },
  { id: "3", nome: "Teclado Mecânico",       preco: 299.90, quantidade: 9 },
  { id: "4", nome: "Monitor 24 Full HD",     preco: 799.00, quantidade: 3 },
  { id: "5", nome: "Headset Gamer",          preco: 249.90, quantidade: 5 },
  { id: "6", nome: "Mousepad Gamer",         preco: 59.00 , quantidade: 11},
  { id: "7", nome: "SSD 1TB NVMe",           preco: 449.90, quantidade: 1 },
  { id: "8", nome: "Cadeira Gamer",          preco: 599.00, quantidade: 3 },
  { id: "9", nome: "Notebook Delta 16Gb Ram",preco: 3999.00,quantidade: 1 }
]
