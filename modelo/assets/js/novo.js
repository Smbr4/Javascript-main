const form = document.querySelector('.formulario');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const button = document.querySelector('.calculo')

form.addEventListener('submit', function(event){
    event.preventDefault();
    calculo();
})

function calculo(){
    let p = parseFloat(peso.value.replace(',', '.'));
    let a = parseFloat(altura.value.replace(',', '.'));
    const mostrar = document.querySelector('.exibir');

    if (!a || !p){
        mostrar.innerHTML=`Por favor, inserir os dados corretamente`;
        mostrar.classList.add('erro');
        return;
    }

    const resultado = (p/(a*a));

    mostrar.classList.remove('sucesso', 'erro')

     if (resultado < 18.5) {
                mostrar.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}, e você está Abaixo Do Peso</p>`
                mostrar.classList.add('erro');
            } else if (resultado < 25) {
                mostrar.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}, e você tem Peso Ideal</p>`
                mostrar.classList.add('sucesso');
            } else if (resultado < 30) {
                mostrar.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}, e você tem Sobrepeso</p>`
                mostrar.classList.add('erro');
            } else if (resultado < 35) {
                mostrar.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}, e você tem Obesidade Grau 1</p>`
                mostrar.classList.add('erro');
            } else if (resultado < 40 ) {
                mostrar.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}, e você tem Obesidade Grau 2</p>`
                mostrar.classList.add('erro');
            } else{
                mostrar.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}, e você tem Obesidade Grau 3</p>`
                mostrar.classList.add('erro');
            };
}
