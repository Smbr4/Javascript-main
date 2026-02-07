/*
- Nao podemos criar constante com palavras reservadas, por exemplo 'Let' que é utilizado para declarar variáveis.
- contantes precisam ter nomes significativos, que sejam faceis de saber sobre que tipo de dados a constante está guardando.
- não pode começar o nome de uma constantes com um numero.
- Nome de variáveis nao pode conter espaços ou traços, para criar constantes com nomes compostos usamo o camelCase(primeira palavra com letra minuscula e as outras palavras com letra maiúscula).
- Case-sensitive, siginifica que letra maiúscula e minuscula faz diferença. Ou seja, posso ter duas contantes com nomes compostos iguais, mas se em uma eu utilizo uma letra maiúscula no inicio da palavra automaticamente ja vira duas variáveis diferentes.
- Nao podemos redeclarar constantes, o valor deve ser inicilzado e nao pode ser modificado
- NAO UTILIZE VAR, SEMPRE UTILIZE CONST
*/

const nome='João';

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

console.log(resultado)

console.log(typeof(primeiroNumero+nome));