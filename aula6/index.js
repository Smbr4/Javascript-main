let nome = 'João'; //atribuindo variaveis
//var é uma outra forma de atribuir variaveis

//let nomes; isso é uma variável nao iniciada, posso usar essa variavel mas nao tem um valor definido
let nomes='vitor'; //aqui eu inicie a variavel com o valor vitor

/*
- Nao podemos criar variáveis com palavras reservadas, por exemplo 'Let' que é utilizado para declarar variáveis.
- variaveis precisam ter nomes significativos, que sejam faceis de saber sobre que tipo de dados a variavel está guardando.
- não pode começar o nome de uma variavel com um numero.
- Nome de variáveis nao pode conter espaços ou traços, para criar variaveis com nomes compostos usamo o camelCase(primeira palavra com letra minuscula e as outras palavras com letra maiúscula).
- Case-sensitive, siginifica que letra maiúscula e minuscula faz diferença. Ou seja, posso ter duas variaveis com nomes compostos iguais, mas se em uma eu utilizo uma letra maiúscula no inicio da palavra automaticamente ja vira duas variáveis diferentes.
- Nao podemos redeclarar variáveis com let, mas podemos redefinir o valor da variável.
- NAO UTILIZE VAR, SEMPRE UTILIZE LET
*/ 

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome,'conheceu maria');
console.log(nome, 'casou-se com maria em 2012');
console.log('maria teve 1 filho com', nome,'em 2015');
console.log('O filho de', nome,'se chama Eduardo');

console.log(nomes);