let dashes=(num)=>{
    let str=num.toString();
    let size= str.length;
    let ans='';
    for(let i=0;i<size-1;i++){
        if(str[i]%2==0 && str[i+1]%2==0){
            ans+=str[i]+'-';
        }else{
            ans+=str[i];
        }
    }
        ans+=str[str.length-1];
    
    console.log(ans);
    return ans;
}
dashes(num);