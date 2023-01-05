let iterator=(arr)=>{
    let index=0;
    return{
        next : ()=>{
            if(index < arr.length){
                return {value:arr[index++],done:false};
            }else{
                return {value: undefined, done:true};
            }
        }
    }
}

let arr= ["John","Rohn", "Danny", "James"];
let itr= iterator(arr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
