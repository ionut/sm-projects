//var a=document.getElementById('.countdown');




function myFunction() {
    var countdownDiv = document.getElementById('countdown');

    // Get current value from div
    var value = parseInt(countdownDiv.innerHTML);

    if( value > 1 ) {
        // Generate number, operator
        var number = getRndInteger(1,3);
        


        var result = getRndOperator(value, number);
        

        // Place the new result in div
        countdownDiv.innerHTML = result;

        // Run again timer between 1 and 5 seconds
        var randomTime = getRndInteger(1000,5000);

        console.log(' in '+ randomTime + 'ms');
        
        setTimeout(myFunction, randomTime );
    } else {
        console.log('gata');
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}



// function getOperator(){
//     var adun=value+number;
//     var scad=value-number;
//     var operator;
//     if(operator==adun){
//         return adun;
//     }else{
//         return scad;
//     }
// }



function getRndOperator(value, number) {
    // var operations={
    //     function(value,number){
    //         return value+number;
    //     },
    //     function(value,number){
    //         return value-number;
    //     }
    // }

    var operations = ['plus', 'minus'];

    var operator = operations[Math.floor(Math.random() * operations.length)]; 

    if( operator == 'plus') {
        console.log('Adun: '+ number)
        return value + number;
    } else {
        console.log('Scad: '+ number);
        return value - number;
    }
}



myFunction();


