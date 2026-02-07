//IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1= ((num1 * 100) + (num2*100))/100;
num1= ((num1 * 100) + (num2*100))/100;
num1= ((num1 * 100) + (num2*100))/100;

console.log(num1);

//aqui não estou alterando o tipo da variavel num1
//console.log(num1.toString()+num2);
//console.log(typeof num1)

//agora o valor vai ser alterado

//num1 = num1.toString();
//console.log(num1.toFixed(2))
//console.log(number.isIteger(num1))

//let temp = num1* 'ola';
//verificando se uma conta é invalida
//console.log (Number.isNaN(temp));