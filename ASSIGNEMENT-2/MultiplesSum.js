let sum=()=>{
    let num1=3;
    let num2=5;
    let result=0;
    for(let i=1;num1<=1000 && num2<=1000 ;i++){
        num1*=i;
        num2*=i;
        if(num1>1000 || num2>1000){
            result+=1;
        }else{
            result+=2;
        }
    }
    return result;
}

console.log(sum());