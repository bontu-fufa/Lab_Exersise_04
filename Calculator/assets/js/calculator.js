var add = function(num1,num2){
    return num1+num2;
};
var sub = function(num1,num2){
    return num1 - num2;
};
var mult = function(num1,num2){
    return num1*num2
};
var div = function(num1,num2){
    return num1/num2
};
var multipleMult =  function(array){
    var answer = 1;
    for (var i = 0 ; i < array.length; i++){
        answer *= array[i];

    };
    return answer;
};
var multipleAdd =  function(array){
    var answer = 0;
    for (var i = 0 ; i < array.length; i++){
        answer += array[i];

    };
    return answer;
};

(function(){
    let choice = prompt("choose operation A for Addition , S for Substraction , M for Multiplication , D for division , MA for multiple Addition , MM for multiple Multiplication  ");
    if (choice != "MA" && choice != "MM"){
        let num1 = parseInt(prompt("num 1 : "));
        let num2 = parseInt(prompt("num 2 : "));
        if (choice == "A"){
            console.log("Sum : " +  add(num1,num2));
        }
        else if (choice == "S"){
            console.log("Difference  : " +  sub(num1,num2));

        }
        else if (choice == "M"){
            console.log("Product  : " +  mult(num1,num2));
            
        }
        else if (choice == "D"){
            if( num2 === 0) {
                console.log("not supported!");
            }
            console.log("Quotient  : " +  div(num1,num2));

        }
        else{
            console.log("no operation is done.");
        };

    
    }
    else{
        var array = [];
        var size = parseInt(prompt("size of your numbers : "));
        for (var i = 0 ; i < size; i++){
            num = parseInt(prompt("num"));
            array.push(num);
        };

        if (choice == "MA"){
            console.log(multipleAdd(array));
        }
        else{
            console.log(multipleMult(array));

        }

    }

})();









// var max = function(num1,num2){ if (num1 >= num2) {return num1} else {return num2}};
// var min = function(num1,num2){ if (num1 <= num2) {return num1} else {return num2}};
// var square = function(num){return num*num};
// var avg = function(num1,num2){return (num1+num2)/2};
