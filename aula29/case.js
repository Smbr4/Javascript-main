const data = new Date();
let diaSemanaTexto;

const diaSemana = data.getDay();


//usamos o switch quando queremos checar vários valores de uma mesma variável
switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
         break;
    case 1:
        diaSemanaTexto = 'segunda';
         break;
    case 2:
        diaSemanaTexto = 'terça';
         break;
    case 3:
        diaSemanaTexto = 'quarta';
         break;
    case 4:
        diaSemanaTexto = 'quinta';
         break;
    case 5:
        diaSemanaTexto = 'sexta';
         break;
    case 6:
        diaSemanaTexto = 'sabádo';
         break;
    default:
        diaSemanaTexto = '';
         break;
}

console.log (diaSemanaTexto); 