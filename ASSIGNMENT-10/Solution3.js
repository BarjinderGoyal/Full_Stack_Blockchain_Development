function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function calculator(a,b,operator){
    return operator(a,b);
}


console.log(calculator(10,5,add));
console.log(calculator(10,5,sub));
console.log(calculator(10,5,mul));
console.log(calculator(10,5,div));


//add , sub , mul , div all are callback function
// calculator() is a higher order function