let solution=(arr1,arr2)=>{
    let foundInArr1 = false;
    let foundInArr2 = false;
    
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]===4){
            foundInArr1 =true;
            break;
        }
    }
    
    for(let i=0;i<arr2.length;i++){
        if(arr2[i] === 4){
            foundInArr2 = true;
            break;
        }
    }
    if(foundInArr1 && foundInArr2){
        console.log("4 in both arrays");
    }else if( foundInArr1){
        console.log("4 in array 1");
    }else{
         console.log("4 in array 2");
    }
}


let arr1 = [ 1, 2, 3, 6, 5,4 ]

let arr2 = [  4,6, 1, 8, 2 ];

solution(arr1,arr2);