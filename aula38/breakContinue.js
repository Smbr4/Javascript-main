//essa palavras funcionan em todos os laços anteriores

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let n of numero){

    //no momento em que o js encontra a palavra continue
    //ele pula para próxima iteração do laço, então colocamos
    //nossa palavra continue antes da ação que estamos executando
    if (n === 2 ){
        continue;
    }

    //usamos o break quando queremos achar um valor em específico
    //quando usamos o break estamos falando, quando encontrar determinado valor
    //pode sair do laço
    if (n === 7){
        break;
    }

    console.log(n);
}

//quando usamor essas palavras em um laço while, precisamso atualizar nossa variávle de controle antes dessa palavras
//caso contrário o laço entrará em um loop infinito