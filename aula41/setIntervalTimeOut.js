function mostraHora(){
    let data = new Date ();


    return data.toLocaleTimeString('pt-BR', {
        hour12:false //deixa as horas no formato 24 horas
    });
}

function funcaoMostraHora(){
    console.log(mostraHora());
}

//quando quero trabalhar com intervalo de tempo eu utilizo essa função
// vai configurar um intervalo de tempo para que uma função seja executada
// primeiro passamos a função que queremos executar com paramentro, passamos por referência
//depois passamos o parâmetro para definir de quanto em quanto tempo que quero que a função seja executada,
//ai passamos em parâmetro em milésimos de segundo

// setInterval(funcaoMostraHora, 1000); 

//Podemos também criar funções anônimas, que é o mais comum

const time = setInterval(function(){
    console.log(mostraHora())//quando fazmos com uma função anônima, precisamos executar ela, e não somente passar por referência
}, 1000);

//Existem duas formas de parar essa função, uma é no Vs code,e a outra é usando o setTimeOut

//funciona de forma bem similiar ao setInterval, mas ele executa só uma vez.
// primeiro fazemos uma função para parar a execução, e quanto tempo depois eu quero parar
setTimeout(function(){
    clearInterval(time)
}, 10000);