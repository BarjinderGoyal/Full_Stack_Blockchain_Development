let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let demo = (arr) => {
    //for loop
    console.log("FOR LOOP")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    //while loop
    console.log("WHILE LOOP")
    {
        let i = 0;
        while (i < arr.length) {
            console.log(arr[i]);
            i++;
        }
    }

    //DO WHILE LOOP
    console.log('DO WHILE LOOP')
    {
        let i = 0;
        do {
            console.log(arr[i]);
            i++;
        } while (i < arr.length)
    }

    //FOR OF
    console.log("FOR OF")
    for(i of arr){
        console.log(i);
    }

    //FOR EACH
    console.log("FOR EACH")
    arr.forEach(element => {
        console.log(element);
    });


    //For In

    console.log("FOR IN")

    for(item in arr){
        console.log(arr[item])
    }

}

demo(arr);


//By using Iterators
console.log("By using Iterator")
let itrDemo=(arr)=>{
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
let itr= itrDemo(arr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());