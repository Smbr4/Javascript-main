const pessoa = {
    nome: 'Luiz',
    sobreNome: 'miranda',
    idade: 30,
    endereco: { 
        rua:'av Brasil',
        numero:320
    }
};

const nome1 = pessoa.nome; //atribuição normal

//atribuição via desestruturação
//const {nome} = pessoa; // extrai do objeto pessoa o nome, ja criando uma variável
//O : na desestruturação de objetos serve para
//pegar uma propriedade do objeto e guardar em uma variável com outro nome.
const {endereco: { rua: r = 12345, numero}, endereco} = pessoa;


console.log (rua, numero, endereco); 