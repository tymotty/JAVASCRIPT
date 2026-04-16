const estoque = [
  { id: 1, nome: "Camisa", quantidade: 10 },
  { id: 2, nome: "Calça", quantidade: 5 }
];

let carrinho = [];

const produtoDigitado = estoque.find(item => item.id === 1)

if (produtoDigitado.quantidade > 0) {

    carrinho.push({ ...produtoDigitado, quantidade: 1})

    produtoDigitado.quantidade -= 1;

    console.log(carrinho)

    console.log(estoque)

} else {
    console.log ("Produto indisponivel")
}


//Sistema simples
const usuarios = [
  { id: 1, nome: "Tim", ativo: true },
  { id: 2, nome: "Julia", ativo: false }
];



if (usuarios.includes (1) && usuarios.find (users=>users.ativo === true)) {
    console.log("Login permitido")
}else if (usuarios.find (item => item.id === 1) && usuarios.includes ({ativo: false})) {
    console.log ("Usuário inativo")
} else {
   console.log ("Usuário não encontrado") 
}
