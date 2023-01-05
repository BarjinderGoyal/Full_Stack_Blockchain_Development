
let solution=(arr)=>{
    let itr= arr[Symbol.iterator]();
    let res = itr.next();
    while(!res.done){
        console.log(res.value);
        res=itr.next();
    }
}


let str = "iNeuron"
solution(str)