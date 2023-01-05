let solution=(num)=>{
   if(num%2 ===0){
    return (num*(Math.floor(num/2)))+Math.floor(num/2);
   }else{
    return num*(Math.floor(num/2)+1);
   }
}

console.log(solution(3));

