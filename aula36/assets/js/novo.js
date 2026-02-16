const paragrafos = document.querySelector('.paragrafos');

//Node list não é um array, mas se comporta como 
const pes = paragrafos.querySelectorAll('p');

//nessa const estilo, tem tudo de css que foi computado no body
const estilosBody = getComputedStyle(document.body);
//aqui begamos especificamente a cor de fundo
const corTexto = estilosBody.color;
const backgroundBody = estilosBody.backgroundColor;

console.log(backgroundBody);

for (let p of pes){
    console.log(p);
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white';
}
