const numero = -5;

const positivo = numero > 0;
const negativo = numero < 0;
const zero = numero === 0;
if (positivo){
    console.log(`O ${numero} é positivo`)
} else if  (negativo) {
    console.log(`O ${numero} é negativo`)

} else if (zero){
    console.log(`O ${numero} é zero`)
}





const saque = 270;


const multiplo = saque % 10 === 0;
const maiorZero = saque > 0;
const menor = saque  <= 1000

if (multiplo || maiorZero || menor) {
    console.log (`o valor ${saque} é múltiplo de 10, maior que 0 , menor ou igual a 1000. Então a o Saque é permitido`)
}




const usuario = "admin";
const senha = "1234";
let tentativas = 2;
let coloqueUsuario = "gae"
let coloqueSenha = "12133334"

if (usuario === coloqueUsuario && senha === coloqueSenha && tentativas <= 3){
    console.log("Login feito")
}else if (tentativas > 3) {
    console.log ('Conta bloqueada')
}
 else if ( usuario !== coloqueUsuario && senha !== coloqueSenha && tentativas <= 3){
    console.log("Dados incorretos")
    tentativas ++
}





const num1 = 10;
const num2 = 5;
const operador = "-";

let resultado = []

if      (operador === "*")  {resultado.push (num1 * num2)} 
else if (operador === "+")  {resultado.push (num1 + num2)}
else if (operador === "-")  {resultado.push (num1 - num2)}
else if (operador === "/")  {resultado.push (num1 / num2)}

console.log( resultado)





const peso = 70;
const altura = 1.75;

const calculo = peso / altura ** 2;

if      (calculo < 18.5) {console.log("Magreza")}
else if (calculo < 24.9) {console.log("Normal")}
else if (calculo < 29.9) {console.log("Sobrepeso")}
else if (calculo > 30.0) {console.log("Obesidade")}






const salario = 30500;
const parcela = 1200;

if (parcela <= salario * 0.30) {console.log("Financiamento aprovado")}
else                           {console.log("Financiamento negado")}





