const paragrafos = document.querySelector('.paragrafos');

//Node list não é um array, mas se comporta como 
const pes = paragrafos.querySelectorAll('p');

//nessa const estilo, tem tudo de css que foi computado no body
const estilosBody = getComputedStyle(document.body);
//aqui begamos especificamente a cor de fundo

const backgroundBody = estilosBody.backgroundColor;

console.log(backgroundBody);

for (let p of pes){
    console.log(p);
    //aqui acessamos o css da tag P e modificamos com JS
    //os mesmo nomes das propriedades do css podem ser acessadas
    //com JS, mas ao invés de traço, usamos camel Case
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white';
}
