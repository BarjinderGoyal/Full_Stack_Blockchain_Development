let verdict=(str)=>{
  let newStr = str.toLowerCase();
  if(newStr==="yes"){
    console.log("YES");
  }else{
    console.log("NO");
  }
}

verdict("YeS");
verdict("yEs");
verdict("yesNo");