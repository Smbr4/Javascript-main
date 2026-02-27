function cronos (){
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let cronometro = 0;
    let seg = 0;

    iniciar.addEventListener('click', function () {
        clearInterval (cronometro);
        relogio.classList.remove('pausado');
        atualizarTimer();
    })
    pausar.addEventListener('click', function () {
        clearInterval (cronometro);
        relogio.classList.add('pausado');

    })
    zerar.addEventListener('click', function () {
        clearInterval (cronometro);
        relogio.classList.add('pausado');
        relogio.innerHTML = '00:00:00'
        seg = 0;
    })


    function formatarTimer(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function atualizarTimer() {
        cronometro = setInterval(function () {
            seg++;
            relogio.innerHTML = formatarTimer(seg);
        }, 1000)
    };
}

cronos();
