//                          Desafios Intermediarios

//Classificador de produtos
/*Dado um array de objetos {name, price}, crie a função classify(products) que retorna apenas os produtos com preço acima de 50, ordenados do mais barato para o mais caro.*/
const items = [
  { name: "Pen", price: 5 },
  { name: "Notebook", price: 3500 },
  { name: "Mouse", price: 80 },
  { name: "Cable", price: 30 },
  { name: "Keyboard", price: 150 },
];
function classify(items) {
  return items
  .filter (product => product.price > 50)
  .sort ((a,b) => a.price - b.price)
}
const result = classify(items);
console.log(result);


//Categorias por idade
/*Crie ageCategory(age) que retorna: 'child' (0-12), 'teen' (13-17), 'adult' (18-59) ou 'senior' (60+). Use if/else encadeado ou switch.*/

const usuario = [
  {name:"tmotty",  age:19},
  {name:"Sil",     age:60},
  {name:"Sama",    age:16},
  {name:"Ger",     age:62},
  {name:"Gui",     age:30},
  {name:"Edu",     age:12},
]

const child  =  (age) => age >= 0  && age <= 12;
const teen   =  (age) => age >= 13 && age <= 17;
const adult  =  (age) => age >= 18 && age <= 59;
const senior =  (age) => age >= 60;

function classifyAge (usuario) {
  usuario.sort((a,b) => a.age - b.age);
  usuario.forEach(user => {

    if (child(user.age)) {
      console.log(`${user.name} você é classificado como child`);
    }
    else if (teen(user.age)) {
      console.log(`${user.name} você é classificado como teen`);
    }
    else if (adult(user.age)) {
      console.log(`${user.name} você é classificado como adult`);
    }
    else if (senior(user.age)){
      console.log(`${user.name} você é classificado como senior`);
    }
    else {
      console.log (`Sua idade de ${user.age}, não é compativel com nosso sistema`);
    }    
  });

}
console.log(classifyAge(usuario))



// Relatório de estoque
/*Crie stockReport(items) que recebe um array de objetos {product, quantity, price} e retorna um objeto com: totalItems (soma das quantities), totalValue (soma de quantity*price) e outOfStock (array de nomes com quantity 0).*/

const stock = [
  { product: "Coffee", quantity: 10, price: 15 },
  { product: "Sugar",  quantity: 0,  price: 8  },
  { product: "Milk",   quantity: 5,  price: 6  },
  { product: "Rice",   quantity: 0,  price: 12 },
];   

function stockReport(stock) {
  const totalItems = stock.reduce((acc,item) => {return acc + item.quantity;}, 0);
  const totalValue = stock.reduce((acc,item) => {return acc + item.price * item.quantity}, 0);
  const outOfStock = stock.filter(item => item.quantity === 0);

  return {
    totalItems,
    totalValue,
    outOfStock:outOfStock(stock)
  }
}
console.log(stockReport(stock))