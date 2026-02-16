const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

const espaco = document.querySelector('.divisoria')

/*function adicionar (){
    for(let i = 0; i < elementos.length; i++){
        const elemento = document.createElement(elementos[i].tag);
        elemento.innerText = elementos[i].texto;
        espaco.appendChild(elemento); //adicionar elemento ao final do elemento
    }
}*/

function adicionar (){
    for(let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let tagCriada = document.createElement(tag);
        tagCriada.innerText= `${texto}`;
        espaco.appendChild(tagCriada); //adicionar elemento ao final do elemento
    }
}
adicionar();

