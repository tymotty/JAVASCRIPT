//Buscar objeto
const produtos = [
  { id: 1, nome: "Teclado" },
  { id: 2, nome: "Mouse" },
  { id: 3, nome: "Monitor" }
];

const verificacaoProduto = produtos.find(item => item.id === 2)

if (verificacaoProduto) {
    console.log ("afawf")
}

//Buscar com condição
const pessoas = [
  { nome: "Lucas", idade: 17 },
  { nome: "Fernanda", idade: 22 },
  { nome: "Rafael", idade: 15 }
];
console.log (pessoas.find(p => p.idade >= 18))