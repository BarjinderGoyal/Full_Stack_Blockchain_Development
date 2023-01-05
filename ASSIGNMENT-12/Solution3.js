let solution=(arr)=>{
    let newArr=[];
    let map= new Map();
  for(let i=0;i<arr.length;i++){
    newArr[i] = Math.pow(arr[i],2);
    map.set(arr[i],newArr[i]);
   
  }

  for(let i=0;i<arr.length;i++){
    console.log(map.get(arr[i]));
  }



  
  
}


let arr=[1,2,3,4,5,6];

solution(arr);