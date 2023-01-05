let solution=(a,b)=>{
  let ans = a+b-1>0 ?a+b-1:0;
  return ans;
}

console.log(solution(8,10))
console.log(solution(9,2))
console.log(solution(5,7))