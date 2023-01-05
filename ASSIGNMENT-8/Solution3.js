let setOperation=()=>{
    let set = new Set();
    for(let i=0;i<4;i++){
       
     set.add(Math.floor(Math.random()*10));
     console.log(set);
    }

    return set.has(8);
}

console.log(setOperation());
