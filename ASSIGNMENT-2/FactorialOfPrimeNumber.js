
let factorial=(num)=>{
    if(num==1){
        return 1;
    }
    return num*factorial(num-1);
}


let isPrime=(num)=>{
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}



let factorialOfprimeNumber=(a,b)=>{
    let arr=[];
    for(let i=a;i<=b;i++){
        if(isPrime(i)){
            arr.push({PrimeNumber:i,Factorial:factorial(i)});
        }
    }
    return arr;
}


console.log(factorialOfprimeNumber(1,11));
