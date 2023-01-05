//https://drive.google.com/file/d/18lvkQM559sUJC-RwOaYR8jxBtQJK7Chp/view

let solution=(arr)=>{
    let itr= arr[Symbol.iterator]();
    let res = itr.next();
    while(!res.done){
        console.log(res.value);
        res=itr.next();
    }
}


let arr = ["John","Rohn", "Danny", "James"]
solution(arr)