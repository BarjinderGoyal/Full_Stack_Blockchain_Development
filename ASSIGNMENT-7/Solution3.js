let replaceWords=(str)=>{
    let word=str.split(" ");
    let newStr = word[1]+" "+word[0];
    return newStr;
   
}

console.log(replaceWords("Hii Boys"));