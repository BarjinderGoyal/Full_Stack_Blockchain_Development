


let solution = (arr1, arr2) => {
    let sArr1 = arr1.sort()
    let sArr2 = arr2.sort()
    let itr1 = sArr1[Symbol.iterator]();
    let itr2 = sArr2[Symbol.iterator]();

    let res1 = itr1.next();
    let res2 = itr2.next();
    let ans = [];
    while (!res1.done && !res2.done) {
        if (res1.value === res2.value) {
            ans.push(res1.value);

        }
        
        if(res1.value<res2.value){
        res1 = itr1.next();
        }else if(res2.value<res1.value){
            res2 = itr2.next();
        }else{
            res1 = itr1.next();
            res2 = itr2.next();
        }
        
        
    }
    console.log(ans);
}

let arr1 = ["a", "b", "c", "d"];
let arr2= ["e", "f", "g", "h", "a", "i", "j","d"];


solution(arr1,arr2)