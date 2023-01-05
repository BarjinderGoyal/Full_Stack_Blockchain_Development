var truncate=(str)=>{
    if(str.length>4){
        return str.slice(0,4)+("...");
    }else{
        return str;
    }
}

console.log(truncate("Ice"));
console.log(truncate("Icecream"));