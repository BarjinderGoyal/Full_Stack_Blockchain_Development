
let factorial=(num)=>{
    if(num==1){
        return 1;
    }
    return num*factorial(num-1);
}




let specialNumber=(num)=>{
    let sum=0;
    let number=num;
    while(num>0){
        sum+= factorial(num%10);
        num= Math.floor(num/10);
    }
    if(sum===number){
        return 'This is a Special Number';
    }else{
        return 'This is not a Special Number';
    }
}


console.log(specialNumber(145));