function meuescopo(){
    const formu = document.querySelector('.formu');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = formu.querySelector('.nome');
        const sobrenome = formu.querySelector('.sobrenome');
        const peso = formu.querySelector('.peso');
        const altura = formu.querySelector('.altura');
        
        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.value 
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    
    formu.addEventListener('submit', recebeEventoForm);
}


meuescopo();
