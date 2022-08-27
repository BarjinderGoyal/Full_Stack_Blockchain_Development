let pattern=()=>{
    let n=1;
    let i=1;
    while(n<=10){
         let str=""
        for(let j=0;j<i;j++){
            str+=n;
            str+=" ";
            n++;
        }
        console.log(str);
        i++;
        
    }
}

pattern();