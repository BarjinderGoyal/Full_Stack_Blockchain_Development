let gcd=(a,b)=>{
    if (a === 0)
   return b;
 return gcd(b % a, a);
}


let solution=(arr)=>{
   let evensum=0;
   let oddsum=0;
   let evenElement =Math.floor(arr.length/2);
   let oddElement = Math.ceil(arr.length/2);
   for(let i=0;i<arr.length;i++){
       if(i%2 ===0){
           evensum+=arr[i];
       }else{
           oddsum+=arr[i];
       }
   }
   
   let gcdAns= gcd(oddsum,evensum);
   
   console.log(`Difference = ${oddsum-evensum}`);
   console.log(`Odd Elements = ${oddElement}`);
   console.log(`Even Elements = ${evenElement}`);
   console.log(`Average = ${(oddsum+evensum)/arr.length}`)
   console.log(`GCD = ${gcdAns}`)
   
}





let arr = [1,2,3,4,5,6,7];
solution(arr);