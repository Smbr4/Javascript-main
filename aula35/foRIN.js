const frutas = [`Pera`, 'Maça', 'Uva'];

// esse for é interessante para usar com objetos
// ele lê os íncidices ou chaves do objeto
/*
for (let i in frutas){
    console.log(i);
}
*/
const pessoa = {
    nome: 'Luiz',
    sobreNome: 'otávio',
    idade:30
};

for (let i in pessoa){
    console.log(i, pessoa[i]);
}

