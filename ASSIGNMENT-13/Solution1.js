
let solution=(arr)=>{
    let sum= arr.reduce((acc,val)=>{
        return acc+val;
    },0)
    
    let average= sum/arr.length
    console.log(sum);
    console.log(average);
}
let arr = [ 1, 2, 3, 4, 5 ];

solution(arr);