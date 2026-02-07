/*if pode ser usado sozinho
Sempre que eu utilizo a palavra else, preciso de um if antes
eu posso ter vários else ifs na checagem, 
mas posso ter somente um else na checagem,
Podemos usar condições sem else if, utilizando apenas o if e else separados

*/

const hora = 10;

if (hora < 12){
    console.log('Bom dia')
} else if (hora > 12){
    console.log('Boa tarde')
}