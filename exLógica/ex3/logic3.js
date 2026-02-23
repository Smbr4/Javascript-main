

function divisivel(n){

    if ( Number.isNaN(n)){
        return n; 
    }


    if ( n % 3 === 0 && n % 5 === 0) {
       return 'Fizz  Buzz';
    } else if (n % 5=== 0){
        return 'Buzz';
    } else if ( n % 3 === 0){
        return 'Fiz';
    } else {
       return n;
    }


}


for (let i = 0; i <= 100; i++){
    console.log (divisivel(i));
}
