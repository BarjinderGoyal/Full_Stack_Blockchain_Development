
let cube=(num)=>{
    return (num*num*num);
}

let specialNumber=(num)=>{
    let sum=0;
    let number=num;
    while(num>0){
        sum+= cube(num%10);
        num= Math.floor(num/10);
    }
    if(sum===number){
        return 'This is a Armstrong Number';
    }else{
        return 'This is not a Armstrong Number';
    }
}


console.log(specialNumber(407));
