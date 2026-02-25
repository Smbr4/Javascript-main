

try {
    console.log(semVariavel)
} catch (e){
    console.log('essa variável não existe')
}
// não é interessante exibiri o erro para o usuário. 

function soma (x, y){
    //aqui lançamos o erro
    if (typeof x !== 'number'|| typeof y !== 'number'){
        throw new Error('x, ou x e y precisam ser números');
    }
}

//e aqui em tese tratariamos o ,
//se o erro fosse detectado no bloco try pularia e executaria o bloco catch
// funciona como se fosse um if else
try{

} catch(e){

}