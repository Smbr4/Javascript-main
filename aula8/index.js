//Declaração de constantes
const nome= 'Vitor';
const sobrenome= 'Furtado Araujo';
const idade= 22;
const peso= 80;
const alturaEmCm= 1.75;

//Declaração de variavéis 
let nascimento;
let indiceMassaCorporal; 

//calculo do IMC

indiceMassaCorporal = 80/(alturaEmCm ^ 2);

//Calculo para descobrir a data de nascimento
nascimento = 2025 - idade;

//Exibindo todos os dados de forma lógica, conforme o exércicio
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa  ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome}  nasceu em  ${nascimento}`)