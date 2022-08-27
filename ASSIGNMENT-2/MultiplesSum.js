let sum=(upperLimit)=>{
    let num1=3;
    let num2=5;
    let result=0;
    for(let i=1;i<=upperLimit ;i++){
        if(i%3==0 || i%5==0){
            result+=i;
        }
    }
    return result;
}

console.log(sum(15));