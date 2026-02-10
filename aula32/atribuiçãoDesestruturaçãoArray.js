/*let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1,2,3];
[a, b, c] = numeros;

console.log(a, b, c);*/

//índices:         0      1    2      3     4     5    6      7     8
const numeros =  [1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500];

const [primeiroNumero, segundoNumero, ... resto] = numeros;

console.log (primeiroNumero, resto);
// isso é uma atribuição por desestruturação,
// atribuição por desestruturação = extrair valores de um array/objeto
// e armazenar em variáveis usando uma sintaxe simplificada.
//o JavaScript pega os valores do array, na ordem, e “distribui” eles nas variáveis.

// esses 3 pontos (...) se chamam rest, é um operador que serve para armazenar o restante
//do valor do array
//os 3 pontos nós chamamos de rest quando queremos armazenar o resto, e chamamos de spread
//quando usamos no sentido de espalhar, distribuir, chamamos de spread.

//                    0         1          2
//                  0,1,2    0, 1, 2    0, 1, 2
const numeros2 = [ [1,2,3], [4, 5, 6], [7, 8, 9] ];

const [,[,,seis]] = numeros2;// jeito mais complicado de fazer a desestruturação

const [lista1, lista2, lista3] = numeros2;// forma mais simples


console.log(lista3[1]);

console.log(seis);