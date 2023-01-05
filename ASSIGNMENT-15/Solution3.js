

let solution=(b,m)=>{
    let firstpart= b*(Math.pow(m,b-1));
    let lastpart =Math.pow(Math.E,b*m)
   return (firstpart+ lastpart);
}

console.log(solution(1,1))