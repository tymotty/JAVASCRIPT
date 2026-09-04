



const base = { 
  saudacao() { 
    console.log("Oi!"); } 
  };
  
const novo = Object.create(base);
novo.saudacao(); // "Oi!" — herdou o método



const produto = {
  nome: "Notebook",
  preco: 3000,
  estoque: 5
};

function aplicarDesconto(obj, percentual) {
  const copia = {...obj};
  copia.preco =  copia.preco - (copia.preco * percentual /100) ;
  return copia;
};



const produtoDesconto = aplicarDesconto (produto, 10);
console.log(produtoDesconto.preco);
console.log(produto.preco);





const conta = {
  titular: "Carlos",
  saldo: 1000,

  sacar(valor){
    this.saldo -=valor;
  }
};

conta.sacar(200); 
console.log (conta.saldo);


const carrinho = {
  itens: ["Mouse", "Teclado"],
  dono: "Pedro",

  adicionarItem(item) {
    this.itens.push(item);
  },
  
  mostrarResumo() {
    console.log(this.dono + " tem " + this.itens.length + " itens no carrinho.")
  }
};
carrinho.adicionarItem("Monitor");
carrinho.mostrarResumo();

const jogador = {
  nome: "Lucas",
  pontos: 0,

  ganharPontos(qtd) {
    this.pontos += qtd;
  }
};

const funcaoSolta = jogador.ganharPontos;
funcaoSolta(10);



/*Desestruturizacao */
const funcionario = {
  nome: "Marina",
  carg: "Desenvolvedora",
  salario: 5000,
  empresa: "Tech Solutions"
};

const {carg} = funcionario;
const {salario: remuneracao} = funcionario;




const usuario = {
  nome: "Rafael",
  endereco: {
    cidade: "Curitiba",
    cep: "80000-000"  
  }
  
};


const {endereco:{cidade}} = usuario;
const {telefone = "Nao possui"} = usuario


console.log(cidade)





const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 }
];


const {preco} = produtos[0]



function mostrarProduto({nome,preco}) {
  console.log(`${nome} custa ${preco}`)
};

mostrarProduto(produtos[0])



const pedidos = [
  { cliente: "Ana", valor: 200 },
  { cliente: "Bruno", valor: 150, desconto: 20 }
];

function resumoPedido({cliente,valor,desconto=0}){
  console.log(`${cliente} pagou ${valor} com desconto de ${desconto}`)
}

resumoPedido(pedidos[0])




const funcionarios = {
  name: "Marina",
  cargo: "Desenvolvedora",
  salario: 5000,
  empresa: "Tech Solutions"
};

const {name,...outrosDados} = funcionarios
console.log(name)
console.log(outrosDados)
