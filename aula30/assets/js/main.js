const data = new Date();

//Recebendo os dados
const dia = data.getDay();
const diaMes = data.getDate();
const meis = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

//garantindo a exibição do calendário
const exibir = document.querySelector('.container');

//selecionando o dia
function semanaDia(dia) {

   switch (dia){
    case 0: return 'Domingo';

    case 1: return 'Segunda-feira';
    
    case 2: return 'terça-feira';

    case 3: return 'quarta-feira';
  
    case 4: return 'quinta-feira';
 
    case 5: return'sexta-feira';
  
    case 6: return'sábado';
  
   default: return 'Dia inexistente';
}
}

//selecionando o mes
function mesAno (meis){
    switch (meis){
    case 0: return 'janeiro';

    case 1: return 'fevereiro';
    
    case 2: return 'março';

    case 3: return 'abril';
  
    case 4: return 'maio';
 
    case 5: return'junho';
  
    case 6: return'julho';
  
    case 7: return 'agosto';

    case 8: return 'setembro';

    case 9: return 'outubro';

    case 10: return 'novembro';

    case 11: return 'dezembro';
}
}


 exibir.innerHTML= `${semanaDia(dia)}, ${diaMes} de ${mesAno(meis)} de ${ano} ${hora}:${minuto}`;
