let dashes=(num)=>{
    let size= num.length;
    let ans='';
    for(let i=0;i<size-1;i++){
        if(Number(num[i])%2==0 && Number(num[i+1])%2==0){
            ans+=num[i]+'-';
        }else{
            ans+=num[i];
        }
    }
        ans+=num[num.length-1];
    
    console.log(ans);
    return ans;
}
let num="0234236656654";
dashes(num);
