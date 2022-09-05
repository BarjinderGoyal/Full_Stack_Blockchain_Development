let nthLargestNumber=(arr,n)=>{
    arr.sort((a,b)=>b-a);
    return arr[n-1];
}

console.log(nthLargestNumber([3,45,6,7,23,5,7,8],3))