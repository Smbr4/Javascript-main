function cronometro(){
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo;

//Inicia o cronômetro
iniciar.addEventListener('click', function(){
    relogio.classList.remove('pausado');
    clearInterval(intervalo);
    intervalo = setInterval(mostrar, 1000);
})

//pausa o cronômetro
pausar.addEventListener('click', function(e){
    clearInterval(intervalo);
    relogio.classList.add('pausado')
});

//e zera 
zerar.addEventListener('click', function(e){
   relogio.classList.remove('pausado');
   clearInterval(intervalo);
   horas = 0;
   minutos = 0;
   segundos = 0;
   
   relogio.innerText = `00:00:00`;
});

// Faz a contagem
function mostrar() {

    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos ++
    }

    if(minutos === 60){
        minutos = 0;
        horas++;
    }

    relogio.innerText=
    `${String(horas).padStart(2, '0')}:` +
    `${String (minutos).padStart(2, '0')}:`+
    `${String(segundos).padStart(2, '0')}`;
} 
}
cronometro();