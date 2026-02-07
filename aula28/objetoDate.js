/* A função date é uma função construtora, para utilizar o
objeto date precisamor usar o new,e em seguida o date, 
toda vez que usamos a palvra new, estamos tratando de uma função construtora
Toda função construtora começa com a primeira letra maiúscula



const tresH = 60 * 60 * 3* 1000;
const umDia = 60 * 60 * 24 * 1000;

const data = new Date(0 + tresH + umDia);

const data = new Date(2019, 3, 20 , 15, 14, 27); // a, m, d, h, M, s, ms
*/

/*
const data = new Date();

console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1)//mês começa do zero, pra ter o mês real tem que somar com mais 1
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('segundo', data.getSeconds())
console.log('DiaSemana', data.getDay()) //0 - domingo, 6 - sabado


console.log(data.toString());
*/

function zeroEsquerda (num){
    return num >= 10 ? num: `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda (data.getDate());
    const mes = zeroEsquerda (data.getMonth() + 1);
    const ano =  zeroEsquerda (data.getFullYear());
    const hora =  zeroEsquerda (data.getHours());
    const minuto =  zeroEsquerda (data.getMinutes());
    const segundo =  zeroEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundo}`}

const data = new Date();
const dataBrasil = formataData(data); 

console.log(dataBrasil);