let solution=(arr,total)=>{
    let sum=0;
    sum+= 0.25*arr[0];
    sum+=0.10*arr[1];
    sum+=0.05*arr[2];
    sum+=0.01*arr[3];
    if(sum>=total){
        return true;
    }else{
        return false;
    }
}

console.log(solution([25, 20, 5, 0], 4.25));
console.log(solution([0, 0, 20, 5], 0.75));
console.log((solution([2, 100, 0, 0], 14.11)));