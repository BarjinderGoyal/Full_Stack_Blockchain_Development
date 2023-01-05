let power=(b)=>{
    if(b===0){
        return 1;
    }
    return 2*(power(b-1));
}


let solution=(a,b)=>{
    let p= power(b);
 return Math.floor(a/p);
}

console.log(solution(7,3));
console.log(solution(7,2));