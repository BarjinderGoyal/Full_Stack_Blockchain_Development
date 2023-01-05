let solution =(arr)=>{
    var map = new Map();
    let original=[];
    let duplicate=[];
    for(let i=0;i< arr.length;i++){
        if(isNaN(map[arr[i]])){
             map[arr[i]]=0;
        }
       map[arr[i]]+=1;
        if(map[arr[i]]>1){
           duplicate.push(arr[i]);
        }else{
            original.push(arr[i]);
        }
    }
    
    console.log(`Duplicate Elements = [${duplicate}]`);
    console.log(`Array without duplicate elements = [${original}]`);
}

let arr =[ 1, 2, 3, 2, 3, 4, 5 ];

solution(arr);