/*Usamos o for para quando sabemos quantas repetições
vamos precisar, aí usamos o while
*/
/*
let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}
*/

//função para gerar números aleatórios
function aleatorio (min, max){
    const r = Math.random()*(max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = aleatorio(1, 50);

// o while checa a condição e depois executa o código.

// do while primeiro executa o código e depois executa a condição

do {
       rand = aleatorio (min, max);
    console.log(rand);
}
while (rand !=10);