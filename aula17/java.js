const pesso1a = {
    nome :'vitor',
    sobrenome:'furtado',
    idade: 25,
    
    Fala() {
        console.log(`minha idade é ${this.idade}`)
    },

    incremetaIdade(){
        this.idade++;
    }
};  

pesso1a.Fala();
pesso1a.incremetaIdade();
pesso1a.Fala();
pesso1a.incremetaIdade();
pesso1a.Fala();
pesso1a.incremetaIdade();

// document.innerhtml()
// pesso1a.Fala();
// const pessoa2 = {
//      nome02: 'maria',
//      sobrenome02: 'oliveira',
//     idade02: 55
// };

// function criarpessoa(nome, sobrenome, idade){
//     return{
//         nome,
//         sobrenome,
//         idade
//     }
// }

// const pessoa = criarpessoa('Adelia', 'furtado');
