/*const nome = 'Luiz Otávio';

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

for (let i in nome){
    console.log(Nome[i]);
}

*/
// esse for OF é específico para objetos interáveis, como no 
//caso de arrays, vetores, matriz
//for in retorna o índice

const nome = ['Luiz Otávio', 'vitor Furtado'];

for (let valor of nome){
    console.log(valor);
}

// a diferença para o for in na declaração é trocar a palavra in por off
// para objetos o for clássico, ou o for OFF não funcionará muito bem
//For clássico - geralmente com iteravéis (arrays ou strings).
//For in - retorna o índice ou chave (string, arrays ou objetos).
//For off - retorna o valor em si (iteráveis, arrays ou strings).