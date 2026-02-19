//query selector retorna um input

const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const enviar = document.querySelector('.exibir');
const form = document.querySelector('.formulario');

// para impedir a página de atualizar
form.addEventListener('submit', function (e){
    e.preventDefault();
    calculo(n1, n2);
});

function calculo (n1, n2){

    // na hora de calcular variáveis com valores que vem do query selector
    //preciso converter para tipos númericos, e só então calculcar
    const v1 = parseFloat(n1.value);
    const v2 = parseFloat(n2.value);
    let maior;

    // isNaN testa se o valor NÃO conseguiu virar número (NaN)
    //se não puder exibi a mensagem 

    if (isNaN(v1) || isNaN(v2)){
        enviar.innerText = 'Digite os números válidos';
        return;
    }

    if (v1 > v2) {
        maior = v1;
    } else if (v2 > v1) {
        maior = v2;
    } else {
        maior = 'Os números são iguais';
    }

    enviar.innerText = ` O maior valor é ${maior}`;
    return;
}

//resumido o cálculo em uma operação ternária  dentro de uma arrow function
const resultado = (n1 ,n2) => n1 > n2 ? n1 :  n2;