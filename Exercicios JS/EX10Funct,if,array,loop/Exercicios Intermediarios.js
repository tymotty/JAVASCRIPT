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
function classify(product) {
    return product
    .filter (product => product.price > 50)
    .sort ((a,b) => a.price - b.price)
    
}

//Categorias por idade
/*Crie ageCategory(age) que retorna: 'child' (0-12), 'teen' (13-17), 'adult' (18-59) ou 'senior' (60+). Use if/else encadeado ou switch.*/


// Relatório de estoque
/*Crie stockReport(items) que recebe um array de objetos {product, quantity, price} e retorna um objeto com: totalItems (soma das quantities), totalValue (soma de quantity*price) e outOfStock (array de nomes com quantity 0).*/